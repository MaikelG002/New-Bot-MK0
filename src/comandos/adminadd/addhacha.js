const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class addhacha extends Comandos {
  constructor() {
    super('repararhacha', 'adminadd', [""]);
  }

async run(client, message, args){

  let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

   {
  let permiso = await eco.get(`${user}.reparacionhacha`) || 0
    console.log(permiso)
    if(permiso < 1)return message.channel.send("NO TIENES PERMISO")
  }


  
  const member = message.mentions.members.first();


  if(!member) return message.channel.send(` Menciona a un usuario`);

  if(message.author.id !=='601776622797848579') 
        return message.channel.send(`**»** ${message.author}, No tienes permisos`)
    
      eco.obtener(`${member.id}` + `hacha`);
     


    const random_dinero = Math.floor(500)

  eco.sumar(`${member.id}.hacha`, random_dinero)
  
      message.channel.send(`:white_check_mark: ${message.author} Le reparaste la Hacha a ${member}  <:emoji_30:992839237697294496> ${random_dinero} Hachas`); //Mandamos mensaje claramente.
      
  
  
 }
}

