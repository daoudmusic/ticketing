"use client";
import { useCart } from "../../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Your Tickets</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">
            Your cart is empty. <Link href="/events" className="underline">Browse concerts</Link>.
          </p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.eventId}
                className="border rounded p-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">x{item.quantity} ticket{item.quantity > 1 ? "s" : ""}</p>
                </div>
                <p className="font-bold">{item.price * item.quantity} €</p>
              </div>
            ))}

            <div className="flex justify-between text-lg font-bold pt-4 border-t mt-8">
              <span>Total</span>
              <span>{total} €</span>
            </div>

            <button className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition text-lg">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
