const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
let armas = new megadb.crearDB("armas");


module.exports = class añadir1 extends Comandos {
  constructor() {
    super('añadir', 'sell-cmd', [""]);
  }

  async run(client, message, args) {

   
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag


     switch(args[0]) {
       //////////////////////////////////////////// 
    case 'tronco': 
         
let permiso1 = message.member.hasPermission("ADMINISTRATOR");
if(!permiso1){
    message.channel.send('No tiene el permiso de Administrador');
} else {

  
  const member1 = message.mentions.members.first();


  if(!member1) return message.channel.send(` Menciona a un usuario`);

  if(message.author.id !=='601776622797848579') 
        return message.channel.send(`**»** ${message.author}, No tienes permisos`)
    
     const dinero_robar1 = await eco.obtener(`${member1.id}` + `.tronco`);
     
    let texto1 = args.slice(2).join(" ")
 if(!texto1){
   return message.channel.send("Debes escribir un monto")
   
 }

    const random_dinero1 =   Math.floor(Math.random() * texto1)
  
      message.channel.send(`:white_check_mark: ${message.author} Le añadiste a ${member1}   ${texto1} Troncos`); //Mandamos mensaje claramente.
      
    eco.sumar(`${member1.id}.tronco`, texto1)
  
 }

    break;

          case 'block': 
         
let permiso2 = message.member.hasPermission("ADMINISTRATOR");
if(!permiso2){
    message.channel.send('No tiene el permiso de Administrador');
} else{

  
  const member2 = message.mentions.members.first();


  if(!member2) return message.channel.send(` Menciona a un usuario`);
     
    
     const dinero_robar2 = await eco.obtener(`${member2.id}` + `.construccion2`);
     
    let texto2 = args.slice(2).join(" ")
 if(!texto2){
   return message.channel.send("Debes escribir un monto")
   
 }

    const random_dinero2 =   Math.floor(Math.random() * texto2)
  
      message.channel.send(`:white_check_mark: ${message.author} Le añadiste a ${member2}   <:emoji_33:992899412055564469> ${texto2} Block`); //Mandamos mensaje claramente.
      
    eco.sumar(`${member2.id}.construccion2`, texto2)
  
 }

    break;

         case 'eventcoin': 
         
let permiso3 = message.member.hasPermission("ADMINISTRATOR");
if(!permiso3){
    message.channel.send('No tiene el permiso de Administrador');
} else{

  
  const member3 = message.mentions.members.first();


  if(!member3) return message.channel.send(` Menciona a un usuario`);
     
    
     const dinero_robar3 = await eco.obtener(`${member3.id}` + `.eventcoin`);
     
    let texto3 = args.slice(2).join(" ")
 if(!texto3){
   return message.channel.send("Debes escribir un monto")
   
 }

    const random_dinero3 =   Math.floor(Math.random() * texto3)
  
      message.channel.send(`:white_check_mark: ${message.author} Le añadiste a ${member3}   <:eventcoin:987007503596417065> ${texto3} Event Coins`); //Mandamos mensaje claramente.
      
    eco.sumar(`${member3.id}.eventcoin`, texto3)
  
 }

    break;

         case 'goldcoin': 
         
let permiso4 = message.member.hasPermission("ADMINISTRATOR");
if(!permiso4){
    message.channel.send('No tiene el permiso de Administrador');
} else{

  
  const member4 = message.mentions.members.first();


  if(!member4) return message.channel.send(` Menciona a un usuario`);
     
    
     const dinero_robar4 = await eco.obtener(`${member4.id}` + `.coins`);
     
    let texto4 = args.slice(2).join(" ")
 if(!texto4){
   return message.channel.send("Debes escribir un monto")
   
 }

    const random_dinero4 =   Math.floor(Math.random() * texto4)
  
      message.channel.send(`:white_check_mark: ${message.author} Le añadiste a ${member4}   <a:Goldpacks:985536866071760946> ${texto4} Gold Coins`); //Mandamos mensaje claramente.
      
    eco.sumar(`${member4.id}.coins`, texto4)
  
 }

    break;

          case 'energia': 
         
let permiso5 = message.member.hasPermission("ADMINISTRATOR");
if(!permiso5){
    message.channel.send('No tiene el permiso de Administrador');
} else{

  
  const member5 = message.mentions.members.first();


  if(!member5) return message.channel.send(` Menciona a un usuario`);
     
    
     const dinero_robar5 = await eco.obtener(`${member5.id}` + `.vida`);
     
    let texto5 = args.slice(2).join(" ")
 if(!texto5){
   return message.channel.send("Debes escribir un monto")
   
 }

  

    const random_dinero5 =   Math.floor(Math.random() * texto5)
  
      message.channel.send(`:white_check_mark: ${message.author} Le añadiste a ${member5}   <:energia:985182546595827782> ${texto5} Energia`); //Mandamos mensaje claramente.
      
    eco.sumar(`${member5.id}.vida`, texto5)
  
 }

    break;

         case 'ban': 
         
let permiso6 = message.member.hasPermission("MANAGE_ROLES");
if(!permiso6){
    message.channel.send('No tiene el permiso de Administrador');
} else{

  const member6 = message.mentions.members.first();


  if(!member6) return message.channel.send(` Menciona a un usuario`);
    
     eco.obtener(`${member6.id}` + `.ban`);
     
  

    let texto6 =  Math.floor(1)
  
      message.channel.send(`:white_check_mark: ${message.author} A Baneado a ${member6}   <:locking:987799419065876510> ${texto6}`); //Mandamos mensaje claramente.
      
    eco.sumar(`${member6.id}.ban`, texto6)
  
 }

    break;
         
  }
 }
}