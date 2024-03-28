class Ticket extends Array {
  #arrayOfNumbers = new NumbersArray();
  constructor() {
    super();
    this.fillTicket();
  }

  fillTicket() {
    this.push(this.createRow(), this.createRow(), this.createRow());
  }

  createRow() {
    const row = [];
    let maxEmpty = 4;
    let numbersCountInRow = 0;
    for (let k = 0; k < 9; k++) {
      const currentColArray = this.#arrayOfNumbers[k];
      if (k === 4) {
        if (!this.checkFourPreviousIsNotEmpty(row, k)) {
          if (this.checkThreePreviousIsEmpty(row, k) || this.checkRandomChance()) {
            this.fillCurrentBoxAndChangeArray(row, k, currentColArray);
            numbersCountInRow++;
            continue;
          }
        }
        this.leaveBlank(row, k);
        maxEmpty--;
        continue;
      }
      if (numbersCountInRow >= 5) {
        this.leaveBlank(row, k);
        maxEmpty--;
        continue;
      }
      if (numbersCountInRow < 5) {
        if (this.checkRandomChance() || maxEmpty === 0 || this.checkThreePreviousIsEmpty(row, k)) {
          this.fillCurrentBoxAndChangeArray(row, k, currentColArray);
          numbersCountInRow++;
        } else {
          this.leaveBlank(row, k);
          maxEmpty--;
        }
      }
    }
    return row;
  }

  checkRandomChance() {
    const trueOrFalse = Math.round(Math.random());
    return trueOrFalse;
  };

  checkThreePreviousIsEmpty(array, index) {
    const isThreePreviousEmpty = !array[index - 3] &&
      !array[index - 2] &&
      !array[index - 1]
    return isThreePreviousEmpty;
  };

  checkFourPreviousIsNotEmpty(array, index) {
    const isFourPreviousIsNotEmpty = array[index - 1] &&
      array[index - 3] &&
      array[index - 2] &&
      array[index - 4]
    return isFourPreviousIsNotEmpty ? true : false;
  };

  fillCurrentBoxAndChangeArray(array, index, arrayOfColumnNumbers) {
    const number = this.getRandomNumberFromPack(arrayOfColumnNumbers);
    const numIndex = arrayOfColumnNumbers.findIndex(num => num === number);
    arrayOfColumnNumbers.splice(numIndex, 1);
    array[index] = ({ number, checked: false });
    return number;
  };

  leaveBlank(array, index) {
    array[index] = null;
  };

  getRandomNumberFromPack(pack) {
    const randomIndex = Math.floor(Math.random() * pack.length);
    const currentNum = pack[randomIndex];
    pack.splice(randomIndex, 1);
    return currentNum;
  }
}


class NumbersArray extends Array {
  constructor() {
    super();
    this.generateArray();
  }

  generateArray() {
    for (let i = 0; i < 9; i++) {
      this[i] = [];
      for (let k = 0; k <= 9; k++) {
        const number = k + i * 10
        number && this[i].push(number);
      }
    }
  }
}
