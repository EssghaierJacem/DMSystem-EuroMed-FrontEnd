import React from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Form from './pages/Form'
import FormOptions from './pages/FormOptions';
import PreDefinedForm from './pages/PreDefinedForm';
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import NotFound404 from './components/NotFound404';


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
          <Route path='*' element={<NotFound404 />} /> 
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App