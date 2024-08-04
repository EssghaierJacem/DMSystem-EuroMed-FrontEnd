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
        <label htmlFor={`udf-fieldName-${upIndex}-${pereIndex}-${filsIndex}-${udfIndex}`} className="form-label">Nom du champ :</label>
        <input
          type="text"
          className="form-control"
          id={`udf-fieldName-${upIndex}-${pereIndex}-${filsIndex}-${udfIndex}`}
          name="fieldName"
          value={udf.fieldName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor={`udf-fieldValue-${upIndex}-${pereIndex}-${filsIndex}-${udfIndex}`} className="form-label">Valeur :</label>
        <input
          type="text"
          className="form-control"
          id={`udf-fieldValue-${upIndex}-${pereIndex}-${filsIndex}-${udfIndex}`}
          name="fieldValue"
          value={udf.fieldValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default UDFForm;
