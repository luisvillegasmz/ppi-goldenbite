import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import ProductDetail from './pages/Productdetail'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/menu"        element={<Menu />} />
        <Route path="/menu/:id"    element={<ProductDetail />} />
        {/* Próximas páginas — se agregan aquí a medida que las creemos */}
        {/* <Route path="/login"     element={<Login />} /> */}
        {/* <Route path="/registro"  element={<Register />} /> */}
        {/* <Route path="/carrito"   element={<Cart />} /> */}
        {/* <Route path="/checkout"  element={<Checkout />} /> */}
        {/* <Route path="/perfil"    element={<Profile />} /> */}
        {/* <Route path="/admin"     element={<AdminDashboard />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App