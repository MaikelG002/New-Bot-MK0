const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class shop2 extends Comandos {
  constructor() {
    super('shop2', 'Economy', ["tienda2"]);
  }

async run(client, message, args){
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Tienda 2")
        .setDescription(`
13- <:emoji_30:992839237697294496> __Hacha:__ $3,500 
Contiene 500
14- <:emoji_34:992899513318658128> __Taladro:__ $7,100
Contiene 1,000
15- <:emoji_36:993525561962008628> __Hamburguesa:__ $350
Contiene 50
16- <:emoji_37:993525586968453190> __HotDog:__ $500
Contiene 55
17- <:emoji_38:1001887136649314354> __Drill:__ $3,000
Contiene 1,000
18- <:emoji_47:1004416241181655061> __UploadCoin:__ $10,000 
Contiene 5,000
19- <:Nitrovip:985533120671547413> __Vip:__ $55,000 
Contiene 1 Mes
Contiene 1 Pala, Se acumulan
20- <:emoji_28:992127867938930739> __Bateria Movil:__ $3,550 
Contiene 100 Bateria`) 
        .setColor("BLUE")
        .setFooter("Para comprar algo> !comprar (Nombre del item en minuscula) sin esto ()")
        .setThumbnail("https://images-ext-2.discordapp.net/external/U1wOKv9bFwMOnr0qoFtl-viEDCZoqci3dBoXWB8RKt8/https/media.discordapp.net/attachments/878403482338598982/925065473127747625/era_rima-dollshop-house.png")
        return message.channel.send(solonumeros)
    }
  }
  }