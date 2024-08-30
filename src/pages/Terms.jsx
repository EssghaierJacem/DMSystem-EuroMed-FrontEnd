import React, { useState } from 'react';
import BreadCrubms from '../components/BreadCrubms';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';

function Terms() {
    const [activeNav, setActiveNav] = useState('terms');
  return (
    <div>
      <Header active={activeNav} onNavClick={setActiveNav} />
      <BreadCrubms
        title="Conditions Générales"
        subtitle="Consultez les conditions générales d'utilisation de notre application."
        vectorImage="../assets/svg/blog-details-vector.svg"
      />
      <Section>
        <div className="container">
          <div className="blog-details">
            <div className="row">
              <div className="col-lg-8 col-md-10 m-auto">
                <div className="blog-main-content mt-0">
                  <h3><img src="../assets/svg/title-effect2.svg" className="img-fluid" alt="effect"/>Conditions Générales d'Utilisation</h3>
                  <p>Dernière mise à jour : 16 juin 2024</p>
                  <p>Veuillez lire attentivement ces conditions générales avant d'utiliser notre service.</p>
                  
                  <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="../assets/svg/title-effect2.svg" className="img-fluid" alt="effect"/>Interprétation et Définitions</h3>
                  
                  <h4>Interprétation</h4>
                  <p>Les termes dont la première lettre est en majuscule ont les significations définies dans les conditions suivantes. Les définitions suivantes auront la même signification qu'elles apparaissent au singulier ou au pluriel.</p>
                  
                  <h4>Définitions</h4>
                  <p>Aux fins des présentes Conditions Générales :</p>
                  <ol>
                    <li>
                      <p><strong>Affilié</strong> désigne une entité qui contrôle, est contrôlée par ou est sous le contrôle commun avec une partie, où "contrôle" signifie la possession de 50 % ou plus des actions, intérêts en capital ou autres titres donnant droit de vote pour l'élection des administrateurs ou autre autorité de gestion.</p>
                    </li>
                    <li>
                      <p><strong>Pays</strong> désigne : France</p>
                    </li>
                    <li>
                      <p><strong>Entreprise</strong> (appelée également "l'Entreprise", "Nous" ou "Notre" dans ces Conditions) désigne EuroMed Innovation.</p>
                    </li>
                    <li>
                      <p><strong>Dispositif</strong> désigne tout appareil pouvant accéder au Service, tel qu'un ordinateur, un téléphone portable ou une tablette numérique.</p>
                    </li>
                    <li>
                      <p><strong>Service</strong> désigne l'application de Calcul de Maturité Digitale.</p>
                    </li>
                    <li>
                      <p><strong>Conditions Générales</strong> (également appelées "Conditions") désignent ces Conditions Générales qui forment l'accord complet entre Vous et l'Entreprise concernant l'utilisation du Service.</p>
                    </li>
                    <li>
                      <p><strong>Service de Médias Sociaux Tiers</strong> désigne tout service ou contenu (y compris les données, informations, produits ou services) fourni par un tiers qui peut être affiché, inclus ou rendu disponible par le Service.</p>
                    </li>
                    <li>
                      <p><strong>Site Web</strong> désigne l'application de Calcul de Maturité Digitale, accessible depuis <a href="https://www.euromed-innovation.fr" target="_blank">https://www.euromed-innovation.fr</a></p>
                    </li>
                    <li>
                      <p><strong>Vous</strong> désigne l'individu accédant ou utilisant le Service, ou l'entreprise ou autre entité juridique au nom de laquelle cet individu accède ou utilise le Service, le cas échéant.</p>
                    </li>
                  </ol>

                  <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="../assets/svg/title-effect2.svg" className="img-fluid" alt="effect"/>Reconnaissance</h3>
                  <p>Ces Conditions Générales régissent l'utilisation de ce Service et l'accord entre Vous et l'Entreprise. Ces Conditions définissent les droits et obligations de tous les utilisateurs concernant l'utilisation du Service.</p>
                  <p>Votre accès et votre utilisation du Service sont conditionnés par votre acceptation et votre conformité avec ces Conditions Générales. Ces Conditions s'appliquent à tous les visiteurs, utilisateurs et autres qui accèdent ou utilisent le Service.</p>
                  <p>En accédant ou en utilisant le Service, Vous acceptez d'être lié par ces Conditions Générales. Si Vous n'acceptez pas une partie quelconque de ces Conditions, Vous ne pouvez pas accéder au Service.</p>
                  <p>Vous déclarez que vous avez plus de 18 ans. L'Entreprise ne permet pas aux personnes de moins de 18 ans d'utiliser le Service.</p>
                  <p>Votre accès et votre utilisation du Service sont également conditionnés par votre acceptation et votre conformité avec la Politique de Confidentialité de l'Entreprise. Notre Politique de Confidentialité décrit nos politiques et procédures concernant la collecte, l'utilisation et la divulgation de vos informations personnelles lorsque vous utilisez l'application ou le site Web, et vous informe de vos droits à la vie privée et de la manière dont la loi vous protège. Veuillez lire attentivement notre Politique de Confidentialité avant d'utiliser notre Service.</p>

                  <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="../assets/svg/title-effect2.svg" className="img-fluid" alt="effect"/>Liens vers d'Autres Sites Web</h3>
                  <p>Notre Service peut contenir des liens vers des sites Web ou services tiers qui ne sont pas possédés ou contrôlés par l'Entreprise.</p>
                  <p>L'Entreprise n'a aucun contrôle sur, et n'assume aucune responsabilité quant au contenu, aux politiques de confidentialité ou aux pratiques de tout site Web ou service tiers. Vous reconnaissez et acceptez également que l'Entreprise ne sera pas responsable ou redevable, directement ou indirectement, de tout dommage ou perte causé ou allégué être causé par ou en relation avec l'utilisation de ou la confiance accordée à tout contenu, bien ou service disponible sur ou à travers de tels sites Web ou services.</p>
                  <p>Nous vous conseillons fortement de lire les conditions générales et les politiques de confidentialité de tout site Web ou service tiers que vous visitez.</p>

                  <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="../assets/svg/title-effect2.svg" className="img-fluid" alt="effect"/>Résiliation</h3>
                  <p>Nous pouvons résilier ou suspendre immédiatement votre accès, sans préavis ni responsabilité, pour toute raison, y compris, mais sans s'y limiter, si vous enfreignez ces Conditions Générales.</p>
                  <p>En cas de résiliation, votre droit d'utiliser le Service cessera immédiatement.</p>

                  <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="../assets/svg/title-effect2.svg" className="img-fluid" alt="effect"/>Limitation de Responsabilité</h3>
                  <p>Nonobstant tout dommage que vous pourriez encourir, la responsabilité totale de l'Entreprise et de ses fournisseurs en vertu de toute disposition de ces Conditions et votre recours exclusif pour tout ce qui précède sera limité au montant réellement payé par vous par le biais du Service ou à 100 EUR si vous n'avez rien acheté par le biais du Service.</p>
                  <p>Dans toute la mesure permise par la loi applicable, en aucun cas l'Entreprise ou ses fournisseurs ne seront responsables de tout dommage spécial, incident, indirect ou consécutif (y compris, mais sans s'y limiter, les dommages pour perte de profits, perte de données ou autres informations, pour interruption d'activité, pour blessure personnelle, perte de confidentialité résultant de ou en relation avec l'utilisation ou l'incapacité à utiliser le Service, logiciels tiers et/ou matériels tiers utilisés avec le Service, ou autrement en relation avec toute disposition de ces Conditions), même si l'Entreprise ou tout fournisseur a été informé de la possibilité de tels dommages et même si le recours échoue dans son objectif essentiel.</p>
                  <p>Certains états ne permettent pas l'exclusion des garanties implicites ou la limitation de responsabilité pour les dommages accessoires ou consécutifs, ce qui signifie que certaines des limitations ci-dessus peuvent ne pas s'appliquer. Dans ces états, la responsabilité de chaque partie sera limitée dans la plus grande mesure permise par la loi.</p>

                  <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="../assets/svg/title-effect2.svg" className="img-fluid" alt="effect"/>Avertissement « EN L'ÉTAT » et « SELON LA DISPONIBILITÉ »</h3>
                  <p>Le Service est fourni « EN L'ÉTAT » et « SELON LA DISPONIBILITÉ » et avec tous les défauts et défauts sans garantie d'aucune sorte. Dans toute la mesure permise par la loi applicable, l'Entreprise, en son nom et au nom de ses Affiliés et de leurs concédants et fournisseurs respectifs, décline expressément toute garantie, qu'elle soit explicite, implicite, légale ou autre, concernant le Service, y compris toutes les garanties implicites de qualité marchande, d'adéquation à un usage particulier, de titre et d'absence de contrefaçon, ainsi que toute garantie découlant du cours de l'exécution, du cours des affaires ou de l'utilisation du commerce.</p>
                  <p>Sans limiter ce qui précède, l'Entreprise ne fait aucune déclaration ou garantie et ne donne aucune garantie concernant la précision ou l'exhaustivité du Service ou du contenu fourni par le Service, ainsi que pour les erreurs ou omissions dans ce contenu.</p>

                  <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="../assets/svg/title-effect2.svg" className="img-fluid" alt="effect"/>Droit Applicable</h3>
                  <p>Les lois de la France, à l'exclusion de ses règles de conflit de lois, régiront ces Conditions et votre utilisation du Service. Votre utilisation du Service peut également être soumise à d'autres lois locales, étatiques, nationales ou internationales.</p>

                  <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="../assets/svg/title-effect2.svg" className="img-fluid" alt="effect"/>Résolution des Conflits</h3>
                  <p>Si vous avez un différend avec l'Entreprise ou un tiers, vous acceptez de tenter de résoudre ce différend de manière informelle en nous contactant à : contact@euromed-innovation.fr.</p>
                  <p>Avant de commencer tout arbitrage ou toute procédure judiciaire, vous acceptez de participer à une médiation qui aura lieu à Marseille, France.</p>

                  <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="../assets/svg/title-effect2.svg" className="img-fluid" alt="effect"/>Modifications</h3>
                  <p>Nous nous réservons le droit, à notre seule discrétion, de modifier ou de remplacer ces Conditions à tout moment. Si une révision matérielle est faite, nous ferons de notre mieux pour fournir un préavis d'au moins 30 jours avant que de nouvelles conditions ne prennent effet. Ce qui constitue un changement matériel sera déterminé à notre seule discrétion.</p>
                  <p>En continuant d'accéder ou d'utiliser notre Service après que ces révisions deviennent effectives, vous acceptez d'être lié par les conditions révisées. Si vous n'acceptez pas les nouvelles conditions, veuillez cesser d'utiliser le Service.</p>

                  <h3 className="mt-xl-5 mt-md-3 mt-2"><img src="../assets/svg/title-effect2.svg" className="img-fluid" alt="effect"/>Contactez-Nous</h3>
                  <p>Si vous avez des questions concernant ces Conditions Générales, veuillez nous contacter :</p>
                  <ul>
                    <li>Email : <a href="mailto:contact@euromed-innovation.fr">contact@euromed-innovation.fr</a></li>
                    <li>Adresse : EuroMed Innovation, 12 Rue de la République, 13001 Marseille, France</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
        <section class="info-section section-b-space">
        <div class="container">
            <div class="info-box" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
                <div class="hand-effect d-md-block d-none">
                    <img src="../assets/svg/hand.svg" class="img-fluid left-hand" alt="main"/>
                    <img src="../assets/svg/hand.svg" class="img-fluid right-hand" alt="main"/>
                </div>
                <h2>Prêt à <span>évaluer <img src="../assets/svg/title-effect.svg" class="img-fluid" alt="effet-titre"/></span>
                    votre maturité digitale ?</h2>
                <p>Découvrez notre outil innovant de calcul de maturité digitale qui vous permettra d'évaluer et d'améliorer la transformation numérique de votre entreprise. Utilisez des technologies avancées pour obtenir des insights précieux et propulser votre organisation vers l'avenir.</p>
                <ul>
                    <li><img src="../assets/svg/tick.svg" class="img-fluid" alt="check"/>Évaluation complète de la maturité digitale</li>
                    <li><img src="../assets/svg/tick.svg" class="img-fluid" alt="check"/>Analyse détaillée et recommandations personnalisées</li>
                    <li><img src="../assets/svg/tick.svg" class="img-fluid" alt="check"/>Support dédié pour vous accompagner</li>
                    <li><img src="../assets/svg/tick.svg" class="img-fluid" alt="check"/>Accès à des ressources et outils de pointe</li>
                </ul>
                <a data-cursor="pointer" class="btn-arrow" href="">
                    <div class="icon-arrow"><i class="iconsax" data-icon="arrow-up"></i></div>Contactez-nous dès maintenant
                </a>
            </div>
        </div>
        </section>
      <Footer />
    </div>
  );
}

export default Terms;
