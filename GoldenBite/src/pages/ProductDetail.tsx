import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductDetail.css'

const product = {
  id: '1',
  name: 'The Golden Truffle Burger',
  price: 38,
  badges: ['Firma del Chef', 'Maduración 45 Días', 'Trufa Negra Melanosporum'],
  desc: 'Medallón de 220g de lomo bajo Wagyu madurado, fundido con queso Raclette del Valais, confitura de chalotas al oporto y lluvia generosa de trufa negra fresca de temporada sobre pan brioche horneado a diario.',
  images: [
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&q=80',
    'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&q=80',
    'https://images.unsplash.com/photo-1550317138-10000687a72b?w=800&q=80',
  ],
  cookingOptions: [
    { id: 'poco', label: 'Poco Hecho', sublabel: 'Sabor Intenso' },
    { id: 'punto', label: 'Al Punto', sublabel: 'Jugoso' },
    { id: 'hecho', label: 'Hecho', sublabel: 'Firme' },
  ],
  breadOptions: [
    { id: 'brioche', label: 'Brioche Glaseado de Masa Madre', desc: 'Mantequilla francesa AOP tostada lentamente', price: 0 },
    { id: 'gluten', label: 'Brioche Trufado Sin Gluten', desc: 'Certificado para celíacos, esponjoso y aromático', price: 2 },
  ],
  extras: [
    { id: 'trufa', label: 'Trufa Negra Melanosporum fresca', desc: 'Laminada al momento en mesa (+5 gramos)', price: 8 },
    { id: 'foie', label: 'Escalope de Foie Gras Poêlé', desc: 'Marcado al soplete con reducción de Pedro Ximénez', price: 6 },
    { id: 'raclette', label: 'Doble Fundido de Raclette Suizo', desc: 'Curación alpina de 6 meses', price: 4 },
  ],
  pairing: {
    name: 'Ribera del Duero Reserva 2018',
    price: 14,
    desc: 'Notas de roble tostado, ciruela negra madura y final balsámico de gran estructura mineral.',
  },
}

const relatedDishes = [
  {
    id: '4',
    name: 'Patatas al Doble Horno en Grasa de Pato',
    category: 'Entrante',
    price: 14,
    image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&q=80',
  },
  {
    id: '5',
    name: 'Cogollos Braseados y Nueces Pecanas',
    category: 'Frescura',
    price: 16.5,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80',
  },
  {
    id: '6',
    name: 'Lingote de Cacao Criollo 72% Oro',
    category: 'Postre de Autor',
    price: 18,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80',
  },
]

