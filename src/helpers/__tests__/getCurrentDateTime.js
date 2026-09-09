const getCurrentDateTime = require('../getCurrentDateTime');

describe('#getCurrentDateTime', () => {
  test('should be a function', () => {
    expect(getCurrentDateTime).toBeInstanceOf(Function);
  });

  test('should return a string', () => {
    expect(typeof getCurrentDateTime()).toBe('string');
  });

  test('should match ISO 8601 date string', () => {
    expect(getCurrentDateTime()).toMatch(
      /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}/
    );
  });
});
