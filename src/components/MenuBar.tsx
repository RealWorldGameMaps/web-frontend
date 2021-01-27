import { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItemProps } from "semantic-ui-react";

const MenuBar = () => {
    const pathname = window.location.pathname;
    const path = pathname === "/" ? "home" : pathname.substring(1);

    const [activeItem, setActiveItem] = useState(path);

    const handleItemClick = (e: MouseEvent, props: MenuItemProps) => {
        if(props.name) {
            setActiveItem(props.name);
        }
    };

    return (
        <Menu pointing secondary size="massive" color="teal">
            <Menu.Item name="home" active={activeItem === "home"} as={Link} to="/" onClick={handleItemClick} />
            <Menu.Item name="about" active={activeItem === "about"} as={Link} to="/about" onClick={handleItemClick} />
            <Menu.Item name="generate" active={activeItem === "generate"} as={Link} to="/generate" onClick={handleItemClick} />
        </Menu>
    );
};

export default MenuBar;
