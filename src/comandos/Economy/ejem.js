const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");



module.exports = class ejem extends Comandos {
  constructor() {
    super('', 'Economy', [""]);
  }

async run(client, message, args){

 

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

   


  ///////// constante nombramiento/////

  
  let vida = await eco.get(`${server}.${user}.vida`);
  if(vida > 0) vida = (`<:energia:985182546595827782> **Vida** x` + vida)

  
    let chaleco = await eco.get(`${server}.${user}.chaleco`);
  if(chaleco > 0) chaleco = (`<:chaleco:985182587385442365> **Chaleco** x` + chaleco)
 
  
    let coins = await eco.get(`${server}.${user}.coins`);
  if(coins > 0) coins = (`<a:Goldpacks:985536866071760946> **GoldCoin** x` + coins)
  
  
  let caja = await eco.get(`${server}.${user}.caja`);
  if(caja > 0) caja = (`<:caja:985182290516779068> **Caja** x` + caja)
  

  let eventcoin = await eco.get(`${server}.${user}.eventcoin`);
  if(eventcoin > 0) eventcoin = (`<:eventcoin:987007503596417065> **Event Coin** x` + eventcoin)
  

  let vip = await eco.get(`${server}.${user}.vip`);
  if(vip > 0) vip = (`<:Nitrovip:985533120671547413> **Vip** x` + vip)
 

  let pala = await eco.get(`${server}.${user}.pala`);
  if(pala > 0) pala = (`<:pala:985536768029909044> **Pala** x` + pala)
 

  let caña = await eco.get(`${server}.${user}.caña`);
  if(caña > 0) caña = (`<:caa:976231936051802162> **Caña** x` + caña)
 

   let peal = await eco.get(`${server}.${user}.peal`);
  if(peal > 0) peal = (`<:peal:985536932421468210> **Peal** x` + peal)
 

  let gusano = await eco.get(`${server}.${user}.gusanos`);
  if(gusano > 0) gusano = (`<:bolsagusanos:985536993473748993> **Gusano** x` + gusano)
 
  

  let ex = await eco.get(`${server}.${user}.ex`);
  if(ex > 0) ex = (`<:EX:987128715106459649> **Exp.** x` + ex)
  

 
  
  

  
  ///////////////invent//////////

    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Inventario:")
/////////Se coloca el item para que se vea////

        

         .setDescription()
         

          

        
          
        .setColor("RED")
        .setThumbnail("https://i.imgur.com/lgm8IcZ.png")
        .setFooter("Comando By MaikelG")

      
      
      
        return message.channel.send(solonumeros)

     
    }
  }
}