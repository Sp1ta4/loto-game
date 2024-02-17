const menu = document.querySelector('.menu');
const gameMain = document.querySelector('.game-main');
const timerElement = document.querySelector('#timer');
const scoreElem = document.querySelector('#score');
const currentNumber = document.querySelector('#current-number');
const allNumberBoxes = [...document.querySelectorAll('.number-box')];
const range = document.querySelector('#levels-range');
const timerElem = document.querySelector('#timer-elem');
const ticketMatrix = [
  allNumberBoxes.slice(0, 9),
  allNumberBoxes.slice(9, 18),
  allNumberBoxes.slice(18, 29)
]
const numbersPack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

let score = 0;

scoreElem.innerHTML = score;

function getRandomNumberFromPack(pack) {
  const numbersPack = pack;
  const randomIndex = Math.floor(Math.random() * numbersPack.length);
  const currentNum = numbersPack[randomIndex];
  numbersPack.splice(randomIndex, 1);
  return currentNum;
}

function onStart() {
  menu.style.transform = "translateX(-200%)";
  gameMain.classList.remove('d-none');
  timer(range.value);
  fillTicket();
  setTimeout(() => {
    gameMain.style.transform = "translateX(0%)";
  }, 100);
  setTimeout(() => {
    menu.remove();
  }, 1501);
}

