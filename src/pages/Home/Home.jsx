import { Helmet } from 'react-helmet-async';
import coverImage from '../../assets/home/chef-service.jpg'
import CallUs from '../../components/CallUs';
// ------
import Cover from "../../components/Cover";
import Banner from "./Banner";
import Category from "./Category";
import Featured from './Featured/Featured';
import PopularMenu from './PopularMenu';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Lite test | home</title>
            </Helmet>
            <Banner />
            <Category></Category>
            <Cover covImg={coverImage} title={'light test'} />
            <PopularMenu />
            <CallUs />
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;