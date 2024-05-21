import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <Link href={`/productos/${product.id}`}>
      <div className="border p-4 rounded-lg bg-white text-black shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img src={product.image} alt={product.name}className="w-full h-48 object-cover rounded-md" />
        <h2 className="text-xl font-bold mt-2">{product.name}</h2>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-green-600 font-bold">{`$${product.price}`}</p>
        <button className="bg-blue-500 text-white p-2 rounded mt-2">Ver Detalles</button>
      </div>
    </Link>
  );
}

export default ProductCard;
