import React, { useState } from 'react';
import BreadCrubms from '../components/BreadCrubms';
import Header from '../components/Header'
import Footer from '../components/Footer'

function Contact() {
    const [activeNav, setActiveNav] = useState('contact');
    return (
        <div>
            <Header active={activeNav} onNavClick={setActiveNav} />
            <BreadCrubms
            title="Contactez-nous"
            subtitle="Envoyez-nous un e-mail pour toute question, nous serons heureux de répondre à votre question."
            vectorImage="../assets/svg/service-vector.svg"
             />
            <section className="contact-section pb-md-5 pb-0">
                <div className="container">
                    <ul className="contact-box">
                        <li>
                            <div className="contact-icon">
                                <img src="../assets/svg/contact/message.svg" className="img-fluid" alt="message"/>
                            </div>
                            <h3>Email</h3>
                            <h4>kturki@euromedinnovation.fr</h4>
                        </li>
                        <li>
                            <div className="contact-icon">
                                <img src="../assets/svg/contact/contact.svg" className="img-fluid" alt="phone"/>
                            </div>
                            <h3>Téléphone</h3>
                            <h4>0626474528</h4>
                        </li>
                        <li>
                            <div className="contact-icon">
                                <img src="../assets/svg/contact/route.svg" className="img-fluid" alt="location"/>
                            </div>
                            <h3>Adresse 1</h3>
                            <h4>15 Rue de la République</h4>
                            <h4>13001 Marseille, France</h4>
                        </li>
                        <li>
                            <div className="contact-icon">
                                <img src="../assets/svg/contact/address.svg" className="img-fluid" alt="location"/>
                            </div>
                            <h3>Adresse 2</h3>
                            <h4>2972 Rue de la Canebière</h4>
                            <h4>13005 Marseille, France</h4>
                        </li>
                    </ul>
                    <div className="contact-details">
                        <div className="row g-lg-5 g-4">
                            <div className="col-xl-7 col-lg-6">
                                <form className="auth-form">
                                    <div className="row g-4">
                                        <div className="col-sm-6">
                                            <label htmlFor="name" className="form-label">Nom</label>
                                            <input type="text" className="form-control" id="name"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email"/>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="phoneNumber" className="form-label">Numéro de téléphone</label>
                                            <input type="tel" className="form-control" id="phoneNumber"/>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="message" className="form-label">Message supplémentaire</label>
                                            <textarea className="form-control" id="message" rows="3"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <a href="#" data-cursor="pointer" className="btn-solid">Envoyer le message</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="map-sec">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239214.60866361044!2d5.359115008213054!3d43.296482620387755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9d29f8301d6e5%3A0x8df7f1b1f3dc405a!2sMarseille%2C%20France!5e0!3m2!1sen!2sin!4v1683867729748!5m2!1sen!2sin"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact
