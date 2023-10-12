import { Link } from "react-router-dom"
import { productos } from "../mocks/productos"

export function ProductsList () {
    return (
        <ul className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-14">
            {
                productos.map(producto => (
                    <Link to={`./${producto.id}`} key={producto.id}>
                        <li className="w-56 flex flex-col justify-center items-center gap-4 px-6 py-3 rounded-lg shadow-md transition-all duration-200 hover:shadow-xl border border-solid border-green-dark border-opacity-20">
                                <img className="w-20" src="./src/assets/vallegrande-logo.svg" alt="" />
                                <h3>{producto.name}</h3>
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}