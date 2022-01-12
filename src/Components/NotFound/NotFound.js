import React from 'react';

const NotFound = () => {
    return (
        <>
            <div className='mt-5 py-5 text-center text-primary'>
                <h1 className='fw-bolder  notFound'>404</h1>
                <b>Page Cannot be found</b> <br />
                <button className='btn btn-outline-primary border border-primary border-3 my-3 rounded-pill px-4'> Back To Home</button>
                <div className="notFoundImg">

                </div>
            </div>
        </>
    );
};

export default NotFound;