import './App.css'
import { Header } from './components/Header.jsx';
import { Routes, Route, Navigate } from 'react-router';
import { PageOne } from './pages/PageOne.jsx';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<PageOne />} />
        <Route path='/link' element={<Navigate to="https://www.youtube.com" />} />
      </Routes>
    </>
  )
}

export default App
