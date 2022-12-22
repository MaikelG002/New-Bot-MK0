const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");



module.exports = class Koo extends Comandos {
  constructor() {
    super('', 'Ejemplos', [""]);
  }

 async run(client, message, args, member) {

    if (!args[0]) return message.reply('Bir Sayı Girmen Gerek.');

 if (!message.member.permissions.has('ADMINISTRATOR')) {
  return message.reply('Bunu Yapmaya Yetkin Yok.');
 }


   
 let user = message.mentions.roles.first();
 if (isNaN(args[1]))

                              
      eco.obtener(`${author.id}.efectivo`);
      
eco.sumar(`${author.id}.efectivo`, 10);

    let moneyEmbed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(
   `✅ | ${user} Rolüne Sahip Kişilere {pi} Değerinde Para Eklendi.`
  );
 message.channel.send(moneyEmbed)
}
		
  }
