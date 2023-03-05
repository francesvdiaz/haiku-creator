import Haiku from './../src/js/Haiku.js';

describe('Haiku', () => {
  test('should correctly create a haiku object with 4 lines', () => {
    const Haiku = new Haiku 
    expect(Haiku.line1).toEqual(0);
    expect(Haiku.line2).toEqual(0);
    expect(Haiku.line3).toEqual(0);
    expect(Haiku.line4).toEqual(0);
  });
});
