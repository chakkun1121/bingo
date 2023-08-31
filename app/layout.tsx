import { Metadata } from 'next';
import './globals.css';
import { StrictMode } from 'react';
import Header from './_components/header';
import Footer from './_components/footer';
const title = "ビンゴアプリ | chakkun1121"
const titleShort = 'ビンゴアプリ | chakkun1121';
const url = 'https://chakkun1121.github.io/bingo';
export const themeColor = '#eeeeee';
const description =
  'chakkun1121が作成したビンゴアプリです。これはブラウザ上でビンゴカードやビンゴマシーンを使えます。イベントの準備で役立つビンゴカードの一斉印刷にも対応しています。また、イベントのロゴも設定できます。';
const imageURL = '/img/view-english.png';
export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${titleShort}`,
  },
  description,
  themeColor,
  metadataBase: new URL(url),
  openGraph: {
    title,
    description,
    url,
    type: 'website',
    images: [
      {
        url: imageURL,
        width: 1366,
        height: 768,
      },
    ],
    locale: 'ja_JP',
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: url,
  },
  authors: [{ name: 'chakkun1121', url: 'https://chakkun1121.github.io/' }],
  twitter: {
    card: 'summary',
    site: '@chakkun1121',
    creator: '@chakkun1121',
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
  verification: {
    google: '',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <StrictMode>
        <body className='flex min-h-screen flex-col'>
          <Header />
          <div className="mb-36 mt-14 w-full px-6 flex-grow">
            <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-12">
              <main className="gap-22 col-span-full flex flex-col">{children}</main>
            </div>
          </div>
          <Footer />
        </body>
      </StrictMode>
    </html>
  );
}