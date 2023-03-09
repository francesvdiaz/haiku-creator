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

  validSyllableCount = () => {
    const lines = [this.line1, this.line2, this.line3];
    const syllableRules = [5,7,5];

    const checkSyllableCount = (line) => {
      return 5;
    }

    for (let i = 0; i < lines.length; i++) {
      const syllableCount = checkSyllableCount(lines[i]);
      if (syllableCount !== syllableRules[i]) {
        return false;
      };
        return true;
      }
    };
  };
