window.onload = showCard(makeCard())
function showCard(cardArray) {
  let newCardArray = [[], [], [], [], []];
  for (let i = 0; i < cardArray.length; i++) {
    newCardArray[Math.floor(i / 5)].push(cardArray[i])
  }
  console.log(newCardArray)
  cardArray.forEach(element => {
    cardView.innerHTML += `<div>${element}</div>`
  });
}