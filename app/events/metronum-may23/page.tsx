"use client";
import EventDetails from "../../../components/EventDetails";

export default function MetronumPage() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src="/daoud-event-default.jpg"
          alt="daoud at Le Metronum"
          className="w-full h-full object-cover aspect-square rounded"
        />
        <EventDetails
          eventId="metronum-may23"
          name="daoud live @ Le Metronum"
          date="May 23, 2025"
          price={15}
        />
      </div>
    </div>
  );
}
