import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    const axiosPublic = useAxiosPublic()

    useEffect(() => {
        // fetch('http://localhost:5000/reviews')
        //     .then(res => res.json())
        //     .then(data => setReviews(data))
        axiosPublic('/reviews')
            .then(res => {
                setReviews(res.data)
            })
    }, [axiosPublic])
    return (
        <div>
            <SectionTitle subHeading={'what our client say'} heading={'testimonials'}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="m-24 flex flex-col  items-center space-y-3">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft className="text-6xl" />

                            <p>{review.details}</p>
                            <h3 className="text-orange-500 text-xl py-4">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default Testimonials;