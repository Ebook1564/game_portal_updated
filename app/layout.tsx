import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from 'next';
import Script from "next/script";

const nekst = localFont({
  src: [
    {
      path: "../public/font/FontsFree-Net-Nekst-Bold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-nekst",
  display: "swap",
});

export const metadata: Metadata = {
  other: {
    'google-adsense-account': 'ca-pub-3518028158462445',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nekst.variable}>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6157121429363510"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
