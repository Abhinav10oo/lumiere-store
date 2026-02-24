import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import products from '../data/products'
import { useCart } from '../context/CartContext'
import Toast from '../components/Toast'
import '../styles/ProductDetail.css'
import useImageLoad from '../hooks/useImageLoad'


function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const [selectedSize, setSelectedSize] = useState(null)
  const [toast, setToast] = useState(null)
  const { addToCart } = useCart()
  const imgRef = useImageLoad()

  if (!product) {
    return (
      <div className="product-detail__not-found">
        <p>Product not found.</p>
        <Link to="/products">Back to Products</Link>
      </div>
    )
  }

  function handleAddToCart() {
    if (!selectedSize) {
      setToast('Please select a size')
      return
    }
    addToCart(product, selectedSize)
    setToast(`${product.name} added to cart!`)
  }

  return (
    <section className="product-detail">
      <div className="product-detail__image-wrapper">
        <img ref={imgRef} src={product.image} alt={product.name} className="product-detail__image" />
      </div>

      <div className="product-detail__info">
        <p className="product-detail__category">{product.category}</p>
        <h1 className="product-detail__name">{product.name}</h1>
        <p className="product-detail__price">{product.price}</p>
        <p className="product-detail__description">{product.description}</p>

        <div className="product-detail__sizes">
          <p className="product-detail__sizes-label">Select Size</p>
          <div className="product-detail__sizes-grid">
            {product.sizes.map(size => (
              <button
                key={size}
                className={`product-detail__size-btn ${selectedSize === size ? 'active' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="product-detail__add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>

        <Link to="/products" className="product-detail__back">← Back to Products</Link>
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </section>
  )
}

export default ProductDetail