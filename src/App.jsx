import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Form from './pages/Form'

function App() {
  return (
    <Router> 
      <Routes>
        <Route path   = '/' element={<Home />} />
        <Route path   = '/form' element={<Form />} />
      </Routes>
    </Router>
  )
}

export default App
