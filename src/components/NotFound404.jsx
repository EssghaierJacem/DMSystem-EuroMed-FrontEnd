import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NotFound404({ active, onNavClick }) {
  const location = useLocation();
  
  useEffect(() => {
    const path = location.pathname;
    const navItem = path === '/' ? 'home' :
                    path.startsWith('/chat') ? 'chat' :
                    path.startsWith('/form-options') ? 'services' :
                    path.startsWith('/pricing') ? 'pricing' :
                    path.startsWith('/contact') ? 'contact' :
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
      <header>
        <button 
          className="navbar-toggler d-xl-none d-inline navbar-menu-button" 
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#primaryMenu"
        >
          <span className="navbar-toggler-icon">
            <i className="iconsax" data-icon="text-align-justify"></i>
          </span>
        </button>
        <Link to="/">
          <img src="/assets/images/logoEM.png" className="img-fluid" alt="logo" style={{ width: '70%' }}/>
        </Link>
        <nav className="header-nav-middle">
          <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
            <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
              <div className="offcanvas-header navbar-shadow">
                <h5 className="mb-0">Retour</h5>
                <button 
                  className="btn-close lead" 
                  type="button" 
                  data-bs-dismiss="offcanvas" 
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav">
                  <li className={`nav-item ${active === 'home' ? 'active' : ''}`}>
                    <Link className="nav-link" to="/" onClick={() => onNavClick('home')}>Accueil</Link>
                  </li>
                  <li className={`nav-item ${active === 'chat' ? 'active' : ''}`}>
                    <Link className="nav-link" to="/chat" onClick={() => onNavClick('chat')}>Chat</Link>
                  </li>
                  <li className={`nav-item dropdown ${active === 'pages' ? 'active' : ''}`}>
                    <a 
                      className="nav-link dropdown-toggle" 
                      href="#!" 
                      data-bs-toggle="dropdown" 
                      onClick={() => onNavClick('pages')}
                    >
                      Pages
                    </a>
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
        <Link 
          to="/login" 
          className="btn btn-theme d-sm-inline-block d-none"
        >
          <span>Connectez-vous maintenant</span>
        </Link>
      </header>

      <section className="error-section section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-md-7 m-auto">
              <div className="error-main">
                <div className="error-img">
                  <img src="/assets/svg/404/4.svg" className="img-fluid" alt="404" />
                  <img src="/assets/svg/404/404-robot.svg" className="img-fluid robot-img" alt="404" />
                  <img src="/assets/svg/404/4.svg" className="img-fluid" alt="404" />
                </div>
                <div className="error-content">
                  <h2>Oups, page introuvable</h2>
                  <p>Cette page n'existe pas ou a été supprimée ! Nous vous suggérons de retourner à l'accueil.</p>
                  <Link 
                    to="/" 
                    className="btn btn-theme d-inline-block mt-2"
                  >
                    <span>Retour à l'accueil</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFound404;
