import './logo.css'
import JaviImage from '../../assets/images/Javi1-1.jpg';

export const Logo = () => {
    return (
        <>
            <a className='logo-link' href="https://www.linkedin.com/in/javiergcdeveloper/" target="_blank" rel="noopener noreferrer">
                <img className='logo-img' src={JaviImage} alt="Javi-img" />

                <h2 className='logo-name'>Javier García Cabello</h2>
            </a>
        </>
    )
}
