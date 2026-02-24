import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../styles/Cart.css'

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="cart__empty">
        <p>Your cart is empty.</p>
        <Link to="/products">Continue Shopping</Link>
      </div>
    )
  }

  return (
    <section className="cart">
      <h1 className="cart__title">Your Cart</h1>

      <div className="cart__container">
        <div className="cart__items">
          {cartItems.map(item => (
            <div key={`${item.id}-${item.size}`} className="cart__item">
              <img src={item.image} alt={item.name} className="cart__item-image" />

              <div className="cart__item-info">
                <p className="cart__item-category">{item.category}</p>
                <h3 className="cart__item-name">{item.name}</h3>
                <p className="cart__item-size">Size: {item.size}</p>
                <p className="cart__item-price">{item.price}</p>
              </div>

              <div className="cart__item-actions">
                <div className="cart__quantity">
                  <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>+</button>
                </div>
                <button className="cart__remove" onClick={() => removeFromCart(item.id, item.size)}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart__summary">
          <h2 className="cart__summary-title">Order Summary</h2>
          <div className="cart__summary-row">
            <span>Subtotal</span>
            <span>€{totalPrice.toFixed(2)}</span>
          </div>
          <div className="cart__summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="cart__summary-row cart__summary-total">
            <span>Total</span>
            <span>€{totalPrice.toFixed(2)}</span>
          </div>
          <button className="cart__checkout">Proceed to Checkout</button>
          <Link to="/products" className="cart__continue">Continue Shopping</Link>
        </div>
      </div>
    </section>
  )
}

export default Cart