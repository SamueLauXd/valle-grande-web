import { Route, Routes } from "react-router-dom"
import { Landing } from "./Pages/Landing"
import { Products } from "./Pages/Products"
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"
import { ProductDetail } from "./Pages/ProductDetail"
import { Page404 } from "./Pages/page404"
import { Navigate } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/not-found" element={<Page404/>}/>
        <Route path="*" element={<Navigate to="/not-found"/>}/>
      </Routes>
    </>
  )
}

export default App
