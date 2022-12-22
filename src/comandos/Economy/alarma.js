const Comandos = require('../../util/estructuras/Comandos');
const discord = require("discord.js")
const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const ms = require("ms")


module.exports = class alarma extends Comandos {
  constructor() {
    super('alarma', 'Economy', [""]);
  }

  async run (client, message, args) {

    let time = ("1m")
  if(!time)return message.reply("Cuantos Minutos / Horas tu quieres poner tu alarma")
  if(ms(time) > ms("1d"))return message.reply("La cantidad que has puesto es mayor a un dia 1d")
  // Im make it 1 day because sometime your bot will restart
  // And if your bot is restart , your alarm will gone / auto ended
  
  let reason = ('Auction')
  if(!reason)return message.reply("Porfavor escribe la razon")
  
  const embed = new discord.MessageEmbed()
  .setAuthor(`${message.author.tag} Alarma`,message.author.displayAvatarURL())
  .setColor("RANDOM")
  .setDescription(`Tiempo: \`${time}\`\nRazon: \`${reason}\``)
  .setTimestamp()
  message.channel.send(embed)
  
  setTimeout(() => {
    const embed = new discord.MessageEmbed()
  .setAuthor(`${message.author.tag} Tu alarma a sido añadida`,message.author.displayAvatarURL())
  .setColor("RANDOM")
  .setDescription(`Tiempo: \`${time}\`\nRazon: \`${reason}\`\nAlarma Puesto en el servidor: \`${message.guild.name}\``)
  .setTimestamp()
  message.channel.send(embed)
  message.channel.send("<@&775169244077228052>")}, ms(time))
		
  }
}