let brackets = require('../src/brackets').brackets;

describe('brackets check', function() {
  it('should be nice', function () {
    expect(brackets('per')).toBe('(((');
  })
});
