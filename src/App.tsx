import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Waitlist from './pages/Waitlist'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/waitlist" element={<Waitlist />} />
    </Routes>
  )
}

export default App
