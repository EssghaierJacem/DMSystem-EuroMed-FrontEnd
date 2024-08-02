import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import Section from '../components/Section';
import BreadCrubms from '../components/BreadCrubms';
import CreateFormulaire from '../components/Form/CreateFormulaire';

function Form() {
  return (
    <>
      <Header />
      <BreadCrubms></BreadCrubms>
      <Section>
        <CreateFormulaire></CreateFormulaire>
      </Section>
      <Footer />
    </>
  );
}

export default Form;