import EventDetails from '@/components/EventDetails.tsx'; // adjust as necessary


export default function BikiniEventPage() {
  const event = {
    id: "bikini-nov12",
    name: "daoud @ Le Bikini",
    date: "12 November 2024",
    price: 20,
    ticketsLeft: 100,
    image: "/daoud-event-default.jpg",
    venue: "Le Bikini",
    location: "Toulouse",
  };

  return <EventDetails event={event} />;
}
