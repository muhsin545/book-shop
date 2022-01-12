import React from 'react';
import slide1 from './../../../images/book1.jpeg'
import slide2 from './../../../images/book2.jpg';
import slide3 from './../../../images/Tawhid-Fianl-scaled.jpg'



const Slide = () => {
    return (
        <>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" data-bs-interval="true">
                <div class="carousel-inner bg-primary text-light my-5 py-5">

                    <div class="carousel-item active" data-bs-interval="2000">
                        <div className="row conatiner-fluid mx-auto align-items-center">
                            <div className="col-md-6 mx-auto text-center">
                                <h1>Secrets Of Zionism</h1>
                                <h3>$19.75</h3>
                                <p><b>Author: Henry Fords </b></p>
                                <p><b>Translator: Fuad Al Azad </b></p>
                                <button className='px-4 rounded-pill btn btn-light border border-dark border-2'>View Details </button>
                            </div>

                            <div className="col-md-6 mx-auto text-center">
                                <img src={slide1} class="d-block img-fluid w-50" alt="..." />
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item" data-bs-interval="2000">
                        <div className="row conatiner-fluid mx-auto align-items-center">
                            <div className="col-md-6 mx-auto text-center">
                                <h1>Secrets Of Zionism</h1>
                                <h3>$19.75</h3>
                                <p><b>Author: Henry Fords </b></p>
                                <p><b>Translator: Fuad Al Azad </b></p>
                                <button className='px-4 rounded-pill btn btn-light border border-dark border-2'>View Details </button>
                            </div>
                            <div className="col-md-6 mx-auto text-center">

                                <img src={slide2} class="d-block img-fluid  w-50" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <div className="row conatiner-fluid mx-auto align-items-center">
                            <div className="col-md-6 mx-auto text-center">
                                <h1>Secrets Of Zionism</h1>
                                <h3>$19.75</h3>
                                <p><b>Author: Henry Fords </b></p>
                                <p><b>Translator: Fuad Al Azad </b></p>
                                <button className='px-4 rounded-pill btn btn-light border border-dark border-2'>View Details </button>
                            </div>

                            <div className="col-md-6 mx-auto text-center">
                                <img src={slide3} class="d-block img-fluid w-50" alt="..." />
                            </div>
                        </div>
                    </div>


                </div>
                <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


        </>);
};

export default Slide;