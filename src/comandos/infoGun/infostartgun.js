const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class infostartgun extends Comandos {
  constructor() {
    super('infostartgun', 'infoGun', [""]);
  }

async run(client, message, args){
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(isNaN(args[0])){
      let solonumeros = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
      .setTitle("--Start Gun--")
      .addField("**\`Costo:\`**", "Gratis")
      .addField("**\`Daño:\`**", "5-8")
      .addField("**\`Cooldown:\`**", "4s")
      .addField("**\`tipo de Municion:\`**", "Ammo9")
      .addField("**\`Ventaja:\`**", "Nada")
      .addField("**\`Municion que consume:\`", "3-15")
      .setColor("BROWN")
      .setThumbnail("https://cdn.discordapp.com/attachments/528310273761607693/1018947331703451699/era_gun-icon-handguntrial.png")
      .setFooter("Comando By MaikelG")
      
      return message.channel.send(solonumeros)
  }
}
}