import './logo.css';
import JaviImage from '../../assets/images/Javi1-1-removebg-preview.webp';
import { socialMediaData } from '../socialMedia/socialMedia.data';

export const Logo = () => {
    return (
        <>
            {socialMediaData.slice(0, 1).map(item => (
                <a key={item.id} className='logo-link' href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                    <img className='logo-img' src={JaviImage} alt="Javi-img" />
                    <h2 className='logo-name'>Javier García <span className='logo-name-span'>Cabello</span></h2>
                </a>
            ))}
        </>
    );
};


