import React from 'react';
import ProcessusPereForm from './ProcessusPereForm';

const ProcessusUPForm = ({ processusUP, index, setFormulaire }) => {
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
      <div className="col-md-3">
        <div className="processus-up-form">
          <div className='blog-content'>
          <a className='main-title'>Domaine \ Metier</a> 
          </div>
          <div className="mb-3">
            <label htmlFor={`nom-${index}`} className="form-label">Nom:</label>
            <input
              type="text"
              className="form-control"
              id={`nom-${index}`}
              name="nom"
              value={processusUP.nom}
              onChange={handleChange}
            />
          </div>
          <button type="button" className="btn-solid" onClick={addProcessusPere}
          style={{ fontSize: '0.925rem', padding: '0.375rem 0.75rem' }}
          >
            Ajouter un processus père
          </button>
          <button
          type="button"
          className="btn btn-theme d-sm-inline-block d-none"
          style={{ fontSize: '0.925rem', padding: '0.375rem 0.75rem', marginLeft: '5px' }}
          onClick={handleRemove}
        >
          Supprimer
        </button>
        </div>
      </div>
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
