import Haiku from './../src/js/Haiku.js';

describe('Haiku', () => {
  test('should correctly create a haiku object with 3 lines', () => {
    const newHaiku = new Haiku('line1', 'line2', 'line3');
    expect(newHaiku.validLineCount()).toBe(true);
  });
});
describe('validLineCount', () => {
  test('it should return true if a haiku has 3 lines', () => {
    const newHaiku = new Haiku('line1', 'line2', 'line3');
    expect(newHaiku.validLineCount()).toBe(true);
  });
  test('it should return false if a haiku has less than 3 lines', () => {
    const newHaiku = new Haiku('line1', 'line2');
    expect(newHaiku.validLineCount()).toBe(false);
  });
});
describe('validSyllableCount', () => {
  test('it should return true if a haiku has the valid syllable count', () => {
    const newHaiku = new Haiku('An old silent pond', 'A frog jumps into the pond-', 'Splash! Silence again.');
    expect(newHaiku.validSyllableCount()).toBe(true);
  });
});

