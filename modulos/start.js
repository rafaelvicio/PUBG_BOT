const bot = require('../config/bot')
const getDados = require('../api/api')

const sendStart = ( msg, match ) =>
    bot.sendMessage( msg.chat.id, "Energizado e pronto para servir. \n" +
                      "Eu fui criado para servi a você, basta enviar o comando certo. \n" +
                      "Para conhecer os meus comandos digite /comandos")
      .then( console.log(match) )
      .catch((err) => console.log(err))

  module.exports = sendStart
