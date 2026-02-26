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
      {/* Google Analytics - gtag.js */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FWXPGPGQVV"
        strategy="afterInteractive"
      />

      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());

          gtag('config', 'G-FWXPGPGQVV');`}
      </Script>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
