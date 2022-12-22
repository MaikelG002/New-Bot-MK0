const Eventos = require('../../util/estructuras/Eventos');

module.exports = class Ready extends Eventos {
  constructor() {
    super('ready');
  }
  async run (client) {
  console.log(client.user.tag + ' ' + 'Conectado en Discord!')
   
  }
  
}

