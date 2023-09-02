"use client"
import { bingoCardType } from "../../../@types/bingoCardType";
import { useCreateCard } from "../lib/createCard";
import { BingoCard } from "../_components/BingoCard";
import { useState } from "react";

export default function Main() {
  const createCard = useCreateCard();
  const [card, setCard] = useState<bingoCardType>(createCard());
  return (
    <>
      <section>
        <h1 className="print:hidden">ビンゴカード</h1>
        <button onClick={()=>{setCard(createCard())}} className="text-M p-2 m-2 bg-green-200 hover:bg-green-300 rounded">カードを再生成</button>
        <BingoCard card={card} />
      </section>
    </>
  );
}

