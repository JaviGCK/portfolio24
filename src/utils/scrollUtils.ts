import { useEffect, useState } from 'react';
import { dataNavbar } from '../components/navbar/navbar.data';


export const useScrollHandler = () => {
    const [activeNavItem, setActiveNavItem] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            let scrollPosition = window.scrollY + 100;
            let maxVisibleSection = 'home';

            dataNavbar.forEach(navItem => {
                const sectionId = typeof navItem.id === 'number' ? String(navItem.id) : navItem.id;
                const section = document.getElementById(sectionId);
                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        maxVisibleSection = String(navItem.id);
                    }
                }
            });

            setActiveNavItem(maxVisibleSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return activeNavItem;
};

export const scrollToSection = (sectionId: string | number) => {
    const section = document.getElementById(sectionId.toString());
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

