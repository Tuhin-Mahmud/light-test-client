import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialLogin = () => {
    const { googleLogin } = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedIn = result.user;
                console.log(loggedIn);

                const userInfo = {
                    name: result?.user.displayName,
                    email: result?.user.email

                }
                axiosPublic.post('/create-users', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
                navigate('/')
            })


    }


    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn btn-primary">Google</button>
        </div>
    );
};

export default SocialLogin;