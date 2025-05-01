// /app/events/bikini-nov12/page.tsx – Bikini Event Detail
import Link from "next/link";

export default function BikiniEvent() {
  return (
    <main className="min-h-screen px-6 py-12 bg-white text-black">
      <div className="max-w-3xl mx-auto">
        <img src="/daoud-event-default.jpg" alt="daoud bikini" className="w-full h-96 object-cover rounded mb-6" />
        <h1 className="text-4xl font-bold mb-2">daoud live @ Le Bikini</h1>
        <p className="text-gray-600 mb-4">November 12, 2025 – 20 €</p>
        <Link href="/cart" className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
          Buy Tickets
        </Link>
      </div>
    </main>
  );
}