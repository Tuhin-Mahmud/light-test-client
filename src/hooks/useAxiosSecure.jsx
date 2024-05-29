import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',


});

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useAuth()
    // request stope by jwt token
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stop by interceptors:', token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    })

    // response by jwt 
    axiosSecure.interceptors.response.use(function (response) {

        return response;
    }, async (error) => {
        // Any status codes that falls outside the range of 2xx cause this 

        const status = error.response.status;
        if (status === 401 || status === 403) {
            await logOut()
            navigate('/login')
        }


        return Promise.reject(error);
    });



    return axiosSecure;
};

export default useAxiosSecure;