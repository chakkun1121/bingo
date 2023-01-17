function creatCards() {
  const makeCardNumber = cardNumber.value;
  //カードの作成
  for (let i = 0; i < makeCardNumber; i++) {
    showCard(makeCard());
  }
}
function showCard(cardArray) {
  let cardElement = document.createElement("section");
cardElement.innerHTML=`<h1 class="card-title">ビンゴカード</h1>`
  cardArray.forEach((element) => {
    cardElement.innerHTML += `<div>${element}</div>`;
  });
  showCards.appendChild(cardElement);
}
