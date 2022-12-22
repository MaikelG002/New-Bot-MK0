const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
let armas = new megadb.crearDB("armas");


module.exports = class trade extends Comandos {
  constructor() {
    super('tradear', 'Economy', [""]);
  }

  async run(client, message, args) {

    {
  let ban = await eco.get(`${user}.ban`)
    
    if(ban === 1) return message.channel.send("ESTAS BANEADO")
   
  }

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    let tronco =  await eco.get(`${user}.tronco`)

    let block =  await eco.get(`${user}.construccion2`)


    
    

    let Embed2 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas Un Hot Dog <:emoji_37:993525586968453190> **`)

     

   
     
     switch(args[0]) {
       //////////////////////////////////////////// 
    case 'tronco': 
         

         const member = message.mentions.members.first();

  
         
    {
  let tronco = await eco.get(`${message.author.id}.tronco`) 
    if(tronco < 1)return message.channel.send("No tienes Troncos Para Tradear")
  }

          {
  let texto1 = args.slice(2).join(" ")    
    if(tronco < texto1)return message.channel.send(`Solo tienes <:emoji_31:992839401619066910> ${tronco} Troncos No tienes lo suficientes`)
  }
         
 
         
  if(!member) return message.channel.send(` Menciona a un usuario`);
     
    
     const dinero_robar = await eco.obtener(`${message.guild.id}.${member.id}` + `.tronco`);
     
    let texto1 = args.slice(2).join(" ")
 if(!texto1){
   return message.channel.send("Debes escribir un monto <:emoji_31:992839401619066910>")
   
 }
  
    const random_dinero =   Math.floor(Math.random() * texto1)
  
      message.channel.send(`:white_check_mark: ${message.author} Le 
Tradeaste a  ${member}  <:emoji_31:992839401619066910> ${texto1} Troncos`); //Mandamos mensaje claramente.
      
    eco.sumar(`${member.id}.tronco`, texto1)

  eco.restar(`${message.author.id}.tronco`, texto1)
         

    break;
///////////////////////////////
         case 'block': 
         

         const member2 = message.mentions.members.first();

  
    {
  let block = await eco.obtener(`${message.author.id}.construccion2`) 
    if(block < 1)return message.channel.send("No tienes Blocks Para Tradear")
  }

  {
  let texto2 = args.slice(2).join(" ")    
    if(block < texto2)return message.channel.send(`Solo tienes <:emoji_33:992899412055564469> ${block} Block No tienes lo suficientes`)
  }   

      
 
  if(!member2) return message.channel.send(` Menciona a un usuario`);
     
    
     const dinero_robar2 = await eco.obtener(`${member2.id}` + `.construcccion2`);
     
    let texto2 = args.slice(2).join(" ")
 if(!texto2){
   return message.channel.send("Debes escribir un monto <:emoji_33:992899412055564469>")
   
 }
  
    const random_dinero2 =   Math.floor(Math.random() * texto2)
  
      message.channel.send(`:white_check_mark: ${message.author} Le 
Tradeaste a  ${member2}  <:emoji_33:992899412055564469> ${texto2} Block`); //Mandamos mensaje claramente.
      
    eco.sumar(`${member2.id}.construccion2`, texto2)

  eco.restar(`${message.author.id}.construccion2`, texto2)
         

    break;

         

        

  }
 }
}