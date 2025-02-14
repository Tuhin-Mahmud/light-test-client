import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            console.log('find the current user', user);
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data
        }
    })

    return [cart, refetch]
};

export default useCart;