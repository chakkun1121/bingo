import Link from "next/link";
import React from "react";
export default function Main() {
  return (
    <>
      <section className="bg-green-100 rounded p-2 m-2">
        <h2>アプリの中身</h2>
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
            <li>
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
