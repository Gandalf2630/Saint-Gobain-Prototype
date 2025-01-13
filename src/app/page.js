import React from "react";
import { mockData } from "../data/data";
import ProductCard from "../components/productcard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-black text-yellow-400 p-6 text-center">
        <h1 className="text-4xl font-bold uppercase">Velkommen til Isover</h1>
        <p className="text-lg mt-2">Din ekspert i isoleringsløsninger</p>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Om Isover</h2>
          <p className="text-base text-gray-700">
            Isover tilbyder førsteklasses isoleringsmaterialer, der sikrer energieffektivitet og bæredygtighed. Vi er
            dedikeret til at hjælpe vores kunder med innovative løsninger.
          </p>
        </section>
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Kontakt os</h2>
          <p className="text-base text-gray-700">
            Har du spørgsmål? Kontakt vores team via e-mail eller telefon. Vi står klar til at hjælpe dig!
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-yellow-400 text-center p-4">
        <p className="text-sm">© 2025 Saint-Gobain. Alle rettigheder forbeholdes.</p>
      </footer>
    </div>
  );
}
