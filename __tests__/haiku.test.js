import Haiku from './../src/js/Haiku.js';

describe('Haiku', () => {
  test('should correctly create a haiku object with 3 lines', () => {
    const newHaiku = new Haiku(0,0,0);
    expect(newHaiku.line1).toEqual(0);
    expect(newHaiku.line2).toEqual(0);
    expect(newHaiku.line3).toEqual(0);
  });
  test('it should check to ensure haiku has 3 lines', () => {
    const newHaiku = new Haiku(0,0,0);
    expect(newHaiku.validHaiku).toEqual(true);
  });
});
