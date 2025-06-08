import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Prime from './pages/Prime'
function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/prime' element={<Prime/>} />
        <Route path="*" element={<Home />} />
      </Routes>
  )
}

export default App
