function createTicketMatrix(arrayOfNumbers) {
  const ticketMatrix = [
    [],
    [],
    []
  ];
  for (let i = 0; i < 3; i++) {
    let maxEmpty = 4;
    let numbersCountInRow = 0;
    for (let k = 0; k < 9; k++) {
      const currentColArray = arrayOfNumbers[k];
      if (k === 4) {
        if (!checkFourPreviousIsNotEmpty(ticketMatrix[i], k)) {
          if (checkThreePreviousIsEmpty(ticketMatrix[i], k) || checkRandomChance()) {
            fillCurrentBoxAndChangeArray(ticketMatrix[i], k, currentColArray);
            numbersCountInRow++;
            continue;
          }
        }
        leaveBlank(ticketMatrix[i], k);
        maxEmpty--;
        continue;
      }
      if (numbersCountInRow >= 5) {
        leaveBlank(ticketMatrix[i], k);
        maxEmpty--;
        continue;
      }
      if (numbersCountInRow < 5) {
        if (checkRandomChance() || maxEmpty === 0 || checkThreePreviousIsEmpty(ticketMatrix[i], k)) {
          fillCurrentBoxAndChangeArray(ticketMatrix[i], k, currentColArray);
          numbersCountInRow++;
        } else {
          leaveBlank(ticketMatrix[i], k);
          maxEmpty--;
        }
      }
    }
  }
  return ticketMatrix;
};

function checkRandomChance() {
  const trueOrFalse = Math.round(Math.random());
  return trueOrFalse;
};

function checkThreePreviousIsEmpty(array, index) {
  // debugger
  const isThreePreviousEmpty = array.length ? !!array[index - 1] &&
    !!array[index - 2] &&
    !!array[index - 3] : false
  return isThreePreviousEmpty ? true : false;
};

function checkFourPreviousIsNotEmpty(array, index) {
  const isFourPreviousIsNotEmpty = array[index - 4] &&
    array[index - 3] &&
    array[index - 2] &&
    array[index - 1]
  return isFourPreviousIsNotEmpty ? true : false;
};

function fillCurrentBoxAndChangeArray(array, index, arrayOfColumnNumbers) {
  const number = getRandomNumberFromPack(arrayOfColumnNumbers);
  const numIndex = arrayOfColumnNumbers.findIndex(num => num === number);
  arrayOfColumnNumbers.splice(numIndex, 1);
  array[index] = (number);
  return number;
};

function leaveBlank(array, index) {
  array[index] = null;
};

