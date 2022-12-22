const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class leaderboard extends Comandos {
  constructor() {
    super('', 'Ejemplos', [""]);
  }

   async run(client, message, args, interaction) {
     
     let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

 let efectivo =
eco.obtener(`${user}.efectivo`);
     
     let toptop =
eco.size(`${user}.efectivo`);

     eco.datos().then(n => {
  console.log()
})
     console.log(toptop)
   const currency1 = {
  usuario: {
    money: 1004,
    level: 20,
  },
  person2: {
    money: 124,
    level: 3,
  },
  person3: {
    money: 50000,
    level: 102,
  },
     };
     

   
const result = Object.entries(toptop)
  .sort((a, b) => b[1].efectivo - a[1].efectivo)
  .map((p) => `${p[0].efectivo} | ${p[1].efectivo}`);

     


    
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Top")
        .setDescription(result) 
        .setColor("BLUE")
        .setFooter("Comando By MaikelG")
        
        return message.channel.send(solonumeros)
     
  }
}