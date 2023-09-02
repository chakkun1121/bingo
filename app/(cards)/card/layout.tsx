import { Metadata } from "next"

export default function Layout({children}) {
  return children
}
export const metadata: Metadata = {
  title: "ビンゴカード",
  description: "chakkun1121製のビンゴアプリのビンゴカードです。これを利用することでスマホやパソコンなどでビンゴができます。毎回、アクセスする際にカードは自動生成されます。",
  alternates: {
    canonical: "/card",
  },
}