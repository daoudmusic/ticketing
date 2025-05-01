// /app/cart/page.tsx – Simple Cart Page
export default function CartPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-white text-black">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="border p-4 rounded mb-4">
          <p className="font-semibold">daoud live @ Le Bikini</p>
          <p className="text-sm text-gray-600">November 12, 2025</p>
          <p className="mt-1">1 × 20 €</p>
        </div>
        <div className="border p-4 rounded mb-6">
          <p className="font-semibold">daoud live @ Le Metronum</p>
          <p className="text-sm text-gray-600">May 23, 2025</p>
          <p className="mt-1">1 × 15 €</p>
        </div>
        <p className="text-xl font-bold">Total: 35 €</p>
        <button className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
          Checkout
        </button>
      </div>
    </main>
  );
}