const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");
let loteria1 = new megadb.crearDB("loteria");


module.exports = class sorteolotery extends Comandos {
  constructor() {
    super('loterysorteo', 'Ejemplos', [""]);
  }

 async run(client, message, args) {

    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

    let lotery = "601776622797848579"

    let MaikelG = await eco.get(`${lotery}.loteria1`)

    if(message.author.id !=='601776622797848579') 
    return message.channel.send(`**»** ${message.author}, No tienes permisos`)

    message.channel.send("Todas las personas que dieron algun monto Estan participando automaticamente").then(msg => { // Enviamos el mensaje al cual se alojara el sorteo.

        
msg.react("<:era_petzmoney1:1017944727271768065>") // Reaccionamos con el emoji para comenzar con el sorteo.

const filter = (reaction, user) => reaction.emoji.name == '<:era_petzmoney1:1017944727271768065>' && user.id !== client.user.id; // Creamos un filtro que impone que el emoji sea en este caso el corazon verde y en el mismo filtro impedimos que la reacción del bot se una al colector.

const collector = msg.createReactionCollector(filter, {time: 5 * 1000}); // Integramos el filtro al crear el colector y colocamos un tiempo de 20 segundos para la realizacion del sorteo.



collector.on("collect", r => {
ki.push(r.user.cache.last().id); // Aca vamos pusheando el ultimo usuario que entro al sorteo, es decir el ultimo que va reaccionando.

message.channel.send("Muy bien. El usuario "+r.users.cache.last().username+" se ha unido al sorteo.") // Enviamos un mensaje para verificar, opcionalmente.

})

var array = ["601776622797848579", "724067337216589854"]

const winner = array[Math.floor(Math.random() * array.length)]


let ganadol = winner
 

eco.sumar(`${ganadol}.efectivo`, MaikelG)
eco.restar(`${lotery}.loteria1`, MaikelG)

collector.on("end", () => {

    

 // Obtenemos un ganador aleatoriamente del array de los participantes.

 message.channel.send("<@"+winner+"> A ganado <:era_petzmoney1:1017944727271768065> "+MaikelG+" Gralats ") // Y finalmente enviamos el mensaje anunciando al ganador de el.

 
})




})

let status = loteria1.purgeall()
console.log(status)
		
  }
}