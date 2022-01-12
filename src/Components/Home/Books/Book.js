import React, { useState } from 'react';
import Rating from 'react-rating';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Books.css'
const Book = ({ singlePackage }) => {

    console.log(singlePackage)

    const { user } = useAuth();
    const navigate = useNavigate();

    const seeDetails = (id) => {
        navigate(`/books/${id}`)

    }

    return (
        <div className='container-fluid '>

            <div onClick={() => { seeDetails(singlePackage?._id) }} class="col ">
                <div class="card  h-100 indivitualBook border-0 text-center">

                    <img src={singlePackage?.img} class="card-img-top w-50 img-fluid p-0 align-self-center" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-primary">{singlePackage.name}</h5>
                        <h5 class="card-title  text-primary">Price: {singlePackage.price}</h5>

                    </div>

                </div>

            </div>








        </div >
    );
};

export default Book;

