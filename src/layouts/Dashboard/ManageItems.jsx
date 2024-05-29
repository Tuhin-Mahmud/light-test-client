import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
// import { ToastContainer } from "react-toastify";

const ManageItems = () => {
    const [menu, , refetch] = useMenu()
    const axiosSecure = useAxiosSecure()

    const handleDeleted = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: 'you want to deleted this this item!',
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const deleteRes = await axiosSecure.delete(`/menu/${id}`)
                console.log(deleteRes.data);
                if (deleteRes.data.deletedCount > 0) {
                    refetch()
                    // Swal.fire({
                    //     position: "top-end",
                    //     icon: "success",
                    //     title: "Your work has been saved",
                    //     showConfirmButton: false,
                    //     timer: 1500
                    // });
                    toast.success('menu item remove successfully')
                    // ToastContainer('remove this menu')
                }
            }
        });
    }


    return (
        <div>
            <SectionTitle subHeading={'hurry up'} heading={'Manage items'}></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>image</th>
                            <th>name</th>
                            <th>price</th>
                            <th>Update</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td >
                                    <p className="ml-4">
                                        ${item.price}
                                    </p>
                                </td>
                                <th>

                                    <Link to={`/dashboard/updateItems/${item._id}`}>
                                        <button

                                            className="btn btn-ghost bg-stone-500 hover:text-black">
                                            <FaEdit className="text-2xl hover:text-black text-white "></FaEdit>
                                        </button>
                                    </Link>

                                </th>
                                <th>
                                    <button
                                        onClick={() => handleDeleted(item._id)}
                                        className="btn btn-ghost bg-stone-700"><FaTrash className="text-xl text-red-400"></FaTrash></button>
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default ManageItems;