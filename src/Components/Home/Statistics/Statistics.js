import React from 'react';


const Statistics = () => {
    return (
        <>
            <div class="row row-cols-1 row-cols-md-3 g-4 mx-auto container text-center text-primary my-5">
                <div class="col">
                    <div class="card h-100  Statistics py-3">
                        <p><i class="fas text-primary fs-1 fa-users"></i></p>
                        <h2>1,020</h2>
                        <b>Happy Customers</b>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100  Statistics py-3">
                        <p><i class="fas text-primary fs-1 fa-book "></i></p>
                        <h2>15,640</h2>
                        <b>Books Colletion</b>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100  Statistics py-3">
                        <p><i class="fas text-primary fs-1 fa-mug-hot"></i></p>
                        <h2>1,520</h2>
                        <b>Cup of Coffee</b>
                    </div>
                </div>

            </div>

        </>

    );
};

export default Statistics;