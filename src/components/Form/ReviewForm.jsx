import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const ReviewForm = ({ formulaire, handleEdit, handleSubmit, loading }) => {
  const [expandedSections, setExpandedSections] = useState(() => {
    const defaultState = { formulaire: true };
    formulaire.processusUPs.forEach((_, upIndex) => {
      defaultState[`processusUP${upIndex}`] = true;
      formulaire.processusUPs[upIndex].processusPeres.forEach((_, pereIndex) => {
        defaultState[`processusPere${pereIndex}`] = true;
        formulaire.processusUPs[upIndex].processusPeres[pereIndex].processusFils.forEach((_, filsIndex) => {
          defaultState[`processusFils${filsIndex}`] = true;
        });
      });
    });
    return defaultState;
  });

  const toggleSection = (key) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="auth-form">
      <div className="main-title mb-3">
        <div className="blog-main-content">
          <h3 className="mt-xl-5 mt-md-3 mt-2">
            <img src="../assets/svg/title-effect2.svg" className="img-fluid" alt="effect" />
            Revoir le formulaire
          </h3>
          <p>
            Vous pouvez ici vérifier tous les détails de votre formulaire. Assurez-vous que tout est correct avant de soumettre
          </p>

          <div className="section mb-4">
            <div className="section-header" onClick={() => toggleSection('formulaire')}>
              <h3 className="section-title">
                Nom du Formulaire: {formulaire.nom}
                {expandedSections['formulaire'] ? (
                  <FaChevronDown className="icon ml-2" style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }} />
                ) : (
                  <FaChevronRight className="icon ml-2" style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }} />
                )}
              </h3>
            </div>
            {expandedSections['formulaire'] && (
              <div className="section-body">
                {formulaire.processusUPs.map((processusUP, upIndex) => (
                  <div key={upIndex} className="sub-section mb-4" style={{ marginLeft: '0', paddingLeft: '20px', borderLeft: '2px solid #b0bec5' }}>
                    <div
                      className="sub-section-header"
                      onClick={() => toggleSection(`processusUP${upIndex}`)}
                      style={{ paddingLeft: '10px' }}
                    >
                      <h4 className="sub-section-title">
                        Domaine {upIndex + 1}: {processusUP.nom}
                        {expandedSections[`processusUP${upIndex}`] ? (
                          <FaChevronDown className="icon ml-2" style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }} />
                        ) : (
                          <FaChevronRight className="icon ml-2" style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }} />
                        )}
                      </h4>
                    </div>
                    {expandedSections[`processusUP${upIndex}`] && (
                      <div className="sub-section-body">
                        {processusUP.processusPeres.map((processusPere, pereIndex) => (
                          <div key={pereIndex} className="sub-sub-section mb-4" style={{ marginLeft: '20px', paddingLeft: '20px', borderLeft: '2px solid #cfd8dc' }}>
                            <div
                              className="sub-sub-section-header"
                              onClick={() => toggleSection(`processusPere${pereIndex}`)}
                              style={{ paddingLeft: '10px' }}
                            >
                              <h4 className="section-title">
                                Processus {pereIndex + 1}: {processusPere.nom}
                                {expandedSections[`processusPere${pereIndex}`] ? (
                                  <FaChevronDown className="icon ml-2" style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }} />
                                ) : (
                                  <FaChevronRight className="icon ml-2" style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }} />
                                )}
                              </h4>
                            </div>
                            {expandedSections[`processusPere${pereIndex}`] && (
                              <div className="sub-sub-section-body">
                                {/* <p>Score Maximum: {processusPere.scoreMax}</p> */}
                                {processusPere.processusFils.map((processusFils, filsIndex) => (
                                  <div key={filsIndex} className="sub-sub-sub-section mb-3" style={{ marginLeft: '20px', paddingLeft: '20px', borderLeft: '2px solid #e0f2f1' }}>
                                    <div
                                      className="sub-sub-sub-section-header"
                                      onClick={() => toggleSection(`processusFils${filsIndex}`)}
                                      style={{ paddingLeft: '10px' }}
                                    >
                                      <h4 className="sub-sub-section-item-title">
                                        Sous-Processus {filsIndex + 1}: {processusFils.nom} 
                                        {expandedSections[`processusFils${filsIndex}`] ? (
                                          <FaChevronDown className="icon ml-2" style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }} />
                                        ) : (
                                          <FaChevronRight className="icon ml-2" style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }} />
                                        )}
                                      </h4>
                                    </div>
                                    {expandedSections[`processusFils${filsIndex}`] && (
                                      <div className="sub-sub-sub-section-body">
                                        {/* <p>Score Maximum: {processusFils.scoreMax}</p>
                                        <p>Score: {processusFils.score}</p> */}
                                        <p>Observation: {processusFils.observation}</p>
                                        {/* <p>Pourcentage: {processusFils.pourcentage}</p> */}
                                        <p>Digital: {processusFils.digital ? 'Oui' : 'Non'}</p>
                                        <p>Applicable: {processusFils.applicable ? 'Oui' : 'Non'}</p>
                                        {/* <p>Importance: {processusFils.importance}</p> */}
                                        <div className="udfs">
                                          <h4>UDFs:</h4>
                                          {processusFils.userDefinedFields.map((udf, udfIndex) => (
                                            <div key={udfIndex} className="udf-item">
                                              <p>Nom: {udf.fieldName}</p>
                                              <p>Valeur: {udf.fieldValue}</p>
                                            </div>
                                          ))}
                                        </div>
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

          <div className="d-flex justify-content-end mt-4">
            <button className="btn-solid me-2" onClick={handleEdit}>Modifier</button>
            <button className="btn-solid" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
