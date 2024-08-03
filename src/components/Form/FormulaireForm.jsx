import React, { useState } from 'react';
import ProcessusUPForm from './ProcessusUPForm';

const FormulaireForm = () => {
  const [formulaire, setFormulaire] = useState({
    nom: '',
    dateCreation: new Date().toISOString(),
    version: 1,
    societe: { id: 1 },
    processusUPs: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire((prev) => ({ ...prev, [name]: value }));
  };

  const addProcessusUP = () => {
    setFormulaire((prev) => ({
      ...prev,
      processusUPs: [...prev.processusUPs, { nom: '', processusPeres: [] }],
    }));
  };

  const handleSubmit = () => {
    console.log('Formulaire submitted:', formulaire);

  };

  return (
    <div>
      <h1>Create Formulaire</h1>
      <label>
        Nom:
        <input
          type="text"
          name="nom"
          value={formulaire.nom}
          onChange={handleChange}
        />
      </label>
      <button onClick={addProcessusUP}>Add ProcessusUP</button>
      {formulaire.processusUPs.map((processusUP, index) => (
        <ProcessusUPForm
          key={index}
          processusUP={processusUP}
          index={index}
          setFormulaire={setFormulaire}
        />
      ))}
      <button onClick={handleSubmit}>Submit Formulaire</button>
    </div>
  );
};

export default FormulaireForm;
