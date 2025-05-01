import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import { CartProvider } from "../context/CartContext";
import { useCart } from "../context/CartContext";

export const metadata = {
  title: "daoud concerts – Buy Tickets Now",
  description: "Artist-first concert ticketing. Transparent. Emotional. Beautiful.",
};

function Header() {
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 border-b bg-white shadow-sm">
      <Link href="/">
        <img src="/logo.png" alt="daoud concerts" className="h-10" />
      </Link>
      <nav className="flex gap-6 text-sm items-center">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/cart" className="relative hover:animate-jiggle">
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
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}

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
            if(!f._fb_
