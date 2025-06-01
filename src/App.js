import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Form from './pages/Form';
import FormOptions from './pages/FormOptions';
import PreDefinedForm from './pages/PreDefinedForm';
import LoginRegister from './components/User/LoginRegister';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import Societe from './pages/Societe';
import HomeTab from './components/BackOffice/HomeTab';  
import NotFound404 from './components/NotFound404';
import Dashboard from './pages/Dashboard';
import FormulaireTab from './components/BackOffice/FormulaireTab';
import SocieteTab from './components/BackOffice/SocieteTab';
import AdresseTab from './components/BackOffice/AdresseTab';
import FormViewTab from './components/BackOffice/FormViewTab';
import SocieteViewTab from './components/BackOffice/SocieteViewTab';
import AdresseViewTab from './components/BackOffice/AdresseViewTab';
import Ad_Soc from './components/Ad_Soc/Ad_Soc';
import ProtectedRoute from './components/ProtectedRoute';
import Tutoriel from './pages/Tutoriel';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tutoriel" element={<Tutoriel />} />
                <Route path="/about" element={<About />} />
                <Route path="/Add_Societe" element={<Ad_Soc />} /> 
                <Route path="/form" element={<Form />} />
                <Route path="/predefined-form" element={<PreDefinedForm />} />
                <Route path="/form-options" element={<FormOptions />} />
                <Route path="/login" element={<LoginRegister />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/societe" element={<Societe />} />
                <Route 
                    path="/dashboard" 
                    element={<ProtectedRoute element={<Dashboard />} requiredRole="ADMIN" />} 
                >
                    <Route path="home" element={<HomeTab />} />
                    <Route path="societes" element={<SocieteTab />} />
                    <Route path="formulaires" element={<FormulaireTab />} />
                    <Route path="adresses" element={<AdresseTab />} />
                    <Route path="form/:id" element={<FormViewTab />} /> 
                    <Route path="societes/:id" element={<SocieteViewTab />} /> 
                    <Route path="adresses/:id" element={<AdresseViewTab />} /> 
                </Route>
                <Route path="*" element={<NotFound404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
