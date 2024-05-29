import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
// import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
    // const [isAdmin] = useAdmin();
    // console.log(isAdmin);
    const [isAdmin] = useAdmin();
    // console.log(isAdmin);
    return (
        <div className="flex">
            <div className="bg-base-300 w-64 min-h-screen p-4">
                <ul className=" menu p-3 text-lg">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to="/dashboard/adminHome">admin home</NavLink></li>
                                <li><NavLink to="/dashboard/addItems">add items</NavLink></li>
                                <li><NavLink to="/dashboard/manageItems">manage items</NavLink></li>
                                <li><NavLink to="/dashboard/bookings">manage bookings</NavLink></li>
                                <li><NavLink to="/dashboard/users">All users</NavLink></li>
                                <div className="divider"></div>
                            </>
                            :
                            <>
                                <li><NavLink to="/dashboard/userHome">user home</NavLink></li>
                                <li><NavLink to="/dashboard/reservation">reservation</NavLink></li>
                                <li><NavLink to="/dashboard/paymentHistory">payment history</NavLink></li>
                                <li><NavLink to="/dashboard/cart">my cart</NavLink></li>
                                <li><NavLink to="/dashboard/review">add review</NavLink></li>
                                <li><NavLink to="/dashboard/booking">my booking</NavLink></li>
                                <div className="divider"></div>
                            </>
                    }
                    {/* shared link */}
                    <li><NavLink to="/">home</NavLink></li>
                    <li><NavLink to="/menu">menu</NavLink></li>
                    <li><NavLink to="/shop ">shop </NavLink></li>
                    <li><NavLink to="/contact">contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Dashboard;