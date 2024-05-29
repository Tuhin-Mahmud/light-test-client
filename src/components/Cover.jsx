/* eslint-disable react/prop-types */
import { Parallax } from 'react-parallax';


const Cover = ({ covImg, title }) => {


    return (

        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                // bgImage={}
                bgImageAlt="the test"
                strength={-200}
            >
                <div className="hero h-[550px]" style={{ backgroundImage: `url(${covImg})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md bg-white bg-opacity-35 p-7 shadow-2xl">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn bg-blue-300">Lats go</button>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Cover;