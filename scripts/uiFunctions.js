function fillTicketElements(arrayOfNumbers, handlerClick, carNumber) {
  const ticket = document.getElementsByClassName('ticket')[0];
  const numbersElement = arrayOfNumbers.reduce((arr, row, index) => {
    for (let i = 0; i < row.length; i++) {
      console.log(row[i]?.checked);
      const elem = document.createElement('div')
      elem.onclick = () => handlerClick(index, i);
      elem.classList.add('number-box');
      if(row[i]?.checked) {
        elem.classList.add('checked');
      }
      elem.innerText = row[i]?.number ?? '';
      arr.push(elem);
    }
    return arr;
  }, []);
  ticket.innerHTML = '';
  ticket.append(...numbersElement);
}