import { useTranslation } from 'react-i18next';
import { MenuListProps } from '../../types/menuTypes';
import './menus.css';

export const MenuList: React.FC<MenuListProps> = ({ menuOpened, activeNavItem, data, scrollToSection }) => {
    const { t } = useTranslation();

    return (
        <ul className={`navbar-list ${menuOpened ? 'show' : ''}`}>
            {data.map(navItem => (
                <li
                    key={navItem.id}
                    className={`navbar-li ${navItem.id === activeNavItem ? 'active' : ''}`}
                    onClick={() => scrollToSection && scrollToSection(navItem.id)}
                >
                    {typeof navItem.name === 'string' ? t(navItem.name) : navItem.name}
                </li>
            ))}
        </ul>
    );
};

