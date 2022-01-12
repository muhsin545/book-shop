import React from 'react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from './../../images/man1.jpg';
import img2 from './../../images/man2.jpg';
import img3 from './../../images/man3.jpg';

import SwiperCore, { Navigation, Pagination, History, Autoplay } from 'swiper';


SwiperCore.use([Navigation, Pagination, Autoplay,]);
const Review = () => {


    const slides = [
        { name: 'Mahfuz Adnan', rating: 4, img: img1, saying: 'Very good service they are provide .I highly recommand  ' },
        { name: 'Hujaifa Salman', rating: 5, img: img2, saying: 'Very good service they are provide .I highly recommand  ' },
        { name: 'Bodor Rabbani', rating: 4, img: img3, saying: 'Very good service they are provide .I highly recommand  ' }
    ];

    return (
        <>
            <div className='my-5 py-5 text-center Review conatiner-fluid '>
                <h1 style={{ fontFamily: 'Poppins' }} className='my-3 py-3 text-primary text-uppercase fw-bold'>our happy customers____</h1>
                <>
                    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }} pagination={{
                        "clickable": true
                    }} navigation={true} className="mySwiper">

                        {
                            slides.map(singleSlide => <SwiperSlide>
                                <div style={{ backgroundColor: 'rgb(176, 211, 233)', fontFamily: 'Poppins' }} class="card p-5 border-0 text-center mx-auto w-75 text-primary">
                                    <img src={singleSlide.img} class="card-img-top align-self-center rounded-circle" style={{ width: '100px' }} alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{singleSlide.name}</h5>

                                        <p class="card-text">{singleSlide.saying}</p>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }

                    </Swiper>
                </>


            </div>

        </>
    );
};
export default Review
