import '../styles/ProductGrid.css'
import { Link } from 'react-router-dom'
import products from '../data/products'

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card__link">
      <div className="product-card">
        <div className="product-card__image-wrapper">
          <img src={product.image} alt={product.name} className="product-card__image" />
          <button className="product-card__wishlist">♡</button>
        </div>
        <div className="product-card__info">
          <p className="product-card__category">{product.category}</p>
          <h3 className="product-card__name">{product.name}</h3>
          <p className="product-card__price">{product.price}</p>
        </div>
      </div>
    </Link>
  )
}

function ProductGrid() {
  return (
    <section className="product-grid">
      <h2 className="product-grid__title">New Arrivals</h2>
      <div className="product-grid__container">
        {products.slice(0, 6).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default ProductGrid