export default function ProductDetail() {
  const [activeImage, setActiveImage] = useState(0)
  const [cooking, setCooking] = useState('punto')
  const [bread, setBread] = useState('brioche')
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])
  const [addPairing, setAddPairing] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    )
  }

  const totalPrice = () => {
    let total = product.price
    const breadExtra = product.breadOptions.find(b => b.id === bread)?.price ?? 0
    total += breadExtra
    selectedExtras.forEach(extraId => {
      const e = product.extras.find(ex => ex.id === extraId)
      if (e) total += e.price
    })
    if (addPairing) total += product.pairing.price
    return (total * quantity).toFixed(2)
  }

  return (
    <main className="detail-page">
      <div className="container">

        {/* Breadcrumb */}
        <nav className="detail-breadcrumb">
          <Link to="/menu">Carta de Otoño</Link>
          <span>/</span>
          <Link to="/menu">Platos Principales</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <div className="detail-layout">

          {/* ── COLUMNA IZQUIERDA: Galería ── */}
          <div className="detail-gallery">
            <div className="detail-gallery__main">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="detail-gallery__img"
              />
              <span className="badge detail-gallery__label">
                Emplatado de Autor · Foto {activeImage + 1} de {product.images.length}
              </span>
            </div>

            <div className="detail-gallery__thumbs">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`detail-gallery__thumb ${activeImage === i ? 'detail-gallery__thumb--active' : ''}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={img} alt={`Vista ${i + 1}`} />
                </button>
              ))}
            </div>

            {/* Maridaje del sommelier */}
            <div className="detail-pairing">
              <div className="detail-pairing__icon">🍷</div>
              <div className="detail-pairing__info">
                <p className="detail-pairing__label">Maridaje seleccionado por sommelier</p>
                <p className="detail-pairing__name">{product.pairing.name}</p>
                <p className="detail-pairing__desc">{product.pairing.desc}</p>
              </div>
              <div className="detail-pairing__right">
                <span className="detail-pairing__price">+{product.pairing.price},00 €</span>
                <button
                  className={`btn-outline detail-pairing__btn ${addPairing ? 'active' : ''}`}
                  onClick={() => setAddPairing(!addPairing)}
                >
                  {addPairing ? '✓ Añadida' : '+ Añadir Copa'}
                </button>
              </div>
            </div>
          </div>

          {/* ── COLUMNA DERECHA: Info + Personalización ── */}
          <div className="detail-info">
            {/* Badges */}
            <div className="detail-info__badges">
              {product.badges.map(b => <span key={b} className="badge">{b}</span>)}
            </div>

            {/* Nombre y precio */}
            <div className="detail-info__header">
              <h1 className="detail-info__name">{product.name}</h1>
              <span className="detail-info__price">{product.price},00 €</span>
            </div>

            <p className="detail-info__desc">{product.desc}</p>

            {/* Punto de la carne */}
            <div className="detail-section">
              <div className="detail-section__header">
                <p className="detail-section__label">Punto de la Carne</p>
                <span className="detail-section__note">*Recomendación del Chef: Poco Hecho</span>
              </div>
              <div className="detail-cooking-opts">
                {product.cookingOptions.map(opt => (
                  <button
                    key={opt.id}
                    className={`detail-cooking-opt ${cooking === opt.id ? 'detail-cooking-opt--active' : ''}`}
                    onClick={() => setCooking(opt.id)}
                  >
                    <span className="detail-cooking-opt__label">{opt.label}</span>
                    <span className="detail-cooking-opt__sub">{opt.sublabel}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Pan artesanal */}
            <div className="detail-section">
              <p className="detail-section__label">Pan Artesanal</p>
              <div className="detail-radio-opts">
                {product.breadOptions.map(b => (
                  <label
                    key={b.id}
                    className={`detail-radio-opt ${bread === b.id ? 'detail-radio-opt--active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="bread"
                      checked={bread === b.id}
                      onChange={() => setBread(b.id)}
                    />
                    <div className="detail-radio-opt__content">
                      <div className="detail-radio-opt__top">
                        <span className="detail-radio-opt__name">{b.label}</span>
                        <span className="detail-radio-opt__price">
                          {b.price === 0 ? 'INCLUIDO' : `+${b.price},00 €`}
                        </span>
                      </div>
                      <span className="detail-radio-opt__desc">{b.desc}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Extras */}
            <div className="detail-section">
              <p className="detail-section__label">Extras Gastronómicos</p>
              <div className="detail-extras">
                {product.extras.map(ex => (
                  <label
                    key={ex.id}
                    className={`detail-extra ${selectedExtras.includes(ex.id) ? 'detail-extra--active' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedExtras.includes(ex.id)}
                      onChange={() => toggleExtra(ex.id)}
                    />
                    <div className="detail-extra__content">
                      <span className="detail-extra__name">{ex.label}</span>
                      <span className="detail-extra__desc">{ex.desc}</span>
                    </div>
                    <span className="detail-extra__price">+{ex.price},00 €</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Nota especial */}
            <div className="detail-section">
              <p className="detail-section__label">Peticiones Especiales para el Chef</p>
              <textarea
                className="detail-textarea"
                placeholder="Indique requerimientos específicos o preferencias de servicio..."
                rows={3}
              />
            </div>

            {/* Cantidad + Añadir al pedido */}
            <div className="detail-add">
              <div className="detail-quantity">
                <button
                  className="detail-quantity__btn"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >−</button>
                <span className="detail-quantity__value">{quantity}</span>
                <button
                  className="detail-quantity__btn"
                  onClick={() => setQuantity(q => q + 1)}
                >+</button>
              </div>

              <button className="btn-gold detail-add__btn">
                🛒 Añadir al Pedido · {totalPrice()} €
              </button>
            </div>

            <p className="detail-add__note">
              Servicio exclusivo para comensales en sala y experiencia privada a domicilio.
            </p>
          </div>
        </div>

        {/* ── COMPLEMENTOS ── */}
        <section className="detail-related">
          <p className="section-label">Armonías Culinarias</p>
          <h2 className="detail-related__title">Complementos Ideales de Nuestra Carta</h2>
          <div className="detail-related__grid">
            {relatedDishes.map(r => (
              <div key={r.id} className="related-card">
                <div className="related-card__img-wrap">
                  <img src={r.image} alt={r.name} className="related-card__img" />
                  <span className="badge related-card__badge">{r.category}</span>
                </div>
                <div className="related-card__body">
                  <h3 className="related-card__name">{r.name}</h3>
                  <div className="related-card__footer">
                    <span className="related-card__price">{r.price.toFixed(2)} €</span>
                    <button className="btn-outline related-card__btn">
                      + Añadir a la Experiencia
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}