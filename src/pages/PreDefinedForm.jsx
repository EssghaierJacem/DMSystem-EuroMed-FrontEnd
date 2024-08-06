import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import BreadCrubms from '../components/BreadCrubms';
import CreateFormulaire from '../components/Form/CreateFormulaire';

function PreDefinedForm() {
  const [activeNav, setActiveNav] = useState('services');

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
