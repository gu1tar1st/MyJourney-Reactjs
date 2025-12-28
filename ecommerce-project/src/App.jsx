import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router';
import { HomePage } from './Pages/home/HomePage'
import { CheckoutPage } from './Pages/checkout/CheckoutPage'
import { TrackingPage } from './Pages/TrackingPage'
import { OrdersPage } from './Pages/OrdersPage'
import axios from 'axios';

function App() {
  // const [count, setCount] = useState(0)
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Run only once
  // Config localhost:3000 shortcut in vite config
  useEffect(() => {
    axios.get('/api/products') // The same as fetch
      .then((response) => {
        setProducts(response.data);
      });

    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCartItems(response.data);
      })
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage products={products} cart={cartItems} />}></Route> // index = path = ''
      <Route path='checkout' element={<CheckoutPage cart={cartItems} />} />
      <Route path='tracking' element={<TrackingPage />} />
      <Route path='orders' element={<OrdersPage cart={cartItems}/>} />
    </Routes>
  )
}

export default App
