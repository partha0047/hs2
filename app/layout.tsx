import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Siti Express Premium Homestay",
  description: "Siti Express Premium Homestay - Experience luxury and comfort in our carefully curated collection of premium accommodations. Boutique homestays in the most desirable destinations.",
  openGraph: {
    title: "Siti Express Premium Homestay",
    description: "Siti Express Premium Homestay - Experience luxury and comfort in our carefully curated collection of premium accommodations.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Siti Express",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siti Express Premium Homestay",
    description: "Siti Express Premium Homestay - Experience luxury and comfort in our carefully curated collection of premium accommodations.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Siti Express",
              description: "Premium homestays offering luxury accommodations",
              image: "/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "City",
                addressCountry: "Country",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
