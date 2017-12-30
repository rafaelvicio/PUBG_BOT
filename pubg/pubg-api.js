const {PubgAPI, PubgAPIErrors, REGION, SEASON, MATCH} = require('pubg-api-redis');
const API_KEY = require('../config/api')

// If no Redis configuration it wont be cached
const api = new PubgAPI({
  apikey: API_KEY,
  redisConfig: {
    host: '127.0.0.1',
    port: 6379,
    expiration: 300, // Optional - defaults to 300.
  },
});

api.getProfileByNickname('VICIO_DEV')
  .then((profile) => {
    const data = profile.content;
    const stats = profile.getStats({
      region: REGION.ALL, // defaults to profile.content.selectedRegion
      season: SEASON.EA2017pre3, // defaults to profile.content.defaultSeason
      match: MATCH.SOLO // defaults to SOLO
    });
    console.log(stats);
  });

api.getAccountBySteamID('76561198084956266')
  .then((account) => {
    console.log(account);
  });

