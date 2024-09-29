import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header({ active, onNavClick }) {
  const location = useLocation();
  const navigate = useNavigate();
  const nomUtilisateur = localStorage.getItem("nomUtilisateur");

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
                    path.startsWith('/blog-details') ? 'blog-details' : '';
    if (onNavClick && navItem) onNavClick(navItem);
  }, [location, onNavClick]);

  const handleLogout = () => {
    localStorage.removeItem("nomUtilisateur");
    localStorage.removeItem("role");
    localStorage.removeItem("societeId");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <div>
      {/* <!-- header start --> */}
      <header>
        <button className="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#primaryMenu">
          <span className="navbar-toggler-icon">
            <i className="iconsax" data-icon="text-align-justify"></i>
          </span>
        </button>
        <a href="index.html">
          <img src="../assets/images/logoEm.png" className="img-fluid" style={{ width: '70%' }} alt="Logo EuroMed Innovation"/>
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
                    <Link className="nav-link" to="/terms" onClick={() => onNavClick('terms')}>Conditions Générales</Link>
                  </li>
                  <li className={`nav-item ${active === 'services' ? 'active' : ''}`}>
                    <Link className="nav-link" to="/form-options" onClick={() => onNavClick('services')}>Services</Link>
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
          {nomUtilisateur ? (
            <div className="d-sm-inline-block d-none">
              <span className="btn btn-theme">
                {nomUtilisateur}
              </span>
              <span 
                className="text-theme d-block mt-2 cursor-pointer"
                onClick={handleLogout}
              >
                Se déconnecter
              </span>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="btn btn-theme d-sm-inline-block d-none" 
              onClick={() => onNavClick('login')} 
              data-cursor="pointer"
            >
              <span>Se connecter maintenant</span>
            </Link>
          )}
        </a>
      </header>
      {/* <!-- header end --> */}
    </div>
  );
}

export default Header;
