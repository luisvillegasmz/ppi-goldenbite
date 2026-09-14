import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import ProductDetail from './pages/Productdetail'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Cart from './pages/Cart'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"                element={<Home />} />
          <Route path="/menu"            element={<Menu />} />
          <Route path="/menu/:id"        element={<ProductDetail />} />
          <Route path="/login"           element={<Login />} />
          <Route path="/registro"        element={<Register />} />
          <Route path="/recuperar"       element={<ForgotPassword />} />
          <Route path="/carrito"         element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App