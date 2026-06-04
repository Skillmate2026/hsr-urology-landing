import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Urologist in HSR Layout, Bangalore | Dr. Caranj S. Venugopal | HSR Urology Clinic",
  description: "Blood in urine, kidney stones, UTIs, prostate or men's health concerns? See an experienced urologist in HSR Layout. Evening appointments, Mon–Sat. Book online or call.",
  keywords: ["urologist HSR Layout", "urology clinic HSR", "kidney stone treatment", "prostate specialist", "urology doctor near me"],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Urologist in HSR Layout, Bangalore | HSR Urology Clinic",
    description: "See an experienced urologist in HSR Layout for kidney stones, UTIs, prostate and men's health concerns. Evening appointments, Mon–Sat.",
    url: "https://hsrurologyclinic.com",
    siteName: "HSR Urology Clinic",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KJQQ9CJ7');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Microsoft Clarity is loaded via GTM, not hardcoded here. */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KJQQ9CJ7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}