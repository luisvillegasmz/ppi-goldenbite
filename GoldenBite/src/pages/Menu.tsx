import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

const categories = [
  'Todos',
  'Hamburguesas de Autor',
  'Cortes & Grill',
  'Entrantes Exclusivos',
  'Guarniciones Trufadas',
  'Postres & Vinos',
]

const dishes = [
  {
    id: '1',
    name: 'The Golden Truffle Burger',
    category: 'Hamburguesas de Autor',
    price: 28.5,
    badges: ['Gourmet', 'Chef Pick'],
    desc: '220g de Black Angus certificado, láminas de trufa negra Perigord, queso Raclette suizo fundido...',
    options: ['Poco Hecho', 'Al Punto', 'Hecho'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
  },
  {
    id: '2',
    name: 'Ribeye Añejo 45 Días',
    category: 'Cortes & Grill',
    price: 46,
    badges: ['Sin Gluten', 'Dry Aged'],
    desc: 'Corte de vaca vieja rubia gallega con 45 días de maduración en seco (Dry Aging). Asado al...',
    options: ['Pimientos Padrón', 'Puré Robuchon'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
  },
  {
    id: '3',
    name: 'Tartar de Wagyu con Caviar',
    category: 'Entrantes Exclusivos',
    price: 34,
    badges: ['A5 Imperial'],
    desc: 'Solomillo de Wagyu japonés cortado a cuchillo, emulsión de yema curada en ponzu, 10g de...',
    options: ['+ Caviar (+12€)', 'Receta Estándar'],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
  },
  {
    id: '4',
    name: 'Papas Rústicas al Parmesano & Trufa',
    category: 'Guarniciones Trufadas',
    price: 14.5,
    badges: ['Vegetariano', 'Sin Gluten'],
    desc: 'Papas agrias confitadas en grasa de pato y fritas a tres cocciones, lluvia de Parmigiano Reggiano...',
    options: ['Aioli Trufado', 'Brava Ahumada'],
    image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=600&q=80',
  },
  {
    id: '5',
    name: 'Pulpo Braseado al Carbón',
    category: 'Entrantes Exclusivos',
    price: 31,
    badges: ['Del Mar', 'Sin Gluten'],
    desc: 'Pata de pulpo de roca asada al carbón de marabú, causa limeña ahumada, emulsión de...',
    options: ['Suave Clásico', 'Toque Intenso'],
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
  },
  {
    id: '6',
    name: 'Esfera de Cacao Dorado & Avellana',
    category: 'Postres & Vinos',
    price: 16,
    badges: ['Gourmet', 'Postre Signature'],
    desc: 'Cúpula de cacao Valrhona 72%, mousse de avellanas del Piamonte tostadas, corazón de...',
    options: ['Pedro Ximénez (+7€)', 'Sin Maridaje'],
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80',
  },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = activeCategory === 'Todos'
    ? dishes
    : dishes.filter(d => d.category === activeCategory)

  return (
    <main className="menu-page">

      {/* ── HERO MENÚ ── */}
      <section className="menu-hero">
        <div className="menu-hero__bg" />
        <div className="menu-hero__overlay" />
        <div className="container menu-hero__content">
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>
            🌿 TEMPORADA DE OTOÑO & CAZA
          </span>
          <h1 className="menu-hero__title">Nuestra Carta Gourmet</h1>
          <p className="menu-hero__subtitle">
            Sabores de autor elaborados con ingredientes de origen seleccionado,
            maduraciones artesanales y el fuego preciso de nuestro grill de encina.
          </p>
        </div>
      </section>

      {/* ── FILTROS ── */}
      <div className="menu-filters">
        <div className="container menu-filters__inner">
          <div className="menu-filters__tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`menu-filters__tab ${activeCategory === cat ? 'menu-filters__tab--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="menu-filters__extra">
            ⚙ Filtrar Alérgenos
          </button>
        </div>
      </div>

      {/* ── GRID DE PLATOS ── */}
      <section className="menu-grid-section">
        <div className="container">
          <p className="section-label" style={{ marginBottom: '8px' }}>CAPÍTULO I</p>
          <h2 className="menu-section-title">Selección Culinaria</h2>
          <p className="menu-section-desc">
            Platos cocinados a baja temperatura, ahumados con leña noble y
            rematados con salsas reducidas durante 36 horas.
          </p>

          <div className="menu-grid">
            {filtered.map(dish => (
              <div key={dish.id} className="menu-card">
                <div className="menu-card__img-wrap">
                  <img src={dish.image} alt={dish.name} className="menu-card__img" />
                  <div className="menu-card__badges">
                    {dish.badges.map(b => (
                      <span key={b} className="badge">{b}</span>
                    ))}
                  </div>
                  <span className="menu-card__price">{dish.price.toFixed(2)} €</span>
                </div>

                <div className="menu-card__body">
                  <h3 className="menu-card__name">{dish.name}</h3>
                  <p className="menu-card__desc">{dish.desc}</p>

                  <div className="menu-card__options">
                    {dish.options.map((opt, i) => (
                      <button
                        key={opt}
                        className={`menu-card__opt ${i === 0 ? 'menu-card__opt--active' : ''}`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  <Link to={`/menu/${dish.id}`} className="menu-card__btn btn-gold">
                    🛒 Añadir al Carrito
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATO INSIGNIA ── */}
      <section className="insignia">
        <div className="container insignia__inner">
          <div className="insignia__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80"
              alt="Costilla de Wagyu"
              className="insignia__img"
            />
            <div className="insignia__chef-tag">
              <span>CREACIÓN DEL CHEF EJECUTIVO</span>
              <strong>Mateo de la Riva • Edición Limitada</strong>
            </div>
          </div>

          <div className="insignia__content">
            <p className="section-label">🏆 Plato Insignia de la Casa</p>
            <h2 className="insignia__title">
              Costilla de Wagyu Glaseada con Reducción de Oporto &amp; Colmenillas
            </h2>
            <p className="insignia__desc">
              Cocción lenta al vacío durante 48 horas a 62°C para preservar una textura que se deshebra
              al tenedor. Terminada con un glaseado brillante de su propio jugo emulsionado y colmenillas
              silvestres recolectadas en los valles del norte.
            </p>

            <div className="insignia__details">
              <div className="insignia__detail">
                <span className="insignia__detail-icon">🍷</span>
                <div>
                  <p className="insignia__detail-label">Maridaje del Sumiller</p>
                  <p className="insignia__detail-text">
                    Château Margaux Premier Grand Cru Classé (2015) — Notas de cedro, grosella negra
                    y violetas silvestres.
                  </p>
                </div>
              </div>
            </div>

            <div className="insignia__footer">
              <div>
                <p className="section-label" style={{ marginBottom: '4px' }}>Experiencia Completa</p>
                <span className="insignia__price">
                  58,00 €
                  <em style={{ fontSize: '13px', fontStyle: 'normal', color: 'var(--text-muted)' }}>
                    {' '}(con maridaje +24,00 €)
                  </em>
                </span>
              </div>
              <button className="btn-gold">🛒 Ordenar Especial</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}