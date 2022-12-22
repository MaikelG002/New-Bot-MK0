const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class sorteo extends Comandos {
  constructor() {
    super('sorteo', '', [""]);
  }

  run(client, message, args) {

    message.channel.send("Reacciona aca para participar en el sorteo Vip ").then(msg => { // Enviamos el mensaje al cual se alojara el sorteo.

msg.react("<:emoji_11:985182624551153675> ") // Reaccionamos con el emoji para comenzar con el sorteo.

const filter = (reaction, user) => reaction.emoji.name == '<:emoji_11:985182624551153675> ' && user.id !== client.user.id; // Creamos un filtro que impone que el emoji sea en este caso el corazon verde y en el mismo filtro impedimos que la reacción del bot se una al colector.

const collector = msg.createReactionCollector(filter, {time: 5 * 1000}); // Integramos el filtro al crear el colector y colocamos un tiempo de 20 segundos para la realizacion del sorteo.

var array = ["601776622797848579", "724067337216589854", "773176357763940362"] // Creamos un array con los participantes

collector.on("collect", r => {
array.push(r.users.cache.last().id); // Aca vamos pusheando el ultimo usuario que entro al sorteo, es decir el ultimo que va reaccionando.

message.channel.send("Muy bien. El usuario "+r.users.cache.last().username+" se ha unido al sorteo.") // Enviamos un mensaje para verificar, opcionalmente.
})

collector.on("end", () => {

const winner = array[Math.floor(Math.random() * array.length)] // Obtenemos un ganador aleatoriamente del array de los participantes.

message.channel.send("Ganador <@"+winner+">") // Y finalmente enviamos el mensaje anunciando al ganador de el.

})

})
		
  }
}