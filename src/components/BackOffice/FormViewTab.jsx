import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axios';
import './dashboardAdmin.css';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'; 

const FormViewTab = () => {
  const { id } = useParams();
  const [formulaire, setFormulaire] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    processusUPs: {},
    processusPeres: {},
    processusFils: {}
  });

  useEffect(() => {
    const fetchFormulaire = async () => {
      try {
        const response = await axiosInstance.get(`/formulaires/${id}`);
        setFormulaire(response.data);
      } catch (error) {
        console.error('Error fetching formulaire:', error);
      }
    };

    fetchFormulaire();
  }, [id]);

  const toggleSection = (section, id) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [id]: !prev[section][id] // Toggle the specific section's visibility
      }
    }));
  };

  if (!formulaire) {
    return <div>Loading...</div>;
  }

  const sectionStyle = {
    paddingLeft: '20px',
    borderLeft: '2px solid #dee2e6',
    marginBottom: '10px',
  };

  const nestedSectionStyle = {
    paddingLeft: '20px',
    borderLeft: '1px dashed #adb5bd',
    marginBottom: '10px',
  };

  return (
    <div className="tab-pane fade show active" id="formView" role="tabpanel" aria-labelledby="formView-tab">
      <div className="main-wrapper p-0">
        <div className="fixed-header">
          <div className="d-flex align-items-center gap-2">
            <h3>Formulaire Details - {formulaire.id}</h3>
          </div>
        </div>
        <div className="main-section">
          <div className="container card p-0">
            <div className="card-body px-sm-4 px-3">
              <p><strong>Nom:</strong> {formulaire.nom}</p>
              <p><strong>Date Creation:</strong> {new Date(formulaire.dateCreation).toLocaleDateString()}</p>
              <p><strong>Maturité:</strong> {formulaire.digitalMaturity}</p>
              <p><strong>Score Max :</strong> {formulaire.globalScoreMax}</p>
              <p><strong>Score:</strong> {formulaire.globalScore}</p>
              <p><strong>Société:</strong> {formulaire.societe ? formulaire.societe.raisonSociale : 'N/A'}</p>

              {formulaire.processusUPs && formulaire.processusUPs.length > 0 && (
                <div className="document-section">
                  {formulaire.processusUPs.map((up, upIndex) => (
                    <div key={up.id} style={sectionStyle}>
                      <div 
                        className="section-header d-flex justify-content-between align-items-center" 
                        onClick={() => toggleSection('processusUPs', up.id)}
                      >
                        <p><strong>{upIndex + 1}. {expandedSections.processusUPs[up.id] ? <FaChevronDown /> : <FaChevronRight />} {up.nom}</strong></p>
                      </div>
                      {expandedSections.processusUPs[up.id] && up.processusPeres && up.processusPeres.length > 0 && (
                        <div style={nestedSectionStyle}>
                          {up.processusPeres.map((pere, pereIndex) => (
                            <div key={pere.id} style={sectionStyle}>
                              <div 
                                className="section-header d-flex justify-content-between align-items-center" 
                                onClick={() => toggleSection('processusPeres', pere.id)}
                              >
                                <p><strong>{upIndex + 1}.{pereIndex + 1} - {expandedSections.processusPeres[pere.id] ? <FaChevronDown /> : <FaChevronRight />} {pere.nom} (Score Max: {pere.scoreMax})</strong></p>
                              </div>
                              {expandedSections.processusPeres[pere.id] && pere.processusFils && pere.processusFils.length > 0 && (
                                <div style={nestedSectionStyle}>
                                  {pere.processusFils.map((fils, filsIndex) => (
                                    <div key={fils.id} style={nestedSectionStyle}>
                                      <div 
                                        className="section-header d-flex justify-content-between align-items-center" 
                                        onClick={() => toggleSection('processusFils', fils.id)}
                                      >
                                        <p><strong>{upIndex + 1}.{pereIndex + 1}.{filsIndex + 1} - {expandedSections.processusFils[fils.id] ? <FaChevronDown /> : <FaChevronRight />} {fils.nom}</strong></p>
                                      </div>
                                      {expandedSections.processusFils[fils.id] && (
                                        <div style={nestedSectionStyle}>
                                          <p><strong>Score Maximum:</strong> {fils.scoreMax}</p>
                                          <p><strong>Score:</strong> {fils.score}</p>
                                          <p><strong>Observation:</strong> {fils.observation}</p>
                                          <p><strong>Pourcentage:</strong> {fils.pourcentage}</p>
                                          <p><strong>Digital:</strong> {fils.digital ? 'Yes' : 'No'}</p>
                                          <p><strong>Importance:</strong> {fils.importance}</p>

                                          {fils.userDefinedFields && fils.userDefinedFields.length > 0 && (
                                            <div style={{ paddingLeft: '20px' }}>
                                              <p><strong>UDFs:</strong></p>
                                              {fils.userDefinedFields.map((udf) => (
                                                <p key={udf.id}>
                                                  <strong>Nom du Champ:</strong> {udf.fieldName}<br />
                                                  <strong>Valeur:</strong> {udf.fieldValue}
                                                </p>
                                              ))}
                                            </div>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormViewTab;
