import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './tecnologys.css';
import { dataTech } from './tecnologys.data';

export const Tecnologys = () => {
    const { t } = useTranslation();
    const tecnologysRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [visibleItems, setVisibleItems] = useState<string[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
        });

        if (tecnologysRef.current) {
            observer.observe(tecnologysRef.current);
        }

        return () => {
            if (tecnologysRef.current) {
                observer.unobserve(tecnologysRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setVisibleItems(['html', 'css', 'js']);
        }, 500);

        const timer2 = setTimeout(() => {
            setVisibleItems(prevItems => [...prevItems, 'mongodb', 'ts', 'bootstrap']);
        }, 1000);

        const timer3 = setTimeout(() => {
            setVisibleItems(prevItems => [...prevItems, 'vercel', 'postgress', 'react', 'tailwind']);
        }, 1500);

        const timer4 = setTimeout(() => {
            setVisibleItems(prevItems => [...prevItems, 'git', 'netlify', 'auth0', 'next.js']);
        }, 2000);

        const timer5 = setTimeout(() => {
            setVisibleItems(prevItems => [...prevItems, 'figma', 'express', 'jenkin', 'cloudinary']);
        }, 2500);

        const timer6 = setTimeout(() => {
            setVisibleItems(prevItems => [...prevItems, 'vscode', 'github', 'postman']);
        }, 3000);

        // Agregar más grupos con sus respectivos temporizadores según el patrón

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);
            clearTimeout(timer6);
            // Limpiar temporizadores adicionales si es necesario
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
