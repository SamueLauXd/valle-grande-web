import { Nav } from "../components/Nav"
import { Link } from "react-router-dom"
import { Button } from "@material-tailwind/react"

export function Landing () {
    return (
        <div>
                <Nav/>

            <section className="flex px-10 bg-landing-bg bg-cover py-36">
                <div className="flex flex-col gap-9">
                    <h1 className="font-bold text-8xl text-white">El dulce sabor <span className="text-yellow">Tradicional</span></h1>
                    <h5 className="text-white w-9/12">Sabores auténticos del Valle del Cauca. Deléitate con nuestros dulces típicos artesanales, que capturan la esencia y tradición de esta hermosa región. Descubre la dulzura que nos distingue.</h5>
                    <Link to="/about">
                        <Button color="green" size="lg" ripple>conocenos</Button>
                    </Link>
                </div>
                <div className="flex pr-16 items-center justify-center">
                    <img className="w-min" src="./src/assets/logo-grande.svg" alt="" />
                </div>
            </section>
        </div>
    )
}