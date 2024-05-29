import cateImg1 from '../../assets/home/slide1.jpg'
import cateImg2 from '../../assets/home/slide2.jpg'
import cateImg3 from '../../assets/home/slide3.jpg'
import cateImg4 from '../../assets/home/slide4.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../components/SectionTitle';

const Category = () => {
    return (
        <div>
            <SectionTitle
                subHeading={'from 11:00am to 10:00pm'}
                heading={'order online'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-10"
            >
                <SwiperSlide>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={cateImg1} alt="" />
                    <h3 className='uppercase text-3xl text-center -mt-16 text-white shadow-2xl'>salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cateImg2} alt="" />
                    <h3 className='uppercase text-3xl text-center -mt-16 text-white shadow-2xl'>pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cateImg3} alt="" />
                    <h3 className='uppercase text-3xl text-center -mt-16 text-white shadow-2xl'>soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={cateImg4} alt="" />
                    <h3 className='uppercase text-3xl text-center -mt-16 text-white shadow-2xl'>dessert</h3>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;