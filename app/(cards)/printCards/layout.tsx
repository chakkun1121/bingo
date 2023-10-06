import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ビンゴカードをまとめて印刷",
  description:
    "ビンゴカードをまとめて印刷するページです。イベントの準備などの際にご利用ください。",
  alternates: {
    canonical: "/printCards",
  },
};

export default function Layout({ children }) {
  return children;
}
