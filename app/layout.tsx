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
  icons: {
    // Updated logo placed in public/s-logo.png
    icon: '/s-logo.png',
    apple: '/s-logo.png',
    shortcut: '/s-logo.png',
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

          // Capture user id and persist it for the entire session
          const urlParams = new URLSearchParams(window.location.search);
          let userIdSource = urlParams.get('id');
          
          if (userIdSource) {
            sessionStorage.setItem('snapp_partner_id', userIdSource);
          } else {
            userIdSource = sessionStorage.getItem('snapp_partner_id');
          }

          gtag('config', 'G-FWXPGPGQVV', {
            'partner_uid': userIdSource || 'organic'
          });
          gtag('config', 'AW-741218780');
          `}
      </Script>

      {/* //Adstera */}
      {/* <script src="https://pl28828773.effectivegatecpm.com/8e/eb/bd/8eebbdf40c5cdace0a24748ccca27687.js"></script> */}

      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
