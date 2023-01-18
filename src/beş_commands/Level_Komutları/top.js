const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits,SelectMenuBuilder,ActivityType,Formatters } = require("discord.js");
const moment = require("moment")
require('moment-duration-format');
const { createCanvas, loadImage, registerFont } = require('canvas');
const beş_config = require("../../../beş_config.json")
const level = require("../../../Schema/level");
module.exports = {
  name: "top",
  aliases: ["leaderboard","ld"],
  execute: async (client, message, args, beş_embed) => {

const member = message.member;

const mesaj = await message.reply({content:`> **Veriler Çekiliyor, Lütfen Bekleyiniz.**\n> *Delay; ${client.ws.ping}MS*`})

let status;
if(member.presence && member.presence.status === "dnd") status = "#ff0000"
if(member.presence && member.presence.status === "idle") status = "#ffff00"
if(member.presence && member.presence.status === "online") status = "#00ff00"
if(member.presence && member.presence.status === "offline") status = "#808080"

let rank1;
let rank2;
let rank3;
let rank4;
let rank5;
let rank6;
let rank7;
let rank8;
let rank9;
let rank10;


const data = await level.find({ guildID: message.guild.id });
const leaderboard = data.sort((a,b) => b.level - a.level).map((user, index) => {
if(index == 0) rank1 = user.userID
if(index == 1) rank2 = user.userID
if(index == 2) rank3 = user.userID
if(index == 3) rank4 = user.userID
if(index == 4) rank5 = user.userID
if(index == 5) rank6 = user.userID
if(index == 6) rank7 = user.userID
if(index == 7) rank8 = user.userID
if(index == 8) rank9 = user.userID
if(index == 9) rank10 = user.userID
})

const leaderboard2 = data.sort((a,b) => b.level - a.level).map((user, index) => `${index + 1}. ${message.guild.members.cache.get(user.userID) ? message.guild.members.cache.get(user.userID) : "Kullanıcı Bulunamadı."} - (${user.level}.LVL)`).slice(0, 10).join("\n")


const x1 = await level.findOne({ guildID: message.guild.id, userID: rank1 })
const x2 = await level.findOne({ guildID: message.guild.id, userID: rank2 })
const x3 = await level.findOne({ guildID: message.guild.id, userID: rank3 })
const x4 = await level.findOne({ guildID: message.guild.id, userID: rank4 })
const x5 = await level.findOne({ guildID: message.guild.id, userID: rank5 })
const x6 = await level.findOne({ guildID: message.guild.id, userID: rank6 })
const x7 = await level.findOne({ guildID: message.guild.id, userID: rank7 })
const x8 = await level.findOne({ guildID: message.guild.id, userID: rank8 })
const x9 = await level.findOne({ guildID: message.guild.id, userID: rank9 })
const x10 = await level.findOne({ guildID: message.guild.id, userID: rank10 })


      const colors = { box: '#212121', username: '#ffffff', xp: '#ffffff', level: '#ffffff', firstRank: '#f7c716', secondRank: '#9e9e9e', thirdRank: '#94610f' };

        const fonts = { username: 'Elephant', xp: 'Elephant', level: 'Elephant', ranks: 'Elephant' };

const user1 = message.guild.members.cache.get(rank1);
const user2 = message.guild.members.cache.get(rank2);
const user3 = message.guild.members.cache.get(rank3);
const user4 = message.guild.members.cache.get(rank4);
const user5 = message.guild.members.cache.get(rank5);
const user6 = message.guild.members.cache.get(rank6);
const user7 = message.guild.members.cache.get(rank7);
const user8 = message.guild.members.cache.get(rank8);
const user9 = message.guild.members.cache.get(rank9);
const user10 = message.guild.members.cache.get(rank10);
const beşwashere = await client.users.fetch("928259219038302258");

    const usersData = [
      { top: 1, avatar:user1 ? `https://cdn.discordapp.com/avatars/${user1.user.id}/${user1.user.avatar}.png?size=2048` : `https://cdn.discordapp.com/avatars/${beşwashere.id}/${beşwashere.avatar}.png?size=2048`, tag: user1 ? user1.user.tag : `Bulunamadı`, xp: x1 ? x1.xp : 0, max_xp: x1 ? x1.gerekli: 0, level: x1 ? x1.level : 0 },

{ top: 2, avatar:user2 ? `https://cdn.discordapp.com/avatars/${user2.user.id}/${user2.user.avatar}.png?size=2048` : `https://cdn.discordapp.com/avatars/${beşwashere.id}/${beşwashere.avatar}.png?size=2048`, tag: user2 ? user2.user.tag : `Bulunamadı`, xp: x2 ? x2.xp : 0, max_xp: x2 ? x2.gerekli: 0, level: x2 ? x2.level : 0 },

{ top: 3, avatar:user3 ? `https://cdn.discordapp.com/avatars/${user3.user.id}/${user3.user.avatar}.png?size=2048` : `https://cdn.discordapp.com/avatars/${beşwashere.id}/${beşwashere.avatar}.png?size=2048`, tag: user3 ? user3.user.tag : `Bulunamadı`, xp: x3 ? x3.xp : 0, max_xp: x3 ? x3.gerekli: 0, level: x3 ? x3.level : 0 },

{ top: 4, avatar: user4 ? `https://cdn.discordapp.com/avatars/${user4.user.id}/${user4.user.avatar}.png?size=2048` : `https://cdn.discordapp.com/avatars/${beşwashere.id}/${beşwashere.avatar}.png?size=2048`, tag: user4 ? user4.user.tag : `Bulunamadı`, xp: x4 ? x4.xp : 0, max_xp: x4 ? x4.gerekli: 0, level: x4 ? x4.level : 0 },

{ top: 5, avatar:user5 ? `https://cdn.discordapp.com/avatars/${user5.user.id}/${user5.user.avatar}.png?size=2048` : `https://cdn.discordapp.com/avatars/${beşwashere.id}/${beşwashere.avatar}.png?size=2048`, tag: user5 ? user5.user.tag : `Bulunamadı`, xp: x5 ? x5.xp : 0, max_xp: x5 ? x5.gerekli: 0, level: x5 ? x5.level : 0 },

{ top: 6, avatar:user6 ? `https://cdn.discordapp.com/avatars/${user6.user.id}/${user6.user.avatar}.png?size=2048` : `https://cdn.discordapp.com/avatars/${beşwashere.id}/${beşwashere.avatar}.png?size=2048`, tag: user6 ? user6.user.tag : `Bulunamadı`, xp: x6 ? x6.xp : 0, max_xp: x6 ? x6.gerekli: 0, level: x6 ? x6.level : 0 },

{ top: 7, avatar:user7 ? `https://cdn.discordapp.com/avatars/${user7.user.id}/${user7.user.avatar}.png?size=2048` : `https://cdn.discordapp.com/avatars/${beşwashere.id}/${beşwashere.avatar}.png?size=2048`, tag: user7 ? user7.user.tag : `Bulunamadı`, xp: x7 ? x7.xp : 0, max_xp: x7 ? x7.gerekli: 0, level: x7 ? x7.level : 0 },

{ top: 8, avatar:user8 ? `https://cdn.discordapp.com/avatars/${user8.user.id}/${user8.user.avatar}.png?size=2048` : `https://cdn.discordapp.com/avatars/${beşwashere.id}/${beşwashere.avatar}.png?size=2048`, tag: user8 ? user8.user.tag : `Bulunamadı`, xp: x8 ? x8.xp : 0, max_xp: x8 ? x8.gerekli: 0, level: x8 ? x8.level : 0 },

{ top: 9, avatar:user9 ? `https://cdn.discordapp.com/avatars/${user9.user.id}/${user9.user.avatar}.png?size=2048` : `https://cdn.discordapp.com/avatars/${beşwashere.id}/${beşwashere.avatar}.png?size=2048`, tag: user9 ? user9.user.tag : `Bulunamadı`, xp: x9 ? x9.xp : 0, max_xp: x9 ? x9.gerekli: 0, level: x9 ? x9.level : 0 },

{ top: 10, avatar:user10 ? `https://cdn.discordapp.com/avatars/${user10.user.id}/${user10.user.avatar}.png?size=2048` : `https://cdn.discordapp.com/avatars/${beşwashere.id}/${beşwashere.avatar}.png?size=2048`, tag: user10 ? user10.user.tag : `Bulunamadı`, xp: x10 ? x10.xp : 0, max_xp: x10 ? x10.gerekli: 0, level: x10 ? x10.level : 0 }
    ];

      const canvas = createCanvas(680, 745);
        const ctx = canvas.getContext('2d');

const fillRoundRect=(ctx,x,y,w,h,r,f,s)=>{if(typeof r==="number")r={tl:r,tr:r,br:r,bl:r};else {var defaultRadius={tl:0,/*alfr3xd*/tr:0,br:0,bl:0};for(var side in defaultRadius){r[side]=r[side]||/*zeew*/defaultRadius[side]}};/*ashray*/ctx.beginPath();ctx.moveTo(x + r.tl, y);/*curves*/ctx.lineTo(x + w - r.tr, y);ctx.quadraticCurveTo(x+w, y, x + w, y + r.tr);ctx.lineTo(x + w, y + h - r.br);ctx.quadraticCurveTo(x + w, y + h, x + w - r.br, y + h);ctx.lineTo(x + r.bl, y + h);ctx.quadraticCurveTo(x, y + h, x, y + h - r.bl);ctx.lineTo(x, y + r.tl);ctx.quadraticCurveTo(x, y, x + r.tl, y);ctx.closePath();if(f)ctx.fill();if(s)ctx.stroke();};/*Export*/module.exports=fillRoundRect;





        if(usersData) {
            var Box_Y = 0, Avatar_Y = 0, Tag_Y = 45, XP_Y = 55, Level_Y = 30, Rank_Y = 45;
            for(var i=0; i < usersData.length; i++) {
                ctx.save();
                ctx.fillStyle = colors.box;
                ctx.globalAlpha = 0.6;
                fillRoundRect(ctx, 0, Box_Y, canvas.width, 70, 15, true, false);
                ctx.globalAlpha = 1;

                const avatar = await loadImage(usersData[i].avatar);
                ctx.clip();
                ctx.drawImage(avatar, 0, Avatar_Y, 70, 70);
                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = 8;
                ctx.shadowOffsetY = 6;
                ctx.shadowColor = "#0a0a0a";

                ctx.fillStyle = colors.username;
                ctx.font = "25px " + fonts.username;
                ctx.textAlign = 'left';
                ctx.fillText(usersData[i].tag, 80, Tag_Y, 260);

                ctx.fillStyle = colors.xp;
                ctx.font = "20px " + fonts.xp;
                ctx.textAlign = 'right';
                ctx.fillText(`XP: ${abbreviateNumber(usersData[i].xp)} / ${abbreviateNumber(usersData[i].max_xp)}`, 560, XP_Y, 200);

                ctx.fillStyle = colors.level;
                ctx.font = "20px " + fonts.level;
                ctx.textAlign = 'right';
                ctx.fillText("Level: " + usersData[i].level, 560, Level_Y, 200);

                if(usersData[i].top === 1) {
                    ctx.fillStyle = colors.firstRank;
                }
                else if(usersData[i].top === 2) {
                    ctx.fillStyle = colors.secondRank;
                }
                else if(usersData[i].top === 3) {
                    ctx.fillStyle = colors.thirdRank;
                }

                ctx.font = "30px " + fonts.ranks;
                ctx.textAlign = 'right';
                ctx.fillText("#" + usersData[i].top, 660, Rank_Y, 75);

                Box_Y = Box_Y + 75;
                Avatar_Y = Avatar_Y + 75;
                Tag_Y = Tag_Y + 75;
                XP_Y = XP_Y + 75;
                Level_Y = Level_Y + 75;
                Rank_Y = Rank_Y + 75;
                ctx.restore();
            }
        } else {
            ctx.font = "40px " + font;
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 8;
            ctx.shadowOffsetY = 6;
            ctx.shadowColor = "#0a0a0a"
            ctx.fillText('Bulunamadı', 340, 370, 500);
        }

const beş_embed_level = new EmbedBuilder()
.setTitle(`Level Top #10`)
.setURL(`https://linktr.ee/beykant`)
.setImage(`attachment://top-${message.member.id}.png`)
.setColor(status)
.setThumbnail(message.member.user.avatarURL({dynamic:true,size:2048}))
.setDescription(`> **\`${message.guild.name}\` Sunucusunun <t:${Math.floor(Date.now() / 1000)}:R>ki Top Level Bilgileri**`)


  mesaj.edit({content:`> **\`${message.guild.name}\` Sunucusunun <t:${Math.floor(Date.now() / 1000)}:R>ki Top Level Bilgileri**`,files:[{attachment:canvas.toBuffer(),name: `top-${message.member.id}.png`}]});


}}

function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "K", "M", "B","T"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
}
