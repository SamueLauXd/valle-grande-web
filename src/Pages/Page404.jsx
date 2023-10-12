import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"

export function Page404 () {
    return (
        <div className="flex flex-col items-center justify-center gap-12">
            <img src="/src/assets/404.svg" alt="" />
            <h1>Uy! Te saliste del camino</h1>
            <Link to='/'>
                <Button variant="outlined" color="red" size="sm">Regresar</Button>
            </Link>
        </div>
    )
}