const Comandos = require('../../util/estructuras/Comandos');

module.exports = class say extends Comandos {
  constructor() {
    super('say', 'Ejemplos', ["decir"]);
  }

  run(client, message, args){



 let texto = args.slice(0).join(" ")
 if(!texto){
   return message.channel.send("Debes escribir lo que quieres que envie")
 }

 message.channel.send(texto)

  }
}
