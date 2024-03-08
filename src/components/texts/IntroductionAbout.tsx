import { useTranslation } from 'react-i18next';
import './texts.css';

export const IntroductionAbout = () => {
    const { t } = useTranslation();

    return (
        <article className='container-introduction'>
            <div>
                <header className='header-introduction'>
                    <h2 className='introduction-title'>{t('introduction.about.title')}</h2>
                </header>
                <p className='introduction-paragraph'>{t('introduction.about.description')}</p>
            </div>
        </article>
    )
}
