/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item || {};
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = useCart()

    const handleAddToCart = () => {
        if (user && user?.email) {
            //  cart item send to the data base
            const cartItem = {
                email: user?.email,
                menuId: _id,
                name,
                price,
                recipe,
                image
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your order add to the cart successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()

                    }
                })

        }
        else {
            Swal.fire({
                title: "Your are not login?",
                text: "are you sure you want to login!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }


    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-black absolute right-0 mr-10 mt-5 px-3 text-white">{price}</p>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;