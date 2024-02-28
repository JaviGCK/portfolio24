import './tecnologys.css';
import { dataTech } from './tecnologys.data';

export const Tecnologys = () => {
    return (
        <section className='tecnologys-container'>
            <h2 className='tecnologys-title'>HABILIDADES TÉCNICAS</h2>
            <div className='tech-container'>
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


