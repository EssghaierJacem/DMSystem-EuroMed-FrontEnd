import React from 'react'

function Header() {
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
                    <a className="nav-link" href="index.html">Accueil</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="chat.html">Chat</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="javascript:void(0)"
                        data-bs-toggle="dropdown">Pages</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="404.html">404</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="login.html">Connexion</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="reset-password.html">Réinitialiser le mot de passe</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="otp.html">OTP</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="blog-grid.html">Grille des blogs</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="blog-listing.html">Liste des blogs</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="blog-details.html">Détails du blog</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="terms.html">Conditions d'utilisation</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="service.html">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="pricing.html">Tarifs</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="contact-us.html">Contact</a>
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

export default Header
