const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class infodragonrifle extends Comandos {
  constructor() {
    super('infodragonrifle', 'infoGun', [""]);
  }

async run(client, message, args){
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(isNaN(args[0])){
      let solonumeros = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
    .setTitle("--Dragon Rifle--")
      .addField("**\`Costo:\`**", "<:era_petzmoney1:1017944727271768065>  $0 Gralats")
      .addField("**\`Daño:\`**", "11")
      .addField("**\`Cooldown:\`**", "2s")
      .addField("**\`Tipo de Municion:\`**", "Ammo18")
      .addField("**\`Ventaja:\`**", "Daño fijo 11 Dmg")
      .addField("**\`Municion que consume:\`**", "5-20")
      .addField("**\`Arma de Subasta:\`**", "Ganada por: ")
      .setColor("BROWN")
      .setThumbnail("https://cdn.discordapp.com/attachments/528310273761607693/1018961829529137173/Dragonrifle2.png")
      .setFooter("Subastado el: ")
      
      return message.channel.send(solonumeros)
  }
}
}