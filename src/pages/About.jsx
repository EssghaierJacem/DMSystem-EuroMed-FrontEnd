import React from 'react'
import BreadCrubms from '../components/BreadCrubms'
import Header from '../components/Header'
import Footer from '../components/Footer'


function About() {
  return (
    <div>
        <Header></Header>
        <BreadCrubms></BreadCrubms>
      {/* <!-- theme feature section start --> */}
    <section id="core" className="theme-feature-sec section-b-space">
        <div className="container">
            <div className="title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <h2>Core feature</h2>
                <h3>Get the below all the great functionality in the web</h3>
            </div>
            <div className="row g-lg-5 g-4">
                <div className="col-lg-3 col-sm-4 col-6">
                    <div className="feature-box" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
                        <div className="icon-box">
                            <div className="icon-round">
                                <img src="assets/images/landing/feature/html.svg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <h3>HTML</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4 col-6">
                    <div className="feature-box" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                        <div className="icon-box">
                            <div className="icon-round">
                                <img src="assets/images/landing/feature/scss.svg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <h3>SCSS</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4 col-6">
                    <div className="feature-box" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                        <div className="icon-box">
                            <div className="icon-round">
                                <img src="assets/images/landing/feature/gulp.svg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <h3>Gulp</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4 col-6">
                    <div className="feature-box" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                        <div className="icon-box">
                            <div className="icon-round">
                                <img src="assets/images/landing/feature/bootstrap.svg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <h3>Bootstrap 5 </h3>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4 col-6">
                    <div className="feature-box" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
                        <div className="icon-box">
                            <div className="icon-round">
                                <img src="assets/images/landing/feature/w3c.svg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <h3>W3 Validate</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4 col-6">
                    <div className="feature-box" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                        <div className="icon-box">
                            <div className="icon-round">
                                <img src="assets/images/landing/feature/sco.svg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <h3>SEO Friendly</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4 col-6">
                    <div className="feature-box" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                        <div className="icon-box">
                            <div className="icon-round">
                                <img src="assets/images/landing/feature/7tier.png" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <h3>7 Tier Framework </h3>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4 col-6">
                    <div className="feature-box" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                        <div className="icon-box">
                            <div className="icon-round">
                                <img src="assets/images/landing/feature/jquery.svg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <h3>No jquery</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4 col-6">
                    <div className="feature-box" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
                        <div className="icon-box">
                            <div className="icon-round">
                                <img src="assets/images/landing/feature/setup.svg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <h3>Easy Setup</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4 col-6">
                    <div className="feature-box" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                        <div className="icon-box">
                            <div className="icon-round">
                                <img src="assets/images/landing/feature/cleancode.svg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <h3>Clean Code</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4 col-6">
                    <div className="feature-box" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                        <div className="icon-box">
                            <div className="icon-round">
                                <img src="assets/images/landing/feature/w3c.svg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <h3>Well Documentation</h3>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-4 col-6">
                    <div className="feature-box" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                        <div className="icon-box">
                            <div className="icon-round">
                                <img src="assets/images/landing/feature/support.svg" className="img-fluid" alt=""/>
                            </div>
                        </div>
                        <h3>Customer Support</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- theme feature section end --> */}
    <Footer></Footer>
    </div>
  )
}

export default About