import React from 'react';
import UDFForm from './UDFForm';

const ProcessusFilsForm = ({ processusFils, upIndex, pereIndex, filsIndex, setFormulaire }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormulaire((prev) => {
      const updatedProcessusFils = prev.processusUPs[upIndex].processusPeres[pereIndex].processusFils.map((fils, i) =>
        i === filsIndex
          ? { ...fils, [name]: type === 'checkbox' ? checked : value }
          : fils
      );
      const updatedProcessusPeres = prev.processusUPs[upIndex].processusPeres.map((pere, i) =>
        i === pereIndex ? { ...pere, processusFils: updatedProcessusFils } : pere
      );
      const updatedProcessusUPs = prev.processusUPs.map((up, i) =>
        i === upIndex ? { ...up, processusPeres: updatedProcessusPeres } : up
      );
      return { ...prev, processusUPs: updatedProcessusUPs };
    });
  };

  const addUDF = () => {
    setFormulaire((prev) => {
      const updatedProcessusFils = prev.processusUPs[upIndex].processusPeres[pereIndex].processusFils.map((fils, i) =>
        i === filsIndex
          ? { ...fils, userDefinedFields: [...fils.userDefinedFields, { nom: '', valeur: '' }] }
          : fils
      );
      const updatedProcessusPeres = prev.processusUPs[upIndex].processusPeres.map((pere, i) =>
        i === pereIndex ? { ...pere, processusFils: updatedProcessusFils } : pere
      );
      const updatedProcessusUPs = prev.processusUPs.map((up, i) =>
        i === upIndex ? { ...up, processusPeres: updatedProcessusPeres } : up
      );
      return { ...prev, processusUPs: updatedProcessusUPs };
    });
  };

  return (
    <div className="processus-fils-form">
      <div className='blog-content'>
        <a className='main-title'>Sous-processus</a>
      </div>
      <form className="auth-form">
        <div className="row g-4">
          {/* ProcessusFils Fields */}
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor={`nom-${upIndex}-${pereIndex}-${filsIndex}`} className="form-label">Nom:</label>
                <input
                  type="text"
                  className="form-control"
                  id={`nom-${upIndex}-${pereIndex}-${filsIndex}`}
                  name="nom"
                  value={processusFils.nom}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor={`scoreMax-${upIndex}-${pereIndex}-${filsIndex}`} className="form-label">Score Maximum:</label>
                <input
                  type="number"
                  className="form-control"
                  id={`scoreMax-${upIndex}-${pereIndex}-${filsIndex}`}
                  name="scoreMax"
                  value={processusFils.scoreMax}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor={`score-${upIndex}-${pereIndex}-${filsIndex}`} className="form-label">Score:</label>
                <input
                  type="number"
                  className="form-control"
                  id={`score-${upIndex}-${pereIndex}-${filsIndex}`}
                  name="score"
                  value={processusFils.score}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor={`observation-${upIndex}-${pereIndex}-${filsIndex}`} className="form-label">Observation:</label>
                <textarea
                  className="form-control"
                  id={`observation-${upIndex}-${pereIndex}-${filsIndex}`}
                  name="observation"
                  value={processusFils.observation}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor={`pourcentage-${upIndex}-${pereIndex}-${filsIndex}`} className="form-label">Pourcentage:</label>
                <input
                  type="number"
                  className="form-control"
                  id={`pourcentage-${upIndex}-${pereIndex}-${filsIndex}`}
                  name="pourcentage"
                  value={processusFils.pourcentage}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
              <label htmlFor={`pourcentage-${upIndex}-${pereIndex}-${filsIndex}`} className="form-label">Digital:</label>
                <div className="form-check form-switch">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`digital-${upIndex}-${pereIndex}-${filsIndex}`}
                    name="digital"
                    checked={processusFils.digital}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor={`digital-${upIndex}-${pereIndex}-${filsIndex}`}
                    className="form-check-label"
                  >
                    
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor={`importance-${upIndex}-${pereIndex}-${filsIndex}`} className="form-label">Importance:</label>
                <input
                  type="number"
                  className="form-control"
                  id={`importance-${upIndex}-${pereIndex}-${filsIndex}`}
                  name="importance"
                  value={processusFils.importance}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
              <label htmlFor={`pourcentage-${upIndex}-${pereIndex}-${filsIndex}`} className="form-label">Applicable:</label>
                <div className="form-check form-switch">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`applicable-${upIndex}-${pereIndex}-${filsIndex}`}
                    name="applicable"
                    checked={processusFils.applicable}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor={`applicable-${upIndex}-${pereIndex}-${filsIndex}`}
                    className="form-check-label"
                  >
                  </label>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
                <button type="button" 
                className="btn-solid mb-3"
                onClick={addUDF}
                style={{ fontSize: '0.975rem', padding: '0.375rem 0.75rem' }}
              >
                Ajouter un champ utilisateur
              </button>
            </div>
          </div>

          {/* UDF Fields */}
          <div className="col-md-4">
            <div className="row">
              {processusFils.userDefinedFields.map((udf, udfIndex) => (
                <div key={udfIndex} className="col-md-12 mb-3">
                  <UDFForm
                    udf={udf}
                    upIndex={upIndex}
                    pereIndex={pereIndex}
                    filsIndex={filsIndex}
                    udfIndex={udfIndex}
                    setFormulaire={setFormulaire}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProcessusFilsForm;
