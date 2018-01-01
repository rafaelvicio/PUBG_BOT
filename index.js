const bot = require('./config/bot')

const start = require('./modulos/start')

bot.onText( /\/start (.*)/, start)
