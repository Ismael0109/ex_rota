import { BrowserRouter, Route, Routes } from "react-router-dom"
import Menu from "./components/Menu"
import Home from "./pages/Home"
import Produtos from "./pages/Produtos"
import Contato from "./pages/Contato"
import Empresa from "./pages/Empresa"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Empresa" element={<Empresa />} />
        <Route path="/Produtos" element={<Produtos />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
