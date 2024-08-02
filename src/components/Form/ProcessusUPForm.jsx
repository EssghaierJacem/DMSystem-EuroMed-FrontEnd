import React from 'react';
import ProcessusPereForm from './ProcessusPereForm';

const ProcessusUPForm = ({ processusUP, index, setFormulaire }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire((prev) => {
      const updatedProcessusUPs = prev.processusUPs.map((up, i) =>
        i === index ? { ...up, [name]: value } : up
      );
      return { ...prev, processusUPs: updatedProcessusUPs };
    });
  };

  const addProcessusPere = () => {
    setFormulaire((prev) => {
      const updatedProcessusUPs = prev.processusUPs.map((up, i) =>
        i === index
          ? { ...up, processusPeres: [...up.processusPeres, { nom: '', scoreMax: 0, score: 0, processusFils: [] }] }
          : up
      );
      return { ...prev, processusUPs: updatedProcessusUPs };
    });
  };

  return (
    <div>
      <h2>ProcessusUP</h2>
      <label>
        Nom:
        <input
          type="text"
          name="nom"
          value={processusUP.nom}
          onChange={handleChange}
        />
      </label>
      <button onClick={addProcessusPere}>Add ProcessusPere</button>
      {processusUP.processusPeres.map((processusPere, pereIndex) => (
        <ProcessusPereForm
          key={pereIndex}
          processusPere={processusPere}
          upIndex={index}
          pereIndex={pereIndex}
          setFormulaire={setFormulaire}
        />
      ))}
    </div>
  );
};

export default ProcessusUPForm;
