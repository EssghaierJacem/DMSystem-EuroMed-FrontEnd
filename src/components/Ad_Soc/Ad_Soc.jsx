import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Section from '../Section';
import BreadCrubms from '../BreadCrubms';
import AdresseF from './AdresseF';
import SocieteF from './SocieteF';
import ReviewForm from './ReviewForm'; 
import axiosInstance from '../../axios';
import { useNavigate } from 'react-router-dom';

function Ad_Soc() {
  const [formData, setFormData] = useState({
    raisonSociale: '',
    email: '',
    telephone: '',
    personneContact: '',
    matricule: '',
    taille: '',
    domaine: '',
    adresse1: '',
    adresse2: '',
    codePostal: '',
    ville: '',
    pays: '',
  });

  const [step, setStep] = useState(1); 
  const [adresseId, setAdresseId] = useState(null); 
  const userId = localStorage.getItem('userId'); // User ID from local storage
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError(null); 
  };

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));

  const handleAddressSubmit = async () => {
    try {
      const adresseResponse = await axiosInstance.post("/adresse/create", {
        ligne1: formData.adresse1,
        ligne2: formData.adresse2,
        codePostal: formData.codePostal,
        ville: formData.ville,
        pays: formData.pays,
      });

      const newAdresseId = adresseResponse.data.id; 
      setAdresseId(newAdresseId); 
      nextStep(); 
    } catch (error) {
      setError("Une erreur est survenue lors de la création de l'adresse. Veuillez réessayer.");
      console.error("Error creating address", error);
    }
  };

  const handleSocieteSubmit = async () => {
    try {
      // Step 1: Create the society
      const societeResponse = await axiosInstance.post("/societes/create", {
        raisonSociale: formData.raisonSociale,
        email: formData.email,
        telephone: formData.telephone,
        personneContact: formData.personneContact,
        matricule: formData.matricule,
        taille: formData.taille,
        domaine: formData.domaine,
        adresseId: adresseId, 
      });

      const newSocieteId = societeResponse.data.id;

      // Step 2: Update the user with the new societeId
      await axiosInstance.put(`/utilisateur/update/${userId}`, {
        societeId: newSocieteId,
      });

      // Optionally, store the new societeId in local storage
      localStorage.setItem('societeId', newSocieteId);
      
      console.log("Form submitted successfully", societeResponse.data);
      navigate("/"); // Redirect after successful submission
    } catch (error) {
      setError("Une erreur est survenue lors de la soumission du formulaire. Veuillez réessayer.");
      console.error("Error submitting society form", error);
    }
  };

  return (
    <>
      <Header />
      <BreadCrubms
        title="Créer Votre Société"
        subtitle="Remplissez les informations requises pour créer votre société."
      />
      <Section>
        <div className="row g-md-5 g-4">
          <div className="contact-details">
            <div className="error-message">{error && <div>{error}</div>}</div> {/* Display error message */}
            <section className="contact-section pb-md-5 pb-0">
              <div className='contact-details'>
                {step === 1 && (
                  <div>
                    <h2>Étape 1: Adresse</h2>
                    <AdresseF formData={formData} handleChange={handleChange} />
                    <div className="button-group mt-4">
                      <button className="btn-solid" onClick={handleAddressSubmit}>Suivant</button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2>Étape 2: Société</h2>
                    <SocieteF formData={formData} handleChange={handleChange} />
                    <div className="button-group mt-4">
                      <button className="btn-outline" onClick={prevStep}>Précédent</button>
                      <button className="btn-solid" onClick={nextStep}>Suivant</button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2>Étape 3: Révision et Soumission</h2>
                    <ReviewForm formData={formData} handleSubmit={handleSocieteSubmit} />
                    <div className="button-group mt-4">
                      <button className="btn-outline" onClick={prevStep}>Précédent</button>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}

export default Ad_Soc;
