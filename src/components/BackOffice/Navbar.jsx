import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./dashboardAdmin.css";

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const isFormulairesActive = currentPath.startsWith('/dashboard/formulaires') || currentPath.startsWith('/dashboard/form/');
    const isSocietesActive = currentPath.startsWith('/dashboard/societes') || currentPath.startsWith('/dashboard/societes/');
    const isAdresseActive = currentPath.startsWith('/dashboard/adresses') || currentPath.startsWith('/dashboard/adresses/');

    return (
        <nav className="navbar navbar-expand-md p-0">
            <button className="navbar-toggler d-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#mainnavbarNav" aria-controls="mainnavbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <i className="iconsax" data-icon="text-align-justify"></i>
            </button>
            <div className="collapse navbar-collapse" id="mainnavbarNav">
                <div className="menu-panel">
                    <button data-bs-toggle="collapse" data-bs-target="#mainnavbarNav"
                        className="mainnav-close d-block d-md-none">
                        <i className="iconsax" data-icon="close-circle"></i>
                    </button>
                    <a href="/" className="logo-icon d-none d-md-flex">
                        <img src="../assets/images/logoEM.png" className="img-fluid" alt="Logo" />
                    </a>
                    <ul className="nav nav-tabs menu-wrapper" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <Link
                                className={`nav-link ${currentPath === '/dashboard/home' ? 'active' : ''}`}
                                to="/dashboard/home"
                            >
                                <i className="iconsax" data-icon="activity-chart" icon-name="activity-chart"></i>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link
                                className={`nav-link ${isSocietesActive ? 'active' : ''}`}
                                to="/dashboard/societes"
                            >
                                <i className="iconsax" data-icon="buildings-1" icon-name="buildings-1"></i>
                                <span>Societe</span>
                            </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link
                                className={`nav-link ${isAdresseActive ? 'active' : ''}`}
                                to="/dashboard/adresses"
                            >
                                <i className="iconsax" data-icon="route-2" icon-name="route-2"></i>
                                <span>Adresses</span>
                            </Link>
                        </li>          
                        <li className="nav-item" role="presentation">
                            <Link
                                className={`nav-link ${isFormulairesActive ? 'active' : ''}`}
                                to="/dashboard/formulaires"
                            >
                                <i className="iconsax" data-icon="pen-tool-2" icon-name="pen-tool-2"></i>
                                <span>Formulaires</span>
                            </Link>
                            
                        </li>              
                        {/* For more LI */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
