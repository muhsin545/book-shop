import React from 'react';
import img from './../../../images/boywithbooks.png'





const Banner = () => {
    return (
        <div>
            <div className='aboutUsPage'>
                <div className="aboutDemo-content">
                    <div className="row container mx-auto text-center align-items-center">
                        <div className="col-md-6">
                            <img src={img} className='img-fluid ' alt="" />
                        </div>
                        <div className="col-md-6 text-uppercase py-5">
                            <p className='fs-4 fw-bold'>Back To The Librery</p>
                            <h1 className='fw-bold'>Special offer <span className='text-primary fw-bold specialOffer'>50% Off</span></h1>
                            <p className='fw-bold'>For our student community</p>
                            <button className='px-4 rounded-pill border border-2 border-primary btn btn-primary text-uppercase fw-bold text-dark'>Get the deal</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;