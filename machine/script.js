const CARD_ELEMENT_MAX = 75;
let hisotryNumbers = [];
let cardElements = [...Array(CARD_ELEMENT_MAX + 1)].map((_, i) => i);
console.log(cardElements);
cardElements.shift();
function startBingo() {
  if (cardElements.length == 0) {
    alert("もうすべての番号を出しました。");
    return;
  }
  //シャッフルして何を出すか決める
  const viewNumber = arrayShuffle(cardElements)[0];
  console.log(viewNumber);
  showNumber.innerText = viewNumber;
  //出した後、cardElementsから撤去
  cardElements.shift();
  console.log(cardElements);
  //履歴欄にも追加
  hisotryNumbers.unshift(viewNumber);
  viewHistories.innerHTML = "";
  hisotryNumbers.forEach(function (value) {
    viewHistories.innerHTML += `<div>${value}</div>`;
  });
  console.log(hisotryNumbers);
}
/**
 * 指定された配列をシャッフルします。
 * @param {Array} array
 * @returns {Array}
 */
function arrayShuffle(array) {
  for (var i = array.length - 1; 0 < i; i--) {
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}
