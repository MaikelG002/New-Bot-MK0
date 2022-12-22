const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class help extends Comandos {
  constructor() {
    super('ayudaadmin', 'Economy', ["helpadmin"]);
  }

async run(client, message, args){ 
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(message.author.id !=='601776622797848579') 
        return message.channel.send(`**»** ${message.author}, No tienes permisos`);


    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("```Guia de Comandos Admin```")
        .setDescription(`
 **!darefectivo**: Admin money Regalar
 **!quitarefectivo**: Admin remover money
 **!añadir(item)**: Admin Añadir items
 **!registrar**: Admin Sirve para registrar un usuario nuevo
 **!estado**: Admin Sirve para cambiar el estado del bot
 **!leave**: Admin Sirve para sacar el bot de un servidor
 **!añadir ban**: Admin Sirve para banear a un usuario
 **!quitarban**: Admin Sirve para quitar el Ban
 **!loterysorteo**: Empezar sorteo de la loteria `) 
        .setColor("RED")
        .setFooter("Para cualquier ayuda contacte con el Owner Maikel G#5258")
        .setThumbnail("https://i.imgur.com/eDzT09J.png")

      
        return message.channel.send(solonumeros)
    }
  }
}