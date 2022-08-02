import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from "./components/Sidebar.js"
import Navigation from "./components/Navbar.js"
import Home from './pages/Home.js'
import Clients from './pages/Clients.js'
import Sales from './pages/Sales.js'
import './App.scss';

function App() {
  return (
    <Router>
      <div className='flex'>
        <Sidebar />
        <div className='content w-100'>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sales' element={<Sales />} />
            <Route path='/clients' element={<Clients />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
