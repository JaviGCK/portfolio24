import { useTranslation } from 'react-i18next';

import './tecnologys.css';
import { dataTech } from './tecnologys.data';
import useVisibility from '../../utils/hooks/useVisibility';
import { useEffect, useState } from 'react';

export const Tecnologys = () => {
    const { t } = useTranslation();
    const { isVisible, ref: tecnologysRef } = useVisibility();
    const [visibleItems, setVisibleItems] = useState<string[]>([]);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const setTechGroups = () => {
            setVisibleItems([]);
            if (viewportWidth >= 1285) {
                const timer1 = setTimeout(() => setVisibleItems(['html']), 375);
                const timer2 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'ts', 'css']), 750);
                const timer3 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'auth0', 'react', 'bootstrap']), 1125);
                const timer4 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'github', 'cloudinary', 'next.js', 'tailwind']), 1500);
                const timer5 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'figma', 'git', 'vercel', 'mongodb', 'js']), 1875);
                const timer6 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'express', 'netlify', 'postgress']), 2250);
                const timer7 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'vscode', 'jenkin']), 2625);
                const timer8 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'postman']), 3000);
                return [timer1, timer2, timer3, timer4, timer5, timer6, timer7, timer8];
            } else if (viewportWidth <= 1284 && viewportWidth >= 1051) {
                const timer1 = setTimeout(() => setVisibleItems(['html']), 375);
                const timer2 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'css', 'js']), 750);
                const timer3 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'mongodb', 'ts', 'bootstrap']), 1125);
                const timer4 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'vercel', 'postgress', 'react', 'tailwind']), 1500);
                const timer5 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'git', 'netlify', 'auth0', 'next.js']), 1875);
                const timer6 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'figma', 'express', 'jenkin', 'cloudinary']), 2250);
                const timer7 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'vscode', 'github']), 2625);
                const timer8 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'postman']), 3000);
                return [timer1, timer2, timer3, timer4, timer5, timer6, timer7, timer8];
            } else {
                const timer1 = setTimeout(() => setVisibleItems(['html', 'css', 'bootstrap']), 428);
                const timer2 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'tailwind', 'js', 'ts']), 856);
                const timer3 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'react', 'next.js', 'mongodb']), 1284);
                const timer4 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'postgress', 'auth0', 'cloudinary']), 1712);
                const timer5 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'vercel', 'netlify', 'jenkin']), 2140);
                const timer6 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'github', 'git', 'express']), 2568);
                const timer7 = setTimeout(() => setVisibleItems(prevItems => [...prevItems, 'vscode', 'figma', 'postman']), 2996);
                return [timer1, timer2, timer3, timer4, timer5, timer6, timer7];
            }
        };

        const timerSet = setTechGroups();

        return () => {
            timerSet.forEach(timer => clearTimeout(timer));
        };
    }, [isVisible, viewportWidth]);

    const handleResize = () => {
        setViewportWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className='tecnologys-container' ref={tecnologysRef}>
            <h2 className='tecnologys-title'>{t('tecnologys.title')}</h2>
            <div className='tech-container'>
                {dataTech.map((tech) => (
                    <div
                        key={tech.id}
                        className={`tech-item ${isVisible && visibleItems.includes(tech.id) ? 'visible' : ''}`}
                    >
                        {tech.icon}
                        <span className='tech-name'>{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
