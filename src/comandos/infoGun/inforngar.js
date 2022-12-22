const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class inforngar extends Comandos {
  constructor() {
    super('inforngar', 'infoGun', [""]);
  }

async run(client, message, args){
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(isNaN(args[0])){
      let solonumeros = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
      .setTitle("--RNG-19 AR--")
      .addField("**\`Costo:\`**", "Item Evento 500 Multicolor Coin")
      .addField("**\`Daño:\`**", "10-11")
      .addField("**\`Cooldown:\`**", "1.7s")
      .addField("**\`Tipo de Municion:\`**", "Ammo18")
      .addField("**\`Ventaja:\`**", "5 De Energia por kill")
      .addField("**\`Municion que consume:\`**", "10-25")
      .setColor("YELLOW")
      .setThumbnail("https://cdn.discordapp.com/attachments/528310273761607693/1018958271824003174/era_sabrecucu-rng19ar-icon.png")
      .setFooter("Evento lanzado el 11 de Agosto 2022 ")
      
      return message.channel.send(solonumeros)
  }
}
}