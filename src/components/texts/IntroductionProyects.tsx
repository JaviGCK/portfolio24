import './texts.css';
import { useTranslation } from 'react-i18next';

export const IntroductionProyects = () => {
    const { t } = useTranslation();

    return (
        <article className='container-introduction'>
            <div>
                <header className='header-introduction'>
                    <h2 className='introduction-title'>
                        {t('introduction.projects.title')} <span className='introduction-span'>{t('introduction.projects.highlighted')}</span>
                    </h2>
                </header>
                <p className='introduction-paragraph'>{t('introduction.projects.description')}</p>
            </div>
        </article>
    )
}
