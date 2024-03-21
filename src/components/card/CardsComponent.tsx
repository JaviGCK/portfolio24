import { CardsData } from './CardsData';
import './cards.css';
import useVisibility from '../../utils/hooks/useVisibility';

export const CardsComponent = () => {
    const cardsData = CardsData();
    const { isVisible, ref } = useVisibility();

    return (
        <section className={`container-cards-proyects ${isVisible ? 'isVisible' : ''}`} ref={ref}>
            {cardsData.map(card => (
                <article key={card.id} className={`container-card ${isVisible ? 'isVisible' : ''}`}>
                    <header className={`header-card ${isVisible ? 'isVisible' : ''}`}>
                        <h2 className={`name-card ${isVisible ? 'isVisible' : ''}`}>{card.name}</h2>
                        <span className={`iconDevice-card ${isVisible ? 'isVisible' : ''}`}>{card.iconDevice}</span>
                    </header>
                    <div className={`container-img-card ${isVisible ? 'isVisible' : ''}`}>
                        <img className={`img-card ${isVisible ? 'isVisible' : ''}`} src={card.img} alt={card.name} />
                    </div>
                    <div className={`container-tech-icon-card ${isVisible ? 'isVisible' : ''}`}>
                        <ul className={`ul-card ${isVisible ? 'isVisible' : ''}`}>
                            {card.icons.map((icon, index) => (
                                <li key={index} className={`li-tech-icon-card ${isVisible ? 'isVisible' : ''}`}>
                                    {icon}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className={`description-card ${isVisible ? 'isVisible' : ''}`}>{card.description}</p>
                    <nav className={`container-links-card ${isVisible ? 'isVisible' : ''}`}>
                        <ul className={`ul-card-links ${isVisible ? 'isVisible' : ''}`}>
                            {card.iconsNav.map((icon, index) => (
                                <li key={index} className={`li-links-card ${isVisible ? 'isVisible' : ''}`}>
                                    <a href={card.urls[index]} className={`li-links-a-card ${isVisible ? 'isVisible' : ''}`} target="_blank" rel="noopener noreferrer">
                                        <div className={`icon-container ${isVisible ? 'isVisible' : ''}`} aria-label={card.labels[index]}>
                                            {icon}
                                            <div className={`tooltip ${isVisible ? 'isVisible' : ''}`}>{card.labels[index]}</div>
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