//app.js
const NASA_OpenAPI = require('./lib/client.js');
const API_KEY = 'your_api_key';
const nasa_api = new NASA_OpenAPI(API_KEY);

(async () => {
    try {
      const dataAPOD = await nasa_api.getAPOD();
      console.log('Data on APOD', dataAPOD);

      const DataRover = await nasa_api.getRover('');
      console.log('Data on Rover', DataRover);

      const getAnything = await nasa_api.getAnything();
      console.log('Data on Anything', getAnything);
  
    } catch (error) {
      console.error('Error:', error.message);
    }
  })();