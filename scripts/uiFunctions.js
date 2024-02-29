function fillTicketElements(arrayOfNumbers) {
  const ticket = document.getElementsByClassName('ticket')[0];
  const numbersElement = arrayOfNumbers.map(row => {
    const result = [];
    for (let i = 0; i < row.length; i++) {
      result.push(`<div class="number-box">${row[i]}</div>`);
    }
    return result.join('');
  });
  ticket.innerHTML = numbersElement.join('');
}