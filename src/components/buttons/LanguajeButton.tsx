import { useTranslation } from 'react-i18next';
import { BsTranslate } from 'react-icons/bs';

const LanguageButton = () => {
    const { i18n } = useTranslation();

    const changeLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <BsTranslate onClick={changeLanguage} />
    );
};

export default LanguageButton;

