import React from 'react';
import ProcessusFilsForm from './ProcessusFilsForm';

const ProcessusPereForm = ({ processusPere, upIndex, pereIndex, setFormulaire }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire((prev) => {
      const updatedProcessusPeres = prev.processusUPs[upIndex].processusPeres.map((pere, i) =>
        i === pereIndex ? { ...pere, [name]: value } : pere
      );
      const updatedProcessusUPs = prev.processusUPs.map((up, i) =>
        i === upIndex ? { ...up, processusPeres: updatedProcessusPeres } : up
      );
      return { ...prev, processusUPs: updatedProcessusUPs };
    });
  };

  const addProcessusFils = () => {
    setFormulaire((prev) => {
      const updatedProcessusPeres = prev.processusUPs[upIndex].processusPeres.map((pere, i) =>
        i === pereIndex
          ? { ...pere, processusFils: [...pere.processusFils, { nom: '', scoreMax: 0, score: 0, observation: 0, pourcentage: 0, digital: false, importance: 0, applicable: false, userDefinedFields: [] }] }
          : pere
      );
      const updatedProcessusUPs = prev.processusUPs.map((up, i) =>
        i === upIndex ? { ...up, processusPeres: updatedProcessusPeres } : up
      );
      return { ...prev, processusUPs: updatedProcessusUPs };
    });
  };

  return (
    
    <div className="row g-4">
      <div className="col-md-3">
        <div className="processus-pere-form">
            <div className='blog-content'>
              <a className='main-title'>Processus</a>
            </div>
          <div className="mb-3">
            <label htmlFor={`nom-${upIndex}-${pereIndex}`} className="form-label">Nom:</label>
            <input
              type="text"
              className="form-control"
              id={`nom-${upIndex}-${pereIndex}`}
              name="nom"
              value={processusPere.nom}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor={`scoreMax-${upIndex}-${pereIndex}`} className="form-label">Score Max:</label>
            <input
              type="number"
              className="form-control"
              id={`scoreMax-${upIndex}-${pereIndex}`}
              name="scoreMax"
              value={processusPere.scoreMax}
              onChange={handleChange}
            />
          </div>
          {/* <div className="mb-3">
            <label htmlFor={`score-${upIndex}-${pereIndex}`} className="form-label">Score:</label>
            <input
              type="number"
              className="form-control"
              id={`score-${upIndex}-${pereIndex}`}
              name="score"
              value={processusPere.score}
              onChange={handleChange}
            />
          </div> */}
          <button type="button" className="btn-solid" onClick={addProcessusFils}>
            X
          </button>
        </div>
      </div>
      <div className="col">
        {processusPere.processusFils.map((processusFils, filsIndex) => (
          <ProcessusFilsForm
            key={filsIndex}
            processusFils={processusFils}
            upIndex={upIndex}
            pereIndex={pereIndex}
            filsIndex={filsIndex}
            setFormulaire={setFormulaire}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessusPereForm;
