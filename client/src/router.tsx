import { createBrowserRouter } from "react-router-dom"
import Layouts from "./layouts/Layouts"
import Products from "./views/Products"
import NewProduct, {action as newProductAction} from "./views/NewProduct"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts />,
        children: [
            {
                index: true,
                element: <Products />
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction
            }
        ]
    }
])