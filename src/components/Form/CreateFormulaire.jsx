import React, { useState, useEffect } from 'react';
import ProcessusUPForm from './ProcessusUPForm';
import ReviewForm from './ReviewForm';
import Soumission from './Soumission';
import axiosInstance from '../../axios';
import prefilledFormulaire from './prefilledData';

const CreateFormulaire = ({ isPrefilled }) => {
  const [formulaire, setFormulaire] = useState({
    nom: '',
    dateCreation: new Date().toISOString().slice(0, 10),
    version: 1,
    societe: { id: 1 },
    processusUPs: [],
  });

  const [activeTab, setActiveTab] = useState('create');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formId, setFormId] = useState(null);
  const [filename, setFilename] = useState('formulaire');

  useEffect(() => {
    if (isPrefilled) {
      setFormulaire(prefilledFormulaire);
    } else {
      setFormulaire({
        nom: '',
        dateCreation: new Date().toISOString().slice(0, 10),
        version: 1,
        societe: { id: 1 },
        processusUPs: [],
      });
    }
  }, [isPrefilled]);

  const handleFormulaireChange = (e) => {
    const { name, value } = e.target;
    setFormulaire(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addProcessusUP = () => {
    if (!formulaire.nom.trim() || formulaire.version <= 0) {
      setError("Veuillez fournir un nom et une version valides.");
      return;
    }

    setError(null); 

    const allCompleted = formulaire.processusUPs.every(up => up.nom); 
    if (allCompleted) {
      setFormulaire(prevState => ({
        ...prevState,
        processusUPs: [
          ...prevState.processusUPs,
          { nom: '', processusPeres: [] }
        ]
      }));
    } else {
      setError("Veuillez compléter les champs requis avant d'ajouter un nouveau domaine.");
    }
  };

  const handleSubmit = () => {
    
    setLoading(true);
    axiosInstance.post('/formulaires/create', formulaire)
      .then(response => {
        console.log('Formulaire submitted:', response.data);
        setFormId(response.data.id);
        setLoading(false);
        setActiveTab('submit');
      })
      .catch(error => {
        console.error("Une erreur s'est produite lors de la création du formulaire !", error);
        setError("Une erreur s'est produite lors de la création du formulaire.");
        setLoading(false);
      });
  };

  const handleReview = () => {
    scrollToTop();
    setActiveTab('review');
  };

  const handleEdit = () => {
    setActiveTab('create');
  };

  const scrollToTop = () => {
     window.scrollTo(0, 0);
     };

  return (
    <div className="row g-lg-5 g-4">
      <div className="contact-details">
        <ul className="tab-section">
          <li className={activeTab === 'create' ? 'active' : ''}>
            <a onClick={() => setActiveTab('create')}>Créer un formulaire</a>
          </li>
          <li className={activeTab === 'review' ? 'active' : ''}>
            <a onClick={() => setActiveTab('review')}>Examen</a>
          </li>
          <li className={activeTab === 'submit' ? 'active' : ''}>
            <a onClick={() => setActiveTab('submit')}>Soumission</a>
          </li>
        </ul>
        <section className="contact-section pb-md-5 pb-0">
          <div className='contact-details'>
            {activeTab === 'create' && (
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
                    <div className="mb-3">
                      <label htmlFor="version" className="form-label">Version :</label>
                      <input
                        type="number"
                        className="form-control"
                        id="version"
                        name="version"
                        placeholder="Saisir la version"
                        value={formulaire.version}
                        onChange={handleFormulaireChange}
                      />
                    </div>
                    <button type="button" className="btn-solid mb-3" onClick={addProcessusUP}>
                      Introduire un domaine
                    </button>
                    {error && <p className="text-danger mt-3">{error}</p>}
                  </div>
                  <div className="col">
                    {formulaire.processusUPs.map((processusUP, index) => (
                      <ProcessusUPForm
                        key={index}
                        index={index}
                        processusUP={processusUP}
                        setFormulaire={setFormulaire}
                      />
                    ))}
                  </div>
                  <div className="col-12 mt-4">
                    <button type="button" className="btn-solid" onClick={handleReview}>
                      Revoir
                    </button>
                  </div>
                </div>
              </form>
            )}
            {activeTab === 'review' && (
              <ReviewForm
                formulaire={formulaire}
                handleEdit={handleEdit}
                handleSubmit={handleSubmit}
                loading={loading}
                filename={filename}
                setFilename={setFilename}
              />
            )}
            {activeTab === 'submit' && (
              <Soumission formId={formId} filename={filename} />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreateFormulaire;
