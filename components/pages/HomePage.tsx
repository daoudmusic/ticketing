// Full multi-page concert ticketing site with top-tier performance, SEO, OG tags, and Meta Pixel

// app/page.tsx – Home (Event Listing)
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-black">
      <div className="max-w-5xl mx-auto text-center">
        <img
          src="/logo.png"
          alt="daoud logo"
          className="h-20 mx-auto mb-8"
        />
        <h1 className="text-5xl font-bold mb-6 tracking-tight">
          concerts by daoud
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transparent ticketing. Artist-first energy. Real music experiences in
          France & Europe. Buy tickets directly and safely.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/events"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition text-lg"
          >
            See Upcoming Concerts
          </Link>
        </div>
      </div>
    </main>
  );
}
