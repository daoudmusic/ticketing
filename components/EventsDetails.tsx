"use client";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function EventDetails({
  eventId,
  name,
  date,
  price,
  image = "/daoud-event-default.jpg",
}: {
  eventId: string;
  name: string;
  date: string;
  price: number;
  image?: string;
}) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="min-h-screen px-6 py-12 bg-white text-black">
      <div className="max-w-3xl mx-auto">
        <img src={image} alt={name} className="w-full h-96 object-cover rounded mb-6" />
        <h1 className="text-4xl font-bold mb-2">{name}</h1>
        <p className="text-gray-600 mb-4">
          {date} – {price} €
        </p>

        <div className="flex items-center gap-4 mb-6">
          <button
            className="text-xl px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            -
          </button>
          <span className="text-xl w-8 text-center">{quantity}</span>
          <button
            className="text-xl px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </button>
        </div>

        <button
          onClick={() => addToCart({ eventId, name, quantity, price })}
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          Add {quantity} to Cart
        </button>
      </div>
    </main>
  );
}
