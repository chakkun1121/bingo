import { Metadata } from "next";

export default function Layout({ children }) {
  return children;
}
export const metadata: Metadata = {
  title: "ビンゴカードをまとめて印刷",
  description: "ビンゴカードをまとめて印刷するためのページです。",
  alternates: {
    canonical: "/printCards",
  },
  robots: "noindex",
};
