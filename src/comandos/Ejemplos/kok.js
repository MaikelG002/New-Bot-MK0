const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class kok extends Comandos {
  constructor() {
    super('', 'Ejemplos', [""]);
  }

  run(client, message, args) {

    
  }
}