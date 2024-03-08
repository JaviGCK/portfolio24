import { useTranslation } from 'react-i18next';
import './texts.css';

export const IntroductionContact = () => {
    const { t } = useTranslation();

    return (
        <article className='container-introduction'>
            <div>
                <header className='header-introduction'>
                    <h2 className='introduction-title'>{t('introduction.contact.title')}</h2>
                </header>
                <p className='introduction-paragraph'>{t('introduction.contact.description')}</p>
            </div>
        </article>
    )
}
