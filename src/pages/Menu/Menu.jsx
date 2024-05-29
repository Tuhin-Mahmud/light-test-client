import Cover from "../../components/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";
// image menu categories
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Light test | menu</title>

            </Helmet>
            <Cover covImg={menuImg}></Cover>
            <SectionTitle subHeading={"don't miss"} heading={"today's offer"}></SectionTitle>
            {/* todays offered */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts */}
            <MenuCategory items={desserts} covImg={dessertImg} title={'dessert'}></MenuCategory>
            {/* pizza */}
            <MenuCategory items={pizza} covImg={pizzaImg} title={'pizza'}></MenuCategory>
            {/* salad */}
            <MenuCategory items={salad} covImg={saladImg} title={'salad'}></MenuCategory>
            <MenuCategory items={soups} covImg={soupImg} title={'soups'}></MenuCategory>
        </div>
    );
};

export default Menu;