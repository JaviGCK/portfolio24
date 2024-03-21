import useVisibility from '../../utils/hooks/useVisibility';
import './contact.css';
import { contactData } from './contact.data';


const ContactLinks = () => {
    const { isVisible, ref } = useVisibility();
    return (
        <>
            <nav className={`contact-links fade-in ${isVisible ? 'isVisible' : ''}`} ref={ref}>
                {contactData.map((contact) => (
                    <div key={contact.id} className="contact-item">
                        <a href={contact.info} target="_blank" rel="noopener noreferrer">
                            {contact.icon}
                        </a>
                        <div className='contact-tooltip'>
                            {contact.platform}
                        </div>
                    </div>
                ))}
            </nav>
            <div className='space-container'></div>
        </>
    );
};

export default ContactLinks;

