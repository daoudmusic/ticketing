import "./globals.css";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "daoud concerts – Buy Tickets Now",
  description: "Artist-first concert ticketing. Transparent. Emotional. Beautiful.",
  keywords: "daoud, concerts, tickets, music, live, france, europe, indie, electro, tour",
  openGraph: {
    title: "daoud concerts – Buy Tickets Now",
    description: "Artist-first concert ticketing. Transparent. Emotional. Beautiful.",
    url: "https://daoudconcerts.com",
    type: "website",
    images: [{ url: "/og-cover.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "daoud concerts – Buy Tickets Now",
    description: "Artist-first concert ticketing. Transparent. Emotional. Beautiful.",
    images: ["/og-cover.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <Script id="meta-pixel
