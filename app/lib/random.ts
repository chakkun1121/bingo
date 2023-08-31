/**
 * minからmaxまでのランダムな整数を返す
 * @param min
 * @param max
 * @returns
 */
export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
