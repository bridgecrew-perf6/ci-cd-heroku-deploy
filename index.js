require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => res.send(`<h1>Running on port ${port}.</h1>`));

app.listen(port, () => console.log(`Listening on port ${port}...`));
