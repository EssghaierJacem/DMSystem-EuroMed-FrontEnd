import React,{ useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BreadCrubms from '../components/BreadCrubms';
import { Link } from 'react-router-dom';

function scrollToTop() {
    window.scrollTo(0, 0);
}

export default function FormOptions() {
  const [activeNav, setActiveNav] = useState('services');
  return (
    <>
      <Header active={activeNav} onNavClick={setActiveNav} />
      <BreadCrubms
        title="Choisissez le forfait qui vous convient"
        subtitle="Vous pouvez soit utiliser un formulaire préconçu et le gérer, soit créer le vôtre depuis zéro."
        breadcrumbImage="../assets/images/breadcrumb-title.png"
        vectorImage="../assets/svg/contact-vector.svg"
      />
      {/* Fade left section  */}
      <section className="about-section section-b-space section-mb-space" style={{ marginTop: '40px' }}>
        <div className="bg-effect" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500"></div>
        <div className="container">
          <div className="row g-md-5 g-4">
            <div className="col-lg-6 order-lg-0 order-1">
              <div className="about-content">
                <div>
                  <div className="title">
                    <span className="number-pattern">01.</span>
                    <h2 className="text-white">Obtenez votre formulaire pré-défini pour le calcul de maturité digitale.</h2>
                  </div>
                  <p>Vous pouvez le modifier, ajouter ou laisser tel quel, il est entièrement gratuit et adaptable aux UDF.</p>
                  <ul style={{ marginBottom: '30px' }}>
                    <li><img src="../assets/svg/tick.svg" className="img-fluid" alt="tick"/>Accédez à un formulaire prêt à l'emploi pour le calcul de maturité digitale</li>
                    <li><img src="../assets/svg/tick.svg" className="img-fluid" alt="tick"/>Liberté de modification : adaptez le formulaire selon vos besoins</li>
                    <li><img src="../assets/svg/tick.svg" className="img-fluid" alt="tick"/>Compatible avec les champs définis par l'utilisateur (UDF) pour plus de flexibilité</li>
                  </ul>
                </div>
                <Link to="/predefined-form" className="btn-arrow" onClick={scrollToTop}>
                    <div className="icon-arrow">
                        <i className="iconsax" data-icon="arrow-up"></i>
                    </div>
                    Charger un formulaire pré-rempli
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img">
                <img src="../assets/svg/character/1.svg" className="img-fluid" alt="about"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fade left section  */}

      {/* Fade Right Section  */}
      <section className="about-section right-version section-b-space section-mb-space">
        <div className="bg-effect" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500"></div>
        <div className="container">
          <div className="row g-md-5 g-4">
            <div className="col-lg-6">
              <div className="about-img">
                <img src="../assets/svg/character/2.svg" className="img-fluid" alt="about"/>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div>
                  <div className="title">
                    <span className="number-pattern">02.</span>
                    <h2>Créez Votre Formulaire Sur-Mesure pour Optimiser Votre Première Impression</h2>
                  </div>
                  <p>« Libérez la Magie du Contenu : Personnalisez Votre Message pour Captiver! Identifiez Votre Public Idéal, Comprenez Ses Désirs, Ses Goûts, et Ses Défis! »</p>
                  <ul style={{ marginBottom: '30px' }}>
                    <li><img src="../assets/svg/tick.svg" className="img-fluid" alt="tick"/>Découvrez des opportunités uniques pour personnaliser votre formulaire selon les besoins spécifiques de vos utilisateurs.</li>
                    <li><img src="../assets/svg/tick.svg" className="img-fluid" alt="tick"/>Créez des sections dynamiques et engageantes qui reflètent véritablement l’essence de votre marque.</li>
                    <li><img src="../assets/svg/tick.svg" className="img-fluid" alt="tick"/>Intégrez des fonctionnalités flexibles qui vous permettent d’adapter le formulaire aux retours et aux évolutions de votre audience.</li>
                  </ul>
                </div>
                <Link to="/form" className="btn-arrow" onClick={scrollToTop}>
                    <div className="icon-arrow">
                        <i className="iconsax" data-icon="arrow-up"></i>
                    </div>
                    Commencer avec un formulaire vide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fade Right Section  */}

      <Footer />
    </>
  );
}
