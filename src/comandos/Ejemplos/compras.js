const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
let armas = new megadb.crearDB("armas");


module.exports = class compras extends Comandos {
  constructor() {
    super('comprar', 'Ejemplos', [""]);
  }

  async run(client, message, args) {

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    {
  let ban = await eco.get(`${user}.ban`)
    console.log(ban)
    if(ban === 1) return message.channel.send("ESTAS BANEADO")
   
  }
    
let money =  await eco.get(`${user}.efectivo`)

    let vida =  await eco.get(`${user}.vida`)
    
    let Embed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $1,000 Gralats para comprar Energia**`)

    let Embed0 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**<:locking:987799419065876510> Complataste el limite del item <:locking:987799419065876510>**`)

    let chaleco = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $1,225 Gralats para comprar Chaleco**`)

     let botiquin = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $160 Gralats para comprar un Botiquin**`)

    let pala = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $250 Gralats para comprar una Pala**`)

    let peal = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`** :x: Necesitas <:era_petzmoney1:1017944727271768065> $1,500 Gralats para comprar una Peal**`)

     let goldcoin = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $600 Gralats para comprar una Gold Coin**`)

    let caña = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $2,500 Gralats para comprar una Caña**`)

    let gusanos = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $450 Gralats para comprar Gusanos**`)

    let ammo9 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $1,750 Gralats para comprar Ammo9**`)

     let ammo12 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $3,200 Gralats para comprar Ammo12**`)

    let ammo18 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $5,200 Gralats para comprar Ammo18**`)

    let hacha = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $3,500 Gralats para comprar una Hacha**`)

     let hamburguesa = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $350 Gralats para comprar una Hamburguesa**`)

    let hotdog = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $500 Gralats para comprar un Hot Dog**`)

    let taladro = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $7,100 Gralats para comprar un Taladro**`)

    let drill = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $3,000 Gralats para comprar un Drill**`)

     let uploadcoin1 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $10,000 Gralats para comprar un UploadCoin**`)

     let vip1 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $55,000 Gralats para comprar El Vip**`)

     let palaevent = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $250 Gralats para comprar una Pala**`)

    let Bateria = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`**Necesitas <:era_petzmoney1:1017944727271768065> $3,550 Gralats para comprar 100 De Bateria**`)
    
     
     switch(args[0]) {
        
    case 'energia': 
         
if (money < 1000) return message.channel.send(Embed)
         
         if (vida > 0) return message.channel.send(Embed0)

         

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste <:energia:985182546595827782> **100** Energia por **$1,000** <:era_petzmoney1:1017944727271768065> Gralats`);

       var random1 = Math.floor(100)

        eco.sumar(`${user}.vida`, random1)

         eco.restar(`${user}.efectivo`, 1000)
         
         
        message.channel.send(Embed2)
    break;

         case 'chaleco': 
         
if (money < 1225) return message.channel.send(chaleco)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste <:chaleco:985182587385442365> **125** chaleco por **$1,225** <:era_petzmoney1:1017944727271768065> Gralats`);

       var random2 = Math.floor(125)

        eco.sumar(`${user}.chaleco`, random2)
          eco.restar(`${user}.efectivo`, 1225)

        message.channel.send(Embed3)
    break;

          case 'botiquin': 
         
if (money < 160) return message.channel.send(botiquin)

        let Embed4 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste <a:emoji_8:985182512227680296> **15** Botiquin por **$160** <:era_petzmoney1:1017944727271768065> Gralats`);

       var random3 = Math.floor(15)

        eco.sumar(`${user}.botiquin`, random3)
          eco.restar(`${user}.efectivo`, 160)

        message.channel.send(Embed4)
    break;

         case 'pala': 
         
if (money < 250) return message.channel.send(pala)

        let Embed5 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste <:pala:985536768029909044> **65** Pala por **$250** <:era_petzmoney1:1017944727271768065> Gralats`);

       var random4 = Math.floor(65)

        eco.sumar(`${user}.pala`, random4)
          eco.restar(`${user}.efectivo`, 250)

        message.channel.send(Embed5)
    break;

         case 'peal': 
         
if (money < 1500) return message.channel.send(peal)

        let Embed6 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste <:peal:985536932421468210> **200** Peal por **$1,500** <:era_petzmoney1:1017944727271768065> Gralats`);

       var random5 = Math.floor(200)

        eco.sumar(`${user}.peal`, random5)
          eco.restar(`${user}.efectivo`, 1500)

        message.channel.send(Embed6)
    break;

          case 'goldcoin': 
         
if (money < 600) return message.channel.send(goldcoin)

        let Embed7 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste <a:Goldpacks:985536866071760946> **550** Gold Coin por **$600** <:era_petzmoney1:1017944727271768065> Gralats`);

       var random6 = Math.floor(550)

        eco.sumar(`${user}.coins`, random6)
          eco.restar(`${user}.efectivo`, 600)

        message.channel.send(Embed7)
    break;

          case 'caña': 
         
if (money < 2500) return message.channel.send(caña)

        let Embed8 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste <:caa:976231936051802162> **1,000** Caña por **$2,500** <:era_petzmoney1:1017944727271768065> Gralats`);

       var random7 = Math.floor(1000)

        eco.sumar(`${user}.caña`, random7)
          eco.restar(`${user}.efectivo`, 2500)

        message.channel.send(Embed8)
    break;

         case 'gusanos': 
         
