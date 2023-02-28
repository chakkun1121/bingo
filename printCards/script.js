let headerLogoUrl;
window.onload = function () {
  const root = document.querySelector(":root");
  const settingsJson = JSON.parse(localStorage.getItem("bingosettings")) || {};
  if (settingsJson.headerLogoUrl) {
    headerLogoUrl = settingsJson.headerLogoUrl;
  }
};
function creatCards() {
  const makeCardNumber = cardNumber.value;
  if (makeCardNumber > 10) {
    const result = window.confirm(
      "作成するカードが多いとタブが落ちることがあります。実行しますか?"
    );
    if (!result) throw new Error("キャンセルされました");
  }
  const showCards = document.getElementById("showCards");
  showCards.innerHTML = "生成中...";
  //カードの作成
  for (let i = 0; i < makeCardNumber; i++) {
    showCard(makeCard(), i + 1);
  }
  if (headerLogoUrl) {
    const elements = document.querySelectorAll(".card-header");
    for (const element of elements) {
      element.style.backgroundImage = `url(${headerLogoUrl})`;
    }
  }
}
function showCard(cardArray, index = 0) {
  const showCards = document.getElementById("showCards");
  let cardElement = document.createElement("section");
  cardElement.innerHTML = `<div class="card-header"><h1 class="card-title">ビンゴカード</h1><p>No.${index}</p></div>`;
  cardArray.forEach((element) => {
    cardElement.innerHTML += `<div>${element}</div>`;
  });
  if (index <= 1) {
    showCards.innerHTML = "";
  }
  showCards.appendChild(cardElement);
}
document.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "Enter") {
      creatCards();
    }
  },
  false
);
