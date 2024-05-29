import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popularMenu = menu.filter(item => item.category === 'popular')
    // console.log(popularMenu);
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('/menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularMenu = data.filter(item => item.category === 'popular')
    //             setMenu(popularMenu)
    //         })
    // }, [])

    return (
        <div>
            <SectionTitle subHeading={'check it out'} heading={'popular menu'}></SectionTitle>
            <div className="grid md:grid-cols-2">
                {
                    popularMenu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>

        </div>
    );
};

export default PopularMenu;