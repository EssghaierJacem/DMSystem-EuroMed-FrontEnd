import React, { useState } from 'react';
import ProcessusUPForm from './ProcessusUPForm';
import axiosInstance from '../../axios';

const CreateFormulaire = () => {
  const [formulaire, setFormulaire] = useState({
    nom: '',
    dateCreation: new Date().toISOString().slice(0, 10),
    version: 1,
    societe: { id: 1 },
    processusUPs: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSave = () => {
    setLoading(true);
    axiosInstance.post('/formulaires/save', formulaire)
      .then(response => {
        console.log('Formulaire saved:', response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error saving the formulaire!', error);
        setError('There was an error saving the formulaire.');
        setLoading(false);
      });
  };

  const handleSubmit = () => {
    setLoading(true);
    axiosInstance.post('/formulaires/create', formulaire)
      .then(response => {
        console.log('Formulaire submitted:', response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error creating the formulaire!', error);
        setError('There was an error creating the formulaire.');
        setLoading(false);
      });
  };

  const handleFormulaireChange = (e) => {
    const { name, value } = e.target;
    setFormulaire(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addProcessusUP = () => {
    setFormulaire(prevState => ({
      ...prevState,
      processusUPs: [
        ...prevState.processusUPs,
        { nom: '', processusPeres: [] } 
      ]
    }));
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
          onChange={handleFormulaireChange}
        />
      </label>
      <button onClick={addProcessusUP}>Add ProcessusUP</button>
      {formulaire.processusUPs.map((processusUP, index) => (
        <ProcessusUPForm
          key={index}
          index={index}
          processusUP={processusUP}
          formulaire={formulaire}
          setFormulaire={setFormulaire}
        />
      ))}
      <button onClick={handleSave} disabled={loading}>Save Formulaire</button>
      <button onClick={handleSubmit} disabled={loading}>Submit Formulaire</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateFormulaire;
