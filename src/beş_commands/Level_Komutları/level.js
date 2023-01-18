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

let status;
if(member.presence && member.presence.status === "dnd") status = "#ff0000"
if(member.presence && member.presence.status === "idle") status = "#ffff00"
if(member.presence && member.presence.status === "online") status = "#00ff00"
if(member.presence && member.presence.status === "offline") status = "#808080"


const rank = await new canvafy.Rank()
    .setAvatar(member.user.avatarURL({ forceStatic: true, extension: "png" }))
    .setBackground("image", "https://cdn.discordapp.com/attachments/990065181382021158/1021181185185042533/unknown.png")
    .setUsername(member.displayName ? member.displayName : member.user.tag)
    .setDiscriminator(member.user.discriminator)
    .setStatus(member.presence ? message.member.presence.status : `online`)
    .setLevel(x ? x.level : 1)
    .setRank(x ? x.level : 1)
    .setCurrentXp(x ? x.xp : 1)
    .setRequiredXp(x ? x.gerekli: 100)
    .build();

    message.reply({files:[{attachment:rank.toBuffer(),name: `rank-${message.member.id}.png`}]});

}}
