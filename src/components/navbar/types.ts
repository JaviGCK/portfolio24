export type MenuButtonProps = {
    menuOpened: boolean;
    toggleMenu: () => void;
};

export type MenuItem = {
    id: string | number;
    name: string | JSX.Element;
};


export type MenuListProps = {
    menuOpened: boolean;
    activeNavItem: string;
    data: MenuItem[];
    scrollToSection?: (sectionId: string | number) => void;
};

