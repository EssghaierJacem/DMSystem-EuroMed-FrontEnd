import React from 'react'

function Footer() {
  return (
    <div>
      {/* <!-- contact us start --> */}
      {/* <section className="info-section section-b-space">
        <div className="container">
          <div className="info-box" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
            <div className="hand-effect d-md-block d-none">
              <img src="../assets/svg/hand.svg" className="img-fluid left-hand" alt="main gauche"/>
              <img src="../assets/svg/hand.svg" className="img-fluid right-hand" alt="main droite"/>
            </div>
            <h2>Prêt à <span>aller <img src="../assets/svg/title-effect.svg" className="img-fluid" alt="effet-titre"/></span>
              plus loin ?</h2>
            <p>Avec notre outil d'IA révolutionnaire, libérez le potentiel de la technologie IA de pointe et
              augmentez votre productivité à de nouveaux sommets. Adoptez l'avenir dès aujourd'hui et laissez notre
              outil IA redéfinir ce qui est possible pour vous.</p>
            <ul>
              <li><img src="../assets/svg/tick.svg" className="img-fluid" alt="vérifié"/>Images gratuites à vie</li>
              <li><img src="../assets/svg/tick.svg" className="img-fluid" alt="vérifié"/>Détails sur n'importe quel sujet</li>
              <li><img src="../assets/svg/tick.svg" className="img-fluid" alt="vérifié"/>Conseiller rapide pour vous aider</li>
              <li><img src="../assets/svg/tick.svg" className="img-fluid" alt="vérifié"/>15+ catégories à explorer</li>
            </ul>
            <a data-cursor="pointer" className="btn-arrow" href="">
              <div className="icon-arrow"><i className="iconsax" data-icon="arrow-up"></i></div>Contactez-nous maintenant
            </a>
          </div>
        </div>
      </section>
      <!-- contact us end --> */}

      {/* <!-- footer section start --> */}
      <footer>
        <div className="container">
          <div className="footer-row">
            <div className="footer-main">
              <a href="#" className="footer-logo"><img src="../assets/images/logo.svg" className="img-fluid" alt="Logo EuroMed Innovation"/></a>
              <h3>ABONNEZ-VOUS À NOTRE NEWSLETTER</h3>
              <form>
                <div className="input-group">
                  <input type="email" className="form-control" id="exampleFormControlInput1"
                    placeholder="Entrez votre email"/>
                  <a href="" data-cursor="pointer" className="btn-basic">S'abonner</a>
                </div>
              </form>
              <ul className="social-links">
                <li><a data-cursor="pointer" href="https://www.facebook.com/"><img
                    src="../assets/svg/social/fb.svg" className="img-fluid" alt="facebook"/></a></li>
                <li><a data-cursor="pointer" href="https://in.linkedin.com/"><img
                    src="../assets/svg/social/linkedin.svg" className="img-fluid" alt="linkedin"/></a></li>
                <li><a data-cursor="pointer" href="https://www.instagram.com/"><img
                    src="../assets/svg/social/insta.svg" className="img-fluid" alt="instagram"/></a></li>
                <li><a data-cursor="pointer" href="https://twitter.com/login"><img
                    src="../assets/svg/social/twitter.svg" className="img-fluid" alt="twitter"/></a></li>
              </ul>
            </div>
            <div className="link-section">
              <div className="footer-title">
                <img src="../assets/svg/star.svg" className="img-fluid" alt="étoile"/>
                Liens rapides
              </div>
              <div className="footer-content">
                <ul>
                  <li><a data-cursor="pointer" href="index.html">Accueil</a></li>
                  <li><a data-cursor="pointer" href="service.html">Services</a></li>
                  <li><a data-cursor="pointer" href="pricing.html">Tarifs</a></li>
                  <li><a data-cursor="pointer" href="contact-us.html">Nous contacter</a></li>
                </ul>
              </div>
            </div>
            <div className="link-section">
              <div className="footer-title">
                <img src="../assets/svg/star.svg" className="img-fluid" alt="étoile"/>
                Nos services
              </div>
              <div className="footer-content">
                <ul>
                  <li><a data-cursor="pointer" href="chat.html">Générateur</a></li>
                  <li><a data-cursor="pointer" href="chat.html">Trouver une image</a></li>
                  <li><a data-cursor="pointer" href="chat.html">Rédacteur d'emails</a></li>
                  <li><a data-cursor="pointer" href="chat.html">Médias sociaux</a></li>
                </ul>
              </div>
            </div>
            <div className="link-section">
              <div className="footer-title">
                <img src="../assets/svg/star.svg" className="img-fluid" alt="étoile"/>
                Notre entreprise
              </div>
              <div className="footer-content">
                <ul>
                  <li><a data-cursor="pointer" href="login.html">Connexion</a></li>
                  <li><a data-cursor="pointer" href="blog-listing.html">Liste des blogs</a></li>
                  <li><a data-cursor="pointer" href="blog-grid.html">Grille des blogs</a></li>
                  <li><a data-cursor="pointer" href="blog-details.html">Détails du blog</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <h4>@2023 Tous droits réservés.</h4>
            <ul className="footer-links">
              <li><a href="terms.html">Politique de confidentialité</a></li>
              <li><a href="terms.html">Conditions d'utilisation</a></li>
            </ul>
          </div>
        </div>
      </footer>
      {/* <!-- footer section end --> */}

      {/* <!-- Tap To Top Button Start --> */}
      <div className="tap-to-top-box hide">
        <button className="tap-to-top-button"><i className="iconsax" data-icon="chevron-up"></i></button>
      </div>
      {/* <!-- Tap To Top Button End --> */}
    </div>
  )
}

export default Footer
