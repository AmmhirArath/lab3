
import Link from "next/link";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = ({ cartItemCount }) => {
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
            href="/productos"
            className="text-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            ALIMENTOS
          </Link>
          <Link
            href="/carrito"
            className="text-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            MEDICAMENTOS
          </Link>
          <Link
            href="/contacto"
            className="text-white transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            ACCESORIOS
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/carrito" className="text-white font-bold">
            <LocalGroceryStoreIcon/>
            <span>{cartItemCount}</span>
          </Link>
          <Link href="/" className="text-white font-bold text-xl ml-4">
            <PersonIcon/>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
