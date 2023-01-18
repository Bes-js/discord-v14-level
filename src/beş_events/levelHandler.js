const client = global.client;
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType, AttachmentBuilder } = require("discord.js");
const beş_config = require("../../beş_config.json");
const { levelupCard } = require('@discord-card/levelcard');
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
    if (xpp >= gerekli) {
      await levels.updateOne({ guildID: message.guild.id, userID: message.author.id }, {$set: { xp: 0 } }, { upsert: true });
      await levels.updateOne({ guildID: message.guild.id, userID: message.author.id }, {$set: { gerekli: gerekli + 200 }}, { upsert: true });
      await levels.updateOne({ guildID: message.guild.id, userID: message.author.id }, {$inc: { level: 1 }}, { upsert: true });
      if (beş_config.levelChannel) {
      const image = await levelupCard(message.member, {level: level + 1});
    const att = new AttachmentBuilder(image, 'level_up_bes.png')
      client.guilds.cache.get(message.guild.id).channels.cache.get(beş_config.levelChannel).send({content:`> **${message.author} Tebrikler! \`${level + 1}.\` Levele Ulaştınn!**`,files:[att]});
message.channel.send({content:`> **${message.author} Tebrikler! \`${level + 1}.\` Levele Ulaştınn!**`,files:[att]});
      } else {
     const image = await levelupCard(message.member, {level: level + 1});
    const att = new AttachmentBuilder(image, 'level_up_bes.png')
      message.channel.send({content:`> **${message.author} Tebrikler! \`${level + 1}.\` Levele Ulaştınn!**`,files:[att]});
      };
    }

 }
module.exports.conf = {name: "messageCreate"}
