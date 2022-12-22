const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class retos extends Comandos {
  constructor() {
    super('retos', 'Ejemplos', [""]);
  }

async run(client, message, args){
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  
  const retos = ['Tienes que decir que eres gey', 'pide que te quiten 100 Gralats', 'Di que eres noob', 'di que eres simp de el fundador', 'Di que apoyas a los LGTB', 'Le tienes que regalar $100 Gralats al que escriba un comentario despues de este mensaje'] // Hacemos un array con todos los retos (pueden añadir mas, es 100% modificable)

const reto = retos[Math.floor(Math.random() * retos.length)]; // usaremos Math.random para conseguir un reto del array de manera aleatoria

const embed = new Discord.MessageEmbed() // Hacemos un embed

.setTitle("Aqui tienes un reto random") // Un titulo bien bonito
.setDescription(`**__${reto}__**`) // Que la descripción sea el reto
.setFooter("Cumplelo no seas tramposo") // Un footer, opcional pero queda bien
.setColor("RANDOM") // Y que su color sea aleatorio

message.channel.send(embed) // Enviamos el embed
  
  }
}