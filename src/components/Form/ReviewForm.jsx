import React from 'react';

const ReviewForm = ({ formulaire, handleEdit, handleSubmit, loading }) => {
  return (
    <div>
      <h2>Review Formulaire</h2>
      <div className="review-section">
        <h3>Nom du Formulaire:</h3>
        <p>{formulaire.nom}</p>

        <h3>Processus UPs:</h3>
        {formulaire.processusUPs.map((processusUP, upIndex) => (
          <div key={upIndex}>
            <h4>Processus UP {upIndex + 1}</h4>
            <p>Nom: {processusUP.nom}</p>
            {processusUP.processusPeres.map((processusPere, pereIndex) => (
              <div key={pereIndex}>
                <h5>Processus Père {pereIndex + 1}</h5>
                <p>Nom: {processusPere.nom}</p>
                {processusPere.processusFils.map((processusFils, filsIndex) => (
                  <div key={filsIndex}>
                    <h6>Processus Fils {filsIndex + 1}</h6>
                    <p>Nom: {processusFils.nom}</p>
                    <p>Score Maximum: {processusFils.scoreMax}</p>
                    <p>Score: {processusFils.score}</p>
                    <p>Observation: {processusFils.observation}</p>
                    <p>Pourcentage: {processusFils.pourcentage}</p>
                    <p>Digital: {processusFils.digital ? 'Yes' : 'No'}</p>
                    <p>Importance: {processusFils.importance}</p>
                    <h6>UDFs:</h6>
                    {processusFils.userDefinedFields.map((udf, udfIndex) => (
                      <div key={udfIndex}>
                        <p>Nom: {udf.nom}</p>
                        <p>Valeur: {udf.valeur}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={handleEdit}>Edit</button>
      <button
        type="submit"
        className="btn-solid"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
};

export default ReviewForm;
