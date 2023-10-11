import { NavLink } from "react-router-dom"

export function Nav () {

    const isActive = ({isActive}) => {
        return isActive
        ? 'text-redish border-b border-solid border-redish'
        : 'hover:text-yellow'
    }

    return (
        <nav className="flex justify-between items-center w-full px-10 py-3 bg-green-light text-green-dark">
            <NavLink to='/'>
                <img className="w-20 hover:scale-110 cursor-pointer transition-all duration-200" src="./src/assets/vallegrande-logo.svg" alt="logo de la empresa" />
            </NavLink>
            <div className="flex items-center gap-6">
                <NavLink to='/products' className={isActive}>Productos</NavLink>
                <NavLink to='/about' className={isActive}>Acerca de nosotros</NavLink>
                <NavLink to='/contact' className={isActive}>Contáctanos</NavLink>
            </div>
        </nav>
    )
}