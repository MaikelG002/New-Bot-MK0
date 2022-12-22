const Eventos = require('../../util/estructuras/Eventos');
const config = require('../../../config.json')
let prefix = config.prefix

module.exports = class MessageEvent extends Eventos {
  constructor() {
    super('message');
  }
  async run(client, message) {
    if(message.content.startsWith(prefix)) {
      const [cmdName, ...cmdArgs] = message.content
      .slice(prefix.length)
      .trim()
      .split(/\s+/);
      const command = client.commands.get(cmdName);

      
      
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
  }
}

