import React from 'react';

function SocieteF({ formData, handleChange }) {
  return (
    <form className="auth-form">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="raisonSociale" className="form-label">Raison Sociale:</label>
            <input
              name="raisonSociale"
              value={formData.raisonSociale}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Raison Sociale *"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="form-control"
              placeholder="Email *"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telephone" className="form-label">Téléphone:</label>
            <input
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              type="tel"
              className="form-control"
              placeholder="Téléphone *"
              required
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="personneContact" className="form-label">Personne de Contact:</label>
            <input
              name="personneContact"
              value={formData.personneContact}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Personne de Contact *"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="matricule" className="form-label">Matricule:</label>
            <input
              name="matricule"
              value={formData.matricule}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Matricule *"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="taille" className="form-label">Taille:</label>
            <input
              name="taille"
              value={formData.taille}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Taille *"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="domaine" className="form-label">Domaine:</label>
            <input
              name="domaine"
              value={formData.domaine}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Domaine *"
              required
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default SocieteF;