if (money < 450) return message.channel.send(gusanos)

        let Embed9 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste <:bolsagusanos:985536993473748993> **100** Gusanos por **$450** <:era_petzmoney1:1017944727271768065> Gralats`);

       var random8 = Math.floor(100)

        eco.sumar(`${user}.gusanos`, random8)
          eco.restar(`${user}.efectivo`, 450)

        message.channel.send(Embed9)
    break;

          case 'ammo9': 
         
if (money < 500) return message.channel.send(ammo9)

        let Embed10 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste <:emoji_25:992127713102024715> **450** Ammo9 por **$1,750** <:era_petzmoney1:1017944727271768065> Gralats`);

       var random9 = Math.floor(450)

        armas.sumar(`${user}.municion9`, random9)
          eco.restar(`${user}.efectivo`, 500)

        message.channel.send(Embed10)
    break;

          case 'ammo12': 
         
if (money < 1500) return message.channel.send(ammo12)

        let Embed11 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste <:emoji_26:992127754675957870> **800** Ammo12 por **$3,200** <:era_petzmoney1:1017944727271768065> Gralats`);

       var random10 = Math.floor(800)

        armas.sumar(`${user}.municion12`, random10)
          eco.restar(`${user}.efectivo`, 1500)

        message.channel.send(Embed11)
    break;

          case 'ammo18': 
         
if (money < 2000) return message.channel.send(ammo18)

        let Embed12 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste <:emoji_29:992130125426601994> **2200** Ammo18 por **$5,200** <:era_petzmoney1:1017944727271768065> Gralats`);

       var random11 = Math.floor(2200)

        armas.sumar(`${user}.municion18`, random11)
          eco.restar(`${user}.efectivo`, 2000)

        message.channel.send(Embed12)
    break;

         case 'hacha': 
         
if (money < 3500) return message.channel.send(hacha)
         
         

        let Embed13 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste un Hacha <:emoji_30:992839237697294496>  por **$3,500** <:era_petzmoney1:1017944727271768065> Gralats`);

       var random12 = Math.floor(500)

        eco.sumar(`${user}.hacha`, random12)
          eco.restar(`${user}.efectivo`, 3500)

        message.channel.send(Embed13)
    break;

          case 'hamburguesa': 
         
if (money < 350) return message.channel.send(hamburguesa)
         
         

        let Embed14 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste 50 Hamburguesa <:emoji_36:993525561962008628>  por **$350** <:era_petzmoney1:1017944727271768065> Gralats`);

       var random13 = Math.floor(50)

        eco.sumar(`${user}.hamburguesa`, random13)
          eco.restar(`${user}.efectivo`, 350)

        message.channel.send(Embed14)
    break;

         case 'hotdog': 
         
if (money < 500) return message.channel.send(hotdog)
         
         

        let Embed15 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste 55 Hot Dog <:emoji_37:993525586968453190>  por **$500** <:era_petzmoney1:1017944727271768065> Gralats`);

       var random14 = Math.floor(50)

        eco.sumar(`${user}.hotdog`, random14)
          eco.restar(`${user}.efectivo`, 500)

        message.channel.send(Embed15)
    break;

          case 'taladro': 
         
if (money < 7100) return message.channel.send(taladro)
         
         

        let Embed16 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste Un Taladro <:emoji_34:992899513318658128>  por **$7,100** <:era_petzmoney1:1017944727271768065> Gralats`);

       var random15 = Math.floor(1000)

        eco.sumar(`${user}.taladro`, random15)
          eco.restar(`${user}.efectivo`, 7100)

        message.channel.send(Embed16)
    break;

          case 'drill': 
         
if (money < 3000) return message.channel.send(drill)
    

        let Embed17 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste Un Drill <:emoji_38:1001887136649314354>  por **$3,000** <:era_petzmoney1:1017944727271768065> Gralats`);

       let random16 = Math.floor(1000)

        eco.sumar(`${user}.drill`,random16)

        
          eco.restar(`${user}.efectivo`, 3000)

        message.channel.send(Embed17)
    break;

         case 'uploadcoin': 
         
if (money < 10000) return message.channel.send(uploadcoin1)
    

        let Embed18 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste $5,000  <:emoji_47:1004416241181655061> UploadCoin  por **$10,000** <:era_petzmoney1:1017944727271768065> Gralats`);

       let random17 = Math.floor(5000)

        eco.sumar(`${user}.uploadcoin`,random17)

        
          eco.restar(`${user}.efectivo`, 10000)

        message.channel.send(Embed18)
    break;

         
case 'vip': 
         
if (money < 55000) return message.channel.send(vip1)
    

        let Embed19 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste 1 Mes de Vip  <:Nitrovip:985533120671547413>   por **$55,000** <:era_petzmoney1:1017944727271768065> Gralats`);

       let random18 = Math.floor(1)

        eco.sumar(`${user}.vip`,random18)

        
          eco.restar(`${user}.efectivo`, 55000)

        message.channel.send(Embed19)
    break;

         

    case 'bateria': 
         
if (money < 3550) return message.channel.send(Bateria)
    

{
  let telefono = await eco.get(`${user}.telefono`) || 0
    if(telefono > 90)return message.channel.send(`**»** <:emoji_28:992127867938930739> Ya tienes mas de  ${telefono}% Bateria del movil `)
  }

        let Embed21 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Compraste 100 Bateria <:emoji_28:992127867938930739>  por **$3,550** <:era_petzmoney1:1017944727271768065> Gralats`);

        
       let random20 = Math.floor(100)

        eco.sumar(`${user}.telefono`,random20)

        
          eco.restar(`${user}.efectivo`, 3550)

        message.channel.send(Embed21)
    break;
    

  }
 }
}