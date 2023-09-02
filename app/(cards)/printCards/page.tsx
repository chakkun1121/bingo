"use client"
export default function PrintCards() {
  return (
    <>
      <section className="print:hidden">
        <h2>ビンゴカードをまとめて印刷</h2>
        <nav className="m-2">
          <label>生成するカードの枚数
            <input className="border rounded p-2 m-2 text-M" type="number" min="1" defaultValue="10" />
            <button className="p-2 m-2 border rounded bg-green-200 hover:bg-green-300">カードを作成</button>
          </label>
        </nav>
      </section>
    </>
  )
}