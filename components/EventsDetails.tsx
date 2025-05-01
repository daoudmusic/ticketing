"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

type Event = {
  id: string;
  name: string;
  date: string;
  price: number;
  ticketsLeft: number;
  image: string;
  venue: string;
  location: string;
};

export default function EventDetails({ event }: { event: Event }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addToCart({
      eventId: event.id,
      name: event.name,
      price: event.price,
      quantity,
    });
  };

  const increase = () => {
    if (quantity < event.ticketsLeft) setQuantity((q) => q + 1);
  };

  const decrease = () => {
    if (quantity > 1) setQuantity((q) => q - 1);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto mt-10 flex flex-col md:flex-row gap-6 items-center">
      <img
        src={event.image}
        alt={event.name}
        className="w-64 h-64 object-cover rounded-lg"
      />
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl font-bold mb-2">{event.name}</h1>
        <p className="text-gray-600 mb-1">{event.date}</p>
        <p className="text-gray-600 mb-1">{event.venue}, {event.location}</p>
        <p className="text-lg font-semibold mb-4">{event.price.toFixed(2)} €</p>

        {event.ticketsLeft > 0 ? (
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button onClick={decrease} className="px-3 py-1 hover:bg-gray-100">−</button>
              <span className="px-4">{quantity}</span>
              <button onClick={increase} className="px-3 py-1 hover:bg-gray-100">+</button>
            </div>
            <button
              onClick={handleAdd}
              className="px-6 py-2 bg-black text-white rounded-lg hover:animate-jiggle"
            >
              Add to cart
            </button>
          </div>
        ) : (
          <p className="text-red-600 font-semibold">Sold out</p>
        )}
      </div>
    </div>
  );
}
