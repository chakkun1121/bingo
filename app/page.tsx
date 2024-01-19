import Link from "next/link";
import React from "react";
export default function Main() {
  return (
    <>
      <section className="bg-green-100 rounded p-2 m-2">
        <h2>このアプリについて</h2>
        <p>
          このアプリはweb上でビンゴを行うのに必要なものがすべて揃っています。
          スマホ対応のビンゴカード、ビンゴマシーンとイベントの準備に役立つビンゴカード一斉作成機能があります。
        </p>
      <section>
      <section className="bg-green-100 rounded p-2 m-2">
        <h2>このアプリのそれぞれの機能へのリンク</h2>
        <ul className="list-disc pl-4 list-inside">
          {[
            {
              href: "./card",
              text: "ビンゴカード",
            },
            {
              href: "./machine",
              text: "ビンゴマシーン",
            },
            {
              href: "./printCards",
              text: "ビンゴカードをまとめて印刷",
            },
            {
              href: "./settings",
              text: "設定",
            },
            {
              href: "./help",
              text: "このアプリについて",
            },
          ].map((item) => (
            <li key={item.text}>
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
