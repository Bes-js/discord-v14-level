const client = global.client;
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType, AttachmentBuilder } = require("discord.js");
const beş_config = require("../../beş_config.json");
const canvafy = require("canvafy");
const levels = require("../../Schema/level");
const ms = require('ms');
module.exports = async (message) => {

if(message.author.bot || !message.guild)return;
if (beş_config.prefix && message.content.startsWith(beş_config.prefix)) return;

const xpRandom = (length) => {
  return Number(Math.floor(Number(length) * 5 / 3));
}



    if (!beş_config.levelSystem) return;
    const { xp, gerekli, level } = await levels.findOne({ guildID: message.guild.id, userID: message.author.id }) || { xp: 0, gerekli: 100, level: 0 };
    await levels.updateOne({ guildID: message.guild.id, userID: message.author.id }, {$inc: { xp: 10 } }, { upsert: true });
    const xpp = xp + xpRandom(message.content.length);
    const levelUp = await new canvafy.LevelUp()
    .setAvatar(message.author.displayAvatarURL({extension:"png",size:2048}))
    .setBackground("image", "https://cdn.discordapp.com/attachments/1041745966186909826/1096055377289814126/e4a8a79fccae98487a74d8bd1f2357834dfa7295.png")
    .setUsername(message.author.username)
    .setBorder("#000000")
    .setAvatarBorder("#ff0000")
    .setOverlayOpacity(0.7)
    .setLevels(level,(level+1))
    .build();
    if (xpp >= gerekli) {
      await levels.updateOne({ guildID: message.guild.id, userID: message.author.id }, {$set: { xp: 0 } }, { upsert: true });
      await levels.updateOne({ guildID: message.guild.id, userID: message.author.id }, {$set: { gerekli: gerekli + 200 }}, { upsert: true });
      await levels.updateOne({ guildID: message.guild.id, userID: message.author.id }, {$inc: { level: 1 }}, { upsert: true });
      if (beş_config.levelChannel) {
      client.guilds.cache.get(message.guild.id).channels.cache.get(beş_config.levelChannel).send({content:`> **${message.author} Tebrikler! \`${level + 1}.\` Levele Ulaştınn!**`});
      message.reply({files: [{attachment: levelUp,name: `levelup-${message.member.id}.png`}]});
      } else {
    message.reply({files: [{attachment: levelUp,name: `levelup-${message.member.id}.png`}]});
      };
    }

 }
module.exports.conf = {name: "messageCreate"}
