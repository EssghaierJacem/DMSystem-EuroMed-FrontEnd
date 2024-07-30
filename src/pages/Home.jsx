import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div> 
      <Header></Header>
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

      <Footer></Footer>
    </div>
  );
}

export default Home;
