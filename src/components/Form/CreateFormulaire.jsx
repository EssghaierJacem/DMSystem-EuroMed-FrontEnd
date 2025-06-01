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
    globalScore: '',
    globalScoreMax: '',
    digitalMaturity: '',
    societe: { id: null },  
    processusUPs: [],
  });

  const [activeTab, setActiveTab] = useState('create');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formId, setFormId] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isReviewReady, setIsReviewReady] = useState(false);

  useEffect(() => {
    const societeId = localStorage.getItem('societeId'); 
    console.log('Retrieved societeId from localStorage:', societeId); 

    if (societeId) {
      const parsedSocieteId = parseInt(societeId, 10);
      console.log('Parsed societeId:', parsedSocieteId); 
      setFormulaire(prevState => ({
        ...prevState,
        societe: { id: parsedSocieteId }
      }));
    }

    if (isPrefilled) {
      setFormulaire(prefilledFormulaire);
    }
  }, [isPrefilled]);

  useEffect(() => {
    const allCompleted = formulaire.processusUPs.every(up =>
      up.nom.trim() &&
      up.processusPeres.every(pere =>
        pere.nom.trim() &&
        pere.processusFils.every(fils =>
          fils.nom.trim() &&
          fils.userDefinedFields.every(udf => udf.fieldName.trim() && udf.fieldValue.trim())
        )
      )
    );
    setIsReviewReady(formulaire.nom.trim() && allCompleted);
  }, [formulaire]);

  const handleFormulaireChange = (e) => {
    const { name, value } = e.target;
    setFormulaire(prevState => {
      const updatedForm = {
        ...prevState,
        [name]: value
      };
      if (name === 'nom' || name === 'version') {
        setError(null);
      }
      return updatedForm;
    });
  };

  const addProcessusUP = () => {
    if (!formulaire.nom.trim() || formulaire.version <= 0) {
      setError("Veuillez fournir un nom et une version valides.");
      return;
    }

    const allCompleted = formulaire.processusUPs.every(up =>
      up.nom.trim() &&
      up.processusPeres.every(pere =>
        pere.nom.trim() &&
        pere.processusFils.every(fils =>
          fils.nom.trim() &&
          fils.userDefinedFields.every(udf => udf.fieldName.trim() && udf.fieldValue.trim())
        )
      )
    );

    if (allCompleted) {
      setFormulaire(prevState => ({
        ...prevState,
        processusUPs: [
          ...prevState.processusUPs,
          { nom: '', processusPeres: [] } 
        ]
      }));
      setError(null);
    } else {
      setError("Veuillez compléter tous les champs requis avant d'ajouter un nouveau domaine.");
    }
  };

  const handleSubmit = () => {
    if (!isReviewReady) {
      setError("Veuillez compléter tous les champs requis avant la soumission.");
      return;
    }
    
    // Fetch the societeId from localStorage
    const societeId = localStorage.getItem('societeId');
    const parsedSocieteId = parseInt(societeId, 10);
  
    // Update the formulaire's societe ID explicitly before submission
    const updatedFormulaire = {
      ...formulaire,
      societe: { id: parsedSocieteId }
    };
    
    setLoading(true);
    console.log('Formulaire before submission:', updatedFormulaire);
  
    // Make the request with the updated form state
    axiosInstance.post('/formulaires/create', updatedFormulaire)
      .then(response => {
        setFormId(response.data.id);
        setLoading(false);
        setActiveTab('submit');
        setIsSubmitted(true);
      })
      .catch(error => {
        setError("Une erreur s'est produite lors de la création du formulaire.");
        setLoading(false);
      });
  };
  
  

  const handleReview = () => {
    if (!isReviewReady) {
      setError("Veuillez entrer tous les détails requis avant de passer à la révision.");
      return;
    }
    setError(null);
    scrollToTop();
    setActiveTab('review');
  };

  const handleEdit = () => {
    setActiveTab('create');
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleTabChange = (tab) => {
    if (activeTab === 'submit') return; 
    setActiveTab(tab);
  };

  return (
    <div className="row g-md-5 g-4">
      <div className="contact-details">
        <ul className="tab-section">
          <li className={activeTab === 'create' ? 'active' : ''}>
            <a
              onClick={() => handleTabChange('create')}
              style={{ pointerEvents: activeTab === 'submit' ? 'none' : 'auto', opacity: activeTab === 'submit' ? 0.5 : 1 }}
            >
              Créer un formulaire
            </a>
          </li>
          <li className={activeTab === 'review' ? 'active' : ''}>
            <a
              onClick={() => handleTabChange('review')}
              style={{ pointerEvents: activeTab === 'submit' ? 'none' : 'auto', opacity: activeTab === 'submit' ? 0.5 : 1 }}
            >
              Examen
            </a>
          </li>
          <li className={activeTab === 'submit' ? 'active' : ''}>
            <a
              onClick={() => handleTabChange('submit')}
              style={{ pointerEvents: 'none', opacity: 0.5 }}
            >
              Soumission
            </a>
          </li>
        </ul>
        <section className="contact-section pb-md-5 pb-0">
          <div className='contact-details'>
            {activeTab === 'create' && (
              <form className="auth-form">
                <div className="mb-3 form-group">
                  <div className="col-md-6">
                    <div className='blog-content '>
                      <a className='main-title' style={{ fontSize: '34px' }}>Formulaire</a>
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
                      <i className="bi bi-node-plus-fill"></i>
                    </button>
                    {error && activeTab === 'create'}
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
                    <p className="text-danger mt-3">{error}</p>
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
              />
            )}
            {activeTab === 'submit' && (
              <Soumission formId={formId} />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreateFormulaire;