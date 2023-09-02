import { bingoCardType } from "../../../@types/bingoCardType";

export function BingoCard({ card, imagePath = "./img/headerLogo.png", iconPosition = "left" }: { card: bingoCardType; imagePath?: string; iconPosition?: "left" | "center" | "right"; }) {
  return (
    <div className="p-2 border mx-auto w-max select-none print:block">
      <img className={`max-w-40 max-h-40 items-${iconPosition}`} src={imagePath} alt="カードのロゴ"/>
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
  );
}
