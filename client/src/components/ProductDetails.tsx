import { Form, useNavigate, type ActionFunctionArgs, redirect } from "react-router-dom";
import type { Product } from "../types";
import { formatCurrency } from "../utils";
import { deleteProduct } from "../services/ProductService";

type ProductDetailsProps = {
    product: Product
}

export async function action({params}: ActionFunctionArgs) {
    if(params.id !== undefined){
        await deleteProduct(+params.id)
        return redirect('/')
    }

    return redirect('/')
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
                        className="rounded-lg bg-indigo-600 p-2 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
                    >
                        Editar
                    </button>

                    <Form
                        action={`/productos/${product.id}/eliminar`}
                        method="POST"
                        className="w-full"
                        onSubmit={(e)=> {
                            if (!confirm('¿Eliminar producto?')) {
                                e.preventDefault()
                            }
                        }}
                    >
                        <input
                            type="submit"
                            className="rounded-md bg-red-600 p-2 text-sm font-bold text-white shadow-sm hover:bg-red-500"
                            value="Eliminar"
                        />
                    </Form>
                </div>
            </td>
        </tr> 
    </>
  )
}
