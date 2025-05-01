import "./globals.css";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "daoud concerts – Buy Tickets Now",
  description: "Artist-first concert ticketing. Transparent. Emotional. Beautiful.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1555413468125784');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="font-sans bg-white text-black min-h-screen flex flex-col">
        <header className="w-full flex justify-between items-center px-6 py-4 border-b bg-white shadow-sm">
          <Link href="/">
            <img src="/logo.png" alt="daoud concerts" className="h-10" />
          </Link>
          <nav className="flex gap-6 text-sm items-center">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/admin">Admin</Link>
            <Link href="/cart" className="hover:animate-jiggle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835L5.805 6H19.5a.75.75 0 01.728.94l-1.5 6A.75.75 0 0118 13.5H7.125a.75.75 0 01-.728-.56L4.2 4.5H2.25M5.25 21a.75.75 0 100-1.5.75.75 0 000 1.5zm12.75 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
                />
              </svg>
            </Link>
          </nav>
        </header>

        <main className="flex-1
