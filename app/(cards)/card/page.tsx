"use client";
import { bingoCardType } from "../../../@types/bingoCardType";
import { useCreateCard } from "../lib/createCard";
import { BingoCard } from "../_components/BingoCard";
import { useState } from "react";
import { arrayExactLength } from "../../../@types/arrayExactLength";

export default function Main() {
  const createCard = useCreateCard();
  const [card, setCard] = useState<bingoCardType>(createCard());
  const [cardInfo, setCardInfo] = useState<arrayExactLength<boolean, 25>>(
    Array(25).fill(false) as unknown as arrayExactLength<boolean, 25>
  );
  return (
    <>
      <section>
        <h1 className="print:hidden">ビンゴカード</h1>
        <button
          onClick={() => {
            if (!window.confirm("カードをリセットしますか?")) return;
            setCard(createCard());
            setCardInfo(
              Array(25).fill(false) as unknown as arrayExactLength<boolean, 25>
            );
          }}
          className="text-M p-2 m-2 bg-green-200 hover:bg-green-300 rounded"
        >
          カードを再生成
        </button>
        <BingoCard card={card} cardInfo={cardInfo} setCardInfo={setCardInfo} />
      </section>
    </>
  );
}
