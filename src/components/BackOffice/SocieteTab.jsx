import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axios';
import './dashboardAdmin.css';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const SocieteTab = () => {
    const [societes, setSocietes] = useState([]);
    const [selectedSociete, setSelectedSociete] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [searchQuery, setSearchQuery] = useState('');

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
                        matricule: societe.matricule,
                        domaine: societe.domaine
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

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedSocietes = [...societes].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    const filteredSocietes = sortedSocietes.filter(societe =>
        Object.values(societe).some(value =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
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
                                    <input
                                        type="search"
                                        className="form-control"
                                        placeholder="Search here"
                                        value={searchQuery}
                                        onChange={handleSearch}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="card-body px-sm-4 px-3">
                            <table className="table mt-4">
                                <thead>
                                    <tr>
                                        <th onClick={() => handleSort('id')}>
                                            ID
                                            {sortConfig.key === 'id' && (
                                                sortConfig.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />
                                            )}
                                        </th>
                                        <th onClick={() => handleSort('raisonSociale')}>
                                            Raison Sociale
                                            {sortConfig.key === 'raisonSociale' && (
                                                sortConfig.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />
                                            )}
                                        </th>
                                        <th onClick={() => handleSort('email')}>
                                            Email
                                            {sortConfig.key === 'email' && (
                                                sortConfig.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />
                                            )}
                                        </th>
                                        <th onClick={() => handleSort('telephone')}>
                                            Telephone
                                            {sortConfig.key === 'telephone' && (
                                                sortConfig.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />
                                            )}
                                        </th>
                                        <th onClick={() => handleSort('adresse.pays')}>
                                            Pays
                                            {sortConfig.key === 'adresse.pays' && (
                                                sortConfig.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />
                                            )}
                                        </th>
                                        <th onClick={() => handleSort('personneContact')}>
                                            Personne Contact
                                            {sortConfig.key === 'personneContact' && (
                                                sortConfig.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />
                                            )}
                                        </th>
                                        <th onClick={() => handleSort('taille')}>
                                            Taille
                                            {sortConfig.key === 'taille' && (
                                                sortConfig.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />
                                            )}
                                        </th>
                                        <th onClick={() => handleSort('matricule')}>
                                            Matricule
                                            {sortConfig.key === 'matricule' && (
                                                sortConfig.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />
                                            )}
                                        </th>
                                        <th onClick={() => handleSort('domaine')}>
                                            Domaine
                                            {sortConfig.key === 'domaine' && (
                                                sortConfig.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />
                                            )}
                                        </th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredSocietes.map((societe) => (
                                        <tr key={societe.id}>
                                            <td>{societe.id}</td>
                                            <td>{societe.raisonSociale}</td>
                                            <td>{societe.email}</td>
                                            <td>{societe.telephone}</td>
                                            <td>{societe.adresse.pays}</td>
                                            <td>{societe.personneContact}</td>
                                            <td>{societe.taille}</td>
                                            <td>{societe.matricule}</td>
                                            <td>{societe.domaine}</td>
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

            {showModal && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Societe</h5>
                                <button type="button" className="close" onClick={handleModalClose}>
                                    &times;
                                </button>
                            </div>
                            <form onSubmit={handleUpdate}>
                                <div className="modal-body">
                                    {/* Form fields for editing */}
                                    <div className="form-group">
                                        <label htmlFor="raisonSociale">Raison Sociale</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="raisonSociale"
                                            value={selectedSociete?.raisonSociale || ''}
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
                                            value={selectedSociete?.email || ''}
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
                                            value={selectedSociete?.telephone || ''}
                                            onChange={(e) => setSelectedSociete({ ...selectedSociete, telephone: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pays">Pays</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="pays"
                                            value={selectedSociete?.adresse?.pays || ''}
                                            onChange={(e) => setSelectedSociete({ 
                                                ...selectedSociete, 
                                                adresse: { ...selectedSociete.adresse, pays: e.target.value } 
                                            })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="personneContact">Personne Contact</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="personneContact"
                                            value={selectedSociete?.personneContact || ''}
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
                                            value={selectedSociete?.taille || ''}
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
                                            value={selectedSociete?.matricule || ''}
                                            onChange={(e) => setSelectedSociete({ ...selectedSociete, matricule: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="domaine">Domaine</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="domaine"
                                            value={selectedSociete?.domaine || ''}
                                            onChange={(e) => setSelectedSociete({ ...selectedSociete, domaine: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="no-select-plan" onClick={handleModalClose}>Annuler</button>
                                    <button type="submit" className="select-plan">Sauvegarder</button>
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
