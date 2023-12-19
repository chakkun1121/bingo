"use client";
import { useState } from "react";
import MachineHeaderImage from "./MachineHeaderImage";
import { arrayShuffle } from "../lib/arrayShuffle";
import { sleep } from "../lib/sleep";
import { randomBetween } from "../lib/randomBetween";

export default function MachinePage() {
  const [currentNumber, setCurrentNumber] = useState<Number | undefined>(
    undefined
  );
  const [histories, setHistories] = useState<Number[]>([]);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [restNumbers, setRestNumbers] = useState<Number[]>(
    [...Array(75)].map((_, i) => i + 1)
  );

  async function startBingo() {
    if (restNumbers.length == 0) {
      alert("もうすべての番号を出しました。");
      return;
    }
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
    setHistories([...histories, viewNumber]);
    setRestNumbers(restNumbers.filter((n) => n != viewNumber));
    setIsSpinning(false);
  }
  async function showPopUp() {
    // eslint-disable
    if (event.view != window) {
      throw new Error("サブウィンドウのサブウィンドウは開けません");
    }
    const player = document.getElementsByClassName("operation")[0];
    let pipWindow;
    if (window.documentPictureInPicture) {
      pipWindow = await documentPictureInPicture.requestWindow({
        width: player.clientWidth,
        height: player.clientHeight,
        copyStyleSheets: true,
      });
      pipWindow.addEventListener("unload", (event) => {
        const pipPlayer = event.target.body.querySelector(".operation");
        document.querySelector("main").append(pipPlayer);
      });
    } else {
      pipWindow = window.open("", "subpanel", "width=400,height=100");
      pipWindow.addEventListener("unload", (event) => {
        const pipPlayer = event.target.body.querySelector(".operation");
        document.querySelector("main").append(pipPlayer);
      });
    }
    pipWindow.document.body.appendChild(player);
    // eslint-enable
  }

  return (
    <div>
      <MachineHeaderImage />
      <section>
        <p
          id="showNumber"
          className={`text-[200px] ${!isSpinning && "text-red-500"}`}
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
      <section className="operation">
        <h2>操作画面</h2>
        <button disabled={isSpinning} onClick={startBingo}>
          回す(自動で止まります)
        </button>
        <button onClick={showPopUp}>操作画面を別画面で開く</button>
      </section>
    </div>
  );
}
