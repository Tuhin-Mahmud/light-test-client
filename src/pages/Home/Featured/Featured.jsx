import SectionTitle from "../../../components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured my-10 py-5 bg-fixed">
            <SectionTitle subHeading={'check it out'} heading={'from our featured'}></SectionTitle>
            <div className="md:flex justify-center text-white items-center px-32 py-16">
                <div>
                    <img className="rounded" src={featuredImg} alt="" />
                </div>
                <div className="md:ml-8">
                    <h4>March 20, 2024 <br /> WHERE CAN I GET SOME?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis, et eius, amet dolor id vero laborum cumque quibusdam ducimus consequatur quas voluptatibus sed debitis corporis, natus quasi dolorum! Expedita dolores et consequuntur accusantium sit enim debitis quas eligendi minima ullam, quibusdam voluptatem, vel, praesentium fugit veritatis. Laboriosam, magnam distinctio.</p>
                </div>
                <button className="">Read more</button>
            </div>
        </div>
    );
};

export default Featured;