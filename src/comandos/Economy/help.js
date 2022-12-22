const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");

module.exports = class help extends Comandos {
  constructor() {
    super('ayuda', 'Economy', ["help"]);
  }

async run(client, message, args){ 
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("```Guia de Comandos```")
        .setDescription(`
__**Comandos para conseguir Dinero Trabajos**__
**!work**: Sirve para Trabajar
**!crime**: Sirve para Trabajar crime
**!daily**: Sirve para reclamar $ diario
**!pescar**: Sireve para pescar
**!pizza**: Sirve para trabajar de pizzero
**!rob**: Sirve para Robar a otro jugador
**!talar**: Trabajo conseguiras troncos
**!taladrar**: Trabajo conseguiras block
**!vender(item)**: Sirve para vender, items
--------------------------------------------

__**Comandos Perfil De usuario**__
**!bal**: Sirve para ver tu balance
**!inv**: Sirve para ver tu inventario !inv2
**!balver**: Puedes ver el bal de otros user
**!verinv**: Puedes ver el inv de otros user
**!invarmas**: Puedes ver tu inv de armas
**!caja**: Abrir una caja con objetos
--------------------------------------------

__**Comandos De interaccion**__
**!dep**:  Sirve para  guardar dinero
**!sacar**:  Sirve para sacar dinero
**!pay**: Sirve para pagar Gold Coin en Subasta
**!sacarall**: Sirve para sacar todo del banco
**!depall**: Sirve para depositar todo 
**!regalarefectivo**: Regalar dinero de tu efectivo
**!tradear(item)**: Sirve para tradear con otra persona
**!usar(item)**: Sirve para usar un item ejemplo hamburguesa
**!comprar(item)**: Sirve para comprar algun item
--------------------------------------------

__**Otros Comandos**__
**!shop**:  Sirve para ver la tienda
**!info(arma)**: Sirve para saber informacion de un arma
**!gunshop(Numero)**: Es la tienda de armas
**!ex**: Sirve para reclamar recompensas de experiencia
**!updatelotery**: Te aparecera la cantidad que puedes ganar
**!loteria(Monto)**: Sirve para dar un monto a la loteria
**!play**: Sirve para jugar y ganar coins con tu Movil
**!invitarbot**: Sirve para invitar el bot a tu servidor
--------------------------------------------
`) 
        .setColor("RED")
        .setFooter("Para cualquier ayuda contacte con el Owner Maikel G#5258")
        .setThumbnail("https://i.imgur.com/eDzT09J.png")

      
        return message.channel.send(solonumeros)
    }
  }
}