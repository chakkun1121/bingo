import { random } from "../../lib/random";
import {
  bingoCardType,
  bingoBRowType,
  bingoIRowType,
  bingoNRowType,
  bingoGRowType,
  bingoORowType,
} from "../../../@types/bingoCardType";

export function useCreateCard() {
  function createCard(): bingoCardType {
    const BRows = randoms(1, 15, 5) as bingoBRowType[]
    const IRows = randoms(16, 30, 5) as bingoIRowType[]
    const NRows = randoms(31, 45, 4)  as bingoNRowType[]
    const GRows = randoms(46, 60, 5)  as bingoGRowType[]
    const ORows = randoms(61, 75, 5) as bingoORowType[]
    const bingoCard: bingoCardType = [
      [BRows[0], IRows[0], NRows[0], GRows[0], ORows[0]],
      [BRows[1], IRows[1], NRows[1], GRows[1], ORows[1]],
      [BRows[2], IRows[2], null, GRows[2], ORows[2]],
      [BRows[3], IRows[3], NRows[2], GRows[3], ORows[3]],
      [BRows[4], IRows[4], NRows[3], GRows[4], ORows[4]],
    ]
    return bingoCard;
  }
  return createCard;
}
/**
 * 指定した範囲の乱数を重複なく複数個返す
 * @param {number} min 最小値
 * @param {number} max 最大値
 * @param {number} count 乱数の個数
 * @returns {number[]} 乱数の配列
 */
function randoms(min: number, max: number, count: number): number[] {
  const randoms: number[] = [];
  while (randoms.length < count) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!randoms.includes(random)) {
      randoms.push(random);
    }
  }
  return randoms;
}
