import React from 'react';

const UDFForm = ({ udf, upIndex, pereIndex, filsIndex, udfIndex, setFormulaire }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire((prev) => {
      const updatedUDFs = prev.processusUPs[upIndex].processusPeres[pereIndex].processusFils[filsIndex].userDefinedFields.map((udf, i) =>
        i === udfIndex ? { ...udf, [name]: value } : udf
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
    <div className="row g-4">
      <div className="col-md-6">
        <div className="udf-form">
          <h5>UDF</h5>
          <div className="mb-3">
            <label htmlFor={`fieldName-${upIndex}-${pereIndex}-${filsIndex}-${udfIndex}`} className="form-label">Nom:</label>
            <input
              type="text"
              className="form-control"
              id={`fieldName-${upIndex}-${pereIndex}-${filsIndex}-${udfIndex}`}
              name="fieldName"
              value={udf.fieldName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor={`fieldValue-${upIndex}-${pereIndex}-${filsIndex}-${udfIndex}`} className="form-label">Valeur:</label>
            <input
              type="text"
              className="form-control"
              id={`fieldValue-${upIndex}-${pereIndex}-${filsIndex}-${udfIndex}`}
              name="fieldValue"
              value={udf.fieldValue}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UDFForm;
