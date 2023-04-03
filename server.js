'use strict';

const express = require('express');
const capitalize = require('.capitalize/capitalize');
const cors = require('cors');

const app = express();

app.use (cors());

app.get('./capitalize-me', function(request, response, next) {
  if (request.query.message) {
    let upperMessage = capitalize(request.query.message);
    response.send(upperMessage);
  } else {
    response.send('Please send a message');
  }
});

module.exports = app;
