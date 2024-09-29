import React from 'react';

function ReviewForm({ formData, handleSubmit }) {
  return (
    <div>
      <h3>Réviser Vos Données</h3>
      <h4>Informations de la Société</h4>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <h4>ID de la Société: {formData.societeId}</h4>
      <button onClick={handleSubmit} className="btn-solid">Confirmer la Soumission</button>
    </div>
  );
}

export default ReviewForm;
