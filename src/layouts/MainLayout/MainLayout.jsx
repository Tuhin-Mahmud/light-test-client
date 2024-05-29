import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../pages/Shared/NavBar";
import Footer from "../../pages/Shared/Footer";


const MainLayout = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;