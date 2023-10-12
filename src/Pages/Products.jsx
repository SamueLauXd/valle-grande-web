import { Nav } from "../components/Nav"
import { ProductsList } from "../components/ProductsList"
import { Footer } from "../components/Footer"

export function Products () {
    return (
        <div>
            <Nav/>
            <section className="flex justify-center py-32">
                <h1 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-redish to-yellow">Conoce nuestros productos
                </h1>
            </section>

            <section className="flex justify-center px-14">
                <ProductsList/>
            </section>

            <Footer/>
        </div>
    )
}