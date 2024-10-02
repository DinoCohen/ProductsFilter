const express = require('express');
const app = express();  
const data = require('./data.json');
const cors = require('cors');

require('dotenv').config({ path: './app.config' });
const PORT = process.env.PORT;
const API_URL = process.env.API_URL;


app.use(cors());

app.get(API_URL, (req, res) => {
    console.log(`trying to get data, ${data[0].name}`);
    
    res.send(data);
});

app.listen(PORT, () => {
    try {
        console.log(`Server running on port ${PORT}`);
    
} catch (error) {
    console.log(`Couldn't listen on port ${PORT} error: ${error}`);
}
});