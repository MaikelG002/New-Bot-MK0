const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class infodragonbreath extends Comandos {
  constructor() {
    super('infodragonbreath', 'infoGun', [""]);
  }

async run(client, message, args){
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(isNaN(args[0])){
      let solonumeros = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
      .setTitle("--Dragon Breath--")
      .addField("**\`Costo:\`**", "<a:Goldpacks:985536866071760946> $8,000 Gold Coin")
      .addField("**\`Daño:\`**", "7-14")
      .addField("**\`Cooldown:\`**", "3s")
      .addField("**\`Tipo de Municion:\`**", "Ammo18")
      .addField("**\`Ventaja:\`**", "1+ Daño por quemadura")
      .addField("**\`Municion que consume:\`**", "5-19")
      .addField("**\`Arma de Subasta:\`**", "Ganada por aleXD#2259")
      .setColor("BROWN")
      .setThumbnail("https://cdn.discordapp.com/attachments/528310273761607693/1018956122884939888/era_auction20-bbb-dragonbreath-knife-icon.gif")
      .setFooter("Subastado el 12 de Agosto 2022")
      
      return message.channel.send(solonumeros)
  }
}
}