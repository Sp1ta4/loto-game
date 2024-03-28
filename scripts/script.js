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
const ticket = new Ticket();
const playerPack = [];
let score = 0;
scoreElem.innerHTML = score;


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

function onStart() {
  timer(timerElem);
  fillTicketElements(ticket);
  addTicketRemoveMenu();
  startGettingNumbers()
}

function startGettingNumbers() {
  let changeTime;
  switch (range.value) {
    case '1':
      changeTime = 10;
      break;
    case '2':
      changeTime = 7;
      break;
    case '3':
      changeTime = 5;
      break;
  }
  getNumber();
  setInterval(() => {
    getNumber();
  }, 1000 * changeTime);

  function getNumber() {
    currentNum = ticket.getRandomNumberFromPack(numbersPack);
    currentNumber.innerHTML = currentNum;
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
