const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class invitarbot extends Comandos {
  constructor() {
    super('invitarbot', 'Ejemplos', [""]);
  }

async run(client, message, args){
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Invita El bot a tu servidor")
        .setDescription("https://discord.com/oauth2/authorize?client_id=931751202981543936&permissions=8&scope=bot") 
        .setColor("#7289da")
        .setFooter("By Maikel G#5258")
        message.channel.send("https://discord.gg/AvfHPUQm6d")
        return message.channel.send(solonumeros)

        
    }

    
  }
  }