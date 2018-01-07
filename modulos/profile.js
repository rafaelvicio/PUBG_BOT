const axios = require( `axios` )
const bot = require('../config/bot')
const api = require('../api/api')
const api_key = `fbe542e3-9995-49a1-a2aa-8feb428cc4e7`
const url = 'https://api.pubgtracker.com/v2/profile/pc/'

const sendStatus = ( msg, match ) =>
axios.get(url + match[1], {
    params: {
        region: 'sa',
        season: '2018-01',
    },
    headers: {
        'TRN-Api-Key': api_key
    }
  })
  .then(function (response) {
      if(response.data.code){
        bot.sendMessage( msg.chat.id, response.data.error + ` Code error: ` + response.data.code)
        .then(
            console.log(`>>>>> ` + response.data.error + `>>>>> ` + response.data.code)
        )
        .catch()
      } else {
        console.log(response.data)
        bot.sendMessage( msg.chat.id, "O jogador " + response.data.nickname + ` possui os seguintes status \n`
                        + `\n`
                        + `[SA - Solo]: \n`
                        + `K/D Ratio: ` + response.data.stats[0].stats[0].value + `\n`
                        + `Win %: ` + response.data.stats[0].stats[1].value + `\n`
                        + `Time Survived: ` + response.data.stats[0].stats[2].value + `\n`
                        + `Rounds Played: ` + response.data.stats[0].stats[3].value + `\n`
                        + `Wins: ` + response.data.stats[0].stats[4].value + `\n`
                        + `Win Top 10 Ratio: ` + response.data.stats[0].stats[5].value + `\n`+ '%'
                        + `Top 10s: ` + response.data.stats[0].stats[6].value + `\n`
                    )
        .then()
        .catch()
      }
    
  })
  .catch(function (error) {
      console.log(error)
    bot.sendMessage( msg.chat.id, "API indisponivel ")
        .then()
        .catch()
  });

module.exports = sendStatus
