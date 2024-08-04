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
          <button type="button" className="btn-solid" onClick={addProcessusPere}>
            Ajouter un processus père
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
