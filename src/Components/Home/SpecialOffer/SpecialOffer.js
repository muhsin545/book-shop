import React from 'react';

const SpecialOffer = () => {
    return (
        <div className='my-5'>
            <div className="container mx-auto w-75 bg-light text-center border-3 py-5 text-uppercase SpecialOffer">
                <h1 className='text-primary fw-bold '>Get Special Offer In Your Inbox</h1>
                <input type="text" name="" placeholder='Enter Your Email Address' className='w-75 py-2 my-1 px-4 rounded-pill border' id="" /><br />
                <input type="submit" value="SUBMIT" className='my-2 mx-auto py-2 px-5 rounded-pill border border-primary btn btn-primary' />
            </div>
        </div>
    );
};

export default SpecialOffer;