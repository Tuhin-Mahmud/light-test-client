import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import useAxiosPublic from "../../hooks/useAxiosPublic";

import toast from "react-hot-toast";
import SocialLogin from "../../components/SocialLogin";

const Register = () => {
    const { createUser, updateUserProfile } = useAuth()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    // const [conditions, setConditions] = useState('')
    const axiosPublic = useAxiosPublic()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        console.log(data)
        const toastId = toast.loading('createUser....')

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        console.log('user profile updated');
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/create-users', userInfo)
                            .then(res => {
                                console.log('new user entry in and save the database');
                                if (res.data.insertedId) {
                                    reset()
                                    toast.success('user create successfully', { id: toastId })
                                    navigate('/')
                                }
                            })

                    })
                    .catch(error => {
                        console.log(error);
                        toast.error(error.message)
                    })

            })

        // .catch(err => {
        //     toast.error(err.message)
        // })


    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input {...register('name', { required: true })} type="text" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-500">name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input {...register('photo', { required: true })} type="text" placeholder="photo" className="input input-bordered" required />
                                {errors.photo && <span className="text-red-500">photo is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input {...register('email', { required: true })} type="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-500">email is required</span>}
                            </div>
                            {/* password */}
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 12,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })}
                                    type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered relative" required />
                                <span className="text-xl " onClick={() => setShowPassword(!showPassword)}>{<showPassword /> ? <AiFillEye /> : <AiFillEyeInvisible />}</span>

                                {/* <p>   <input type="checkbox" name="terms" id="terms" />
                                    <label className="ml-2" htmlFor="terms">accept the <a href="">terms and conditions</a></label></p> */}

                                {errors.password?.type === "required" && (
                                    <p >password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p >password must have 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p >password must have less then 12 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p >password must have  one uppercase and one lower case and one number</p>
                                )}
                            </div>


                            {/* ------ */}
                            <div className="form-control mt-6">
                                <input type="submit" value="Register" className="btn btn-primary" />
                            </div>
                        </form>
                        <p className="text-center py-5"><Link to={'/login'}>Loin</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;