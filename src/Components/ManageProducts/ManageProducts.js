import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://secret-sierra-31961.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products)
    return (
        <>
            <div className='my-5 CustomBorder ms-2'>
                <h1 className='text-center text-primary fs-1 fw-bold'>----All BOOKS---</h1>

            </div>
            <div className="mx-auto text-center">
                {
                    products.length === 0 ? <div class="d-flex justify-content-center">
                        <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                        : <div>
                            <div className='row container mx-auto text-center justify-content-center'>
                                {
                                    products.map(singlePackage => <ManageProduct
                                        key={singlePackage._id} singlePackage={singlePackage}></ManageProduct>)
                                }

                            </div>
                        </div>
                }
            </div>

        </>
    );
};

export default ManageProducts;