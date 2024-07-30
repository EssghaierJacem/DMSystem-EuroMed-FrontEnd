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
                                    alt="title-effect"/>Active Page
                            </h2>
                            <p><i className="ri-subtract-line"></i>Email us with any questions, we would be happy to answer
                                your question. </p>
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