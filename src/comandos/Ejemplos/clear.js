const Comandos = require('../../util/estructuras/Comandos');


module.exports = class clear extends Comandos {
  constructor() {
    super('clear', 'Ejemplos', ["borrar"]);
  }


  
  async run(client, message, args, discord) {
   
  let permiso = message.member.hasPermission("ADMINISTRATOR");
if(!permiso){
    message.channel.send('No tiene el permiso de Administrador');
} else{
    

    
    if (!args[0]) return message.reply("Ingresa numero de mensajes a borrar");
    if (isNaN(args[0])) return message.reply("Ingresa un numero");
    if (args[0] > 100) return message.reply("Debe ser un numero menor a 100");
    if (args[0] < 1) return message.reply("Debe ser un numero mayor a 0");

  await message.channel.messages
  .fetch({ limit: args[0] })
  .then((messages) => {
     message.channel.bulkDelete(messages);
    });
  }
 }
}