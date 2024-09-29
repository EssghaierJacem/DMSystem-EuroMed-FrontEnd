import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const ReviewForm = ({ formData, handleSubmit }) => {
  const [expandedSections, setExpandedSections] = useState({
    companyInfo: true,
    addressInfo: true,
  });

  const toggleSection = (key) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="auth-form">
      
      <p>
        Vérifiez les détails ci-dessous avant de soumettre le formulaire.
      </p>

      {/* Company Information Section */}
      <div className="section mb-4">
        <div className="section-header" onClick={() => toggleSection('companyInfo')}>
        <h2 className="mb-4"><label htmlFor="telephone" className="form-label">Informations de la Société
            {expandedSections.companyInfo ? (
              <FaChevronDown className="icon ml-2" />
            ) : (
              <FaChevronRight className="icon ml-2" />
            )}
          </label></h2>
        </div>
        {expandedSections.companyInfo && (
          <div className="section-body">
            <p><strong>Raison Sociale:</strong> {formData.raisonSociale}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Téléphone:</strong> {formData.telephone}</p>
            <p><strong>Personne de Contact:</strong> {formData.personneContact}</p>
            <p><strong>Matricule:</strong> {formData.matricule}</p>
            <p><strong>Taille:</strong> {formData.taille}</p>
            <p><strong>Domaine:</strong> {formData.domaine}</p>
          </div>
        )}
      </div>

      {/* Address Information Section */}
      <div className="section mb-4">
        <div className="section-header" onClick={() => toggleSection('addressInfo')}>
        <h2 className="mb-4"><label htmlFor="telephone" className="form-label">Informations de la Société
            Adresse de la Société
            {expandedSections.addressInfo ? (
              <FaChevronDown className="icon ml-2" />
            ) : (
              <FaChevronRight className="icon ml-2" />
            )}
          </label></h2>
        </div>
        {expandedSections.addressInfo && (
          <div className="section-body">
            <p><strong>Ligne 1:</strong> {formData.adresse1}</p>
            <p><strong>Ligne 2:</strong> {formData.adresse2 || 'N/A'}</p>
            <p><strong>Code Postal:</strong> {formData.codePostal}</p>
            <p><strong>Ville:</strong> {formData.ville}</p>
            <p><strong>Pays:</strong> {formData.pays}</p>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="d-flex ">
        <button className="btn-solid" onClick={handleSubmit}>Confirmer la Soumission</button>
      </div>
    </div>
  );
};

export default ReviewForm;
