import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
const [darkMode, setDarkMode] = useState(false)
  // TODO: Implement state for cart management
const [cart, setCart] = useState([])
  // TODO: Implement state for category filtering
const [category, setCategory] = useState('all')

const toggleDarkMode = () => {
  setDarkMode(prev => !prev)
}

const addToCart = (product) => {
  setCart(prev => [...prev, product])
}

const handleCategoryChange = (e) => {
  setCategory(e.target.value)
}

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
        <DarkModeToggle
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          />
      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Bike">Bike</option>
        <option value="Veggies">Veggies</option>
      </select>

      <ProductList 
        category={category}
        addToCart={addToCart}
      
      />

      {/* TODO: Implement and render Cart component */}
      <Cart cart={cart} />
    </div>
  )
}

export default App
