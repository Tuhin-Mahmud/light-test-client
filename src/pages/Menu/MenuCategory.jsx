/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../components/Cover";
import MenuItem from "../Shared/MenuItem";

const MenuCategory = ({ items, covImg, title }) => {
    return (
        <div className="my-10">
            {title && <Cover covImg={covImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <div className="  flex justify-center">

                    <button className="text-orange-400 btn btn-outline border-0 border-b-4 border-orange-400 w-1/2 uppercase">order your favourite food</button>

                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;