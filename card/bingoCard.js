window.onload = makeCard()
function makeCard() {
  //ビンゴカードのサイズ(行数、列数)
  const CARD_SIZE = 5;

  //生成するビンゴカードを格納する配列
  let cards = [];

  //ビンゴカードの要素数
  const CARD_ELEMENT_COUNT = CARD_SIZE * CARD_SIZE;
  //ビンゴカードの要素の最大値
  const CARD_ELEMENT_MAX = 75;
  //ビンゴカードの空白部分
  const CARD_BLANK = ' ';
  //ビンゴカードの空白部分のインデックス
  const CARD_BLANK_INDEX = ((CARD_SIZE * CARD_SIZE) - 1) / 2;
  //ビンゴカードの要素を生成する
  let elements = [];
  for (let i = 0; i < CARD_ELEMENT_COUNT; i++) {
    elements.push(i);
  }

  //ビンゴカードを生成する
  let card = [];
  let cardElements = elements.slice();
  for (let j = 0; j < CARD_ELEMENT_COUNT; j++) {
    //要素をランダムに選択してカードに追加する
    let randomIndex = Math.floor(Math.random() * cardElements.length);
    card.push(cardElements[randomIndex]);
    cardElements.splice(randomIndex, 1);
  }
  //空白部分を追加する
  card[CARD_BLANK_INDEX] = CARD_BLANK;
  cards.push(card);

  console.log(cards);
}
function showCard(cardArray) {
  
}