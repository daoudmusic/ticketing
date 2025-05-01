import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <img src="/daoud-logo.svg" alt="daoud logo" className="h-12 mb-6" />
        <h1 className="text-4xl font-bold mb-6">Welcome to daoud concerts</h1>
        <p className="text-lg">Live music that moves you. Transparent ticketing. Artist-first energy.</p>
      </div>
    </main>
  );
}