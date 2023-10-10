import { NavLink } from "react-router-dom"

export function Nav () {

    const isActive = ({isActive}) => {
        return isActive
        ? 'text-red border-b border-solid border-red'
        : 'hover:text-yellow'
    }

    return (
        <nav className="flex justify-between items-center w-full">
            <NavLink to='/'>
                <img className="w-20" src="./src/assets/vallegrande-logo.svg" alt="logo de la empresa" />
            </NavLink>
            <div className="flex items-center gap-6">
                <NavLink to='/products' className={isActive}>Products</NavLink>
                <NavLink to='/about' className={isActive}>Acerca de nosotros</NavLink>
                <NavLink to='/contact' className={isActive}>Contáctanos</NavLink>
            </div>
        </nav>
    )
}