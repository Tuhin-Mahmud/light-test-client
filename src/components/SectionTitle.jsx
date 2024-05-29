/* eslint-disable react/prop-types */

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="w-4/12 text-center mx-auto my-10">
            <h4 className="text-orange-400 font-bold mb-2">--- {subHeading} ---</h4>
            <h2 className="text-4xl uppercase border-y-4 py-3">{heading}</h2>
        </div>
    );
};

export default SectionTitle;