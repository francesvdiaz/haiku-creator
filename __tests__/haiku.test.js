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
  const placeholderCountSyllables = (line) => {
    if (line === 'An old silent pond') {
      return 5;
    } else if (line === 'A frog jumps into the pond') {
      return 7;
    } else if (line === 'Splash! Silence again.') {
      return 5;
    } else {
      return 0;
    };
  };
  beforeEach(() => {
    Haiku.prototype.countSyllables = placeholderCountSyllables;
  });
  afterEach (() => {
    delete Haiku.prototype.countSyllables;
  });
  test('it should return true if a haiku has the valid syllable count for line 1', () => {
    const newHaiku = new Haiku('An old silent pond');
    expect(newHaiku.validSyllableCount()).toBe(true);
  });
  test('it should return false if a haiku does not have the valid syllable count for line 1', ()  => {
    const newHaiku = new Haiku('An old silent pond');
    expect(newHaiku.validSyllableCount()).toBe(false);
  })
});

