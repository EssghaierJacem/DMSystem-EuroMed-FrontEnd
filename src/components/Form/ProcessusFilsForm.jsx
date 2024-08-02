import React from 'react';

const ProcessusFilsForm = ({ processusFils, upIndex, pereIndex, filsIndex, setFormulaire }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire((prev) => {
      const updatedProcessusFils = prev.processusUPs[upIndex].processusPeres[pereIndex].processusFils.map((fils, i) =>
        i === filsIndex ? { ...fils, [name]: value } : fils
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
    <div>
      <h4>ProcessusFils</h4>
      <label>
        Nom:
        <input
          type="text"
          name="nom"
          value={processusFils.nom}
          onChange={handleChange}
        />
      </label>
      <label>
        Score Max:
        <input
          type="number"
          name="scoreMax"
          value={processusFils.scoreMax}
          onChange={handleChange}
        />
      </label>
      <label>
        Score:
        <input
          type="number"
          name="score"
          value={processusFils.score}
          onChange={handleChange}
        />
      </label>
      <label>
        Observation:
        <input
          type="number"
          name="observation"
          value={processusFils.observation}
          onChange={handleChange}
        />
      </label>
      <label>
        Pourcentage:
        <input
          type="number"
          name="pourcentage"
          value={processusFils.pourcentage}
          onChange={handleChange}
        />
      </label>
      <label>
        Digital:
        <input
          type="checkbox"
          name="digital"
          checked={processusFils.digital}
          onChange={(e) => handleChange({ target: { name: e.target.name, value: e.target.checked } })}
        />
      </label>
      <label>
        Importance:
        <input
          type="number"
          name="importance"
          value={processusFils.importance}
          onChange={handleChange}
        />
      </label>
      <label>
        Applicable:
        <input
          type="checkbox"
          name="applicable"
          checked={processusFils.applicable}
          onChange={(e) => handleChange({ target: { name: e.target.name, value: e.target.checked } })}
        />
      </label>
      {/* Add functionality to manage User Defined Fields */}
      <h5>User Defined Fields</h5>
      {processusFils.userDefinedFields.map((field, fieldIndex) => (
        <div key={fieldIndex}>
          <label>
            Field Name:
            <input
              type="text"
              name="fieldName"
              value={field.fieldName}
              onChange={(e) => {
                const updatedFields = [...processusFils.userDefinedFields];
                updatedFields[fieldIndex].fieldName = e.target.value;
                handleChange({ target: { name: 'userDefinedFields', value: updatedFields } });
              }}
            />
          </label>
          <label>
            Field Display Name:
            <input
              type="text"
              name="fieldDisplayName"
              value={field.fieldDisplayName}
              onChange={(e) => {
                const updatedFields = [...processusFils.userDefinedFields];
                updatedFields[fieldIndex].fieldDisplayName = e.target.value;
                handleChange({ target: { name: 'userDefinedFields', value: updatedFields } });
              }}
            />
          </label>
          <label>
            Field Value:
            <input
              type="text"
              name="fieldValue"
              value={field.fieldValue}
              onChange={(e) => {
                const updatedFields = [...processusFils.userDefinedFields];
                updatedFields[fieldIndex].fieldValue = e.target.value;
                handleChange({ target: { name: 'userDefinedFields', value: updatedFields } });
              }}
            />
          </label>
        </div>
      ))}
    </div>
  );
  };
  
  export default ProcessusFilsForm;
  