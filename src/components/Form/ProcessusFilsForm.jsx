import React, { useState } from 'react';
import UDFForm from './UDFForm';

const validateProcessusFils = (processusFils) => {
  return processusFils.nom.trim() !== '';
};

const ProcessusFilsForm = ({ processusFils, upIndex, pereIndex, filsIndex, setFormulaire }) => {
  const [error, setError] = useState('');

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

  const handleRemove = () => {
    setFormulaire((prevState) => {
      const updatedProcessusFils = prevState.processusUPs[upIndex].processusPeres[pereIndex].processusFils.filter((_, i) => i !== filsIndex);
      const updatedProcessusPeres = prevState.processusUPs[upIndex].processusPeres.map((pere, i) =>
        i === pereIndex ? { ...pere, processusFils: updatedProcessusFils } : pere
      );
      const updatedProcessusUPs = prevState.processusUPs.map((up, i) =>
        i === upIndex ? { ...up, processusPeres: updatedProcessusPeres } : up
      );
      return { ...prevState, processusUPs: updatedProcessusUPs };
    });
  };

  const addUDF = () => {
    if (!validateProcessusFils(processusFils)) {
      setError("Veuillez remplir tous les champs requis.");
      return;
    }
    setError('');
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
    <div className="row g-4">
      <div className="col-md-8">
        <div className="processus-fils-form">
          <div className="blog-content">
            <a className="main-title">Sous-processus</a>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor={`nom-${upIndex}-${pereIndex}-${filsIndex}`} className="form-label">Nom:</label>
                <input
                  type="text"
                  className="form-control"
                  id={`nom-${upIndex}-${pereIndex}-${filsIndex}`}
                  name="nom"
                  placeholder="Sous-Processus"
                  value={processusFils.nom}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor={`observation-${upIndex}-${pereIndex}-${filsIndex}`} className="form-label">Observation:</label>
                <textarea
                  className="form-control"
                  id={`observation-${upIndex}-${pereIndex}-${filsIndex}`}
                  name="observation"
                  placeholder="Ajouter une observation.."
                  value={processusFils.observation}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col-md-6">
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor={`applicable-${upIndex}-${pereIndex}-${filsIndex}`} className="form-label me-2">Applicable:</label>
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`applicable-${upIndex}-${pereIndex}-${filsIndex}`}
                      name="applicable"
                      checked={processusFils.applicable}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3 d-flex align-items-center">
                  <label htmlFor={`digital-${upIndex}-${pereIndex}-${filsIndex}`} className="form-label me-2">Digital:</label>
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={`digital-${upIndex}-${pereIndex}-${filsIndex}`}
                      name="digital"
                      checked={processusFils.digital}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>      
            <div className="col-md-6">
              <button
                type="button"
                className="btn-solid mb-3"
                onClick={addUDF}
                style={{ fontSize: '1.025rem', padding: '0.375rem 0.75rem' }}
              >
                <i className="bi bi-node-plus-fill"></i>
              </button>                      
              <button
                type="button"
                className="btn btn-theme d-sm-inline-block d-none"
                onClick={handleRemove}
                style={{ fontSize: '0.925rem', padding: '0.375rem 0.75rem', marginLeft: '5px' }}
              >
                <i className="bi bi-node-minus-fill"></i>
              </button>            
          </div>
          {error && <p className="text-danger">{error}</p>}
        </div>
      </div>
      <div className="col-4">
        {processusFils.userDefinedFields.map((udf, udfIndex) => (
          <UDFForm
            key={udfIndex}
            udf={udf}
            upIndex={upIndex}
            pereIndex={pereIndex}
            filsIndex={filsIndex}
            udfIndex={udfIndex}
            setFormulaire={setFormulaire}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessusFilsForm;
