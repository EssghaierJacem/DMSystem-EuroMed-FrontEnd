import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      {/* <!-- footer section start --> */}
      <footer>
        <div className="container">
          <div className="footer-copyright">
            <h4>@2023 Tous droits réservés.</h4>
            <ul className="footer-links">
              <li><Link to="/terms">Politique de confidentialité</Link></li>
              <li><Link to="/terms">Conditions d'utilisation</Link></li>
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
  );
}

export default Footer;
