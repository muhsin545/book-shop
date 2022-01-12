import React, { useEffect, useState } from 'react';
import Book from './Book'


const Books = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://secret-sierra-31961.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <div className='text-center mx-auto mt-3 mb-5 py-5'>

                <div>
                    <h1 className=' text-primary fs-1 fw-bold pb-5'>---- Trending Books ---</h1>

                </div>

                <div className="mx-auto text-center">
                    {
                        books.length === 0 ?
                            <div class="d-flex justify-content-center">
                                <div class="spinner-border text-primary my-3" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>

                            :

                            <div>
                                <div class="row row-cols-1 row-cols-md-3 g-4 container-fluid mx-auto">
                                    {
                                        books.map(singlePackage => (
                                            <Book
                                                key={singlePackage._id} singlePackage={singlePackage}>
                                            </Book>
                                        ))
                                    }
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div >
    );
};

export default Books;