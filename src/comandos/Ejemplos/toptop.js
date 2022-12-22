const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
const loteria = require('./loteria');
let eco = new megadb.crearDB("economia");
let leader = new megadb.crearDB("leaderboard");
let loteria1 = new megadb.crearDB("loteria");

module.exports = class toptop extends Comandos {
  constructor() {
    super('', 'Ejemplos', [""]);
  }

  async  run(client, message, args, interaction) {
     
     let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

     
     const Okey = 
     loteria1.datos().then(n =>{
      console.log(n)
    });
  
    const gigi = 
    leader.map("leaderboard", (v, key)  => `Usuario: ${key} | Banco: `).then(usuarios => {
 
      /* Ahora usuarios debera de contener este array:
     
      ["Usuario: MegaStar | puntos: 24",
       "Usuario: MoDeR | puntos: 18",
       "Usuario: Mario | puntos: 3",
       "Usuario: Pedro | puntos: 24"]
     
      */
       return console.log(usuarios.join("\n"))
       
      });
      

   const currency1 = {
  usuario: {
    money: 0,
  },
  person2: {
    money: 124,
  },
  person3: {
    money: 50,
  },
};
     

   
const result = Object.entries(gigi)
  .sort((a, b) => b[1].usuarios - a[1].usuarios)
  .map((p) => `${p[0].usuarios} | ${p[1].usuarios}`);

  
  
    
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Top")
        .setDescription(result) 
        .setColor("BLUE")
        .setFooter("Comando By MaikelG")

        
        
        return message.channel.send(solonumeros)
        
        
     
  }
}