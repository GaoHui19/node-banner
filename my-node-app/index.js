const express = require('express');
const cors = require('cors');
const app = express();
const bannerRoute = require('./routes/banner');



// Serve static files from the "public" directory
app.use(express.static('public'));

// Use the banner route for /banner endpoint
app.use('/banner', bannerRoute);


// Enable CORS for all origins including null
app.use(cors({
    origin: true,
    credentials: true,
  }));

// Define the port the server will listen on
const PORT = 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log the server start and the URL for the /banner endpoint
  console.log(`Server is running on port ${PORT}`);
  console.log(`Access the /banner endpoint at: http://localhost:${PORT}/banner`);
});
