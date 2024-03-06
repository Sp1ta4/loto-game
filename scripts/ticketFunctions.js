function createTicketMatrix(arrayOfNumbers) {
  const ticketMatrix = [
    [],
    [],
    []
  ];
  const pack = [...arrayOfNumbers];
  for (let i = 0; i < 3; i++) {
    let maxEmpty = 4;
    let numbersCountInRow = 0;
    for (let k = 1; k <= 9; k++) {
      debugger
      let arrayMinIndex = 1 * k;
      let arrayMaxIndex = arrayMinIndex + 8;
      const currentColArray = pack.slice(arrayMinIndex, arrayMaxIndex);
      if (k === 4) {
        if (!checkFourPreviousIsNotEmpty(ticketMatrix[i], k)) {
          if (checkThreePreviousIsEmpty(ticketMatrix[i], k) || checkRandomChance()) {
            pack.splice(pack.indexOf(fillCurrentBoxAndChangeArray(ticketMatrix[i], k, currentColArray)), 1);
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
          pack.splice(pack.indexOf(fillCurrentBoxAndChangeArray(ticketMatrix[i], k, currentColArray)), 1)
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
  const isThreePreviousEmpty = !array[index - 3] &&
    !array[index - 2] &&
    !array[index - 1]
  return isThreePreviousEmpty;
};

function checkFourPreviousIsNotEmpty(array, index) {
  const isFourPreviousIsNotEmpty = array[index - 1] &&
    array[index - 3] &&
    array[index - 2] &&
    array[index - 4]
  return isFourPreviousIsNotEmpty ? true : false;
};

function fillCurrentBoxAndChangeArray(array, index, arrayOfColumnNumbers) {
  const number = getRandomNumberFromPack(arrayOfColumnNumbers);
  array[index] = (number);
  return number
};

function leaveBlank(array, index) {
  array[index] = ' ';
};

