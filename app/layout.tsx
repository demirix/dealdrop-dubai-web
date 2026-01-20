import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DealDrop Dubai - Property Deals Before Anyone Else",
  description: "AI-powered scanner finds undervalued Dubai properties by comparing listings against official Dubai Land Department transaction data.",
  keywords: ["Dubai", "real estate", "property deals", "DLD", "Dubai Marina", "investment"],
  openGraph: {
    title: "DealDrop Dubai - Property Deals Before Anyone Else",
    description: "AI-powered scanner finds undervalued Dubai properties by comparing listings against official Dubai Land Department transaction data.",
    type: "website",
    locale: "en_AE",
    siteName: "DealDrop Dubai",
  },
  twitter: {
    card: "summary_large_image",
    title: "DealDrop Dubai - Property Deals Before Anyone Else",
    description: "AI-powered scanner finds undervalued Dubai properties",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
