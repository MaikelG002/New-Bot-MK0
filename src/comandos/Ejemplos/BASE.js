const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class BASE extends Comandos {
  constructor() {
    super('', '', [""]);
  }

  run(client, message, args) {

    
		
  }
}