import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div>
      {/* <!-- header start --> */}
      <header className='sticky'>
        <button className="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#primaryMenu">
          <span className="navbar-toggler-icon">
            <i className="iconsax" data-icon="text-align-justify"></i>
          </span>
        </button>
        <a href="index.html">
          <img src="../assets/images/logo.svg" className="img-fluid" alt="Logo EuroMed Innovation"/>
        </a>
        <nav className="header-nav-middle">
          <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
            <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
              <div className="offcanvas-header navbar-shadow">
                <h5 className="mb-0">Retour</h5>
                <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className={`nav-link ${currentPath === '/' ? 'active' : ''}`} to="/">Accueil</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${currentPath === '/chat' ? 'active' : ''}`} to="/chat">Chat</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="javascript:void(0)"
                        data-bs-toggle="dropdown">Pages</a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className={`dropdown-item ${currentPath === '/404' ? 'active' : ''}`} to="/404">404</Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item ${currentPath === '/login' ? 'active' : ''}`} to="/login">Connexion</Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item ${currentPath === '/reset-password' ? 'active' : ''}`} to="/reset-password">Réinitialiser le mot de passe</Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item ${currentPath === '/otp' ? 'active' : ''}`} to="/otp">OTP</Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item ${currentPath === '/blog-grid' ? 'active' : ''}`} to="/blog-grid">Grille des blogs</Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item ${currentPath === '/blog-listing' ? 'active' : ''}`} to="/blog-listing">Liste des blogs</Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item ${currentPath === '/blog-details' ? 'active' : ''}`} to="/blog-details">Détails du blog</Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item ${currentPath === '/terms' ? 'active' : ''}`} to="/terms">Conditions d'utilisation</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${currentPath === '/form-options' ? 'active' : ''}`} to="/form-options">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${currentPath === '/pricing' ? 'active' : ''}`} to="/pricing">Tarifs</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${currentPath === '/contact-us' ? 'active' : ''}`} to="/contact-us">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <a data-cursor="pointer" href="login.html" className="btn btn-theme d-sm-inline-block d-none"><span>Se connecter maintenant</span></a>
      </header>
      {/* <!-- header end --> */}
    </div>
  )
}

export default Header;
