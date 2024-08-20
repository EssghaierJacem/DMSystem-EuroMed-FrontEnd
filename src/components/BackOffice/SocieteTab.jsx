import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axios';
import './dashboardAdmin.css';

const SocieteTab = () => {
    const [societes, setSocietes] = useState([]);
    const [selectedSociete, setSelectedSociete] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchSocietes = async () => {
            try {
                const response = await axiosInstance.get('/societes/all');
                let societesArray = response.data;
                if (response.data && typeof response.data === 'object' && !Array.isArray(response.data)) {
                    societesArray = response.data.data || response.data;
                }
                if (Array.isArray(societesArray)) {
                    const societesData = societesArray.map(societe => ({
                        id: societe.id,
                        raisonSociale: societe.raisonSociale,
                        email: societe.email,
                        telephone: societe.telephone,
                        adresseId: societe.adresse ? societe.adresse.id : null, 
                        adresse: societe.adresse ? {
                            rue: societe.adresse.rue || '',
                            ville: societe.adresse.ville || '',
                            pays: societe.adresse.pays || '' 
                        } : { rue: '', ville: '', pays: '' }, 
                        personneContact: societe.personneContact,
                        taille: societe.taille,
                        matricule: societe.matricule
                    }));
                    setSocietes(societesData);
                } else {
                    console.error('Data is not an array:', societesArray);
                }
            } catch (error) {
                console.error('Error fetching societes:', error);
            }
        };

        fetchSocietes();
    }, []);

    const handleEdit = (societe) => {
        setSelectedSociete(societe);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedSociete(null);
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        if (selectedSociete) {
            try {
                const response = await axiosInstance.put(`/societes/${selectedSociete.id}`, selectedSociete);
                setSocietes(societes.map(soc => (soc.id === response.data.id ? response.data : soc)));
                handleModalClose();
                alert('Societe updated successfully');
            } catch (error) {
                console.error('Error updating societe:', error);
            }
        }
    };

    return (
        <div className="tab-pane fade show active" id="history" role="tabpanel" aria-labelledby="history-tab">
            <div className="main-wrapper p-0">
                <div className="fixed-header">
                    <div className="d-flex align-items-center gap-2">
                        <h3>Gestion - Sociétés</h3>
                    </div>
                    <a className="premium-btn" data-cursor="pointer" href="">
                        <i className="iconsax" data-icon="crown-2" icon-name="crown-2"></i>
                        <span>SUPER ADMIN</span>
                    </a>
                </div>
                <div className="main-section">
                    <div className="container card p-0">
                        <div className="card-header">
                            <h3 className="text-white">Detailed History</h3>
                            <form className="auth-form d-none d-md-block">
                                <div className="form-group">
                                    <i className="iconsax" data-icon="search-normal-"></i>
                                    <input type="search" className="form-control" placeholder="Search here" />
                                </div>
                            </form>
                        </div>
                        <div className="card-body px-sm-4 px-3">
                            <table className="table mt-4">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Raison Sociale</th>
                                        <th>Email</th>
                                        <th>Telephone</th>
                                        <th>Pays</th>
                                        <th>Personne Contact</th>
                                        <th>Taille</th>
                                        <th>Matricule</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {societes.map((societe) => (
                                        <tr key={societe.id}>
                                            <td>{societe.id}</td>
                                            <td>{societe.raisonSociale}</td>
                                            <td>{societe.email}</td>
                                            <td>{societe.telephone}</td>
                                            <td>{societe.adresse.pays}</td>
                                            <td>{societe.personneContact}</td>
                                            <td>{societe.taille}</td>
                                            <td>{societe.matricule}</td>
                                            <td>
                                                <button onClick={() => handleEdit(societe)} className="btn">
                                                    <i className="iconsax" data-icon="edit-1" icon-name="edit-1"></i>
                                                </button>
                                                <button className="btn">
                                                    <i className="iconsax" data-icon="eye" icon-name="eye"></i>
                                                </button>
                                                <button className="btn">
                                                    <i className="iconsax" data-icon="trash" icon-name="trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Update Modal */}
            {showModal && selectedSociete && (
                <div className="modal fade show d-block" id="staticBackdrop" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Societe</h1>
                                <button type="button" className="btn-close" onClick={handleModalClose} aria-label="Close">
                                    <i className="iconsax" data-icon="close-square"></i>
                                </button>
                            </div>
                            <form onSubmit={handleUpdate}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="raisonSociale" className="form-label text-white">Raison Sociale</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="raisonSociale"
                                            value={selectedSociete.raisonSociale}
                                            onChange={(e) => setSelectedSociete({ ...selectedSociete, raisonSociale: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            value={selectedSociete.email}
                                            onChange={(e) => setSelectedSociete({ ...selectedSociete, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telephone">Telephone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="telephone"
                                            value={selectedSociete.telephone}
                                            onChange={(e) => setSelectedSociete({ ...selectedSociete, telephone: e.target.value })}
                                            required
                                        />
                                    </div>
                                    {/* Excluded adresse fields from editing */}
                                    <div className="form-group">
                                        <label htmlFor="personneContact">Personne Contact</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="personneContact"
                                            value={selectedSociete.personneContact}
                                            onChange={(e) => setSelectedSociete({ ...selectedSociete, personneContact: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="taille">Taille</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="taille"
                                            value={selectedSociete.taille}
                                            onChange={(e) => setSelectedSociete({ ...selectedSociete, taille: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="matricule">Matricule</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="matricule"
                                            value={selectedSociete.matricule}
                                            onChange={(e) => setSelectedSociete({ ...selectedSociete, matricule: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <input type="hidden" value={selectedSociete.adresseId} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Close</button>
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SocieteTab;
