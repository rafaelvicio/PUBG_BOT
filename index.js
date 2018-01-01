const bot = require('./config/bot')

const status = require('./modulos/status')

bot.onText( /\/status (.*)/, status)
