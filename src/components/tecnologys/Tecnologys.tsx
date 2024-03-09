import { useTranslation } from 'react-i18next';
import './tecnologys.css';
import { dataTech } from './tecnologys.data';

export const Tecnologys = () => {
    const { t } = useTranslation();
    return (
        <section className='tecnologys-container'>
            <h2 className='tecnologys-title'>{t('tecnologys.title')}</h2>           <div className='tech-container'>
                {dataTech.map((tech) => (
                    <div key={tech.id} className='tech-item'>
                        {tech.icon}
                        <span className='tech-name'>{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}


