const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class start extends Comandos {
  constructor() {
    super('start', 'Ejemplos', [""]);
  }

  run(client, message, args) {

 
const embed = new Discord.MessageEmbed()//definimos embed
.setAuthor("ABZ-Proyect", client.user.avatarURL())

.setThumbnail(client.user.avatarURL())//hacemos un setAuhtor para que salga el nombre de tu bot y su foto de perfil

.addField("Paso 1:", `Escribir el comando **!work** Es lo primero que tienes que hacer`)//un field para el Developer pones tu nombre
.addField("Paso 2:", `Escribir el comando **!setupload** Para que te funcione el comando **!bal**`)//si tienes ayudantes los pones si no tonces eliminalo
.addField("Paso 3:", `Escribir el comando **!gun** Para que te den la startgun y que funcione el comando **!inv**`)//hacemos un field para la cantidad de servers donde esta tu bot
.addField("Paso 4:", `Escribe el comando **!ayuda** Asi te mostrara todos los comandos que hay`)//field para ver la cantidad de usuarios que pueden ver a tu bot
.addField("Paso 5:", `Comunicarte al soporte para cualquier error, Le envias DM a **Maikel G#5258** Y te lo resolvera.`)

message.channel.send(embed) 
		
  }
}