function createTicketMatrix() {
  const ticketMatrix = [
    [],
    [],
    []
  ];
  for (let i = 0; i < 3; i++) {
    let maxEmpty = 4;
    let numbersCountInRow = 0;
    for (let k = 0; k < 9; k++) {
      const currentColArray = k === 0 ? numbersPackForTicket.slice(+(k + '0'), +((k + 1) + '0') - 1) : numbersPackForTicket.slice(+(k + '0') - 1, +((k + 1) + '0') - 1);
      if (k === 4) {
        if (!checkFourPreviousIsNotEmpty(ticketMatrix[i], k)) {
          if (checkThreePreviousIsEmpty(ticketMatrix[i], k) || checkRandomChance()) {
            fillCurrentBoxAndChangeCount(ticketMatrix[i], k, currentColArray);
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
          fillCurrentBoxAndChangeCount(ticketMatrix[i], k, currentColArray);
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

function fillCurrentBoxAndChangeCount(array, index, arrayOfColumnNumbers) {
  const number = getRandomNumberFromPack(arrayOfColumnNumbers);
  array[index] = (number);
};

function leaveBlank(array, index) {
  array[index] = ' ';
};

