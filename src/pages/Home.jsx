import React, { useState } from 'react';  
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Home() {
    const [activeNav, setActiveNav] = useState('home');
  return (
    <div> 
      <Header active={activeNav} onNavClick={setActiveNav} />
      {/* <!-- home section start --> */}
    <section className="home-section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="home-content">
                        <div className="bg-effect">
                            <img src="../assets/images/home/home-bg.gif" className="img-fluid bg-gif" alt=""/>
                            <img src="../assets/svg/home/1.png" className="img-fluid effect1 rotate-effect" alt=""/>
                            <img src="../assets/svg/home/2.svg" className="img-fluid effect2 rotate-effect" alt=""/>
                        </div>
                        <div>
                            <h1>EuroInnov'Audit pour mesurer la <div className="title-effect">
                                    <img src="../assets/images/title-effect.png" alt=""/><span>Maturité digitale</span>
                                </div>de votre organisation</h1>
                            <p>
                            EuroInnov'Audit est une plateforme dédiée à la mesure
                            de la maturité digitale des organisation basée sur le modèle piloté par les processus.

                            </p>
                            <Link to="/login" className="start-link">
                                <i className="iconsax" data-icon="play-circle"></i> Renvoie vers le formulaire d'inscription
                            </Link>
                        </div>
                    </div>
                    <div className="home-laptop px-md-0 px-3">
                        <div className="laptop-sec position-relative">
                            <div className="hand-sec">
                                <img src="../assets/images/home/hand.png" className="img-fluid left-hand" alt="hand"/>
                                <img src="../assets/images/home/hand.png" className="img-fluid right-hand" alt="hand"/>
                                <img src="../assets/images/home/finger.png" className="img-fluid left-finger" alt="hand"/>
                                <img src="../assets/images/home/finger.png" className="img-fluid right-finger" alt="hand"/>
                            </div>
                            <img src="../assets/images/home/laptop.png" className="img-fluid laptop-img" alt="laptop"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- home section end --> */}
    {/* <!-- service section start --> */}
    <div className="service-section section-b-space">
        <div className="container">
            <div className="row g-5">
            </div>
        </div>
    </div>
    {/* <!-- service section end --> */}
      <Footer></Footer>
    </div>
  );
}

export default Home;
