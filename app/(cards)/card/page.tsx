import { Metadata } from "next";
import { bingoCardType } from "../../../@types/bingoCardType";
import { useCreateCard } from "../lib/createCard";
export const metadata: Metadata = {
  title: "ビンゴカード",
  description: "chakkun1121製のビンゴアプリのビンゴカードです。これを利用することでスマホやパソコンなどでビンゴができます。毎回、アクセスする際にカードは自動生成されます。",
  alternates: {
    canonical: "/card",
  },
}
export default function Card() {
  const createCard = useCreateCard();
  const card: bingoCardType = createCard();
  return (
    <>
      <section>
        <h1>ビンゴ</h1>
        <div className="text-center grid grid-rows-5 gap-4 max-w-2xl">
          <div className="grid grid-cols-5 gap-4 ">{["B", "I", "N", "G", "O"].map((item) => (
            <p className="text-heading-L" key={item}>{item}</p>
          ))}</div>
          {card.map((cols: number[], i: number) => (
            <div key={i} className="grid grid-cols-5 gap-4 ">
              {cols.map((num: number, j: number) => (
                <div key={j} className="bg-gray-100 p-2">
                  <p className="text-heading-L">
                    {typeof num === "number" ? num : "FREE"}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
