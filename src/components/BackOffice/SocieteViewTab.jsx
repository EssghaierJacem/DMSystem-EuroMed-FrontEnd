import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axios';
import './dashboardAdmin.css';

const SocieteViewTab = () => {
  const { id } = useParams();
  const [societe, setSociete] = useState(null);


  useEffect(() => {
    const fetchSociete = async () => {
      try {
        const response = await axiosInstance.get(`/societes/${id}`);
        setSociete(response.data);
      } catch (error) {
        console.error('Error fetching societe:', error);
      }
    };

    fetchSociete();
  }, [id]);


  if (!societe) {
    return <div>Chargement en cours...</div>;
  }


  return (
    <div className="tab-pane fade show active" id="formView" role="tabpanel" aria-labelledby="formView-tab">
      <div className="main-wrapper p-0">
        <div className="fixed-header">
          <div className="d-flex align-items-center gap-2">
            <h3>Gestion de Société</h3>
          </div>
        </div>
        <div className="main-section">
          <div className="container card p-0">
            <div className="card-header">
              <h3 className="text-white title-basic aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                Société Details - ID :{societe.id}
              </h3>
            </div>
            <div className="card-body px-sm-4 px-3">
              <ul className="history-sec">
                <li className="history-main">
                  <div className="history-detail text-truncate">
                    <i className="iconsax" data-icon="message-text" icon-name="message-text"></i>
                    <div>
                      <p>Sur cette page, vous pouvez consulter les détails du formulaire ainsi que le score de maturité digitale.</p>
                      <p className="d-sm-none d-inline-block">2 min ago</p>
                    </div>
                  </div>
                  <div className="history-time d-sm-flex d-none">
                    <ul>
                      <li>{societe.raisonSociale}</li>
                      <li>{new Date().toLocaleDateString()}</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card-body px-sm-4 px-3">
              <div className="row">
                <div className="col-md-4">
                  <div>
                    <a className="text-white">Matricule</a>
                    <p>{societe.matricule || 'N/A'}</p>
                  </div>
                  <div>
                    <a className="text-white">Taille</a>
                    <p>{societe.taille}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <a className="text-white">Adresse</a>
                    <p>{societe.adresse.pays} , {societe.adresse.ville}</p>
                  </div>
                  <div>
                    <a className="text-white">Personne a contacter</a>
                    <p>{societe.personneContact || 'N/A'}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <a className="text-white">Email</a>
                    <p>{societe.email || 'N/A'}</p>
                  </div>
                  <div>
                    <a className="text-white">Domaine</a>
                    <p>{societe.domaine || 'N/A'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocieteViewTab;
