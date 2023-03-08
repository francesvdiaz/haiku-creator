export default class Haiku {
  constructor (line1,line2,line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  };

  validLineCount = () => {
    let lineCount = 0; //checking for 3 lines
    if (this.line1 && this.line2 && this.line3) {
      return true;
    }
    return false;
  };

  static syllableRules = [5,7,5];

  validSyllableCount = () => {
    const lines = [this.line1, this.line2, this.line3];

    for (let i = 0; i < lines.length; i++) {
      const syllableCount = this.checkSyllableCount(lines[i]);
      if (syllableCount !== Haiku.syllableCount[i]) {
        return false;
      };
        return true;
      }
    };
  };

  // checkSyllableCount = (line) =>{

  // }
