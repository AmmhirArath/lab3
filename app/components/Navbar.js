import React, { useContext, useState } from 'react';
import Link from "next/link";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PersonIcon from '@mui/icons-material/Person';
import { CartContext } from "./CartContext";
import ArticulosCarrito from './CartArticle';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-white font-bold text-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          WANDIS PET
        </Link>
        <div className="space-x-4">
          <Link
            href="/"
            className="text-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            ALIMENTOS
          </Link>
          <Link
            href="/"
            className="text-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            MEDICAMENTOS
          </Link>
          <Link
            href="/"
            className="text-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            ACCESORIOS
          </Link>
        </div>
        <div className="flex items-center">
          <button onClick={toggleCart} className="text-white font-bold">
            <LocalGroceryStoreIcon />
            <span>{cart.length}</span> {/* Mostrar la cantidad de artículos en el carrito */}
          </button>
          <Link href="/" className="text-white font-bold text-xl ml-4">
            <PersonIcon />
          </Link>
        </div>
      </div>
      <ArticulosCarrito isCartOpen={isCartOpen} toggleCart={toggleCart} />
    </nav>
  );
};

export default Navbar;
