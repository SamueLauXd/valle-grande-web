import { Link } from "react-router-dom"
import { productos } from "../mocks/productos"

export function ProductsList () {
    return (
        <ul className="flex flex-wrap gap-9">
            {
                productos.map(producto => (
                    <Link to={`/products/${producto.id}`} key={producto.id}>
                        <li className="w-56 flex flex-col justify-center items-center gap-4 px-6 py-3 rounded-lg shadow-md">
                                <img className="w-20" src="./src/assets/vallegrande-logo.svg" alt="" />
                                <h3>{producto.name}</h3>
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}