const request = require('request');

const darkskyApiKey = '70124b09d218ce82a3c563556d939786';

const getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${darkskyApiKey}/${lat},${lng}`, //?UNITS=si
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.');
    }
  })
}

module.exports.getWeather = getWeather;
