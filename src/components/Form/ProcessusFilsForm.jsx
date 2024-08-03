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
    <div className="row g-4">
      <div className="col-md-6">
        <div className="processus-fils-form">
        <div className='blog-content'>
              <a className='main-title'>Sous-processus</a>
            </div>
          <div className="mb-3">
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
          <div className="mb-3">
            <label htmlFor={`scoreMax-${upIndex}-${pereIndex}-${filsIndex}`} className="form-label">Score Max:</label>
            <input
              type="number"
              className="form-control"
              id={`scoreMax-${upIndex}-${pereIndex}-${filsIndex}`}
              name="scoreMax"
              value={processusFils.scoreMax}
              onChange={handleChange}
            />
          </div>
          {/* Include other fields similarly */}
          <button type="button" className="btn-solid" onClick={addUDF}>
            Introduire plus d'informations?
          </button>
        </div>
      </div>
      <div className="col-md-6">
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
