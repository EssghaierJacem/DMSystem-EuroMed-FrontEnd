import React, { useState } from 'react';
import ProcessusUPForm from './ProcessusUPForm';
import ReviewForm from './ReviewForm';
import axiosInstance from '../../axios';

const CreateFormulaire = () => {
  const [formulaire, setFormulaire] = useState({
    nom: '',
    dateCreation: new Date().toISOString().slice(0, 10),
    version: 1,
    societe: { id: 1 },
    processusUPs: [],
  });

  const [review, setReview] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const handleSave = () => {
  //   setLoading(true);
  //   axiosInstance.post('/formulaires/save', formulaire)
  //     .then(response => {
  //       console.log('Formulaire saved:', response.data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('There was an error saving the formulaire!', error);
  //       setError('There was an error saving the formulaire.');
  //       setLoading(false);
  //     });
  // };

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

  const handleReview = () => {
    setReview(true);
  };

  const handleEdit = () => {
    setReview(false);
  };

  return (
    <div className="row g-lg-5 g-4">
      <div className="contact-details">
        <div className="title">
          <h2>Ajoutez une formulaire</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
        </div>
        <ul className="tab-section">
          <li className="active"><a href="">Créer un formulaire</a></li>
          <li><a href="">Examen</a></li>
          <li><a href="">Soumission</a></li>
        </ul>
        <section className="contact-section pb-md-5 pb-0">
          <div className='contact-details'>
            {!review ? (
              <form className="auth-form">
                <div className="mb-3 form-group">
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
                  <div className="col">
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
                    <button type="button" className="btn-solid" onClick={handleReview}>
                      Review
                    </button>
                  </div>
                  {error && <p className="text-danger mt-3">{error}</p>}
                </div>
              </form>
            ) : (
              <ReviewForm
                formulaire={formulaire}
                handleEdit={handleEdit}
                handleSubmit={handleSubmit}
                loading={loading}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreateFormulaire;
