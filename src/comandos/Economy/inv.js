const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
let armas = new megadb.crearDB("armas");



module.exports = class inv extends Comandos {
  constructor() {
    super('inv', 'Economy', ["inventario"]);
  }

async run(client, message, args){

 

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

   


  ///////// constante nombramiento/////

  let vida = await eco.get(`${user}.vida`)
  
  let chaleco = await eco.get(`${user}.chaleco`)
  
  let coins = await eco.get(`${user}.coins`)
  
  let caja = await eco.get(`${user}.caja`)

  let eventcoin = await eco.get(`${user}.eventcoin`)

  let exoticoin = await eco.get(`${user}.exoticoin`)

  let vip = await eco.get(`${user}.vip`)

  let pala = await eco.get(`${user}.pala`)

  let caña = await eco.get(`${user}.caña`)

  let peal = await eco.get(`${user}.peal`)

  let gusano = await eco.get(`${user}.gusanos`)
  
  let ex = await eco.get(`${user}.ex`)

  let municion9 = await armas.get(`${user}.municion9`)

  let municion12 = await armas.get(`${user}.municion12`)

  let municion18 = await armas.get(`${user}.municion18`)

  let hacha = await eco.get(`${user}.hacha`)

   let tronco = await eco.get(`${user}.tronco`)

  let reparacionhacha = await eco.get(`${user}.reparacionhacha`)

   let taladro = await eco.get(`${user}.taladro`)

   let construccion1 = await eco.get(`${user}.construccion1`)

   let construccion2 = await eco.get(`${user}.construccion2`)

  let hamburguesa = await eco.get(`${user}.hamburguesa`)

  let hotdog = await eco.get(`${user}.hotdog`)

  let drill = await eco.get(`${user}.drill`)

   let uploadcoin = await eco.get(`${user}.uploadcoin`)

  let minerales = await eco.get(`${user}.minerales`)

   let ticketsvip = await eco.get(`${user}.ticketsvip`)

  let multicolorcoin = await eco.get(`${user}.multicolorcoin`)

  



  let gamecoin = await eco.get(`${user}.coingame`)
  


  

  let Description;

  if(vida > 0) {
    Description = `<:energia:985182546595827782> **Vida** x` + vida
  }
  
  if(chaleco > 0) {
    if(Description) {
      Description = Description+"\n"+`<:chaleco:985182587385442365> **Chaleco** x` + chaleco
    } else {
      Description = `<:chaleco:985182587385442365> **Chaleco** x` + chaleco
    }
  }
  
  if(coins > 0) {
    if(Description) {
      Description = Description+"\n"+`<a:Goldpacks:985536866071760946> **GoldCoin** x` + coins
    } else {
      Description = `<a:Goldpacks:985536866071760946> **GoldCoin** x` + coins
    }
  }
  
  if(caja > 0) {
    if(Description) {
      Description = Description+"\n"+`<:caja:985182290516779068> **Caja** x` + caja
    } else {
      Description = `<:caja:985182290516779068> **Caja** x` + caja
    }
  }
  
  if(eventcoin > 0) {
    if(Description) {
      Description = Description+"\n"+`<:eventcoin:987007503596417065> **Event Coin** x` + eventcoin
    } else {
      Description = `<:eventcoin:987007503596417065> **Event Coin** x` + eventcoin
    }
  }

  if(exoticoin > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_52:1015439359736025118>  **Exotic Coin** x` + exoticoin
    } else {
      Description = `<:emoji_52:1015439359736025118>  **Exotic Coin** x` + exoticoin
    }
  }

   if(reparacionhacha > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_32:992881598502535168> **Lic. Reparacion Hacha** x` + reparacionhacha
    } else {
      Description = `<:emoji_32:992881598502535168> **Lic. Reparacion Hacha** x` + reparacionhacha
    }
  }
  
  if(vip > 0) {
    if(Description) {
      Description = Description+"\n"+`<:Nitrovip:985533120671547413> **Vip**`
    } else {
      Description = `<:Nitrovip:985533120671547413> **Vip**` 
    }
  }
  
  if(pala > 0) {
    if(Description) {
      Description = Description+"\n"+`<:pala:985536768029909044> **Pala** x` + pala
    } else {
      Description = `<:pala:985536768029909044> **Pala** x` + pala
    }
  }
  
  if(caña > 0) {
    if(Description) {
      Description = Description+"\n"+`<:caa:976231936051802162> **Caña** x` + caña
    } else {
      Description = `<:caa:976231936051802162> **Caña** x` + caña
    }
  }
  
  if(peal > 0) {
    if(Description) {
      Description = Description+"\n"+`<:peal:985536932421468210> **Peal** x` + peal
    } else {
      Description = `<:peal:985536932421468210> **Peal** x` + peal
    }
  }
  
  if(gusano > 0) {
    if(Description) {
      Description = Description+"\n"+`<:bolsagusanos:985536993473748993> **Gusano** x` + gusano
    } else {
      Description = `<:bolsagusanos:985536993473748993> **Gusano** x` + gusano
    }
  }
  
  if(ex > 0) {
    if(Description) {
      Description = Description+"\n"+`<:EX:987128715106459649> **Exp.** x` + ex
    } else {
      Description = `<:EX:987128715106459649> **Exp.** x` + ex
    }
  }
  
  if(municion9 > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_25:992127713102024715> **Ammo9.** x` + municion9
    } else {
      Description = `<:emoji_25:992127713102024715> **Ammo9.** x` + municion9
    }
  }
  
  if(municion12 > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_26:992127754675957870> **Ammo12.** x` + municion12
    } else {
      Description = `<:emoji_26:992127754675957870> **Ammo12.** x` + municion12
    }
  }
  
  if(municion18 > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_29:992130125426601994> **Ammo18.** x` + municion18
    } else {
      Description = `<:emoji_29:992130125426601994> **Ammo18.** x` + municion18
    }
  }

   if(hacha > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_30:992839237697294496> **Hacha**`} else {
      Description = `<:emoji_30:992839237697294496> **Hacha**`}
  }

  if(tronco > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_31:992839401619066910> **Tronco** x` + tronco
    } else {
      Description = `<:emoji_31:992839401619066910> **Tronco** x` + tronco
    }
  }

  if(construccion1 > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_35:992899536446038166> **Casco de Construccion**`} else {
      Description = `<:emoji_35:992899536446038166> **Casco de Construccion**`}
  }

  if(taladro > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_34:992899513318658128> **Taladro**`} else {
      Description = `<:emoji_34:992899513318658128> **Taladro**`}
  }

   if(construccion2 > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_33:992899412055564469> **Block** x` + construccion2
    } else {
      Description = `<:emoji_33:992899412055564469> **Block** x` + construccion2
    }
  }

  if(hamburguesa > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_36:993525561962008628> **Hamburguesa** x` + hamburguesa
    } else {
      Description = `<:emoji_36:993525561962008628> **Hamburguesa** x` + hamburguesa
    }
  }

   if(hotdog > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_37:993525586968453190> **Hot Dog** x` + hotdog
    } else {
      Description = `<:emoji_37:993525586968453190> **Hot Dog** x` + hotdog
    }
  }

  if(drill > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_38:1001887136649314354> **Drill**`
    } else {
      Description = `<:emoji_38:1001887136649314354>**Drill**`
    }
  }

  if(uploadcoin > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_47:1004416241181655061> **UploadCoin** x` + uploadcoin
    } else {
      Description = `<:emoji_47:1004416241181655061> **UploadCoin** x` + uploadcoin
    }
  }

   if(minerales > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_39:1001887184502128650> **Minerales** x` + minerales
    } else {
      Description = `<<:emoji_39:1001887184502128650> **Minerales** x` + minerales
    }
  }

   if(ticketsvip > 0) {
    if(Description) {
      Description = Description+"\n"+`<a:tickets1:1005869594508009532> **TicketsVip** x` + ticketsvip
    } else {
      Description = `<a:tickets1:1005869594508009532> **TicketsVip** x` + ticketsvip
    }
  }

   if(multicolorcoin > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_49:1008052528207904808> **MulticolorCoin** x` + multicolorcoin
    } else {
      Description = `<:emoji_49:1008052528207904808> **MulticolorCoin** x` + multicolorcoin
    }
  }


  if(gamecoin > 0) {
    if(Description) {
      Description = Description+"\n"+`<:emoji_53:1016881594298023946> **Game Coin** x` + gamecoin
    } else {
      Description = `<:emoji_53:1016881594298023946> **Game Coin** x` + gamecoin
    }
  }


  

   
  
  if(!Description) {
    Description = "NADA"
  }

  
  ///////////////invent//////////

    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Inventario:")
/////////Se coloca el item para que se vea////

        

         .setDescription(Description)

          

        
          
        .setColor("RED")
        .setThumbnail("https://i.imgur.com/lgm8IcZ.png")
        .setFooter("Comando By MaikelG")

      
      
      
        return message.channel.send(solonumeros)

     
    }
  }
}