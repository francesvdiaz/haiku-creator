import Haiku from './../src/js/Haiku.js';

describe('Haiku', () => {
  test('should correctly create a haiku object with 3 lines', () => {
    const newHaiku = new Haiku(1, 1, 1);
    expect(newHaiku.line1).toEqual(1);
    expect(newHaiku.line2).toEqual(1);
    expect(newHaiku.line3).toEqual(1);
  });
});
describe('validLineCount', () => {
  test('it should check to ensure haiku has 3 lines', () => {
    const newHaiku = new Haiku(1, 1, 1);
    expect(newHaiku.validLineCount()).toBeTruthy();
  });
  test('it should return false if a haiku does not have 3 lines', () => {
    const newHaiku = new Haiku(0, 0);
    expect(newHaiku.validLineCount()).toBeFalsy();
  });
})
describe('validSyllableCount', () => {
  test('it should check to ensure the haiku has valid syllable counts for each line', () => {
    const newHaiku = new Haiku(1, 1, 1);
    expect(newHaiku.validSyllableCount()).toBeTruthy();
  });
});
 
