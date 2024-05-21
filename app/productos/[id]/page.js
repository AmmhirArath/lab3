'use client'
import Navbar from "../../components/Navbar";
import Link from "next/link";
import React, { useState } from "react";

const productos = [
  {
    id: 1,
    name: "Alimento ERA Seco",
    description: "Alimento seco para perros",
    price: 39.99,
    image:
      "https://melopetandgarden.com/cdn/shop/files/ERA100418_1.jpg?v=1699885519",
  },
  { 
    id: 2,
    name: "Alimento ERA Seco",
    description: "Alimento seco para perros",
    price: 39.99,
    image:
      "https://melopetandgarden.com/cdn/shop/files/ERA100418_1.jpg?v=1699885519",
  },
  {
    id: 3,
    name: "Alimento ERA Seco",
    description: "Alimento seco para perros",
    price: 39.99,
    image:
      "https://melopetandgarden.com/cdn/shop/files/ERA100418_1.jpg?v=1699885519",
  },
];

const ProductDetail = ({ params }) => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const addToCart = () => {
    setCartItemCount(prevCount => prevCount + 1);
  };

  const id = params.id;
  const product = productos.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar cartItemCount={cartItemCount} />
      <main className="container mx-auto p-4">
        <div className="mt-4">
          <Link href="/" className="text-blue-500 hover:underline">
            ← Volver a la lista de productos
          </Link>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.name}
              className="w-3/4 h-auto object-cover rounded-md mx-auto"
            />
          </div>

          <div className="md:w-1/2 md:ml-8">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-700 mt-4">{product.description}</p>
            <p className="text-green-600 font-bold text-2xl mt-4">{`$${product.price}`}</p>
            <button className="bg-blue-500 text-white p-2 rounded mt-4" onClick={addToCart}>
              Añadir al Carrito
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
