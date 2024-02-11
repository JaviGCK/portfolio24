import './logo.css'
import JaviImage from '../../assets/images/Javi1-1.jpg';

export const Logo = () => {
    return (
        <>
            <a className='logo-link' href="https://www.linkedin.com/in/javiergcdeveloper/" target="_blank" rel="noopener noreferrer" aria-label='Perfil de LInkedin'>
                <img className='logo-img' src={JaviImage} alt="Javi-img" />

                <h2 className='logo-name'>Javier García <span className='logo-name-span'>Cabello</span></h2>
            </a>
        </>
    )
}
