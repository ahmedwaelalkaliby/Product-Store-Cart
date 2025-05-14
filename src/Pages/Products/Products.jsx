import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cartSlice'
import './Products.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    toast.success('Added to cart!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
  }

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading products...</p>
    </div>
  )
  if (error) return <div>Error: {error}</div>

  return (
    <>
      <ToastContainer />
      <div className="products-container">
        <h1 className="products-title">Our Products</h1>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-image" />
              </div>
              <div className="product-info">
                <h2 className="product-name">{product.title}</h2>
                <p className="product-description">{product.description}</p>
                <div className="product-price">${product.price}</div>
                <button 
                  className="add-to-cart-btn" 
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Products
