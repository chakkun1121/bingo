function creatCards() {
  const makeCardNumber = cardNumber.value
  //カードの作成
  for (let i = 0; i < makeCardNumber; i++){
    showCard(makeCard())
  }
}
function showCard(cardArrary) {
let cardElement = document.createElement('section')

  cardArray.forEach(element => {
    cardElement.innerHTML += `<div>${element}</div>`
  });
  cardElement.appendChild(showCards)
}
