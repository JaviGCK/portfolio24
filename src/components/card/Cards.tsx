import { cardsData } from './cards.data';
import './cards.css'

export const Cards = () => {
    return (
        <section className='container-cards-proyects'>
            {cardsData.map(card => (
                <article key={card.id} className='container-card'>
                    <header className='header-card'>
                        <h2 className='name-card'>{card.name}</h2>
                        <span className='iconDevice-card'>{card.iconDevice}</span>
                    </header>
                    <div className='container-img-card'>
                        <img className='img-card' src={card.img} alt={card.name} />
                    </div>
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
                        <ul className='ul-card-links'>
                            {card.iconsNav.map((icon, index) => (
                                <li key={index} className='li-links-card'>
                                    <a href={card.urls[index]} className='li-links-a-card' target="_blank" rel="noopener noreferrer">
                                        <div className="icon-container" aria-label={card.labels[index]}>
                                            {icon}
                                            <div className="tooltip">{card.labels[index]}</div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </nav>
                </article>
            ))}
        </section>
    );
};