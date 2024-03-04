import './contact.css';
import { contactData } from './contact.data';


const ContactLinks = () => {
    return (
        <>
            <nav className="contact-links">
                {contactData.map((contact) => (
                    <div key={contact.id} className="contact-item">
                        <a href={contact.info} target="_blank" rel="noopener noreferrer">
                            {contact.icon}
                        </a>
                    </div>
                ))}
            </nav>
            <div className='space-container'></div>
        </>
    );
};

export default ContactLinks;

