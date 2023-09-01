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
export default function Main() {
  const createCard = useCreateCard();
  const card: bingoCardType = createCard();
  return (
    <>
      <section>
        <h1>ビンゴカード</h1>
        <BingoCard card={card} />
      </section>
    </>
  );
}
export function BingoCard({ card, imagePath = "../img/headerLogo.png", iconPosition = "left" }: { card: bingoCardType, imagePath?: string, iconPosition?: "left" | "center" | "right" }) {
  return (
    <div className="p-2 border mx-auto w-max">
      <img className={`max-w-40 max-h-40 items-${iconPosition}`} src={imagePath} />
      <div className="text-center grid grid-rows-5 gap-4 max-w-2xl">
        <div className="grid grid-cols-5 gap-4 ">
          {["B", "I", "N", "G", "O"].map((item) => (
            <p className="text-heading-L" key={item}>{item}</p>
          ))}
        </div>
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
    </div>
  )
}
