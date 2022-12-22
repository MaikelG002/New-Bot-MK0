const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class dep extends Comandos {
  constructor() {
    super('dep', 'Economy', ["depositar"]);
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
        .setDescription("<:emoji_58:924790109570740275> Pon la cantidad que quieres depositar <:emoji_58:924790109570740275>")
        .setColor("RANDOM")
        .setFooter("Cuentas con un saldo en Efectivo de "+ efectivo)
        return message.channel.send(solonumeros)
    }

    if(args[0] > efectivo){
        let nomayorque = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setDescription("| No puedes depositar mas de lo que tienes")
        .setColor('GREEN')
        .setFooter("Cuentas con un saldo de "+ efectivo)
        return message.channel.send(nomayorque)
    }

    eco.sumar(`${user}.banco`, args[0]);
    eco.restar(`${user}.efectivo`, args[0]);

    let embed =new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
    .addField("| Depositaste: <:era_petzmoney1:1017944727271768065> " + args[0] + "$ en tu Cuenta Bancaria.",`Tu Saldo bancario es <:emoji_53:1017943320971984917> ${await eco.obtener(`${user}.banco`)}`)
    .setColor("RANDOM")
    return message.channel.send(embed)

  }
}