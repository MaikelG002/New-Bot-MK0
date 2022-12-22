const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class ik extends Comandos {
  constructor() {
    super('ik', 'Ejemplos', [""]);
  }

  run(client, message, args) {
    
    
    var items = [
{name:'hola'},
{name:'sword'},
{name:'knife'},
{name:'espada'},
{name:'tiro'},
{name:'pistol'}];
console.log('Disorganized:', items);

var inventoryMap = new Map();

items.forEach(function(item, index, array) {
  var itemArray = inventoryMap.get(item.name);
  if (itemArray) {
    itemArray.push(item);
  } else {
    inventoryMap.set(item.name, [item]);
  }
});

console.log('Sorted:');

inventoryMap.forEach( function(value, key) {
  console.log(key, '('+value.length+')');
});
		
  }
}