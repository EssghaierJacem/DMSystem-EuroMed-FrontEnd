import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header({ active, onNavClick }) {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const navItem = path === '/' ? 'home' :
                    path.startsWith('/terms') ? 'terms' :
                    path.startsWith('/form-options') ? 'services' :
                    path.startsWith('/pricing') ? 'pricing' :
                    path.startsWith('/contact-us') ? 'contact' :
                    path.startsWith('/404') ? '404' :
                    path.startsWith('/login') ? 'login' :
                    path.startsWith('/reset-password') ? 'reset-password' :
                    path.startsWith('/otp') ? 'otp' :
                    path.startsWith('/blog-grid') ? 'blog-grid' :
                    path.startsWith('/blog-listing') ? 'blog-listing' :
                    path.startsWith('/blog-details') ? 'blog-details' :
                    path.startsWith('/terms') ? 'terms' : '';
    if (onNavClick && navItem) onNavClick(navItem);
  }, [location, onNavClick]);

  return (
    <div>
      {/* <!-- header start --> className='sticky' */}
      <header >
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
                  <li className={`nav-item ${active === 'home' ? 'active' : ''}`}>
                    <Link className="nav-link" to="/" onClick={() => onNavClick('home')}>Accueil</Link>
                  </li>
                  <li className={`nav-item ${active === 'terms' ? 'active' : ''}`}>
                    <Link className="nav-link" to="/terms" onClick={() => onNavClick('terms')}>Terms</Link>
                  </li>
                  <li className={`nav-item dropdown ${active === 'pages' ? 'active' : ''}`}>
                    <a className="nav-link dropdown-toggle" href="javascript:void(0)"
                        data-bs-toggle="dropdown" onClick={() => onNavClick('pages')}>Pages</a>
                    <ul className="dropdown-menu">
                      <li className={`dropdown-item ${active === '404' ? 'active' : ''}`}>
                        <Link className="dropdown-item" to="/404" onClick={() => onNavClick('404')}>404</Link>
                      </li>
                      <li className={`dropdown-item ${active === 'login' ? 'active' : ''}`}>
                        <Link className="dropdown-item" to="/login" onClick={() => onNavClick('login')}>Connexion</Link>
                      </li>
                      <li className={`dropdown-item ${active === 'reset-password' ? 'active' : ''}`}>
                        <Link className="dropdown-item" to="/reset-password" onClick={() => onNavClick('reset-password')}>Réinitialiser le mot de passe</Link>
                      </li>
                      <li className={`dropdown-item ${active === 'otp' ? 'active' : ''}`}>
                        <Link className="dropdown-item" to="/otp" onClick={() => onNavClick('otp')}>OTP</Link>
                      </li>
                      <li className={`dropdown-item ${active === 'blog-grid' ? 'active' : ''}`}>
                        <Link className="dropdown-item" to="/blog-grid" onClick={() => onNavClick('blog-grid')}>Grille des blogs</Link>
                      </li>
                      <li className={`dropdown-item ${active === 'blog-listing' ? 'active' : ''}`}>
                        <Link className="dropdown-item" to="/blog-listing" onClick={() => onNavClick('blog-listing')}>Liste des blogs</Link>
                      </li>
                      <li className={`dropdown-item ${active === 'blog-details' ? 'active' : ''}`}>
                        <Link className="dropdown-item" to="/blog-details" onClick={() => onNavClick('blog-details')}>Détails du blog</Link>
                      </li>
                      <li className={`dropdown-item ${active === 'terms' ? 'active' : ''}`}>
                        <Link className="dropdown-item" to="/terms" onClick={() => onNavClick('terms')}>Conditions d'utilisation</Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`nav-item ${active === 'services' ? 'active' : ''}`}>
                    <Link className="nav-link" to="/form-options" onClick={() => onNavClick('services')}>Services</Link>
                  </li>
                  <li className={`nav-item ${active === 'pricing' ? 'active' : ''}`}>
                    <Link className="nav-link" to="/pricing" onClick={() => onNavClick('pricing')}>Tarifs</Link>
                  </li>
                  <li className={`nav-item ${active === 'contact' ? 'active' : ''}`}>
                    <Link className="nav-link" to="/contact" onClick={() => onNavClick('contact')}>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <a>
        <Link 
        to="/login" 
        className="btn btn-theme d-sm-inline-block d-none" 
        onClick={() => onNavClick('login')} 
        data-cursor="pointer"
        >
        <span>Se connecter maintenant</span>
        </Link>
        </a>
      </header>
      {/* <!-- header end --> */}
    </div>
  );
}

export default Header;
