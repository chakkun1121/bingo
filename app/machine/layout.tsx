import { Metadata } from "next";

export default function Layout({ children }) {
  return children;
}
export const metadata: Metadata = {
  title: "ビンゴマシーン",
  description:
    "ビンゴマシーン本体です。操作画面を分離できるのでスクリーンに投影する際に楽です。",
  alternates: {
    canonical: "/machine",
  },
};
