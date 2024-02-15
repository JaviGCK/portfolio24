import { cardsData } from './Cards.data';
import './cards.css'

export const Cards = () => {
    return (
        <section className='container-card'>
            {cardsData.map(card => (
                <div key={card.id}>
                    <header className='header-card'>
                        <h2 className='name-card'>{card.name}</h2>
                        <span className='iconDevice-card'>{card.iconDevice}</span>
                    </header>
                    <img className='img-card' src={card.img} alt={card.name} />
                    <div className='container-tech-icon-card'>
                        <ul className='ul-card'>
                            {card.icons.map((icon, index) => (
                                <li key={index} className='li-tech-icon-card'>
                                    {icon}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className='description-card'>{card.description}</p>
                    <nav className='container-links-card'>
                        <ul className='ul-card'>
                            {card.iconsNav.map((icon, index) => (
                                <li key={index} className='li-links-card'>
                                    <a href={card.urls[index]} target="_blank" rel="noopener noreferrer">{icon}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            ))}
        </section>
    );
};