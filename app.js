
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // You can change this to any port you prefer

// Serve the static HTML file
app.get('/', (req, res) => {
 
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


