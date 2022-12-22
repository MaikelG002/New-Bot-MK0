const Comandos = require('../../util/estructuras/Comandos');



module.exports = class Ping extends Comandos {
  constructor() {
    super('ping', 'Ejemplos', [""]);
  }

  run(client, message, args) {

    

    message.channel.send(`Pong!`).then((sentMessage)=> sentMessage.edit("Boop!"))
		
  }
}
    


    
