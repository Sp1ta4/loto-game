function timer(difficultyLevel, timerElem) {
  let time;
  switch (difficultyLevel) {
    case '1':
      time = 900;
      break;
    case '2':
      time = 720;
      break;
    case '3':
      time = 600;
      break;
  }
  setInterval(() => timerElem.innerHTML = updateTimer(), 1000);
  function updateTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    time--;
    return `${minutes}:${seconds}`;
  }
}


