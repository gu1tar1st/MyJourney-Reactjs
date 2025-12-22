import { useState } from 'react'
import './App.css'
import TheForm from './components/TheForm'

function App() {
  const [showPassword, update] = useState(false);
  return (
      <>
          <TheForm 
              showPassword={showPassword}
              update={update}
          />
      </>
  )
}

export default App
