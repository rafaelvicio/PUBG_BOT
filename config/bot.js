const TelegramBot = require( `node-telegram-bot-api` )

const token_bot = `409989466:AAEyckzm00KmUIripwMA08yKOkC61co7yLA`

const bot = new TelegramBot( token_bot, { polling: true } )

module.exports = bot
