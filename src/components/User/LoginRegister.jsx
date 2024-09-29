import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";

function LoginRegister() {
    const [loginData, setLoginData] = useState({
        nomUtilisateur: "",
        password: "",
    });

    const [registerData, setRegisterData] = useState({
        registerNomUtilisateur: "",
        email: "",
        registerPassword: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.id]: e.target.value });
    };

    const handleRegisterChange = (e) => {
        setRegisterData({ ...registerData, [e.target.id]: e.target.value });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/utilisateur/login', loginData);
            const { message, nomUtilisateur, role, societeId, userId } = response.data; 

            localStorage.setItem('nomUtilisateur', nomUtilisateur);
            localStorage.setItem('role', role);
            localStorage.setItem('societeId', societeId);
            localStorage.setItem('userId', userId); 
            
            if (role !== 'USER') {
                window.location.href = "/dashboard/home";
            } else {
                navigate("/"); 
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
  
        if (registerData.registerPassword !== registerData.confirmPassword) {
            console.error("Passwords do not match");
            return;
        }
  
        try {
            const payload = {
                nomUtilisateur: registerData.registerNomUtilisateur,
                email: registerData.email,
                password: registerData.registerPassword,
            };
  
            const response = await axiosInstance.post('/utilisateur/register', payload);
            
            const { nomUtilisateur, role, societeId, userId } = response.data; 

            localStorage.setItem('nomUtilisateur', nomUtilisateur);
            localStorage.setItem('role', role || "USER"); 
            localStorage.setItem('societeId', societeId || null);
            localStorage.setItem('userId', userId); 
            
            navigate("/Add_societe");
        } catch (error) {
            console.error("Registration error:", error.response?.data || error.message);
        }
    };
  
  return (
    <div>
      <section className="login-section">
        <a href="index.html">
          <img
            src="../assets/images/logo.svg"
            className="img-fluid logo-auth"
            alt="Logo"
          />
        </a>
        <div className="row m-0">
          <div className="col-lg-7 d-lg-inline-block d-none p-0">
            <div className="login-animation">
              <img
                src="../assets/svg/auth/1.svg"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="img-fluid img-base"
                alt="Animation 1"
              />
              <img
                src="../assets/svg/auth/2.svg"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
                className="img-fluid img-light"
                alt="Animation 2"
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
                  alt="Animation 3"
                />
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5 ms-auto p-0">
            <div className="login-box">
              <div>
                <h2>
                  Bienvenue à <span>EuroMed !</span>
                </h2>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
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
                      Connexion
                    </button>
                  </li>
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
                      Inscription
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="login-tab-pane"
                    role="tabpanel"
                    aria-labelledby="login-tab"
                    tabIndex="0"
                  >
                    <form className="auth-form" onSubmit={handleLoginSubmit}>
                      <div className="mb-3 form-group">
                        <i className="iconsax" data-icon="mail"></i>
                        <label htmlFor="nomUtilisateur" className="form-label">
                          Nom
                        </label>
                        <input
                          type="text"
                          placeholder="Entrez votre nom"
                          className="form-control"
                          id="nomUtilisateur"
                          value={loginData.nomUtilisateur}
                          onChange={handleLoginChange}
                          required
                        />
                      </div>
                      <div className="mb-2 form-group">
                        <i className="iconsax" data-icon="lock-2"></i>
                        <label htmlFor="password" className="form-label">
                          Mot de passe
                        </label>
                        <input
                          placeholder="Entrez votre mot de passe"
                          type="password"
                          className="form-control"
                          id="password"
                          value={loginData.password}
                          onChange={handleLoginChange}
                          required
                        />
                      </div>
                      <div className="text-end">
                        <a data-cursor="pointer" href="reset-password.html">
                          Mot de passe oublié ?
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="btn-solid w-100 text-center mt-3"
                      >
                        Se connecter
                      </button>

                      <h4 className="text-title text-center mt-2">
                        Vous n'avez pas de compte ?{" "}
                        <a data-cursor="pointer" href="javascript:void(0)">
                          S'inscrire
                        </a>
                      </h4>
                      <div className="divider">
                        <h3>ou connectez-vous avec</h3>
                      </div>
                      <ul className="social-btn">
                        <li>
                          <a
                            data-cursor="pointer"
                            href="https://www.google.com/"
                          >
                            <img
                              src="../assets/svg/google.svg"
                              className="img-fluid"
                              alt="Google"
                            />
                            Continuer avec Google
                          </a>
                        </li>
                        <li>
                          <a
                            data-cursor="pointer"
                            href="https://www.apple.com/"
                          >
                            <img
                              src="../assets/svg/apple.svg"
                              className="img-fluid"
                              alt="Apple"
                            />
                            Continuer avec Apple
                          </a>
                        </li>
                      </ul>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="signup-tab-pane"
                    role="tabpanel"
                    aria-labelledby="signup-tab"
                    tabIndex="0"
                  >
                    <form className="auth-form" onSubmit={handleRegisterSubmit}>
                      <div className="mb-3 form-group">
                        <i className="iconsax" data-icon="user-1"></i>
                        <label
                          htmlFor="registerNomUtilisateur"
                          className="form-label"
                        >
                          Nom
                        </label>
                        <input
                          type="text"
                          placeholder="Entrez votre nom"
                          className="form-control"
                          id="registerNomUtilisateur"
                          value={registerData.registerNomUtilisateur}
                          onChange={handleRegisterChange}
                          required
                        />
                      </div>
                      <div className="mb-3 form-group">
                        <i className="iconsax" data-icon="mail"></i>
                        <label htmlFor="email" className="form-label">
                          Adresse e-mail
                        </label>
                        <input
                          type="email"
                          placeholder="Entrez votre adresse e-mail"
                          className="form-control"
                          id="email"
                          value={registerData.email}
                          onChange={handleRegisterChange}
                          required
                        />
                      </div>
                      <div className="mb-2 form-group">
                        <i className="iconsax" data-icon="lock-2"></i>
                        <label
                          htmlFor="registerPassword"
                          className="form-label"
                        >
                          Mot de passe
                        </label>
                        <input
                          placeholder="Entrez votre mot de passe"
                          type="password"
                          className="form-control"
                          id="registerPassword"
                          value={registerData.registerPassword}
                          onChange={handleRegisterChange}
                          required
                        />
                      </div>
                      <div className="mb-2 form-group">
                        <i className="iconsax" data-icon="lock-2"></i>
                        <label htmlFor="confirmPassword" className="form-label">
                          Confirmer le mot de passe
                        </label>
                        <input
                          placeholder="Confirmez votre mot de passe"
                          type="password"
                          className="form-control"
                          id="confirmPassword"
                          value={registerData.confirmPassword}
                          onChange={handleRegisterChange}
                          required
                        />
                      </div>
                      <div className="text-end">
                        <a data-cursor="pointer" href="reset-password.html">
                          Mot de passe oublié ?
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="btn-solid w-100 text-center mt-3"
                      >
                        S'inscrire
                      </button>

                      <h4 className="text-title text-center mt-2">
                        Vous avez déjà un compte ?{" "}
                        <a data-cursor="pointer" href="javascript:void(0)">
                          Se connecter
                        </a>
                      </h4>
                      <div className="divider">
                        <h3>ou connectez-vous avec</h3>
                      </div>
                      <ul className="social-btn">
                        <li>
                          <a
                            data-cursor="pointer"
                            href="https://www.google.com/"
                          >
                            <img
                              src="../assets/svg/google.svg"
                              className="img-fluid"
                              alt="Google"
                            />
                            Continuer avec Google
                          </a>
                        </li>
                        <li>
                          <a
                            data-cursor="pointer"
                            href="https://www.apple.com/"
                          >
                            <img
                              src="../assets/svg/apple.svg"
                              className="img-fluid"
                              alt="Apple"
                            />
                            Continuer avec Apple
                          </a>
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginRegister;
