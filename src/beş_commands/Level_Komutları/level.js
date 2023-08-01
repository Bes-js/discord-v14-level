const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType } = require("discord.js");
const moment = require("moment")
require('moment-duration-format');
const canvafy = require("canvafy");
const beş_config = require("../../../beş_config.json")
const levels = require("../../../Schema/level");
module.exports = {
  name: "level",
  aliases: ["rank","lvl"],
  execute: async (client, message, args, beş_embed) => {
const member =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
const x = await levels.findOne({ guildID: message.guild.id, userID: member.user.id })
const rank = await new canvafy.Rank()
    .setAvatar(message.author.displayAvatarURL({ forceStatic: true, extension: "png" }))
    .setBackground("image", "https://th.bing.com/th/id/R.248b992f15fb255621fa51ee0ca0cecb?rik=K8hIsVFACWQ8%2fw&pid=ImgRaw&r=0")
    .setUsername(member.displayName ? member.displayName : message.author.username)
    .setBorder("#fff")
    .setStatus(message.member.presence?.status)
    .setLevel(x ? x.level : 1)
    .setRank(x ? x.level : 1)
    .setCurrentXp(x ? x.xp : 1)
    .setRequiredXp(x ? x.gerekli : 100)
    .build();
    message.reply({files:[{attachment:rank,name: `rank-${message.member.id}.png`}]});
}}
