import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import Section from '../components/Section';
import BreadCrubms from '../components/BreadCrubms';
import CreateFormulaire from '../components/Form/CreateFormulaire';

function Form() {
  const [activeNav, setActiveNav] = useState('services');
  const navigate = useNavigate();

  useEffect(() => {
      const userId = localStorage.getItem('userId');
      const societeId = localStorage.getItem('societeId');

      if (!userId) {
          navigate('/login');
      } else if (societeId === 'null' || societeId === 'NaN') {
          navigate('/Add_Societe'); 
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
        <CreateFormulaire isPrefilled={false} />
      </Section>
      <Footer />
    </>
  );
}

export default Form;
