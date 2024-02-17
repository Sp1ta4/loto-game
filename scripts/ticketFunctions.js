function fillTicket() {
  ticketMatrix.map(row => {
    let maxEmpty = 4;
    let numbersCountInRow = 0;

    for (let i = 0; i < row.length; i++) {
      if (i === 4) {
        if (!checkFourPreviousIsNotEmpty(row, i)) {
          if (checkThreePreviousIsEmpty(row, i) || checkRandomChance()) {
            fillCurrentBoxAndChangeCount(row, i);
            numbersCountInRow++;
            continue;
          }
        }
        maxEmpty--;
        continue;
      }
      if (numbersCountInRow >= 5) {
        break;
      }
      if (numbersCountInRow < 5) {
        if (checkRandomChance() || maxEmpty === 0 || checkThreePreviousIsEmpty(row, i)) {
          fillCurrentBoxAndChangeCount(row, i);
          numbersCountInRow++
        } else {
          maxEmpty--;
        }
      }
    }
  });
}
function checkRandomChance() {
  const trueOrFalse = Math.round(Math.random());
  console.log(trueOrFalse);
  return trueOrFalse;
}
function checkThreePreviousIsEmpty(array, index) {
  const isThreePreviousEmpty = !array[index - 3]?.innerText &&
    !array[index - 2]?.innerText &&
    !array[index - 1]?.innerText
  return isThreePreviousEmpty;
}
function checkFourPreviousIsNotEmpty(array, index) {
  const isFourPreviousIsNotEmpty = array[index - 1]?.innerText &&
    array[index - 3]?.innerText &&
    array[index - 2]?.innerText &&
    array[index - 4]?.innerText
  return isFourPreviousIsNotEmpty ? true : false;
}

function fillCurrentBoxAndChangeCount(array, index) {
  array[index].innerText = getRandomNumberFromPack(numbersPack);
}