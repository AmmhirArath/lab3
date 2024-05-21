'use client'
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

const productos = [
  {
    id: 1,
    name: "Alimento ERA Seco",
    description: "Alimento seco para perros",
    price: 39.99,
    image: "https://melopetandgarden.com/cdn/shop/files/ERA100418_1.jpg?v=1699885519",
  },
  {
    id: 2,
    name: "Alimento ERA Seco",
    description: "Alimento seco para perros",
    price: 39.99,
    image: "https://melopetandgarden.com/cdn/shop/files/ERA100418_1.jpg?v=1699885519",
  },
  {
    id: 3,
    name: "Alimento ERA Seco",
    description: "Alimento seco para perros",
    price: 39.99,
    image: "https://melopetandgarden.com/cdn/shop/files/ERA100418_1.jpg?v=1699885519",
  },
];

export default function Home() {
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = () => {
    setCartItemCount(prevCount => prevCount + 1);
  };

  return (
    <div className="bg-gray-100">
      <Navbar cartItemCount={cartItemCount} />
      <main className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-2">ALIMENTOS DESTACADOS</h2>
        <div className="flex">
          <div className="w-1/4">
            {/* Barra de filtro */}
            <h3 className="font-bold mb-2">Filtrar por categoría:</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-blue-500">Alimentos</button>
              </li>
              <li>
                <button className="text-blue-500">Medicamentos</button>
              </li>
              <li>
                <button className="text-blue-500">Accesorios</button>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {productos.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
