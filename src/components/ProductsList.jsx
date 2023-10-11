import { Link } from "react-router-dom"
import { productos } from "../mocks/productos"

export function ProductsList () {
    return (
        <ul className="flex flex-wrap gap-9">
            {
                productos.map(producto => (
                    <div className="hover:scale-120" key={producto.id}>
                        <EachProduct id={producto.id} name={producto.name}/>
                    </div>
                ))
            }
        </ul>
    )
}

// eslint-disable-next-line react/prop-types
function EachProduct ({name, id}) {
    return (
        <Link to={`/products/${id}`}>
            <li className="w-56 flex flex-col justify-center items-center gap-4 justify-center px-6 py-3 rounded-lg shadow-md">
                    <img className="w-20" src="./src/assets/vallegrande-logo.svg" alt="" />
                    <h3>{name}</h3>
            </li>
        </Link>
    )
}