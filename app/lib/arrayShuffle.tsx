"use client";
/**
 * 指定された配列をシャッフルします。
 * @param {Array<Number>} array - シャッフルする配列
 * @returns {Array<Number>} - シャッフルされた配列
 */
export function arrayShuffle(array: Array<Number>): Array<Number> {
  for (var i = array.length - 1; 0 < i; i--) {
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}
