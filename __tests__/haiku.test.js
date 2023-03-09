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
describe('checkSyllableCount', () => {
  test('it should return the correct number of syllables in line 1', () => {
    const newHaiku = new Haiku('An old silent pond');
    const syllableCount = newHaiku.checkSyllableCount(newHaiku.line1);
    expect(syllableCount).toBe(5);
  })
});

