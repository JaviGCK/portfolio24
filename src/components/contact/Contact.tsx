import { IntroductionContact } from '../texts/IntroductionContact'
import ContactLinks from './ContactLinks'
import './contact.css'

export const Contact = () => {
    return (
        <section id='contact' className='contact-container'>
            <IntroductionContact />
            <ContactLinks />
        </section>
    )
}
