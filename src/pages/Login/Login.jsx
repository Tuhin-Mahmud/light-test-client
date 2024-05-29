import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const Login = () => {
    const { logInUser } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    // const [conditions, setConditions] = useState('')

    const from = location.state?.from?.pathname || '/'

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const accepted = form.terms.checked;
        console.log(accepted);
        console.log(email, password);
        // if (!conditions) {
        //     setConditions('please accept our terms and conditions')
        //     return;
        // }
        logInUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(from, { replace: true });

                // setConditions('')

            })
            .catch(err => {
                console.error(err);
            })
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* {conditions && <p>{conditions}</p>} */}
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                                <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}</span>

                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className="btn btn-primary" />
                            </div>
                        </form>
                        <p className="text-center py-5"><Link to="/register">Register</Link></p>
                        <div className="divider"></div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;