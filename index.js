const bot = require('./config/bot')

const profile = require('./modulos/profile')
const matches = require('./modulos/matches')

bot.onText( /\/profile (.*)/, profile)
bot.onText( /\/matches (.*)/, matches)
