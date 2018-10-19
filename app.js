'use strict';

const cors = require('cors')
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const morgan = require('morgan');

app.use(cors())
app.use(morgan('short'));
app.use(bodyParser.json());

app.use((_req, res) => {
    res.sendStatus(404);
});

app.listen(port, function () {
    console.log('Listening on port', port);
});

module.exports = app;
