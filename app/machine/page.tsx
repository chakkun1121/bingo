"use client";
import { useEffect, useState } from "react";
import MachineHeaderImage from "./MachineHeaderImage";
import { arrayShuffle } from "../lib/arrayShuffle";
import { sleep } from "../lib/sleep";
import { randomBetween } from "../lib/randomBetween";

export default function MachinePage() {
  const [currentNumber, setCurrentNumber] = useState<Number>(0);
  const [histories, setHistories] = useState<Number[]>([]);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [isShowOperation, setIsShowOperation] = useState<boolean>(false);
  const [restNumbers, setRestNumbers] = useState<Number[]>(
    [...Array(75)].map((_, i) => i + 1)
  );
  function openOperation() {
    const operation = window.open(
      "./machine/operation",
      "operation",
      "width=400,height=400"
    );
    setIsShowOperation(true);
    operation?.addEventListener("close", () => {
      setIsShowOperation(false);
    });
  }
  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.data == "startBingo") {
        // startBingo();
      }
    }
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);

  async function startBingo() {
    if (restNumbers.length == 0) {
      alert("もうすべての番号を出しました。");
      return;
    }
    if (isSpinning) return;
    setIsSpinning(true);
    for (let i = 0; i < randomBetween(10, 20); i++) {
      setCurrentNumber(arrayShuffle(restNumbers)[0]);
      await sleep(100);
    }
    setCurrentNumber(arrayShuffle(restNumbers)[0]);
    await sleep(randomBetween(200, 600));
    setCurrentNumber(arrayShuffle(restNumbers)[0]);
    await sleep(randomBetween(800, 1200));
    setCurrentNumber(arrayShuffle(restNumbers)[0]);
    await sleep(randomBetween(1400, 1600));
    const viewNumber = arrayShuffle(restNumbers)[0];
    setCurrentNumber(viewNumber);
    setHistories([viewNumber, ...histories]);
    setRestNumbers(restNumbers.filter((n) => n != viewNumber));
    setIsSpinning(false);
  }

  return (
    <div>
      <MachineHeaderImage />
      <section>
        <p
          id="showNumber"
          className={`text-[200px] text-center ${
            !isSpinning && "text-red-500"
          }`}
        >
          {currentNumber?.toString() || ""}
        </p>
      </section>
      <section>
        <h2>履歴</h2>
        <div className="flex flex-wrap text-[50px]" id="viewHistories">
          {histories?.map((n, i) => (
            <div key={i} className="w-[80px] text-center">
              {n?.toString()}
            </div>
          ))}
        </div>
      </section>
      <section className={`${isShowOperation && "hidden"}`}>
        <h2>操作画面</h2>
        <div className="flex gap-2">
          <button
            onClick={startBingo}
            id="startBingoButton"
            className="p-2 rounded bg-gray-200"
          >
            回す(自動で止まります)
          </button>
          <button onClick={openOperation} className="p-2 rounded bg-gray-200">
            操作画面を開く
          </button>
        </div>
      </section>
    </div>
  );
}
