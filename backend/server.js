// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { makePrediction } = require('./model/predictionModel');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Prediction route
app.post('/predict', async (req, res) =>
{
    try {
        const inputData = req.body;
        const prediction = await makePrediction(inputData);
        res.json({ success: true, prediction });
    } catch (error) {
        console.error('Error making prediction:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Start the server
app.listen(port, () =>
{
    console.log(`Server running on port ${port}`);
});
