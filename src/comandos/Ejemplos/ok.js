const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class ok extends Comandos {
  constructor() {
    super('', 'Ejemplos', [""]);
  }

  run(client, message, args) {
  

    //comando para ver las estadisticas de tu bot, basico...

//definimos comando mas prefijo

//si no quieres que alguien mas use al comando aparte de ti escibe esto, y claro pon tu id if (!["710482010325647421"].includes(message.author.id)) return message.channel.send('Solo el desarrollador [zSuggar!#3680] puede usar este comando, que mal.');

              const embed = new Discord.MessageEmbed()//creamos embed v12, v11 richembed
              .setAuthor("BmoBot", client.user.avatarURL())//define el avatar de tu bot
              .setThumbnail("https://media.giphy.com/media/3rgXBsmYd60rL3w7sc/giphy.gif")//7esto es opcional, en mi caso puse un gif de Bmo
              .addField("Desarrollador", `  MaikelG`)//si hiciste el bot solo como en mi caso, pon tu nick, si lo hiciste con un amigo escribe .addField("Ayudante", ` [nombres]`)

              .addField("Servidores", ` ${client.guilds.cache.size}`)//cuenta los servidores en los que esta tu bot
              .addField("Usuarios", ` ${client.users.cache.size}`)//los usuarios
              .addField("Ram", ` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)//la ram que usa en mb
              .addField("Lenguaje", " JavaScript")//lenguaje usado al desarrollar el bot
              .addField("Libreria", " Discord.js v12.2.0")//la libreria que usaste nwn
              message.channel.send(embed)//envia el embed
              }//fin del comando, no hagas c&p ._.XD

//analiza el comando y escribelo, te ayudara a mejorar ;)
// si te funciono el comando, dale like y sigueme :,)
    
}
