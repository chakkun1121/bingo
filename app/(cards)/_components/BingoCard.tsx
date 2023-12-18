"use client";
import { useRecoilValue } from "recoil";
import { bingoCardType } from "../../../@types/bingoCardType";
import { settingsAtom } from "../../settings/recoil";
import { arrayExactLength } from "../../../@types/arrayExactLength";

export function BingoCard({
  card,
  cardInfo,
  setCardInfo,
}:
  | {
      card: bingoCardType;
      cardInfo?: undefined;
      setCardInfo?: undefined;
    }
  | {
      card: bingoCardType;
      cardInfo: arrayExactLength<boolean, 25>;
      setCardInfo: (newCardInfo: arrayExactLength<boolean, 25>) => void;
    }) {
  const settings = useRecoilValue(settingsAtom);
  return (
    <div className="flex flex-col items-center">
      <div
        className="p-2 border select-none print:block"
        style={{ pageBreakAfter: "always" }}
      >
        <img
          className={`max-w-40 max-h-40 items-${settings.printCardHeaderIconPosition}`}
          src={settings.printCardHeaderIcon}
          alt="カードのロゴ"
        />
        <div className="text-center grid grid-rows-5 gap-4 max-w-2xl">
          <div className="grid grid-cols-5 gap-4 ">
            {["B", "I", "N", "G", "O"].map((item) => (
              <p className="text-heading-L" key={item}>
                {item}
              </p>
            ))}
          </div>
          {card.map((cols: number[], i: number) => (
            <div key={i} className="grid grid-cols-5 gap-4 ">
              {cols.map((num: number, j: number) => (
                <button
                  key={j}
                  className={`bg-gray-100  text-L font-normal aspect-square flex items-center justify-center ${
                    cardInfo?.[i * 5 + j] &&
                    "rounded-t-full bg-gray-900 text-gray-500"
                  }`}
                >
                  <p
                    className={`text-[min(5vw,36px)] p-2`}
                    onClick={() => {
                      if (setCardInfo) {
                        setCardInfo(
                          cardInfo.map((item, index) =>
                            index === i * 5 + j ? !item : item
                          ) as unknown as arrayExactLength<boolean, 25>
                        );
                      }
                    }}
                  >
                    {typeof num === "number" ? num : "FREE"}
                  </p>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
