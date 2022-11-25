const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');


app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/', (req, res) => {
    res.send("News today running")
});

app.listen(port, () => {
    console.log("News today listening", port);
});