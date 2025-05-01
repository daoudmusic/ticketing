import EventDetails from "@/components/EventDetails";

export default function MetronumEventPage() {
  const event = {
    id: "metronum-may23",
    name: "daoud @ Le Metronum",
    date: "23 May 2024",
    price: 15,
    ticketsLeft: 100,
    image: "/daoud-event-default.jpg",
    venue: "Le Metronum",
    location: "Toulouse",
  };

  return <EventDetails event={event} />;
}
