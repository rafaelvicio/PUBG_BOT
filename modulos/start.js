const axios = require( `axios` )
const bot = require('../config/bot')
const api = require('../api/api')
const api_key = `fbe542e3-9995-49a1-a2aa-8feb428cc4e7`
const url = 'https://api.pubgtracker.com/v2/profile/pc/'

const sendSolo = ( msg, match ) =>
axios.get(url + match[1], {
    params: {
        region: 'na',
        season: '2017-pre4',
    },
    headers: {
        'TRN-Api-Key': api_key
    }
  })
  .then(function (response) {
    bot.sendMessage( msg.chat.id, "O jogador " + response.data.nickname)
        .then()
        .catch()
  })
  .catch(function (error) {
    bot.sendMessage( msg.chat.id, "API indisponivel ")
        .then()
        .catch()
  });

module.exports = sendSolo
