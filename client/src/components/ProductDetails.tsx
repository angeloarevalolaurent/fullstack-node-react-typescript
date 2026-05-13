import { useNavigate } from "react-router-dom";
import type { Product } from "../types";
import { formatCurrency } from "../utils";

type ProductDetailsProps = {
    product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {

    const navigate = useNavigate()
    const isavailability = product.availability

  return (
    <>
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                {isavailability ? "En Stock" : "Sin Stock"}
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                <div className="flex gap-2 items-center">
                    <button onClick={() => navigate(`/productos/${product.id}/editar`)}
                        className="rounded-md bg-indigo-600 p-2 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
                    >
                        Editar
                    </button>
                </div>
            </td>
        </tr> 
    </>
  )
}
