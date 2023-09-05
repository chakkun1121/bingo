"use client"

import { useState } from "react";
import { BingoCard } from "../_components/BingoCard";
import { useCreateCard } from "../lib/createCard";
import { bingoCardType } from "../../../@types/bingoCardType";

export default function PrintCards() {
  const [cardsNumber, setCardsNumber] = useState<number>(10);
  const createCard = useCreateCard();
  const [cards, setCards] = useState<Array<bingoCardType>>([])
  function updateCards() {
    console.debug(cardsNumber)
    setCards(Array.from({ length: cardsNumber }, () => createCard()))
  }
  return (
    <>
      <section className="print:hidden">
        <h2>ビンゴカードをまとめて印刷</h2>
        <nav className="m-2">
          <label>生成するカードの枚数
            <input className="border rounded p-2 m-2 text-M" type="number" min="1" defaultValue={cardsNumber} id="cardsNumberInput" onChange={(e) => setCardsNumber(Number(e.target.value))} />
            <button className="p-2 m-2 border rounded bg-green-200 hover:bg-green-300" onClick={updateCards}>カードを作成</button>
          </label>
        </nav>
      </section>
      <section className="">
        <h2 className="print:hidden">ビンゴカード</h2>
        {cards.map((card, i) => (
          <BingoCard card={card} key={i} />
        ))}
      </section>
    </>
  )
}