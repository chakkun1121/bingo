const CARD_ELEMENT_MAX = 75;
let hisotryNumbers = [];
let cardElements = [...Array(CARD_ELEMENT_MAX)].map((_, i) => i + 1);
let shuffleTimes;
let shuffleCount = 0;
/**
 * ビンゴマシーンが回っているか
 */
let moving = false;
cardElements.shift();
function startBingo() {
  if (cardElements.length == 0) {
    alert("もうすべての番号を出しました。");
    return;
  }
  shuffleCount = 0;
  machineShuffle = setInterval(function () {
    const viewNumber = arrayShuffle(cardElements)[0];
    showNumber(viewNumber, shuffleCount == shuffleTimes);
    shuffleCount++;
  }, 100);
}
function stopBingo() {
  shuffleCount = 0;
  shuffleTimes = randomBetween(3, 5);
}
function showNumber(showNumber, isSaveToHistory) {
  document.getElementById("showNumber").innerText = showNumber;
  if (!isSaveToHistory) return;
  shuffleTimes = undefined;
  clearInterval(machineShuffle);
  console.info("stop");
  //出した後、cardElementsから撤去
  cardElements.shift();
  //履歴欄にも追加
  hisotryNumbers.unshift(showNumber);
  viewHistories.innerHTML = "";
  hisotryNumbers.forEach(function (value) {
    viewHistories.innerHTML += `<div>${value}</div>`;
  });
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
/**
 * 指定された最小値と最大値（それぞれ含む）の間の整数の乱数を生成する
 * @param {number} min - 最小値（含む）
 * @param {number} max - 最大値（含む）
 * @returns {number} minからmaxの間の整数の乱数
 */
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
