import React from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Form from './pages/Form'
import { BrowserRouter, Routes, Route,} from 'react-router-dom'


function App() {
  return (
    
    <div>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/form' element={<Form/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App