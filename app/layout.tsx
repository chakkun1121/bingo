import { Metadata, Viewport } from "next";
import "./globals.css";
import { ReactNode, StrictMode } from "react";
import Header from "./_components/header";
import Footer from "./_components/footer";
import AppProvider from "./provider/recoil";
const title = "ビンゴアプリ | chakkun1121";
const titleShort = "ビンゴアプリ | chakkun1121";
const url = "https://chakkun1121.github.io/bingo/";
const themeColor = "#BBD0BA";
const description =
  "chakkun1121が作成したビンゴアプリです。これはブラウザ上でビンゴカードやビンゴマシーンを使えます。イベントの準備で役立つビンゴカードの一斉印刷にも対応しています。また、イベントのロゴも設定できます。";
const imageURL = "/img/bingo.png";
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: `%s | ${titleShort}`,
  },
  description,
  openGraph: {
    title,
    description,
    url,
    type: "website",
    images: [
      {
        url: imageURL,
        width: 1366,
        height: 768,
      },
    ],
    locale: "ja_JP",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "chakkun1121", url: "https://chakkun1121.github.io/" }],
  twitter: {
    card: "summary",
    site: "@chakkun1121",
    creator: "@chakkun1121",
    title,
    description,
    images: [
      {
        url: imageURL,
        width: 1366,
        height: 768,
      },
    ],
  },
  manifest: "./manifest.json",
};
export const viewport: Viewport = {
  themeColor,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      {/* <StrictMode> */}
      <AppProvider>
        <body className="flex min-h-screen flex-col">
          <Header />
          <main className="gap-22 col-span-full flex flex-col flex-1 p-4">
            {children}
          </main>
          <Footer />
        </body>
      </AppProvider>
      {/* </StrictMode> */}
    </html>
  );
}
