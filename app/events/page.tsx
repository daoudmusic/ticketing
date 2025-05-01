// /app/events/page.tsx – Tour Page with Event Cards
import Link from "next/link";

const events = [
  {
    id: "bikini-nov12",
    name: "daoud live @ Le Bikini",
    date: "November 12, 2025",
    price: 20,
    slug: "bikini-nov12",
  },
  {
    id: "metronum-may23",
    name: "daoud live @ Le Metronum",
    date: "May 23, 2025",
    price: 15,
    slug: "metronum-may23",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-white text-black">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Upcoming Concerts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.slug}`}
              className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src="/daoud-event-default.jpg"
                alt={event.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{event.name}</h2>
                <p className="text-sm text-gray-600">{event.date}</p>
                <p className="mt-2 font-bold">{event.price} €</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}