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

  const handleRemove = () => {
    setFormulaire((prev) => {
      const updatedUDFs = prev.processusUPs[upIndex].processusPeres[pereIndex].processusFils[filsIndex].userDefinedFields.filter((_, i) => i !== udfIndex);
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

    <div className="col-md-8 ms-md-5">
    <div className="processus-fils-form">
      <div className='blog-content'>
        <a className='main-title'>UDF</a>
      </div>
      <form className="auth-form"> 
      <div className="row g-4 ">
      <div className="mb-3">
        <label htmlFor={`udf-fieldName-${upIndex}-${pereIndex}-${filsIndex}-${udfIndex}`} className="form-label">
          Nom du champ :
          </label>
        <input
          type="text"
          className="form-control"
          id={`udf-fieldName-${upIndex}-${pereIndex}-${filsIndex}-${udfIndex}`}
          name="fieldName"
          placeholder='Nom du champ *'
          value={udf.fieldName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor={`udf-fieldValue-${upIndex}-${pereIndex}-${filsIndex}-${udfIndex}`} className="form-label">Valeur :</label>
        <input
          type="text"
          className="form-control"
          id={`udf-fieldValue-${upIndex}-${pereIndex}-${filsIndex}-${udfIndex}`}
          name="fieldValue"
          placeholder='Valeur du champ *'
          value={udf.fieldValue}
          onChange={handleChange}
        />
      </div>
      </div>    
      <button
        type="button"
        className="btn btn-theme d-sm-inline-block d-none"
        style={{ fontSize: '0.925rem', padding: '0.375rem 0.75rem', }}
        onClick={handleRemove}
      >
        <i className="bi bi-node-minus-fill"></i>
      </button>
      </form> 
    </div>
    </div>
  );
};

export default UDFForm;