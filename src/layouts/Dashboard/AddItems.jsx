import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";

import Swal from "sweetalert2";
// import toast from "react-hot-toast";

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const image_hosting_api = import.meta.env.VITE_IMAGE_API_KEY;
const imag_upload_api_key = `https://api.imgbb.com/1/upload?key=${image_hosting_api}`;

const AddItems = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(imag_upload_api_key, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }

        });
        console.log(res.data);
        if (res.data.success) {

            const menuItems = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItems)
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                // toast.success
                // toast('item added successfully')
                // toast.success('items added successfully')
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                });

            }

        }


    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>


                <div className="">
                    <label className="form-control ">
                        <div className="label">
                            <span className="label-text">Recipe name?</span>
                        </div>
                        {/* name */}
                        <input
                            {...register("name")}
                            type="text" placeholder="recipe name" className="input input-bordered  border border-emerald-500 md:w-full " />
                    </label>
                </div>

                <div className="md:flex gap-5">
                    {/* category */}

                    <label className="form-control md:flex-1 ">
                        <div className="label">
                            <span className="label-text">Category?</span>
                        </div>
                        <select
                            defaultValue={'value'}
                            {...register("category")}
                            className="select select-bordered">
                            <option disabled value={'defaultValue'}>choose your category</option>
                            <option>salad</option>
                            <option>pizza</option>
                            <option>soups</option>
                            <option>desserts</option>
                            <option>drinks</option>
                        </select>
                    </label>

                    {/* price */}

                    <label className="form-control md:flex-1 ">
                        <div className="label">
                            <span className="label-text">price?</span>
                        </div>
                        {/*  */}
                        <input
                            {...register("price")}
                            type="number" placeholder="recipe name" className="input input-bordered  border border-emerald-500 md:w-full " />
                    </label>
                </div>
                <div>
                    <div className="label">
                        <span className="label-text">Details?</span>
                    </div>
                    <textarea
                        {...register("textarea")}
                        className="border textarea md:w-full p-4 border-gray-400" cols="30" rows="5" placeholder="text area"></textarea>
                </div>

                <div className="my-5">
                    <input
                        {...register("image")}
                        type="file" className="file-input w-full max-w-xs" />
                </div>

                <input type="submit" className="btn btn-primary w-1/2 flex mx-auto" />
            </form>
        </div>
    );
};

export default AddItems;