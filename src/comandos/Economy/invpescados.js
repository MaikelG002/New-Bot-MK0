const Comandos = require('../../util/estructuras/Comandos');

const Discord = require('discord.js');
const megadb = require("megadb");
let eco = new megadb.crearDB("economia");


module.exports = class invpescados extends Comandos {
  constructor() {
    super('invpescados', 'Economy', ["invpez"]);
  }

async run(client, message, args){
  
    let server = message.guild.id
    let user = message.author.id
    let usuario = message.author.tag

  const caña = await eco.get(`${user}.caña`);

  const gusanos = await eco.get(`${user}.gusanos`);

  
  const pescado1 = await eco.get(`${user}.pescado1`);

    const pescado2 = await eco.get(`${user}.pescado2`);  

    const pescado3 = await eco.obtener(`${user}.pescado3`);

  const pescado4 = await eco.obtener(`${user}.pescado4`);



    if(isNaN(args[0])){
        let solonumeros = new Discord.MessageEmbed()
          
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
        .setTitle("Inventario Pescados")

          .addField("<:caa:976231936051802162> Caña: ",+ caña)

          .addField("<:gusano:976232014195875850> Gusanos: ",+ gusanos)
          
          .addField("<:fishbass:976231075510632538> FishBass: 100+", + pescado1)

        .addField("<:fishred:976231751535964190> FishRed: 250+",+ pescado2)
        .addField("<:fishperch:976231833597534278> FishPerch: 500+",+ pescado3)

             .addField("<:fishtuna:976231798885466223> FishTuna: 850+",+ pescado4)
        .setColor("#00ff00")

          
        .setThumbnail("https://media.discordapp.net/attachments/866310329255854100/976278987368177704/era_fishrack1.png")
        .setFooter(" Para vender pescados !sell(Nombre) (Nombre) sin esto () ")
      
        return message.channel.send(solonumeros)
    }
  }
}