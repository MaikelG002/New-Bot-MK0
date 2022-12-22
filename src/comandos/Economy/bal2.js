const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
let upload1 = new megadb.crearDB("upload");


module.exports = class bal2 extends Comandos {
  constructor() {
    super('balver', 'Economy', [""]);
  }

async run(client, message, args){

  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  const member = message.mentions.members.first();

  if(!member) return message.channel.send(`:x: Menciona a un usuario`);
     
     if(member === message.author.id)return message.channel.send(`:x: No te puedes mencionar`)

  
  const vida = await eco.get(`${member.id}.vida`);

    const efectivo = await eco.get(`${member.id}.efectivo`);  

    const banco = await eco.obtener(`${member.id}.banco`);

  const kills = await eco.obtener(`${member.id}.muertes`);

   const upload2 = await upload1.obtener(`${member.id}.upload`);
  

    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()

        .setTitle("Perfil Informacion")
          
          .addField("<:energia:985182546595827782> \`Energia:\` ", + vida)

        .addField("<:era_petzmoney1:1017944727271768065> \`Efectivo:\` ",+ efectivo)
        .addField("<:emoji_53:1017943320971984917> \`Banco:\` ",+ banco)
        .addField("<:emoji_51:1012563077788598272> \`Kills:\`", + kills)
        .setColor("#00ff00")
      
         .setFooter(`▶️ ID: ${member.id}`)
    
      .setThumbnail(`${upload2}`)
        return message.channel.send(solonumeros)
    }
  }
  }