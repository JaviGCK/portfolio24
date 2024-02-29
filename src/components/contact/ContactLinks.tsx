import './contact.css';
import { contactData } from './contact.data';


const ContactLinks = () => {
    return (
        <nav className="contact-links">
            {contactData.map((contact) => (
                <div key={contact.id} className="contact-item">
                    <a href={contact.info} target="_blank" rel="noopener noreferrer">
                        {contact.icon}
                        <span className='contact-name'>{contact.platform}</span>
                    </a>
                </div>
            ))}
        </nav>
    );
};

export default ContactLinks;

