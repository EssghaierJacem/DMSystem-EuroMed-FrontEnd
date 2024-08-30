import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axios';
import './dashboardAdmin.css';
import { FaArrowUp, FaArrowDown, FaSort } from 'react-icons/fa';

const AdresseTab = () => {
    const [adresses, setAdresses] = useState([]);
    const [selectedAdresse, setSelectedAdresse] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchAdresses = async () => {
            try {
                const response = await axiosInstance.get('/adresse/all');
                setAdresses(response.data);
            } catch (error) {
                console.error('Error fetching adresses:', error);
            }
        };

        fetchAdresses();
    }, []);

    const handleEdit = (adresse) => {
        setSelectedAdresse(adresse);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedAdresse(null);
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        if (selectedAdresse) {
            try {
                const response = await axiosInstance.put(`/adresse/${selectedAdresse.id}`, selectedAdresse);
                setAdresses(adresses.map(addr => (addr.id === response.data.id ? response.data : addr)));
                handleModalClose();
                alert('Adresse updated successfully');
            } catch (error) {
                console.error('Error updating adresse:', error);
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

    const getSortIcon = (key) => {
        if (sortConfig.key !== key) {
            return <FaSort />;
        }
        return sortConfig.direction === 'asc' ? <FaArrowUp /> : <FaArrowDown />;
    };

    const sortedAdresses = [...adresses].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    const filteredAdresses = sortedAdresses.filter(adresse =>
        Object.values(adresse).some(value =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="tab-pane fade show active" id="adresse" role="tabpanel" aria-labelledby="adresse-tab">
            <div className="main-wrapper p-0">
                <div className="fixed-header">
                    <div className="d-flex align-items-center gap-2">
                        <h3>Gestion - Adresses</h3>
                    </div>
                    <a className="premium-btn" data-cursor="pointer" href="">
                        <i className="iconsax" data-icon="crown-2" icon-name="crown-2"></i>
                        <span>SUPER ADMIN</span>
                    </a>
                </div>
                <div className="main-section">
                    <div className="container card p-0">
                        <div className="card-header">
                            <h3 className="text-white">Detailed Address List</h3>
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
                                            ID {getSortIcon('id')}
                                        </th>
                                        <th onClick={() => handleSort('ligne1')}>
                                            Ligne 1 {getSortIcon('ligne1')}
                                        </th>
                                        <th onClick={() => handleSort('ligne2')}>
                                            Ligne 2 {getSortIcon('ligne2')}
                                        </th>
                                        <th onClick={() => handleSort('codePostal')}>
                                            Code Postal {getSortIcon('codePostal')}
                                        </th>
                                        <th onClick={() => handleSort('ville')}>
                                            Ville {getSortIcon('ville')}
                                        </th>
                                        <th onClick={() => handleSort('pays')}>
                                            Pays {getSortIcon('pays')}
                                        </th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredAdresses.map((adresse) => (
                                        <tr key={adresse.id}>
                                            <td>{adresse.id}</td>
                                            <td>{adresse.ligne1}</td>
                                            <td>{adresse.ligne2}</td>
                                            <td>{adresse.codePostal}</td>
                                            <td>{adresse.ville}</td>
                                            <td>{adresse.pays}</td>
                                            <td>
                                                <button onClick={() => handleEdit(adresse)} className="btn">
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

            {showModal && selectedAdresse && (
                <div className="modal fade show d-block" id="staticBackdrop" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Adresse</h1>
                                <button type="button" className="btn-close" onClick={handleModalClose} aria-label="Close">
                                    <i className="iconsax" data-icon="close-square"></i>
                                </button>
                            </div>
                            <form onSubmit={handleUpdate}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="ligne1" className="form-label text-white">Ligne 1</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="ligne1"
                                            value={selectedAdresse.ligne1}
                                            onChange={(e) => setSelectedAdresse({ ...selectedAdresse, ligne1: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ligne2">Ligne 2</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="ligne2"
                                            value={selectedAdresse.ligne2}
                                            onChange={(e) => setSelectedAdresse({ ...selectedAdresse, ligne2: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="codePostal">Code Postal</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="codePostal"
                                            value={selectedAdresse.codePostal}
                                            onChange={(e) => setSelectedAdresse({ ...selectedAdresse, codePostal: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ville">Ville</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="ville"
                                            value={selectedAdresse.ville}
                                            onChange={(e) => setSelectedAdresse({ ...selectedAdresse, ville: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pays">Pays</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="pays"
                                            value={selectedAdresse.pays}
                                            onChange={(e) => setSelectedAdresse({ ...selectedAdresse, pays: e.target.value })}
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

export default AdresseTab;

