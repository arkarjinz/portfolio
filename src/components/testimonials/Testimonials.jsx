import React from 'react'
import "./testimonials.css"
import {Data} from "./Data.jsx"
import {motion} from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import {fadeIn} from "../../variant.jsx";

const Testimonials = () => {
    return (
        <motion.section className="testimonial container section"
                        variants={fadeIn('down', 0.3)}
                        initial="hidden" whileInView={'show'}
                        viewport={{once: false, amount: 0.1}}
        >
            <h2 className="section__title">What my clients say</h2>
            <span className="section__subtitle">Testimonials</span>

            <Swiper className="testimonial__container"
                    loop={true}
                    grabCursor={true}
                    spaceBetween={24}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 48,
                        },
                    }}
                    modules={[Pagination]}
            >
                {Data.map(({id, image,title, description}) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>

                            <img src={image} alt="testimonials" className="testimonial__img"/>
                              <h3 className="testimonial__name">{title}</h3>
                            <p className="trstimonial__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </motion.section>
    )
}
export default Testimonials
