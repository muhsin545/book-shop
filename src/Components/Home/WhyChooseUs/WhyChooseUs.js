import React from 'react';

const WhyChooseUs = () => {
    return (
        <div>
            <div className="text-center text-primary my-5">
                <h1 style={{ fontFamily: 'sans-serif' }} className='fw-bolder fs-1 text-uppercase'>We Are unique Because <br />
                    We provide</h1>
                <div className="row container-fluid mx-auto text-center my-5">
                    <div className="col-md-3">
                        <div className=" p-3 row container align-items-center border border-primary">
                            <div className="col-md-3 col-sm-12">
                                <i class="fas Fonticon Fonticon fa-truck"></i>
                            </div>
                            <div className="col-md-9 col-sm-12">
                                <h5 className='fw-bold'>Quick Delivery</h5>
                                <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row container align-items-center border-primary border p-3">
                            <div className="col-md-3 col-sm-12">
                                <i class="fas Fonticon Fonticon fa-shield-alt"></i>
                            </div>
                            <div className="col-md-9 col-sm-12">
                                <h5 className='fw-bold'>Secured Payment</h5>
                                <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row container align-items-center  border-primary border p-3">
                            <div className="col-md-3 col-sm-12">
                                <i class="fas Fonticon Fonticon fa-pen-alt"></i>
                            </div>
                            <div className="col-md-9 col-sm-12">
                                <h5 className='fw-bold'>Best Deal</h5>
                                <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row container align-items-center border-primary border p-3">
                            <div className="col-md-3 col-sm-12">
                                <i class="fas Fonticon Fonticon fa-money-check-alt"></i>
                            </div>
                            <div className="col-md-9 col-sm-12">
                                <h5 className='fw-bold'>Easy Payment</h5>
                                <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;