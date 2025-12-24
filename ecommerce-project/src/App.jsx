import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router';
import { HomePage } from './Pages/HomePage'
import { CheckoutPage } from './Pages/CheckoutPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route index element={<HomePage />}></Route> // index = path = ''
      <Route path='checkout' element={<CheckoutPage />} />
    </Routes>
  )
}

export default App
