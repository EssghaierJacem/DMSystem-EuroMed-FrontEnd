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
        [id]: !prev[section][id]
      }
    }));
  };

  if (!formulaire) {
    return <div>Loading...</div>;
  }

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
              <p><strong>Version:</strong> {formulaire.version}</p>
              <p><strong>Société:</strong> {formulaire.societe ? formulaire.societe.raisonSociale : 'N/A'}</p>

              {formulaire.processusUPs && formulaire.processusUPs.length > 0 && (
                <div className="document-section">
                  <p><strong>Processus UPs:</strong></p>
                  {formulaire.processusUPs.map((up, upIndex) => (
                    <div key={up.id} className="document-section">
                      <div className="section-header" onClick={() => toggleSection('processusUPs', up.id)}>
                      <p><strong>{upIndex + 1}. {up.nom}</strong></p>
                        <span>
                          {expandedSections.processusUPs[up.id] ? <FaChevronDown /> : <FaChevronRight />}
                        </span>
                      </div>
                      {expandedSections.processusUPs[up.id] && up.processusPeres && up.processusPeres.length > 0 && (
                        <div className="nested-section">
                          <p><strong>Processus Peres:</strong></p>
                          {up.processusPeres.map((pere, pereIndex) => (
                            <div key={pere.id} className="nested-section">
                              <div className="section-header" onClick={() => toggleSection('processusPeres', pere.id)}>
                                <p><strong>{upIndex + 1}.{pereIndex + 1} - {pere.nom} (Score Max: {pere.scoreMax})</strong></p>
                                <span>
                                  {expandedSections.processusPeres[pere.id] ? <FaChevronDown /> : <FaChevronRight />}
                                </span>
                              </div>
                              {expandedSections.processusPeres[pere.id] && pere.processusFils && pere.processusFils.length > 0 && (
                                <div className="nested-section">
                                  <p><strong>Processus Fils:</strong></p>
                                  {pere.processusFils.map((fils, filsIndex) => (
                                    <div key={fils.id} className="nested-section">
                                      <div className="section-header" onClick={() => toggleSection('processusFils', fils.id)}>
                                        <p><strong>{upIndex + 1}.{pereIndex + 1}.{filsIndex + 1} - {fils.nom}</strong></p>
                                        <span>
                                          {expandedSections.processusFils[fils.id] ? <FaChevronDown /> : <FaChevronRight />}
                                        </span>
                                      </div>
                                      {expandedSections.processusFils[fils.id] && (
                                        <div className="nested-section">
                                          <p><strong>Score Maximum:</strong> {fils.scoreMax}</p>
                                          <p><strong>Score:</strong> {fils.score}</p>
                                          <p><strong>Observation:</strong> {fils.observation}</p>
                                          <p><strong>Pourcentage:</strong> {fils.pourcentage}</p>
                                          <p><strong>Digital:</strong> {fils.digital ? 'Yes' : 'No'}</p>
                                          <p><strong>Importance:</strong> {fils.importance}</p>

                                          {fils.userDefinedFields && fils.userDefinedFields.length > 0 && (
                                            <div>
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
