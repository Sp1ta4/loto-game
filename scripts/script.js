const menu = document.querySelector('.menu');
const avatarMenu = document.querySelector('.alert-menu');
const gameMain = document.querySelector('.game-main');
const timerElement = document.querySelector('#timer');
const scoreElem = document.querySelector('#score');
const currentNumber = document.querySelector('#current-number');
const allNumberBoxes = [...document.querySelectorAll('.number-box')];
const range = document.querySelector('#levels-range');
const timerElem = document.querySelector('#timer-elem');
let currentNum;
const numbersPack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
const numbersPackForTicket = [...numbersPack];

allNumberBoxes.forEach(box => {
  box.addEventListener('click', (event) => {
    if (checkIsCurrentNumber(+event.target.innerHTML)) {
      event.target.classList.remove('active');
      event.target.classList.add('checked');
    };
  });
})
const playerPack = [];
let isLogged = false
let score = 0;

scoreElem.innerHTML = score;

function getRandomNumberFromPack(pack) {
  const randomIndex = Math.floor(Math.random() * pack.length);
  const currentNum = pack[randomIndex];
  pack.splice(randomIndex, 1);
  return currentNum;
}

function onStart() {
  timer(range.value);
  fillTicketElements(createTicketMatrix(numbersPackForTicket));
  addTicketRemoveMenu();
  startGettingNumbers()
}

function startGettingNumbers() {
  getNumber();
  setInterval(() => {
    clearActiveClasses()
    getNumber();
  }, 1000 * 10);

  function getNumber() {
    currentNum = getRandomNumberFromPack(numbersPack);
    currentNumber.innerHTML = currentNum;
    checkPlayerNumbers(currentNum);
  }
}

function addTicketRemoveMenu() {
  menu.style.transform = "translateX(-200%)";
  gameMain.classList.remove('d-none');
  setTimeout(() => {
    gameMain.style.transform = "translateX(0%)";
  }, 100);
  setTimeout(() => {
    menu.remove();
  }, 1501);
}

function checkPlayerNumbers(number) {
  if (playerPack.some(num => num === number)) {
    const currentBox = document.getElementById(number);
    currentBox.classList.add('active');
    return true;
  }
  return false;
}
function checkIsCurrentNumber(number) {

  if (currentNum === number) {
    score += 1000;
    changeScoreElem();
    return true;
  }
  return false;
}

function changeScoreElem() {
  scoreElem.innerHTML = score;
}

function clearActiveClasses() {
  allNumberBoxes.forEach(box => box.classList.remove('active'))
}

function acceptAvatar(imageUrl) {
  console.log(imageUrl);
  isLogged = true;
}