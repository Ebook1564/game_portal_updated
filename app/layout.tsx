import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from 'next';

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
