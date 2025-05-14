import { useSelector, useDispatch } from 'react-redux'
import { updateQuantity, removeItem } from '../../redux/features/cartSlice'
import './Cart.css'

function Cart() {
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const handleUpdateQuantity = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }))
  }

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = 10
  const total = subtotal + shipping

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="item-details">
                  <h3 className="item-name">{item.title}</h3>
                  <p className="item-price">${item.price}</p>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => handleRemoveItem(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
