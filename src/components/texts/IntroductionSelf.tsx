import { useTranslation } from 'react-i18next';
import './texts.css';

export const IntroductionSelf = () => {
    const { t } = useTranslation();

    return (
        <article className='container-introduction-self'>
            <header className='header-introduction-self'>
                <h2 className='introduction-title-self'>{t('introduction.self.title')}</h2>
            </header>
            <p className='introduction-paragraph-self'>
                {t('introduction.self.description1')}
                <span className='introduction-span-self'>{t('introduction.self.span1')}</span>
                {t('introduction.self.description2')}
                <span className='introduction-span-self'>{t('introduction.self.span2')}</span>
                {t('introduction.self.description3')}
                <span className='introduction-span-self'>{t('introduction.self.span3')}</span>
                {t('introduction.self.description4')}
                <span className='introduction-span-self'>{t('introduction.self.span4')}</span>
                {t('introduction.self.description5')}
                <span className='introduction-span-self'>{t('introduction.self.span5')}</span>
                {t('introduction.self.description6')}
                <span className='introduction-span-self'>{t('introduction.self.span6')}</span>
                {t('introduction.self.description7')}
                <span className='introduction-span-self'>{t('introduction.self.span7')}</span>
                {t('introduction.self.description8')}
                <span className='introduction-span-self'>{t('introduction.self.span8')}</span>
                {t('introduction.self.description9')}
                <span className='introduction-span-self'>{t('introduction.self.span9')}</span>
                {t('introduction.self.description10')}
            </p>
        </article>
    )
}
