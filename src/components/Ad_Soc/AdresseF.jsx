import React from 'react';

function AdresseF({ formData, handleChange }) {
  return (
    <form className="auth-form">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="adresse-form">
            <div className="mb-3">
              <label htmlFor="ligne1" className="form-label">Ligne 1:</label>
              <input
                name="adresse1"
                value={formData.adresse1}
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="Adresse Ligne 1 *"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="codePostal" className="form-label">Code Postal:</label>
              <input
                name="codePostal"
                value={formData.codePostal}
                onChange={handleChange}
                type="number"
                className="form-control"
                placeholder="Code Postal *"
                required
              />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="adresse-form">
            <div className="mb-3">
              <label htmlFor="ligne2" className="form-label">Ligne 2:</label>
              <input
                name="adresse2"
                value={formData.adresse2}
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="Adresse Ligne 2"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="ville" className="form-label">Ville:</label>
              <input
                name="ville"
                value={formData.ville}
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="Ville *"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pays" className="form-label">Pays:</label>
              <input
                name="pays"
                value={formData.pays}
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="Pays *"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AdresseF;
