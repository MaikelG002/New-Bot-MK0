const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

const discord = require('discord.js'); //Define the discord.js module
const client = new discord.Client(); //Creating discord.js client (constructor)
const disbut = require('discord-buttons');
disbut(client);

module.exports = class shop extends Comandos {
  constructor() {
    super('shop', 'Economy', ["tienda"]);
  }

async run(client, message, args){


  
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Tienda")
        .setDescription(`
1- <:energia:985182546595827782> __Energía:__ 1,000$ | 
Contiene 100
2- <:chaleco:985182587385442365> __Chalecos:__ 1,225$ | 
Contiene 125
3- <a:emoji_8:985182512227680296> __Botiquin:__ 160$ | 
Contiene 15
4- <:pala:985536768029909044>__Pala:__ 250$ | 
Contiene 65
5- <:peal:985536932421468210> __Peal:__ 1,500$ | 
Contiene 200 
6- <a:Goldpacks:985536866071760946> __Gold Coin:__ $600 | 
Contiene 550
7- <:emoji_11:985182624551153675> __Premios:__ 
8- <:caa:976231936051802162>__caña:__ $2500 | 
Contiene 1000
9- <:bolsagusanos:985536993473748993>__gusanos:__ $450 | 
Contiene 100
10- <:emoji_25:992127713102024715> __Ammo9:__ $500 | 
contiene 450
11- <:emoji_26:992127754675957870> __Ammo12:__ $1500 | 
Contiene 800
12- <:emoji_29:992130125426601994> __Ammo18:__ $200 | 
Contiene 2200
`) 
        .setColor("BLUE")
        .setFooter("Para comprar algo> !comprar (Nombre del item en minuscula) sin esto ()")
        .setThumbnail("https://images-ext-2.discordapp.net/external/U1wOKv9bFwMOnr0qoFtl-viEDCZoqci3dBoXWB8RKt8/https/media.discordapp.net/attachments/878403482338598982/925065473127747625/era_rima-dollshop-house.png")
 
        return message.channel.send(solonumeros)
    }

  
  }
}