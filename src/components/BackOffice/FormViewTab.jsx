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
            <h3>Gestion de formulaire</h3>
          </div>
        </div>
        <div className="main-section">
          <div className="container card p-0">
          <div class="card-header">
                                <h3 class="text-white title-basic aos-init aos-animate" data-aos="fade-up"
                                    data-aos-duration="1000" data-aos-delay="100">Formulaire Details - {formulaire.id}</h3>
                            </div>
            <div className="card-body px-sm-4 px-3">
            <ul className="history-sec">
            <li class="history-main">
                <div class="history-detail text-truncate">
                    <i class="iconsax" data-icon="message-text" icon-name="message-text"></i>
                        <div>
                              <p>Sur cette page, vous pouvez consulter les détails du formulaire ainsi que le score de maturité digitale.</p>
                              <p class="d-sm-none d-inline-block">2 min ago</p>
                      </div>
                  </div>
                <div class="history-time d-sm-flex d-none">
                  <ul>
                      <li>{formulaire.nom}</li>
                      <li>{new Date(formulaire.dateCreation).toLocaleDateString()}</li>
                  </ul>
                </div>
            </li>
            <li></li>
            </ul>
            </div>
            <div className="card-body px-sm-4 px-3">
              {/* <a className="text-white">Nom: </a><p> {formulaire.nom}</p> */}
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <a className="text-white">Maturité:</a>
                    <p>{formulaire.digitalMaturity}</p>
                  </div>
                  <div>
                    <a className="text-white">Score Max :</a>
                    <p>{formulaire.globalScoreMax}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <a className="text-white">Score:</a>
                    <p>{formulaire.globalScore}</p>
                  </div>
                  <div>
                    <a className="text-white">Société:</a>
                    <p>{formulaire.societe ? formulaire.societe.raisonSociale : 'N/A'}</p>
                  </div>
                </div>
              </div>
              <div></div>
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
