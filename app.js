const express = require('express');
const app = express();

const urlController = require('./url/index');

app.post('/new/:url(*)', urlController.createUrl);

app.get('/api/:id', urlController.getUrl);

module.exports = app;