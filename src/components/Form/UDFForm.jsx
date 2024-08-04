import React from 'react';

const UDFForm = ({ udf, upIndex, pereIndex, filsIndex, udfIndex, setFormulaire }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire((prev) => {
      const updatedUDFs = prev.processusUPs[upIndex].processusPeres[pereIndex].processusFils[filsIndex].userDefinedFields.map((field, i) =>
        i === udfIndex ? { ...field, [name]: value } : field
      );
      const updatedProcessusFils = prev.processusUPs[upIndex].processusPeres[pereIndex].processusFils.map((fils, i) =>
        i === filsIndex ? { ...fils, userDefinedFields: updatedUDFs } : fils
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
      <div className="udf-form">
          <div className='blog-content'>
            <a className='main-title'>UDF</a>
          </div>
        <div className="mb-3">
        <label htmlFor={`udf-nom-${upIndex}-${pereIndex}-${filsIndex}-${udfIndex}`} className="form-label">Nom du champ :</label>
        <input
          type="text"
          className="form-control"
          id={`udf-nom-${upIndex}-${pereIndex}-${filsIndex}-${udfIndex}`}
          name="nom"
          value={udf.nom}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor={`udf-valeur-${upIndex}-${pereIndex}-${filsIndex}-${udfIndex}`} className="form-label">Valeur :</label>
        <input
          type="text"
          className="form-control"
          id={`udf-valeur-${upIndex}-${pereIndex}-${filsIndex}-${udfIndex}`}
          name="valeur"
          value={udf.valeur}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default UDFForm;
