import { useState } from "react";
import { MenuButton } from "./MenuButton";
import { MenuList } from "./MenuList";
import { dataNavbar, dataNavbarIcon } from "./navbar.data";
import { scrollToSection, useScrollHandler } from "../../utils/scrollUtils";

export const Navbar = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const activeNavItem = useScrollHandler();

    const toggleMenu = () => {
        setMenuOpened(!menuOpened);
    };

    return (
        <nav>
            <MenuButton menuOpened={menuOpened} toggleMenu={toggleMenu} />
            {!menuOpened && <MenuList
                menuOpened={menuOpened}
                activeNavItem={activeNavItem}
                data={dataNavbar}
                scrollToSection={scrollToSection}
            />}
            {menuOpened && <MenuList
                menuOpened={menuOpened}
                activeNavItem={activeNavItem}
                data={dataNavbarIcon}
                scrollToSection={scrollToSection}
            />}
        </nav>
    );
};
