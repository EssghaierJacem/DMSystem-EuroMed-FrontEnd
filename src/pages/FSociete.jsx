import React from 'react';
import BreadCrubms from '../components/BreadCrubms';
import Header from '../components/Header';
import Footer from '../components/Footer';

function FSociete() {
  return (
    <div>
      <Header />
      <BreadCrubms
        title="Introduire votre société"
        subtitle="Personnalisez et optimisez votre formulaire selon vos besoins."
      />
      <section className="login-section">
        <div className="col-lg-7 d-lg-inline-block d-none p-0">
          <div className="login-animation">
            <img
              src="../assets/svg/auth/1.svg"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="img-fluid img-base"
              alt=""
            />
            <img
              src="../assets/svg/auth/2.svg"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              className="img-fluid img-light"
              alt=""
            />
            <div
              className="img-face"
              data-aos-delay="2500"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img
                src="../assets/svg/auth/3.svg"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="col-xxl-4 col-lg-5 ms-auto p-0">
          <div className="login-box">
            <div>
              <h2>
                Bienvenue à <span>EuroMed !</span>
              </h2>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="signup-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#signup-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="signup-tab-pane"
                    aria-selected="false"
                  >
                     Société
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="login-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#login-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="login-tab-pane"
                    aria-selected="true"
                  >
                    Adresse
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade"
                  id="signup-tab-pane"
                  role="tabpanel"
                  aria-labelledby="signup-tab"
                  tabindex="0"
                >
                  <form className="auth-form">
                    <div className="mb-3 form-group">
                      <i className="iconsax" data-icon="user-1"></i>
                      <label htmlFor="name" className="form-label">Raison Sociale</label>
                      <input
                        type="text"
                        placeholder="Nom de la société"
                        className="form-control"
                        id="name"
                      />
                    </div>
                    <div className="mb-3 form-group">
                      <i className="iconsax" data-icon="mail"></i>
                      <label htmlFor="emailid" className="form-label">Email</label>
                      <input
                        type="email"
                        placeholder="Adresse email de la société"
                        className="form-control"
                        id="emailid"
                      />
                    </div>
                    <div className="mb-3 form-group">
                      <i className="iconsax" data-icon="phone"></i>
                      <label htmlFor="telephone" className="form-label">Téléphone</label>
                      <input
                        type="tel"
                        placeholder="Numéro de téléphone"
                        className="form-control"
                        id="telephone"
                      />
                    </div>
                    <div className="mb-3 form-group">
                      <i className="iconsax" data-icon="id-card"></i>
                      <label htmlFor="matricule" className="form-label">Matricule</label>
                      <input
                        type="text"
                        placeholder="Numéro de matricule"
                        className="form-control"
                        id="matricule"
                      />
                    </div>
                    <div className="mb-3 form-group">
                      <i className="iconsax" data-icon="users"></i>
                      <label htmlFor="nombre" className="form-label">Nombre de personnes</label>
                      <input
                        type="number"
                        placeholder="Nombre d'employés"
                        className="form-control"
                        id="nombre"
                      />
                    </div>
                    <div className="divider">
                      <h3>ou inscrivez-vous avec</h3>
                    </div>
                    <button
                      type="submit"
                      className="btn-solid w-100 text-center mt-4"
                    >
                      Enregistrer Société
                    </button>
                    <h4 className="text-title text-center mt-2">
                      Vous avez déjà un compte ?{' '}
                      <a
                        data-cursor="pointer"
                        href="javascript:void(0)"
                      >
                        Se connecter
                      </a>
                    </h4>
                  </form>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="login-tab-pane"
                  role="tabpanel"
                  aria-labelledby="login-tab"
                  tabindex="0"
                >
                  <form className="auth-form">
                    <div className="mb-3 form-group">
                      <i className="iconsax" data-icon="map-pin"></i>
                      <label htmlFor="adresse1" className="form-label">Ligne 1</label>
                      <input
                        type="text"
                        placeholder="Adresse ligne 1"
                        className="form-control"
                        id="adresse1"
                      />
                    </div>
                    <div className="mb-3 form-group">
                      <i className="iconsax" data-icon="map-pin"></i>
                      <label htmlFor="adresse2" className="form-label">Ligne 2</label>
                      <input
                        type="text"
                        placeholder="Adresse ligne 2"
                        className="form-control"
                        id="adresse2"
                      />
                    </div>
                    <div className="mb-2 form-group">
                      <i className="iconsax" data-icon="map-pin"></i>
                      <label htmlFor="codePostal" className="form-label">Code Postal</label>
                      <input
                        type="text"
                        placeholder="Code postal"
                        className="form-control"
                        id="codePostal"
                      />
                    </div>
                    <div className="mb-3 form-group">
                      <i className="iconsax" data-icon="map-pin"></i>
                      <label htmlFor="pays" className="form-label">Pays</label>
                      <input
                        type="text"
                        placeholder="Nom du pays"
                        className="form-control"
                        id="pays"
                      />
                    </div>
                    <div className="mb-3 form-group">
                      <i className="iconsax" data-icon="map-pin"></i>
                      <label htmlFor="ville" className="form-label">Ville</label>
                      <input
                        type="text"
                        placeholder="Nom de la ville"
                        className="form-control"
                        id="ville"
                      />
                    </div>
                    <div className="divider">
                      <h3>ou connectez-vous avec</h3>
                    </div>
                    <button
                      type="submit"
                      className="btn-solid w-100 text-center mt-3"
                    >
                      Enregistrer Adresse
                    </button>
                    <h4 className="text-title text-center mt-2">
                      Vous n'avez pas de compte ?{' '}
                      <a
                        data-cursor="pointer"
                        href="javascript:void(0)"
                      >
                        S'inscrire
                      </a>
                    </h4>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Form */}
      </section>
      <div style={{ marginBottom: '100px' }}></div>
      <Footer />
    </div>
  );
}

export default FSociete;
