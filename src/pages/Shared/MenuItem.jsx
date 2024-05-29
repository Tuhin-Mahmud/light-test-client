/* eslint-disable react/prop-types */

const MenuItem = ({ item }) => {
    // console.log(Object.keys(item).join(','));
    const { name, recipe, image, price } = item || {};

    return (
        <div className="flex items-center space-x-4 my-4">
            <img className="w-[100px] ml-3 " style={{ borderRadius: '0 200px 200px 200px' }} src={image} alt="" />
            <div>
                <h3 className="text-3xl uppercase">{name}</h3>
                <p className="">{recipe}</p>
            </div>
            <p className="text-yellow-400 font-semibold ">{price}</p>
        </div>
    );
};

export default MenuItem;