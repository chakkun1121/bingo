import { Metadata } from "next";
import { bingoCardType } from "../../../@types/bingoCardType";
import { useCreateCard } from "../lib/createCard";
import { BingoCard } from "../_components/BingoCard";
export const metadata: Metadata = {
  title: "ビンゴカード",
  description: "chakkun1121製のビンゴアプリのビンゴカードです。これを利用することでスマホやパソコンなどでビンゴができます。毎回、アクセスする際にカードは自動生成されます。",
  alternates: {
    canonical: "/card",
  },
}
export default function Main() {
  const createCard = useCreateCard();
  const card: bingoCardType = createCard();
  return (
    <>
      <section>
        <h1 className="print:hidden">ビンゴカード</h1>
        <BingoCard card={card} />
      </section>
    </>
  );
}

