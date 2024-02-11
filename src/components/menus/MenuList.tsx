import { MenuListProps } from '../../types/menuTypes';
import './menus.css'

export const MenuList: React.FC<MenuListProps> = ({ menuOpened, activeNavItem, data, scrollToSection }) => (
    <ul className={`navbar-list ${menuOpened ? 'show' : ''}`}>
        {data.map(navItem => (
            <li
                key={navItem.id}
                className={`navbar-li ${navItem.id === activeNavItem ? 'active' : ''}`}
                onClick={() => scrollToSection && scrollToSection(navItem.id)}
            >
                {navItem.name}
            </li>
        ))}
    </ul>
);
