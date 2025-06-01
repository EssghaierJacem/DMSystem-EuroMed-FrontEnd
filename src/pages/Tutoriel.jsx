import React from 'react';
import Header from './../components/Header'; 
import BreadCrubms from './../components/BreadCrubms'; 
import Footer from './../components/Footer'; 

function Tutoriel() {
    const activeNav = 'tutoriel';

  return (
    <>
      <Header active={activeNav} onNavClick={() => {}} />
      
      <BreadCrubms
        title="Maturité Digitale"
        subtitle="Analysez et améliorez la maturité digitale de votre entreprise."
        vectorImage="../assets/svg/blog-details-vector.svg"
      />
      
      <section id="features" className="core-feature section-b-space">
        <div className="container">
          <div className="title text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <h2>Présentation du Système de Calcul de Maturité Digitale</h2>
            <h3>Optimisez vos processus grâce à une analyse approfondie.</h3>
          </div>
          <div className="core-feature">
            <div className="feature-box text-end" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
              <img src="assets/images/landing/arrow.svg" className="img-fluid" alt="" />
              <label>1. Évaluation par Pays</label>
              <p>
                Le système EuroMed évalue la maturité digitale de chaque société en tenant compte des spécificités économiques et réglementaires de chaque pays. Cela permet de mieux comprendre les défis et opportunités uniques qui influencent l'adoption des technologies numériques par les entreprises.
              </p>
            </div>
            <img src="assets/images/landing/laptop.png" data-aos="zoom-in" data-aos-duration="1000"
              data-aos-delay="100" className="img-fluid laptop-img" alt="" />
            <div className="feature-box" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">
              <img src="assets/images/landing/arrow.svg" className="img-fluid" alt="" />
              <label>2. Analyse de l'Effort Humain</label>
              <p>
                L'analyse prend en compte l'intervention humaine dans le processus de transformation digitale. Cela inclut l'impact du nombre d'employés sur la maturité digitale, ce qui aide à identifier les ressources humaines nécessaires pour une transition numérique réussie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ratio2_1">
        <div className="container">
          <div className="row g-5">
            <div className="col-12" style={{ borderRadius: '8px', padding: '30px', margin: '30px' }}>
              <div className="blog-listing" style={{ display: 'flex', flexWrap: 'nowrap' }}>
                <div className="blog-img">
                  <img src="../assets/images/tuto/Pre-Defini.png" className="img-fluid bg-img" alt="audit-tutorial" />
                  <label>Analyse des Processus</label>
                </div>
                <div className="blog-content">
                  <a data-cursor="pointer" className="main-title" href="#analyse-processus">Analyse des Processus</a>
                  <p>
                    Notre système évalue minutieusement les processus organisationnels pour identifier les domaines d’amélioration et les opportunités d’automatisation. Grâce à des formulaires pré-définis et la possibilité de créer des formulaires personnalisés, nous assurons une flexibilité maximale pour répondre aux besoins spécifiques de chaque société.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12" style={{ borderRadius: '8px', padding: '30px', margin: '30px' }}>
              <div className="blog-listing" style={{ display: 'flex', flexWrap: 'nowrap' }}>
                <div className="blog-img">
                  <img src="../assets/images/tuto/SurMesure.png" className="img-fluid bg-img" alt="audit-tutorial" />
                  <label>Recommandations Personnalisées</label>
                </div>
                <div className="blog-content">
                  <a data-cursor="pointer" className="main-title" href="#recommandations-personnalisees">Recommandations Personnalisées</a>
                  <p>
                    Sur la base des analyses effectuées, le système génère des recommandations sur mesure pour chaque société. Ces conseils visent à améliorer la maturité digitale et à optimiser les pratiques d'affaires, tenant compte des spécificités de chaque entreprise.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12" style={{ borderRadius: '8px', padding: '30px', margin: '30px' }}>
              <div className="blog-listing" style={{ display: 'flex', flexWrap: 'nowrap' }}>
                <div className="blog-img">
                  <img src="../assets/images/tuto/ExportStat.png" className="img-fluid bg-img" alt="audit-tutorial" />
                  <label>Export des Statistiques</label>
                </div>
                <div className="blog-content">
                  <a data-cursor="pointer" className="main-title" href="#export-statistiques">Export des Statistiques</a>
                  <p>
                    Les utilisateurs ont la possibilité d’exporter des rapports détaillés incluant des statistiques de maturité par société, nombre d'employés, et par pays. Cela facilite la prise de décision éclairée et le suivi des progrès réalisés au sein de chaque entreprise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Tutoriel;
