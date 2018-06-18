const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

const googleApiKey = 'AIzaSyCPpazaJmq1Xa_5cja7f4gVDpDfWpxu0VM';
const darkskyApiKey = '70124b09d218ce82a3c563556d939786';
const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${googleApiKey}`;

axios.get(geocodeUrl)
  .then(({ data }) => {
    if (data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address.');
    }

    const lat = data.results[0].geometry.location.lat;
    const lng = data.results[0].geometry.location.lng;
    const weatherUrl = `https://api.darksky.net/forecast/${darkskyApiKey}/${lat},${lng}`;
    console.log(data.results[0].formatted_address);
    return axios.get(weatherUrl);
  })
  .then(({ data }) => {
    const temperature = data.currently.temperature;
    const apparentTemperature = data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It's feels like ${apparentTemperature}.`);
  })
  .catch(e => {
    if (e.code === 'ENOTFOUND') {
      console.log('Unable to connect to API servers.');
    } else {
      console.log(e.message);
    }
  });
