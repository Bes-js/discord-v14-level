const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const client = global.client = new Client({fetchAllMembers: true,intents:Object.keys(GatewayIntentBits),partials:Object.keys(Partials),ws: {version: "10"}});
const beş_config = require("./beş_config.json")
const { readdir } = require("fs");
const mongoose = require("mongoose");
const commands = client.commands = new Collection();
const aliases = client.aliases = new Collection();
readdir("./src/beş_commands/", (err, files) => {if (err) console.error(err)
files.forEach(f => {readdir("./src/beş_commands/" + f, (err2, files2) => {
if (err2) console.log(err2)
files2.forEach(file => {let beş_prop = require(`./src/beş_commands/${f}/` + file);
console.log(`🧮 [BEŞ - COMMANDS] ${beş_prop.name} Yüklendi!`);
commands.set(beş_prop.name, beş_prop);
beş_prop.aliases.forEach(alias => {aliases.set(alias, beş_prop.name);});});});});});
readdir("./src/beş_events", (err, files) => {
if (err) return console.error(err);
files.filter((file) => file.endsWith(".js")).forEach((file) => {let beş_prop = require(`./src/beş_events/${file}`);
if (!beş_prop.conf) return;
client.on(beş_prop.conf.name, beş_prop);
console.log(`📚 [BEŞ _ EVENTS] ${beş_prop.conf.name} Yüklendi!`);});});
mongoose.connect(beş_config.MongoURL, {
  useUnifiedTopology: true,
	useNewUrlParser: true
       })
.then(() => console.log("Mongo Bağlandı!"))
.catch(console.error);
Collection.prototype.array = function() {return [...this.values()]}
client.kanalbul = function(kanalisim) {let kanal = client.guilds.cache.get(beş_config.guildID).channels.cache.find(k => k.name === kanalisim)
return kanal;}
client.rolbul = function(rolisim) {let rol = client.guilds.cache.get(beş_config.guildID).roles.cache.find(r => r.name === rolisim)
return rol;}

client.now = function(beş) {
let now = Math.floor(beş / 1000)
return now;}

client.rolinc = function(rolisim) {let rol = client.guilds.cache.get(beş_config.guildID).roles.cache.find(r => r.name.includes(rolisim))
return rol;}
client.login(beş_config.token).then(() => console.log(`🟢 ${client.user.tag} Başarıyla Giriş Yaptı!`)).catch((beş_err) => console.log(`🔴 Bot Giriş Yapamadı / Sebep: ${beş_err}`));
