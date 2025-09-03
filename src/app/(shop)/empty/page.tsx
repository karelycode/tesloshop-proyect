import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function () {
  return (
    <div className="flex justify-center items-center h-[800px]">
      <IoCartOutline size={100} className="mx-5" />
      <div>
        <h1 className="text-xl font-semibold">Tu carrito está vacío</h1>
        <Link href="/" className="text-blue-500 text-4xl mt-2">
          Ir a la tienda
        </Link>
      </div>
    </div>
  );
}
