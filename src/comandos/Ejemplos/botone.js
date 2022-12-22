const Comandos = require('../../util/estructuras/Comandos');


const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");



module.exports = class botone extends Comandos {
  constructor() {
    super('', 'Ejemplos', [""]);
  }

  async run(client, message, args) {

   
	const row = new Discord.MessageActionRow() //Creamos el ActionRow
.setComponents( //Creamos los componentes del ActionRow

  new Discord.MessageButton() //Creamos el boton
  .setLabel('OWO') //Lo que quieran que aparezca en el boton (Opcional)
  .setEmoji('?') //Puede ser cualquier emoji, si le han puesto el label aparecera al lado izquierdo del texto, si no le pusieron el label aparecera en medio del boton
  .setStyle('SUCCESS') //Ponemos el estilo del botï¿½n, los estilos los puedes encontrar en https://discord.com/developers/docs/interactions/message-components#buttons
  .setCustomId('ID') //Le aï¿½adimos una ID que nos servira cuando intentemos darle una funcion a los botones, como editar el mensaje, expulsar a alguien, etc

)

    message.channel.send({ content : 'Hola que tal?', components : [row] })//El componente en este caso seria el boton que lo tenemos definido como row
		
  }
}