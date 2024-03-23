function handleClick(number, index) {
  debugger
  if (checkIsCurrentNumber(number)) {
    debugger
    const currentBox = ticket[index].find(elem => elem?.number === number);
    currentBox.checked = true;
    fillTicketElements(ticket);
  };
}
function fillTicketElements(arrayOfNumbers) {
  const ticket = document.getElementsByClassName('ticket')[0];
  ticket.innerHTML = '';
  arrayOfNumbers.forEach((row, index) => {
    for (let i = 0; i < row.length; i++) {
      const box = document.createElement('div');
      box.classList.add('number-box');
      row[i]?.checked && box.classList.add('checked');
      if (row[i]) box.onclick = () => { handleClick(row[i].number, index) };
      box.innerText = row[i] ? row[i].number : ' ';
      ticket.appendChild(box);
    }
  });
}