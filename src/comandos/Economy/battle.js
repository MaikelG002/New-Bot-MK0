const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class battle extends Comandos {
  constructor() {
    super('battle', 'Economy', [""]);
  }

async run(client, message, args){
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

 

 


   const exp = await eco.obtener(`${usuario}.${user}.exp`)

  const money = await eco.obtener(`${usuario}.${user}.banco`)

   
    
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Battle Royal")
        .setDescription("") 
        .setColor("BLUE")
        .setFooter("Para reclamar escribir: battlerecompensas")
          
        .setImage(`https://ffencend.sirv.com/Images/Graal-Economy/BattleRoyales%20xD.png?text.0.text=$${+ money}&text.0.position.x=-75%25&text.0.position.y=-66%25&text.0.size=15&text.0.color=fdfdfd&text.0.font.family=Oleo%20Script&text.1.text=${+ exp}&text.1.position.x=-42%25&text.1.position.y=-85%25&text.1.size=16&text.1.color=f6f6f6&text.1.font.family=Oleo%20Script&text.2.text=27.5K&text.2.position.x=-79%25&text.2.position.y=-15%25&text.2.size=15&text.2.color=e9a100&text.2.font.family=Oleo%20Script&text.2.font.style=italic`)

  
        return message.channel.send(solonumeros)
    }
  }
