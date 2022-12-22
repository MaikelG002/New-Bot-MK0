const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class dep extends Comandos {
  constructor() {
    super('sacar', 'Economy', ["with"]);
  }

async run(client, message, args){
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    const efectivo = await eco.get(`${user}.efectivo`);    
    
    const banco = await eco.obtener(`${user}.banco`);

    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setDescription("<:emoji_53:1017943320971984917>  Pon la cantidad que quieres Sacar <:bolsadinero:985532573373571154>")
        .setColor("RANDOM")
        .setFooter("Cuentas con un saldo en Banco de "+ banco)
        return message.channel.send(solonumeros)
    }

    if(args[0] > banco){
        let nomayorque = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setDescription("| No puedes sacar mas de lo que tienes")
        .setColor('GREEN')
        .setFooter("Cuentas con un saldo en banco de "+ banco)
        return message.channel.send(nomayorque)
    }

    eco.sumar(`${user}.efectivo`, args[0]);
    eco.restar(`${user}.banco`, args[0]);

    let embed =new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
    .addField("| Sacaste: <:emoji_53:1017943320971984917>  " + args[0] + "$ de tu banco.",`Tu Saldo en efectivo es <:era_petzmoney1:1017944727271768065>${await eco.obtener(`${user}.efectivo`)}`)
    .setColor("RANDOM")
    return message.channel.send(embed)

  }
}