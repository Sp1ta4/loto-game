function timer(timerElem) {
  let time = 900;

  setInterval(() => timerElem.textContent = updateTimer(), 1000);

  function updateTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    time--;
    return `${minutes}:${seconds}`;
  }
}


