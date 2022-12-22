const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class ejem extends Comandos {
  constructor() {
    super('', 'Ejemplos', [""]);
  }

  async run(client, message, args) {

   
		
  }
}
