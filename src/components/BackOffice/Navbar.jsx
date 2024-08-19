import React from 'react';
import { Link } from 'react-router-dom';
import "./dashboardAdmin.css";

const Navbar = () => {
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
                    <a href="index.html" className="logo-icon d-none d-md-flex">
                        <img src="../assets/svg/logo-icon.svg" className="img-fluid" alt="Logo" />
                    </a>
                    <ul className="nav nav-tabs menu-wrapper" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link" to="/dashboard/chat">
                                <i className="iconsax" data-icon="messages-2" icon-name="messages-2"></i>
                                <span>Chat</span>
                            </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link" to="/dashboard/history">
                                <i className="iconsax" data-icon="refresh-circle"></i>
                                <span>History</span>
                            </Link>
                        </li>
                        {/* Add more nav items as needed */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
