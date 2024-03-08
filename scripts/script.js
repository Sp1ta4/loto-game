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
const numbersPack = generateNumberPack();
const numbersPackForTicket = generateNumbersForTicket();

function generateNumberPack() {
  const pack = [];
  for (let i = 1; i < 90; i++) {
    pack.push(i);
  }
  return pack;
}
function generateNumbersForTicket() {
  const ticket = [];
  for (let i = 0; i < 9; i++) {
    ticket[i] = [];
    for (let k = 0; k <= 9; k++) {
      const number = k + i * 10
      number && ticket[i].push(number);
    }
  }
  return ticket;
}

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
  timer(range.value, timerElem);
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