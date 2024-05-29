import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()


    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('users')
            return res.data
        }
    })

    if (isLoading) {
        return <p>loading...</p>
    }
    // make admin 
    const handleAdmin = _id => {
        axiosSecure.patch(`/user/admin/${_id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast.success('user updated successfully')
                }
            })
    }


    const handleUserDelete = _id => {
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
                axiosSecure.delete(`/users/${_id}`)
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
            <div>
                <h2 className="text-xl ">Total users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, indx) => <tr key={user._id}>
                                <th>{indx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'Admin' : <button onClick={() => handleAdmin(user._id)} className="btn btn-ghost bg-base-300">
                                        <FaUsers className="text-xl text-gray-700" />
                                    </button>}
                                </td>
                                <td>
                                    <button onClick={() => handleUserDelete(user._id)}>
                                        <FaTrash className="text-red-500 text-xl"></FaTrash>
                                    </button>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllUsers;