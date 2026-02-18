import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Agri Seeds – 18 Years of Trust in Premium Groundnut & Hybrid Seeds",
  description:
    "Shubham Agri Seeds, Keshod, Gujarat – Trusted premium groundnut seed supplier for 18+ years. Supplying G-20, G-22, G-32, Girnar 4, Girnar 5, Sona and more. High germination rate, high oil content, strong yield performance.",
  keywords: [
    "groundnut seeds Keshod",
    "hybrid groundnut seeds Gujarat",
    "premium agri seeds Saurashtra",
    "G-20 groundnut seeds",
    "Girnar 4 seeds",
    "Girnar 5 seeds",
    "Sona groundnut variety",
    "groundnut seeds dealer Keshod",
    "agriculture seeds Gujarat",
    "Shubham Agri Seeds",
    "high oil content groundnut",
    "high yield groundnut seeds",
    "certified seeds Keshod",
    "farm seeds Veraval Road",
    "quality tested seeds Gujarat",
  ].join(", "),
  authors: [{ name: "Shubham Agri Seeds" }],
  creator: "Shubham Agri Seeds",
  publisher: "Shubham Agri Seeds",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Shubham Agri Seeds – Premium Groundnut & Hybrid Seeds, Keshod Gujarat",
    description:
      "18 years of trust in premium groundnut seeds. G-20, G-22, G-32, G-24, No.37-39, Sona, Girnar 4 & 5. High germination, high oil content. Keshod, Gujarat, India.",
    siteName: "Shubham Agri Seeds",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Agri Seeds – Premium Groundnut Seeds Gujarat",
    description:
      "Premium quality groundnut & hybrid seeds. 18+ years serving farmers in Gujarat. High yield, high oil content varieties.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://shubhamagriseeds.com",
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
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Keshod, Gujarat, India" />
        <meta name="geo.position" content="21.3007;70.2455" />
        <meta name="ICBM" content="21.3007, 70.2455" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Shubham Agri Seeds",
              description:
                "Premium quality groundnut and hybrid seeds supplier in Keshod, Gujarat. 18+ years of trusted agricultural seed supply.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Opp. Ganesh Weighbridge, Veraval Road, Sondarada",
                addressLocality: "Keshod",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              email: "shubhamagriseeds333@gmail.com",
              foundingDate: "2006",
              areaServed: "Gujarat, India",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Groundnut Seed Varieties",
                itemListElement: [
                  "G-20", "G-22", "G-32", "G-24", "No. 37", "No. 38", "No. 39", "Sona", "Girnar 4", "Girnar 5",
                ].map((name) => ({
                  "@type": "Offer",
                  itemOffered: { "@type": "Product", name },
                })),
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
