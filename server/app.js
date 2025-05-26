require('dotenv').config();
const path = require('path');
const express = require('express');
// const favicon = require('serve-favicon');

const router = require('./router.js');

const app = express();

const protocol = process.env.HTTPS ? 'https' : 'http';
const url = process.env.URL || 'localhost';
const port = process.env.PORT || process.env.NODE_PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/100k', (req, res) => {
    res.send("Couriway 100k bingo board");
});

app.listen(port, () => {
    console.log(`App listening at ${protocol}://${url}:${port}`)
})
