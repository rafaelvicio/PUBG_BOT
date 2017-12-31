const http = require( `axios` )
const api_key =  require('../api/api')

const getData = () =>
console.log('123123' + api_key)
http.get('https://api.pubgtracker.com/v2/profile/pc/VissGames', {
    params: {
        region: 'sa',
        season: '2017-pre4'
    },
    headers: {
        'TRN-Api-Key': api_key
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  module.exports = getData