// const { exportAllDeclaration } = require('@babel/types');
// const { describe } = require('yargs');
const capitalize = require('./capitalize.js');

describe('As a User I want a way to capitalize my strings', () => {

  test('Should capitalize a string', () => {
    let output = capitalize('ryan');
    expect(output).toEqual('RYAN');
  });
});
