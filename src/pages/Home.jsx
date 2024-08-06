import React, { useState } from 'react';  
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
                            <h1>USE MEGABOT TO <div className="title-effect">
                                    <img src="../assets/images/title-effect.png" alt=""/><span>SIMPLIFY</span>
                                </div> YOUR LIFE</h1>
                            <p>
                                Megabot is a robust AI tool that uses artificial intelligence algorithms to generate
                                various kinds of content.
                                The tool was developed to support users with effortlessly generating high-quality
                                content, saving both energy and time while maintaining an uninterrupted level of
                                creativity and accuracy.

                            </p>
                            <a data-cursor="pointer" className="start-link"><i className="iconsax"
                                    data-icon="play-circle"></i>Start free trial</a>
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
                        <div className="home-info">
                            <ul className="info-list">
                                <li>Ask anything </li>
                                <li>Generate image</li>
                                <li>Translate anything</li>
                            </ul>
                            <ul className="star-rating">
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                            </ul>
                            <h4>A technique to write
                                all of your material 10 times more quickly.</h4>
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
                <div className="col-lg-6">
                    <div className="row g-4 service-row">
                        <div className="col-sm-6">
                            <div className="service-box">
                                <div className="service-icon">
                                    <img src="../assets/svg/service/copy.svg" className="img-fluid outline-icon" alt=""/>
                                    <img src="../assets/svg/service/copy-bold.svg" className="img-fluid bold-icon" alt=""/>
                                </div>
                                <div className="service-content">
                                    <h3><img src="../assets/svg/service-title.svg" alt="effect" className="img-fluid"/>Copy
                                        writer</h3>
                                    <p>Unleash the power of AI to effortlessly compelling content that captivates
                                        and converts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="service-box">
                                <div className="service-icon">
                                    <img src="../assets/svg/service/graph.svg" className="img-fluid outline-icon" alt=""/>
                                    <img src="../assets/svg/service/graph-bold.svg" className="img-fluid bold-icon" alt=""/>
                                </div>
                                <div className="service-content">
                                    <h3><img src="../assets/svg/service-title.svg" alt="effect"
                                            className="img-fluid"/>Digital
                                        marketers</h3>
                                    <p>Accelerate your marketing and take over the digital landscape</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="service-box">
                                <div className="service-icon">
                                    <img src="../assets/svg/service/search.svg" className="img-fluid outline-icon" alt=""/>
                                    <img src="../assets/svg/service/search-bold.svg" className="img-fluid bold-icon" alt=""/>
                                </div>
                                <div className="service-content">
                                    <h3><img src="../assets/svg/service-title.svg" alt="effect" className="img-fluid"/>SEO
                                        Sepcialist</h3>
                                    <p>Generate more engaging content to skyrocket your website’s visibility
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="service-box">
                                <div className="service-icon">
                                    <img src="../assets/svg/service/text.svg" className="img-fluid outline-icon" alt=""/>
                                    <img src="../assets/svg/service/text-bold.svg" className="img-fluid bold-icon" alt=""/>
                                </div>
                                <div className="service-content">
                                    <h3><img src="../assets/svg/service-title.svg" alt="effect"
                                            className="img-fluid"/>Content
                                        marker</h3>
                                    <p>Reinvent your content marketing and captivate your audience like never before.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="service-info">
                        <div>
                            <div className="title">
                                <h2>For All Kind of Creators</h2>
                                <h3>In the digital world, our AI Writer supports a variety of artists</h3>
                            </div>
                            <p>Introducing a revolutionary AI partner for creators across the globe—a groundbreaking
                                tool designed to transform the way we bring our creative ideas to life. Unleash your
                                artistic abilities as you explore a world of limitless possibilities. Say goodbye to
                                obstacles and let
                                this remarkable AI companion pave the way to a new era of boundless creation.</p>
                            <a data-cursor="pointer" className="btn-arrow" href="">
                                <div className="icon-arrow"><i className="iconsax" data-icon="arrow-up"></i></div>View all
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- service section end --> */}
      <Footer></Footer>
    </div>
  );
}

export default Home;
