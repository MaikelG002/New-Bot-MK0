const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
const upload1 = new megadb.crearDB("upload");


module.exports = class bal extends Comandos {
  constructor() {
    super('bal', 'Economy', ["balance"]);
  }

async run(client, message, args){

  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(!upload1.tiene(`${user}`)){
      upload1.establecer(`${user}`,{
        upload: "https://cdn.discordapp.com/attachments/984223971111227463/1004191574793650386/Noob-Upload.png"
      })
    };

  const ex = await eco.get(`${user}.ex`)
  
  
  const vida = await eco.get(`${user}.vida`)
  
  
    const efectivo = await eco.get(`${user}.efectivo`); 
   

    const banco = await eco.obtener(`${user}.banco`);

   const upload2 = await upload1.obtener(`${user}.upload`);

  const kill = await eco.obtener(`${user}.muertes`);

  const telefono = await eco.obtener(`${user}.telefono`);


    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Perfil Informacion")


           
          .addField("<:energia:985182546595827782> \`Energia:\`", + vida)

        .addField("<:era_petzmoney1:1017944727271768065>  \`Efectivo:\`", "$"+ efectivo)
        .addField("<:emoji_53:1017943320971984917>  \`Banco:\`", "$"+ banco)
        .addField("<:emoji_51:1012563077788598272> \`Kills:\`", + kill)
        .addField("<:emoji_28:992127867938930739> \`Movil:\`", + telefono + "%")
        .setColor("#00ff00")
        .setThumbnail("https://media.discordapp.net/attachments/944607761512153098/972567051342336020/unknown.png")
          
        .setFooter(`▶️ ID: ${user}`)
    
      .setThumbnail(`${upload2}`)

      
        return message.channel.send(solonumeros)

      
    }

  
  }
}