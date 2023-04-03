'use strict';

// const { describe, default: test } = require('node:test');
// const { hasUncaughtExceptionCaptureCallback } = require('process');
const supertest = require('supertest');

const app = require('./server.js');
const request = supertest(app);

describe('As a user I want to send a request and get a capitalized message', () => {

  test('Should return RYAN when sending a GET request to /capitalize-me', async () => {
    let response = await request.get('/capitalize-me?message=Ryan');
    expect(response.text).toEqual('RYAN');
  })
});
