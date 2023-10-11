import { Nav } from "../components/Nav"
import { Link } from "react-router-dom"
import { Button } from "@material-tailwind/react"

export function Landing () {
    return (
        <div>
                <Nav/>

            <section className="flex flex-col items-center text-center gap-9 px-10 bg-landing-bg bg-cover py-36">
                <h1 className="font-bold text-8xl text-white w-6/12">El dulce sabor <span className="text-yellow">Tradicional</span></h1>
                <p className="text-white w-5/12">Sabores auténticos del Valle del Cauca. Deléitate con nuestros dulces típicos artesanales, que capturan la esencia y tradición de esta hermosa región. Descubre la dulzura que nos distingue.</p>
                <Link to="/about">
                    <Button color="red" size="large" className="rounded-full" ripple>conocenos</Button>
                </Link>
            </section>
        </div>
    )
}