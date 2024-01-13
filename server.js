//server.js
const express = require('express');
const NASA_OpenAPI = require('./lib/client.js');
const API_KEY = 'your_api_key';
const path = require('path');
const app = express();


const nasa_api = new NASA_OpenAPI(API_KEY);
 
app.get('/', (req, res) => {
    try {
      const indexPath = path.join(__dirname, 'index.html');
      res.sendFile(indexPath);
    } catch (error) {
      console.error('Error sending index.html:', error);
      res.status(500).send('Error sending index.html');
    }
  });

  app.get('/getAPOD', async (req, res) => {
    try {
        const apod = await nasa_api.getAPOD();
        res.json(apod);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: error.message });
    }
});
// Start the server and listen on the defined port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
