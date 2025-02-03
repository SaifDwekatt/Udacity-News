require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const API_KEY = "sOpJQM0MBhbd55x71uwyLmzWqAyf1SE8"; 

app.post('/analyze', async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: "Text input is required" });
    }

    try {
        const myHeaders = new Headers();
        myHeaders.append("apikey", API_KEY);

        const requestOptions = {
            method: "POST",
            redirect: "follow",
            headers: myHeaders,
            body: text
        };

        const response = await fetch("https://api.apilayer.com/sentiment/analysis", requestOptions);
        const data = await response.json();

        res.json({
            polarity: data.sentiment,  
            confidence: data.confidence 
        });

    } catch (error) {
        console.error("API Fetch Error:", error);
        res.status(500).json({ error: "Failed to fetch data from APILayer API" });
    }
});

app.listen(3000, () => console.log('🚀 Server running on port 3000'));
