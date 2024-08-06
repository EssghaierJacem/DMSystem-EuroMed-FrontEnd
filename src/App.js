import React from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Form from './pages/Form'
import FormOptions from './pages/FormOptions';
import PreDefinedForm from './pages/PreDefinedForm';
import { BrowserRouter, Routes, Route,} from 'react-router-dom'


function App() {
  return (
    
    <div>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/predefined-form' element={<PreDefinedForm />} />
          <Route path='/form-options' element={<FormOptions/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App