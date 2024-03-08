import { useTranslation } from 'react-i18next';
import './texts.css';

export const IntroductionHome = () => {
    const { t } = useTranslation();

    return (
        <article className='container-introduction-home'>
            <header>
                <h2 className='introduction-title2-home'>{t('introduction.title2')}</h2>
                <h1 className='introduction-title-home'>{t('introduction.title')}</h1>
            </header>
            <p className='introduction-paragraph-home'>
                {t('introduction.paragraph')}
            </p>
        </article>
    );
};


