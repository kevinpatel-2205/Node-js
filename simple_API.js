const express = require('express');
const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Example route to handle GET request
app.get('/', (req, res) => {
    res.send('Welcome to my Node.js API');
});

// Example route to handle POST request
app.post('/data', (req, res) => {
    const receivedData = req.body;
    res.json({
        message: 'Data received successfully!',
        receivedData: receivedData
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});