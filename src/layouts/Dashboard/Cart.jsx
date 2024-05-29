import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import PaymentModal from "../../components/PaymentModal";
// import PaymentModal from "../../components/PaymentModal";
// import PaymentModal from "../../components/PaymentModal";

const Cart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure()

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${_id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }


    return (
        <div>
            <SectionTitle subHeading={'my cart'} heading={'wanna add more'}></SectionTitle>
            <div>
                <div className="md:flex justify-evenly">
                    <h2 className="text-3xl">total orders: {cart.length}</h2>
                    <h2 className="text-3xl">total price: {totalPrice}</h2>



                    {cart.length ? <Link to='/dashboard/payment'>
                        <h2 className="btn btn-primary">
                            pay
                        </h2>
                    </Link>
                        :
                        <button disabled className="btn btn-primary">pay</button>
                    }

                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    number
                                </th>
                                <th>image</th>
                                <th>name</th>
                                <th>price</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg text-red-600"><FaTrashAlt /></button>
                                    </th>
                                </tr>)
                            }


                        </tbody>



                    </table>
                </div>

            </div>
        </div>
    );
};

export default Cart;