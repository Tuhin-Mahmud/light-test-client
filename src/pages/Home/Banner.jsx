import bannerImg1 from '../../assets/home/01.jpg'
// import bannerImg2 from '../../assets/home/02.png'
// import bannerImg3 from '../../assets/home/03.jpg'
import bannerImg4 from '../../assets/home/04.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={bannerImg1} />

                </div>
                <div>
                    {/* <img src={bannerImg2} /> */}
                </div>
                <div>
                    {/* <img src={bannerImg3} /> */}
                </div>
                <div>
                    <img src={bannerImg4} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;