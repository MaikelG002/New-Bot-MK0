const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class api extends Comandos {
  constructor() {
    super('updatelotery', 'Ejemplos', [""]);
  }

  async run(client, message, args) {

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    let lotery = "601776622797848579"

    let efectivo = await eco.get(`${lotery}.loteria1`)


    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Loteria Se el Ganador de:")
        .setImage(`https://ffencend.sirv.com/Images/Graal-Economy/era_lottobillboard.png?text.0.text=${efectivo}&text.0.position.x=-65%25&text.0.position.y=-21%25&text.0.size=24&text.0.color=31d304&text.0.font.family=PT%20Mono&text.0.font.style=italic`) 
        .setColor("BLUE")
        .setFooter("Loteria solo funciona en el serv.. oficial")
        .setThumbnail("https://cdn.discordapp.com/attachments/866310329255854100/1017536571823624262/era_lottery-sign-mini.png")
        
        return message.channel.send(solonumeros)    
		
  }
}
}