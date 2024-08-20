import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axios';
import './dashboardAdmin.css';

const FormulaireTab = () => {
    const [formulaires, setFormulaires] = useState([]);
    const [selectedFormulaire, setSelectedFormulaire] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchFormulaires = async () => {
            try {
                const response = await axiosInstance.get('/formulaires/all');
                setFormulaires(response.data);
            } catch (error) {
                console.error('Error fetching formulaires:', error);
            }
        };

        fetchFormulaires();
    }, []);

    const handleEdit = (formulaire) => {
        setSelectedFormulaire(formulaire);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedFormulaire(null);
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        if (selectedFormulaire) {
            try {
                const response = await axiosInstance.put(`/formulaires/${selectedFormulaire.id}`, selectedFormulaire);
                setFormulaires(formulaires.map(form => (form.id === response.data.id ? response.data : form)));
                handleModalClose();
                alert('Formulaire updated successfully');
            } catch (error) {
                console.error('Error updating formulaire:', error);
            }
        }
    };

    const handleDelete = async (id) => {
        try {
            await axiosInstance.delete(`/formulaires/${id}`);
            setFormulaires(formulaires.filter(form => form.id !== id));
            alert('Formulaire deleted successfully');
        } catch (error) {
            console.error('Error deleting formulaire:', error);
        }
    };

    return (
        <div className="tab-pane fade show active" id="formulaire" role="tabpanel" aria-labelledby="formulaire-tab">
            
            <div className="main-wrapper p-0">
                <div className="fixed-header">
                    <div className="d-flex align-items-center gap-2">
                        <h3>Gestion - Formulaires</h3>
                    </div>
                    <a className="premium-btn" data-cursor="pointer" href="">
                        <i className="iconsax" data-icon="crown-2" icon-name="crown-2"></i>
                        <span>SUPER ADMIN</span>
                    </a>
                </div>
                <div className="main-section">
                    <div className="container card p-0">
                        <div className="card-header">
                            <h3 className="text-white">Detailed Formulaire List</h3>
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
                                        <th>Nom</th>
                                        <th>Date de Création</th>
                                        <th>Société</th>
                                        <th>Version</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {formulaires.map((formulaire) => (
                                        <tr key={formulaire.id}>
                                            <td>{formulaire.id}</td>
                                            <td>{formulaire.nom}</td>
                                            <td>{new Date(formulaire.dateCreation).toLocaleDateString()}</td>
                                            <td>{formulaire.societe.raisonSociale}</td>
                                            <td>{formulaire.version}</td>
                                            <td>
                                                <button onClick={() => handleEdit(formulaire)} className="btn">
                                                    <i className="iconsax" data-icon="edit-1" icon-name="edit-1"></i>
                                                </button>
                                                <button className="btn">
                                                    <i className="iconsax" data-icon="eye" icon-name="eye"></i>
                                                </button>
                                                <button onClick={() => handleDelete(formulaire.id)} className="btn">
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
            {showModal && selectedFormulaire && (
                <div className="modal fade show d-block" id="staticBackdrop" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Formulaire</h1>
                                <button type="button" className="btn-close" onClick={handleModalClose} aria-label="Close">
                                    <i className="iconsax" data-icon="close-square"></i>
                                </button>
                            </div>
                            <form onSubmit={handleUpdate}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="nom" className="form-label text-white">Nom</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nom"
                                            value={selectedFormulaire.nom}
                                            onChange={(e) => setSelectedFormulaire({ ...selectedFormulaire, nom: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dateCreation">Date de Création</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="dateCreation"
                                            value={new Date(selectedFormulaire.dateCreation).toISOString().substring(0, 10)}
                                            onChange={(e) => setSelectedFormulaire({ ...selectedFormulaire, dateCreation: new Date(e.target.value).toISOString() })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="version">Version</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="version"
                                            value={selectedFormulaire.version}
                                            onChange={(e) => setSelectedFormulaire({ ...selectedFormulaire, version: parseInt(e.target.value) })}
                                            required
                                        />
                                    </div>
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

export default FormulaireTab;
