const Comandos = require('../../util/estructuras/Comandos');

module.exports = class estado extends Comandos {
  constructor() {
    super('estado', 'Ejemplos', ["estado"]);
  }

 run(client, message, args){

if(message.author.id=== '601776622797848579' ){

  var estadoperso = message.content.split(' ').slice(1).join(' ');
  if(!estadoperso){
    message.reply('Debes escribir a que quieres que me ponga')
    return
  }else{
    client.user.setActivity({name:estadoperso, type:0})
    message.reply("Estado cambiado con exito")
    return
  }
}

  return message.reply("Lociento no puedes usar este comando")


  }

}