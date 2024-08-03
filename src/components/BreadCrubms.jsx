import React from 'react'

function BreadCrubms(props) {
  return (
    <div>
            {/* <!-- breadcrumb section start --> */}
    <section className="breadcrumb-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="breadcrumb-content">
                        <div>
                            <h2><img src="../assets/images/breadcrumb-title.png" className="img-fluid"
                                    alt="title-effect"/>Ajoutez une formulaire
                            </h2>
                            <p><i className="ri-subtract-line"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                                                        
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 d-lg-inline-block d-none">
                    <div className="breadcrumb-img">
                        <img src="../assets/svg/contact-vector.svg" className="img-fluid" alt="service"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- breadcrumb section end --> */}
    </div>
  )
}

export default BreadCrubms