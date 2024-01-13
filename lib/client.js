const axios = require('axios');

module.exports = class NASA_OpenAPI {
  constructor(apiKey) {
    this.baseURL_APOD = 'https://api.nasa.gov/planetary/apod' ;
    this.baseURL_MarsPhotos = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
    this.baseURL = 'https://api.nasa.gov/';
    this.apiKey = apiKey;
  }
  
  async getAPOD() {
    try {
       const response = await axios.get(`${this.baseURL_APOD}?api_key=${this.apiKey}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch APOD: ${error.message}`);
    }
  }
    
  async getAnything() {
    try {
       const response = await axios.get(`${this.baseURL}planetary/apod?api_key=${this.apiKey}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch anything: ${error.message}`);
    }
  }
  async getRover(roverName) {
    try {
      let url;
      if(roverName === ''){
        url = `${this.baseURL_MarsPhotos}?api_key=${this.apiKey}`;
      }
      else{
        url = `${this.baseURL_MarsPhotos}${roverName}?api_key=${this.apiKey}`;
      }
      
      const response = await axios.get(url);
       return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch Rover: ${error.message}`);
    
  }
}}

