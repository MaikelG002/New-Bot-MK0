const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");



module.exports = class botinfo extends Comandos {
  constructor() {
    super('botinfo', '', [""]);
  }

  async run(client, message, args) {

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag


    
 
const embed = new Discord.MessageEmbed()//definimos embed
.setAuthor("ABZ-Proyect", client.user.avatarURL())
.setThumbnail(client.user.avatarURL())//hacemos un setAuhtor para que salga el nombre de tu bot y su foto de perfil
.addField("Developer", ` !Maikel G#5258`)//un field para el Developer pones tu nombre
.addField("Ayudantes", `AlexD y Davids`)//si tienes ayudantes los pones si no tonces eliminalo
.addField("Servers", ` ${client.guilds.cache.size}`)//hacemos un field para la cantidad de servers donde esta tu bot
.addField("Usuarios", ` ${client.users.cache.size}`)//field para ver la cantidad de usuarios que pueden ver a tu bot
.addField("Ram", ` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)//aqui va la ram osea la memoria que usa tu bot
.addField("Lenguaje", " JavaScript")//el lenguaje que en este caso es JavaScript
.addField("Libreria", " Discord.js v12.2.0")//la libreria que es Discord.js v12
message.channel.send(embed) //que envie el embed
//y cerramos
		
  }
}