const assert = require('chai').assert;

function exampleFunc() {
  // code
  console.log('Im running!');
  return true;
}

describe('This is an example function', () => {
  it('returns true: ', () => {
    assert.equal(exampleFunc(), true);
  });
  it('returns a boolean value: ', () => {
    assert.typeOf(exampleFunc(), 'boolean');
  });
});