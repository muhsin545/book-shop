import React from 'react';
import librery from './../../../images/8364-ai.png'
const FreeRead = () => {
    const handleSubmit = (e) => {
        alert("Successfully Submitted Your Message! Stay with us")

        e.preventDefault()
    }

    return (
        <>
            <div className="row conatiner-fluid mx-auto align-items-center">
                <div className="col-md-6">
                    <img src={librery} className='img-fluid' alt="" />
                </div>
                <div className="col-md-6 container text-primary text-uppercase mx-auto py-5">
                    <h1 className=' fw-bold text-center'>To Read Book For Free </h1>
                    <h2 className=' fw-normal text-center'>Fill Up This Form</h2>
                    <form onSubmit={handleSubmit} className='text-center' action="https://formsubmit.co/muhibullahmuhsin545@gmail.com" method="POST" >
                        <input type="text" className=' py-3 rounded my-1  border border-primary w-100' required placeholder='Enter Your Name' /> <br />
                        <input type="text" className=' py-3 rounded border border-primary my-1 w-100' required placeholder='Enter Your Address' /> <br />
                        <input type="email" name="email" className='my-1 border border-primary py-3 rounded w-100' placeholder='Enter Your Email ' required id="" /> <br />

                        <input type="submit" className='fs-4 fw-bold my-1 px-2 btn btn-outline-primary rounded-3 w-100 mx-auto text-center' value="SUBMIT" />
                    </form>

                </div>
            </div>



        </>
    );
};

export default FreeRead;

/* 
// contact form
<div className="col-md-6 text-primary text-uppercase mx-auto py-5">
                <h2 className=' fw-bold text-center'>Fill Up This Form</h2>
                <form action="https://formsubmit.co/muhibullahmuhsin545@gmail.com" method="POST" >
                    <input type="text" className='py-2 w-100' required placeholder='Enter Your Name' /> <br />
                    <input type="number" className='my-2 py-2 w-100' required placeholder='Enter Your Phone Number' /> <br />
                    <input type="text" className='py-2 w-100' required placeholder='Enter Your Address' /> <br />
                    <input type="email" name="email" className='my-2 py-2 w-100' placeholder='Enter Your Email ' required id="" /> <br />
                    <textarea name="message" id="" className='mb-2 w-100 py-2' cols="30" placeholder='Write Your Message' rows="10"></textarea>
                    <input type="submit" className='fs-4 fw-bold my-1 px-2 btn btn-primary rounded-3 ' value="SUBSCRIBE" />
                </form>

            </div>


*/