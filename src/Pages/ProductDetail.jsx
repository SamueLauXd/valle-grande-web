import { useParams } from "react-router-dom"
import { Nav } from "../components/Nav"
import { Link } from "react-router-dom"
import { Button } from "@material-tailwind/react"

export function ProductDetail () {

    const {id} = useParams()

    return (
        <div>
            <Nav/>
            <section className="px-20 py-10">
                <Link to="/products">
                    <Button size="sm" className="flex items-center gap-3" variant="outlined" color="red">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#C5352C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 12l14 0" />
                        <path d="M5 12l6 6" />
                        <path d="M5 12l6 -6" />
                        </svg>
                        Regresar
                    </Button>
                </Link>
            </section>

            <section className="px-20 py-10">
                <h1>{id}</h1>
            </section>
        </div>
    )
}