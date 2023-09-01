import Link from "next/link";

export default function NotFound() {
  return (
    <section className="text-center">
      <h2>404 NotFound</h2>
      <p>お探しのページは見つかりませんでした。</p>
      <Link href="/">トップページへ戻る</Link>
    </section>
  )
}