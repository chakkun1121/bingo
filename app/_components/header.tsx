import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="p-2 bg-green-200 print:hidden">
        <Link href="/" className="text-black visited:text-black hover:!no-underline hover:text-black">
          <h1 className="">ビンゴアプリ</h1>
        </Link>
      </header>
    </>
  )
}