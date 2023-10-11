import { useParams } from "react-router-dom"
import { Nav } from "../components/Nav"

export function ProductDetail () {

    const {id} = useParams()

    return (
        <div>
            <Nav/>
            <h1>{id}</h1>
        </div>
    )
}