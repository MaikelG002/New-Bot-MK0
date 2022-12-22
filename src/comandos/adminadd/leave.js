const Comandos = require('../../util/estructuras/Comandos');


module.exports = class leave extends Comandos {
  constructor() {
    super('leave', 'adminadd', [""]);
  }

  run(client, message, args) {

    let permiso = message.member.hasPermission("ADMINISTRATOR");
if(!permiso){
    message.channel.send('No tiene el permiso de Administrador');
} else{
  
if(message.author.id !=='601776622797848579') 
        return message.channel.send(`**»** ${message.author}, No tienes permisos`);
message.guild.leave()
}
  }
}