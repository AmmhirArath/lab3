import React, { useContext } from 'react';
import { CartContext } from "./CartContext";

const ArticulosCarrito = ({ isCartOpen, toggleCart }) => {
  const { cart } = useContext(CartContext);

  return (
    isCartOpen && (
      <aside className="fixed right-0 top-0 bg-gray-200 w-1/4 h-full p-4 shadow-lg z-50">
        <div className="text-gray-800">
          <button onClick={toggleCart} className="text-red font-bold">
            X
          </button>
          <p>Artículos en el carrito:</p>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - Precio: {item.price}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    )
  );
};

export default ArticulosCarrito;
