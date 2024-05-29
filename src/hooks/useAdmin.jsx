import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const { user, loading } = useAuth()
    const { data: isAdmin = [], isPending: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking for checking user', user);
            const res = await axiosSecure.get(`/user/admin/${user?.email}`)
            // console.log(res.data.isAdmin);
            return res.data?.isAdmin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;