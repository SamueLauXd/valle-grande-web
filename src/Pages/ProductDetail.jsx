import { useParams } from "react-router-dom"
import { Nav } from "../components/Nav"
import { Link } from "react-router-dom"
import { Button } from "@material-tailwind/react"
import { productos } from "../mocks/productos"
import { Footer } from "../components/Footer"

export function ProductDetail () {

    const {id} = useParams()
    const productDetail = productos.find(product => product.id === id)
    const {name} = productDetail
    
    return (
        <div>
            <Nav/>
            <section className="px-20 py-10">
                <Link to="/products">
                    <Button size="sm" className="flex items-center gap-3" variant="outlined" color="red">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E25241" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 12l14 0" />
                        <path d="M5 12l6 6" />
                        <path d="M5 12l6 -6" />
                        </svg>
                        Regresar
                    </Button>
                </Link>
            </section>

            <section className="px-20 py-10 flex justify-start gap-20">
                <div className="grid place-items-center border border-solid border-green-dark rounded-xl p-16">
                    <img src="/src/assets/vallegrande-logo.svg" alt="" />
                </div>
                <div>
                    <h1 className="font-bold text-3xl">{name}</h1>
                    <p>Descripcion del {name}</p>
                </div>
            </section>
            
            <Footer/>
        </div>
    )
}