import React, { useState } from 'react';
import ProcessusUPForm from './ProcessusUPForm';
import axiosInstance from '../../axios';

const CreateFormulaire = () => {
  const [formulaire, setFormulaire] = useState({
    nom: '',
    dateCreation: new Date().toISOString().slice(0, 10),
    version: 1,
    societe: { id: 1 },
    processusUPs: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSave = () => {
    setLoading(true);
    axiosInstance.post('/formulaires/save', formulaire)
      .then(response => {
        console.log('Formulaire saved:', response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error saving the formulaire!', error);
        setError('There was an error saving the formulaire.');
        setLoading(false);
      });
  };

  const handleSubmit = () => {
    setLoading(true);
    axiosInstance.post('/formulaires/create', formulaire)
      .then(response => {
        console.log('Formulaire submitted:', response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error creating the formulaire!', error);
        setError('There was an error creating the formulaire.');
        setLoading(false);
      });
  };

  const handleFormulaireChange = (e) => {
    const { name, value } = e.target;
    setFormulaire(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addProcessusUP = () => {
    setFormulaire(prevState => ({
      ...prevState,
      processusUPs: [
        ...prevState.processusUPs,
        { nom: '', processusPeres: [] }
      ]
    }));
  };

  return (
    
      <div className="crow g-lg-5 g-4">
        <div className="contact-details">
        <div className="title">
          <h2>Ajoutez une formulaire</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
        </div>
        <ul class="tab-section">
        <li class="active"><a href="">Quick service</a></li>
                <li><a href="">Social media</a></li>
                <li><a href="">Email generator</a></li>
                <li><a href="">Personal advisor</a></li>
                <li><a href="">Ecommerce</a></li>
        </ul>
        <section class="contact-section pb-md-5 pb-0">
          <div className='mb-3 form-group'>
        <form className="auth-form">
        <div class="mb-3 form-group">
            <div className="col-md-6">
            <div className='blog-content'>
              <a className='main-title'>Formulaire</a>
            </div>
              <div className="mb-3">
                <label htmlFor="nom" className="form-label">Nom du formulaire :</label>
                <input
                  type="text"
                  className="form-control"
                  id="nom"
                  name="nom"
                  placeholder="Saisir un nom"
                  value={formulaire.nom}
                  onChange={handleFormulaireChange}
                />
              </div>
              <button type="button" className="btn-solid mb-3" onClick={addProcessusUP}>
                Introduire un domaine
              </button>
            </div>
            <div className="col-md-6">
              {formulaire.processusUPs.map((processusUP, index) => (
                <ProcessusUPForm
                  key={index}
                  index={index}
                  processusUP={processusUP}
                  formulaire={formulaire}
                  setFormulaire={setFormulaire}
                />
              ))}
            </div>
            <div className="col-12 mt-4">
              {/* <button type="button" className="btn-solid me-2" onClick={handleSave} disabled={loading}>
                Save Formulaire
              </button> */}
              <button type="button" className="btn-solid" onClick={handleSubmit} disabled={loading}>
                Soumettre
              </button>
            </div>
            {error && <p className="text-danger mt-3">{error}</p>}
          </div>
        </form>
        </div>
        </section>
      </div>
    </div>
  );
};

export default CreateFormulaire;
