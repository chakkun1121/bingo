"use client";
/**
 * 指定された最小値と最大値（それぞれ含む）の間の整数の乱数を生成する
 * @param {number} min - 最小値（含む）
 * @param {number} max - 最大値（含む）
 * @returns {number} minからmaxの間の整数の乱数
 */
export function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
