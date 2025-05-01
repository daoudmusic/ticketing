import "./globals.css";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "daoud concerts – Buy Tickets Now",
  description: "Artist-first concert ticketing. Transparent. Emotional. Beautiful.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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

      <div className="font-sans bg-white text-black min-h-screen flex flex-col">
        <header className="w-full flex justify-between items-center px-6 py-4 border-b bg-white shadow-sm">
          <Link href="/">
            <img src="/daoud-logo.svg" alt="daoud concerts" className="h-10" />
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/admin">Admin</Link>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="p-6 text-center text-xs text-gray-500">
          <img src="/daoud-logo.svg" alt="daoud footer logo" className="mx-auto mb-2 h-6" />
          © 2025 daoud concerts. All rights reserved.
        </footer>
      </div>
    </>
  );
}
