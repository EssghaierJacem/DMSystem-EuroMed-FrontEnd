import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axios';
import './dashboardAdmin.css';

const AdresseViewTab = () => {
  const { id } = useParams();
  const [adresse, setAdresse] = useState(null);

  useEffect(() => {
    const fetchAdresse = async () => {
      try {
        const response = await axiosInstance.get(`/adresse/${id}`);
        setAdresse(response.data);
      } catch (error) {
        console.error('Error fetching adresse:', error);
      }
    };

    fetchAdresse();
  }, [id]);

  if (!adresse) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div className="tab-pane fade show active" id="formView" role="tabpanel" aria-labelledby="formView-tab">
      <div className="main-wrapper p-0">
        <div className="fixed-header">
          <div className="d-flex align-items-center gap-2">
            <h3>Gestion d'Adresse</h3>
          </div>
        </div>
        <div className="main-section">
          <div className="container card p-0">
            <div className="card-header">
              <h3 className="text-white title-basic aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                Adresse Details - ID : {adresse.id}
              </h3>
            </div>
            <div className="card-body px-sm-4 px-3">
              <ul className="history-sec">
                <li className="history-main">
                  <div className="history-detail text-truncate">
                    <i className="iconsax" data-icon="message-text" icon-name="message-text"></i>
                    <div>
                      <p>Sur cette page, vous pouvez consulter les détails de l'adresse.</p>
                      <p className="d-sm-none d-inline-block">2 min ago</p>
                    </div>
                  </div>
                  <div className="history-time d-sm-flex d-none">
                    <ul>
                      <li>{adresse.ligne1} {adresse.ligne2}</li>
                      <li>{adresse.ville}, {adresse.pays} - {adresse.codePostal}</li>
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
                    <a className="text-white">Ligne 1</a>
                    <p>{adresse.ligne1 || 'N/A'}</p>
                  </div>
                  <div>
                    <a className="text-white">Ligne 2</a>
                    <p>{adresse.ligne2 || 'N/A'}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <a className="text-white">Code Postal</a>
                    <p>{adresse.codePostal || 'N/A'}</p>
                  </div>
                  <div>
                    <a className="text-white">Ville</a>
                    <p>{adresse.ville || 'N/A'}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <a className="text-white">Pays</a>
                    <p>{adresse.pays || 'N/A'}</p>
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

export default AdresseViewTab;
