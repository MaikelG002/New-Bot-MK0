const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class infolaunchergranade extends Comandos {
  constructor() {
    super('infolaunchergranade', 'infoGun', [""]);
  }

async run(client, message, args){
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("--Launcher Granade--")
      .addField("**\`Costo:\`**", "<:eventcoin:987007503596417065> NaN Event Coin")
      .addField("**\`Daño:\`**", "10-50")
      .addField("**\`Cooldown:\`**", "5s")
      .addField("**\`Tipo de Municion:\`**", "Ammo12")
      .addField("**\`Ventaja:\`**", "Hace Mucho de DMG pero dura mucho para caer")
      .addField("**\`Municion que consume:\`**", "10-35")
      .setColor("BROWN")
        .setThumbnail("https://cdn.discordapp.com/attachments/866310329255854100/1018188859458203708/era_shiz-grenadelauncher-icon.png")
        .setFooter("Comando By MaikelG")
        
        return message.channel.send(solonumeros)
    }
  }
  }