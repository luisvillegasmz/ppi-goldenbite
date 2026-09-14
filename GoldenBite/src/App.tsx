import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import OrderTracking from './pages/OrderTracking'
import Locations from './pages/Locations'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/menu"          element={<Menu />} />
          <Route path="/menu/:id"      element={<ProductDetail />} />
          <Route path="/login"         element={<Login />} />
          <Route path="/registro"      element={<Register />} />
          <Route path="/recuperar"     element={<ForgotPassword />} />
          <Route path="/carrito"       element={<Cart />} />
          <Route path="/checkout"      element={<Checkout />} />
          <Route path="/confirmacion"  element={<OrderConfirmation />} />
          <Route path="/seguimiento"   element={<OrderTracking />} />
          <Route path="/ubicaciones"   element={<Locations />} />
          {/* Próximas páginas */}
          {/* <Route path="/perfil"   element={<Profile />} /> */}
          {/* <Route path="/admin"    element={<AdminDashboard />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App