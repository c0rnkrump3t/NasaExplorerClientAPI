# NASAExplorerJS - A Simple NASA API Wrapper in JavaScript

Welcome to NASAExplorerJS! 
This is a beginner-friendly, expandable JavaScript wrapper for NASA's APIs. It offers a straightforward way to access fascinating astronomical data, including the Astronomy Picture of the Day and Mars Rover Photos. This project serves as a starting point and can be easily extended to include more of NASA's diverse endpoints for a broader range of space data. Built using Node.js and Express.js (optional), it provides a solid foundation for both educational purposes and more advanced space-related applications.

## Features
- **Astronomy Picture of the Day (APOD)**: Fetch the latest or specific date's astronomy picture along with its description.
- **Mars Rover Photos**: Access photos taken by NASA's Mars rovers.
- **General NASA Data Fetching**: Retrieve a variety of space-related data.

## Getting Started

### Prerequisites
- Node.js
- Express.js
- A valid NASA API key (Get one from [NASA API](https://api.nasa.gov/))

### Installation
1. Clone the repository:
   ```bash
	https://github.com/c0rnkrump3t/NASAExplorerJS.git
   ```
2. Navigate to the NASAExplorerJS directory and install dependencies:
   ```bash
   cd NASAExplorerJS
   npm install
   ```
3. Optional - Express Server: If you want to use the included Express server: 
    ```bash 
    npm install express
    node server.js 
    ```
After running the server, you can access the NASA Image of the Day feature at `http://localhost:3000`.
### Example Usage
```javascript
const NASAExplorerJS = require('./lib/client.js');
const api_key = 'your_nasa_api_key_here';
const nasaAPI = new NASAExplorerJS(api_key);

// Get Astronomy Picture of the Day
nasaAPI.getAPOD().then(data => console.log(data));

// Get Mars Rover Photos
nasaAPI.getRover('Curiosity').then(data => console.log(data));

// Get general NASA data
nasaAPI.getAnything().then(data => console.log(data));

```

### Running the Server
```bash
node server.js
```
Visit `http://localhost:3000` in your browser to view the NASA Image of the Day.

## Contributing
Contributions are welcome! Please feel free to submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE.md).

## Acknowledgments
- Thanks to NASA for providing the open API and the opportunity to explore space data.

---
