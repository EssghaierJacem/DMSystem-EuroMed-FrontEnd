import React, { useState } from 'react';
import ProcessusPereForm from './ProcessusPereForm';

// List of categories
const categories = [
  'Agroalimentaire', 'Banque / Assurance', 'Bois / Papier / Carton / Imprimerie',
  'BTP / Matériaux de construction', 'Chimie / Parachimie', 'Commerce / Négoce / Distribution',
  'Édition / Communication / Multimédia', 'Électronique / Électricité', 'Études et conseils',
  'Industrie pharmaceutique', 'Informatique / Télécoms', 'Machines et équipements / Automobile',
  'Métallurgie / Travail du métal', 'Plastique / Caoutchouc', 'Services aux entreprises',
  'Textile / Habillement / Chaussure', 'Transports / Logistique'
];

const ProcessusUPForm = ({ processusUP, index, setFormulaire }) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire((prev) => {
      const updatedProcessusUPs = prev.processusUPs.map((up, i) =>
        i === index ? { ...up, [name]: value } : up
      );
      return { ...prev, processusUPs: updatedProcessusUPs };
    });
  };

  const handleRemove = () => {
    setFormulaire(prevState => ({
      ...prevState,
      processusUPs: prevState.processusUPs.filter((_, i) => i !== index)
    }));
  };

  const addProcessusPere = () => {
    if (processusUP.nom.trim() === '') {
      setError('Le nom du domaine est requis.');
      return;
    }
    setError('');
    setFormulaire((prev) => {
      const updatedProcessusUPs = prev.processusUPs.map((up, i) =>
        i === index
          ? { ...up, processusPeres: [...up.processusPeres, { nom: '', scoreMax: 0, score: 0, processusFils: [] }] }
          : up
      );
      return { ...prev, processusUPs: updatedProcessusUPs };
    });
  };

  return (
    <div className="row g-4">
      <div className="col-md-6 ms-md-6">
        <div className="processus-up-form">
          <div className='blog-content'>
          <a className='main-title' style={{ fontSize: '24px' }}>Domaine / Metier</a>
          </div>
          <div className="mb-3">
            <label htmlFor={`nom-${index}`} className="form-label">Domaine:</label>
            <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
              <select
                id={`nom-${index}`}
                name="nom"
                className="form-control"
                value={processusUP.nom}
                onChange={handleChange}
                style={{
                  width: '100%',                 
                  paddingRight: '2rem',                                 
                }}
              >
                <option value="">Sélectionner un domaine *</option>
                {categories.map((category, idx) => (
                  <option key={idx} value={category}>{category}</option>
                ))}
              </select>
              <div style={{
                content: '""',
                position: 'absolute',
                top: '50%',
                right: '0.5rem',
                transform: 'translateY(-50%)',
                fontSize: '0.75rem',
                color: '#495057',
                pointerEvents: 'none',
                fontFamily: 'Arial, sans-serif'
              }}>
                ▼
              </div>
            </div>
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button
            type="button"
            className="btn-solid"
            onClick={addProcessusPere}
            style={{ fontSize: '1.025rem', padding: '0.375rem 0.75rem' }}
          >
            <i className="bi bi-node-plus-fill"></i>
          </button>
          <button
            type="button"
            className="btn btn-theme d-sm-inline-block d-none"
            style={{ fontSize: '0.925rem', padding: '0.375rem 0.75rem', marginLeft: '5px' }}
            onClick={handleRemove}
          >
            <i className="bi bi-node-minus-fill"></i>
          </button>
        </div>
      </div>
      <div class="w-100"></div>
      <div className="col">
        {processusUP.processusPeres.map((processusPere, pereIndex) => (
          <ProcessusPereForm
            key={pereIndex}
            processusPere={processusPere}
            upIndex={index}
            pereIndex={pereIndex}
            setFormulaire={setFormulaire}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessusUPForm;
