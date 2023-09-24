import Link from "next/link";
import React from "react";
export default function Main() {
  return (
    <>
      <section className="bg-green-100 rounded p-2 m-2">
        <h2>ビンゴアプリ</h2>
      </section>
      <section className="bg-green-100 rounded p-2 m-2">
        <h2>アプリの中身</h2>
        <ul className="list-disc pl-4 list-inside">
          <li>
            <Link href="./card">ビンゴカード</Link>
          </li>
          <li>
            <Link href="./machine/index.html">ビンゴマシーン</Link>
          </li>
          <li>
            <Link href="./printCards">ビンゴカードをまとめて印刷</Link>
          </li>
          <li>
            <Link href="./settings/">設定</Link>
          </li>
          <li>
            <Link href="./help">このアプリについて</Link>
          </li>
        </ul>
      </section>
    </>
  );
}
