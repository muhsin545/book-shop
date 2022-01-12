import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Registration from './Registration';


//  this is a details page about a package

const PlaceOrder = () => {

    const { id } = useParams();
    const [offer, setOffer] = useState({});

    useEffect(() => {
        fetch(`https://secret-sierra-31961.herokuapp.com/books/${id}`)
            .then(res => res.json())
            .then(data => setOffer(data))
    }, [])


    return (
        <>

            <div className='row container mx-auto my-5 align-items-center g-3 border'>
                <div class="card h-100 border-0 text-center">

                    <img src={offer?.img} class="card-img-top w-50 img-fluid p-0 align-self-center" alt="..." />
                    <div class="card-body text-primary ">
                        <h5 class="card-title text-primary">{offer.name}</h5>
                        <div className='d-flex justify-content-around'>
                            <Rating
                                initialRating={offer.rating}
                                emptySymbol="far fa-star text-warning"
                                fullSymbol="fas fa-star  text-warning"
                                readonly
                            />
                            <h5 class="card-title py-3 text-primary">Price: {offer?.price}</h5>
                            <h5 class="card-title  text-primary">Published: {offer?.publishYear}</h5>
                        </div>
                        <h5 className=' py-3'><b> {offer.author}</b></h5>

                        <p className='text-start'><b>Description</b>: {offer?.Description}</p>
                    </div>
                    <div className="col-md-12 col-sm-12 my-2">
                        <Registration offer={offer}></Registration>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PlaceOrder;