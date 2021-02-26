'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '127.0.0.1';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World. First Jenkin container docker image created for node js application.');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);