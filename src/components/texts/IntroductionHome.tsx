import { useTranslation } from 'react-i18next';
import './texts.css';
import useVisibility from '../../utils/hooks/useVisibility';

export const IntroductionHome = () => {
    const { t } = useTranslation();
    const { isVisible, ref: introductionRef } = useVisibility();

    return (
        <article className='container-introduction-home' ref={introductionRef}>
            <header>
                <h2 className='introduction-title2-home'>{t('introduction.title2')}</h2>
                <h1 className={`introduction-title-home ${isVisible ? 'animated-color' : ''}`}>
                    {t('introduction.title')}
                </h1>
            </header>
            <p className='introduction-paragraph-home'>
                {t('introduction.paragraph')}
            </p>
        </article>
    );
};


