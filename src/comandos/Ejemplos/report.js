const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class report extends Comandos {
  constructor() {
    super('reportar', 'Ejemplos', [""]);
  }

  run(client, message, args) {

    

            let target = args[0];
            if(!target) return message.channel.send('Porfavor menciona El ID: de un usuario para reportarlo, O el tullo en caso de algun Bug')
            
            let reason = args[1];
            if(!reason) return message.channel.send(`Porfavor diga una Razon para reportar a ID: **${target}**`)
 
            let reportChannel = message.guild.channels.cache.find(x => x.name === "『💵』┇❌reportes");
            
            message.channel.send('Tu reporte a sido enviado al Team Support. Gracias por Reportar.')
          
            reportChannel.send(`
            ** <:emoji_51:1012563077788598272> ${message.author.username}**
 Ha reportado a: 
 ID: **${target}** Por: 
 ${reason} 
 <@&775169244077228052>`)

 

  }
}