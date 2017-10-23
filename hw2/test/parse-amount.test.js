let parseAmount = require('../src/parse-amount').parseAmount;

describe('parse amount', function() {
  it('should work', function () {
    expect(parseAmount('123')).toBe(12300);
  })
});

describe('parse amount', function() {
  it('should work with comma', function () {
    expect(parseAmount('123,50')).toBe(12350);
  })
});

describe('greater value', function() {
  it('should work with comma', function () {
    expect(parseAmount('123,50')).toBeGreaterThan(3);
  })
});
