import React, { useState } from 'react';
import UDFForm from './UDFForm';

const validateProcessusFils = (processusFils) => {
  return processusFils.nom.trim() !== '';
};

const validateUDFs = (udfs) => {
  return udfs.every(udf => udf.fieldName.trim() !== '' && udf.fieldValue.trim() !== '');
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
    if (!validateUDFs(processusFils.userDefinedFields)) {
      setError("Veuillez remplir tous les champs UDF avant d'en ajouter un nouveau.");
      return;
    }
    setError('');
    setFormulaire((prev) => {
      const updatedProcessusFils = prev.processusUPs[upIndex].processusPeres[pereIndex].processusFils.map((fils, i) =>
        i === filsIndex
          ? { ...fils, userDefinedFields: [...fils.userDefinedFields, { fieldName: '', fieldValue: '' }] }
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
      <div className="col-md-12 ms-md-5">
        <div className="processus-fils-form">
          <div className="blog-content">
            <a className="main-title" style={{ fontSize: '20px' }}>Sous-processus</a>
          </div>
          {/* Single Row with All Inputs */}
          <div className="row">
            {/* Name Field */}
            <div className="col-md-3">
              <div className="mb-4">
                <label htmlFor={`nom-${upIndex}-${pereIndex}-${filsIndex}`} className="form-label">Nom:</label>
                <input
                  type="text"
                  className="form-control"
                  id={`nom-${upIndex}-${pereIndex}-${filsIndex}`}
                  name="nom"
                  placeholder="Sous-Processus *"
                  value={processusFils.nom}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* Importance Field */}
            <div className="col-md-2">
              <div className="mb-2">
                <label htmlFor={`importance-${upIndex}-${pereIndex}-${filsIndex}`} className="form-label">Importance (1-10):</label>
                <input
                  type="number"
                  className="form-control"
                  id={`importance-${upIndex}-${pereIndex}-${filsIndex}`}
                  name="importance"
                  min="1"
                  max="10"
                  placeholder="Importance (1-10)"
                  value={processusFils.importance || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
              {/* Digitalisation Field */}
              <div className="col-md-2">
              <div className="mb-2">
                <label htmlFor={`pourcentage-${upIndex}-${pereIndex}-${filsIndex}`} className="form-label">Digitalisation: %</label>
                <input
                  type="text"
                  className="form-control"
                  id={`pourcentage-${upIndex}-${pereIndex}-${filsIndex}`}
                  name="pourcentage"
                  min="1"
                  max="100"
                  placeholder="Pourcentage"
                  value={processusFils.pourcentage || ''}
                  onChange={handleChange}
                />
              </div>
            </div>
              {/* Observation Field */}
              <div className="col-md-2">
              <div className="mb-2">
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
            {/* Applicable Checkbox */}
            <div className="col-md-1">
              <label htmlFor={`applicable-${upIndex}-${pereIndex}-${filsIndex}`} className="form-label">Applicable:</label>
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
            {/* Digital Checkbox */}
            <div className="col-md-1">
              <label htmlFor={`digital-${upIndex}-${pereIndex}-${filsIndex}`} className="form-label">Digital:</label>
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
            {/* Buttons */}
            <div className="col-md-4">
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
