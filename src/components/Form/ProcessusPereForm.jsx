import React from 'react';
import ProcessusFilsForm from './ProcessusFilsForm';

const ProcessusPereForm = ({ processusPere, upIndex, pereIndex, setFormulaire }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire((prev) => {
      const updatedProcessusPeres = prev.processusUPs[upIndex].processusPeres.map((pere, i) =>
        i === pereIndex ? { ...pere, [name]: value } : pere
      );
      const updatedProcessusUPs = prev.processusUPs.map((up, i) =>
        i === upIndex ? { ...up, processusPeres: updatedProcessusPeres } : up
      );
      return { ...prev, processusUPs: updatedProcessusUPs };
    });
  };

  const addProcessusFils = () => {
    setFormulaire((prev) => {
      const updatedProcessusPeres = prev.processusUPs[upIndex].processusPeres.map((pere, i) =>
        i === pereIndex
          ? { ...pere, processusFils: [...pere.processusFils, { nom: '', scoreMax: 0, score: 0, observation: 0, pourcentage: 0, digital: false, importance: 0, applicable: false, userDefinedFields: [] }] }
          : pere
      );
      const updatedProcessusUPs = prev.processusUPs.map((up, i) =>
        i === upIndex ? { ...up, processusPeres: updatedProcessusPeres } : up
      );
      return { ...prev, processusUPs: updatedProcessusUPs };
    });
  };

  return (
    <div>
      <h3>ProcessusPere</h3>
      <label>
        Nom:
        <input
          type="text"
          name="nom"
          value={processusPere.nom}
          onChange={handleChange}
        />
      </label>
      <label>
        Score Max:
        <input
          type="number"
          name="scoreMax"
          value={processusPere.scoreMax}
          onChange={handleChange}
        />
      </label>
      <label>
        Score:
        <input
          type="number"
          name="score"
          value={processusPere.score}
          onChange={handleChange}
        />
      </label>
      <button onClick={addProcessusFils}>Add ProcessusFils</button>
      {processusPere.processusFils.map((processusFils, filsIndex) => (
        <ProcessusFilsForm
          key={filsIndex}
          processusFils={processusFils}
          upIndex={upIndex}
          pereIndex={pereIndex}
          filsIndex={filsIndex}
          setFormulaire={setFormulaire}
        />
      ))}
    </div>
  );
};

export default ProcessusPereForm;
