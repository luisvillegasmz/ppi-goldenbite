import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [cartCount] = useState(3)
  const location = useLocation()

  const links = [
    { to: '/menu',       label: 'Menú' },
    { to: '/reservas',   label: 'Reservas' },
    { to: '/ubicaciones',label: 'Ubicaciones' },
    { to: '/contacto',   label: 'Contacto' },
  ]

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">GOLDEN BITE</Link>

        {/* Links centrales */}
        <nav className="navbar__links">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`navbar__link ${location.pathname === l.to ? 'navbar__link--active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Acciones derecha */}
        <div className="navbar__actions">
          <span className="navbar__lang">ES</span>

          <Link to="/carrito" className="navbar__cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartCount > 0 && <span className="navbar__cart-badge">{cartCount}</span>}
          </Link>

          <Link to="/perfil" className="navbar__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </Link>

          <Link to="/reservas" className="btn-gold navbar__reservar">Reservar</Link>
        </div>
      </div>
    </header>
  )
}