const express = require('express');
require('dotenv').config();
const {mongoConnection} = require('./starter/db');
const roulett = require('./routes/roulettData');
const app = express();

app.use(express.json());
app.use('/api/roulettData', roulett);

mongoConnection();

app.get('/', (req,res) => {
    res.send("Hello world");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Sever running on Port: ${PORT}`)});