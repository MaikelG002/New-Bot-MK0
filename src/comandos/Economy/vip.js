const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
let armas = new megadb.crearDB("armas");
const CDDB = new megadb.crearDB("cooldowns")




module.exports = class vip extends Comandos {
  constructor() {
    super('vip', 'Economy', [""]);
  }

  
  

async run(client, message, args){

//Cooldown system by MaikelG//
  
      const cooldowns = CDDB;
    
      const cooldownAmount = (vip.cooldown || 43200) * 1000;
      const now = Date.now();

      if(cooldowns.has(message.author.id+".vip")) {
        const timestamps = await cooldowns.get(message.author.id+".vip")
        const expirationTime = timestamps + cooldownAmount
    
        if(now < expirationTime) {
          const timeLeft = (expirationTime - now) / 1000;
          try {
            return message.reply(`Necesitas Esperar ${timeLeft.toFixed(1)} Segundos Para Poder Usar El Comando \`${vip.name}\` `);
          } catch (e) { console.log(e) }
        }
      }

  
      cooldowns.set(message.author.id+".vip", now)
        setTimeout(() => cooldowns.delete(message.author.id+".vip"), cooldownAmount)
  //Termina Cooldown//
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  {
  let ban = await eco.get(`${user}.ban`)
   
    if(ban === 1) return message.channel.send("ESTAS BANEADO")
   
  }

  {
  let vip1 = await eco.get(`${user}.vip`) || 0
    if(vip1 < 1)return message.channel.send("No tienes el Vip")
  }
     
    const embed = new Discord.MessageEmbed()

      .setTitle("__Recompensas Vip__")
      .setDescription(`

<:Nitrovip:985533120671547413>  Recibiste: 1000 <:era_petzmoney1:1017944727271768065> Gralats
<:Nitrovip:985533120671547413> Recibiste: 2  <:caja:985182290516779068> Caja
<:Nitrovip:985533120671547413> Recibiste: 1000 <a:Goldpacks:985536866071760946> Goldcoin
<:Nitrovip:985533120671547413> Recibiste: 500 <:emoji_39:1001887184502128650>  Minerales
<:Nitrovip:985533120671547413> Recibiste: 100 <:emoji_47:1004416241181655061>   Uploadcoin
<:Nitrovip:985533120671547413> Recibiste: 100 <:emoji_25:992127713102024715>    Ammo9
<:Nitrovip:985533120671547413> Recibiste: 50 <:emoji_26:992127754675957870>     Ammo12
<:Nitrovip:985533120671547413> Recibiste: 30 <:emoji_29:992130125426601994>      Ammo18
<:Nitrovip:985533120671547413> Recibiste: 20 <:emoji_36:993525561962008628>       Hamburguesa
<:Nitrovip:985533120671547413> Recibiste: 1 <a:tickets1:1005869594508009532>       TicketsVip
`)
      .setColor("RED")
    
    

    message.channel.send(embed)

 {
   let random1 = Math.floor(1000)  
eco.sumar(`${user}.efectivo`, random1)} 

   {
   let random2 = Math.floor(2)  
eco.sumar(`${user}.caja`, random2)}


  {
   let random4 = Math.floor(1000)  
eco.sumar(`${user}.coins`, random4)}

  {
   let random5 = Math.floor(500)  
eco.sumar(`${user}.minerales`, random5)}

  {
   let random6 = Math.floor(100)  
eco.sumar(`${user}.uploadcoin`, random6)}

  {
   let random7 = Math.floor(100)  
armas.sumar(`${user}.municion9`, random7)}

    {
   let random8 = Math.floor(50)  
armas.sumar(`${user}.municion12`, random8)}

    {
   let random9 = Math.floor(30)  
armas.sumar(`${user}.municion18`, random9)}

  {
   let random10 = Math.floor(20)  
eco.sumar(`${user}.hamburguesa`, random10)}

     {
   let random11 = Math.floor(1)  
eco.sumar(`${user}.ticketsvip`, random11)}

  
  
 }
}
