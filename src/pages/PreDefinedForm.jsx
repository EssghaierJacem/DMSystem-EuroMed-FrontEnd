import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import BreadCrubms from '../components/BreadCrubms';
import CreateFormulaire from '../components/Form/CreateFormulaire';

function PreDefinedForm() {
    const [activeNav, setActiveNav] = useState('services');
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        const societeId = localStorage.getItem('societeId');

        if (!userId) {
            navigate('/login'); // Redirect to login if no user ID
        } else if (societeId === 'null' || societeId === 'NaN') {
            navigate('/Add_Societe'); // Redirect to Add Societe if societeId is null or NaN
        }
    }, [navigate]);

    return (
        <>
            <Header active={activeNav} onNavClick={setActiveNav} />
            <BreadCrubms
                title="Créez Votre Formulaire Sur-Mesure"
                subtitle="Personnalisez et optimisez votre formulaire selon vos besoins."
            />
            <Section>
                <CreateFormulaire isPrefilled={true} />
            </Section>
            <Footer />
        </>
    );
}

export default PreDefinedForm;
