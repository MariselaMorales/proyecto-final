
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Discografia from "./pages/Discografia"
import Contactos from "./pages/Contactos"
import Header from "./Componentes/Header"


function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Inicio/>} />
     <Route path="/Discografia" element={< Discografia />} />
      <Route path="/Contactos" element={<Contactos/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App