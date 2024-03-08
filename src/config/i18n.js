import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa tus archivos de traducción
import translationEN from '../locales/en/translation.json';
import translationES from '../locales/es/translation.json';

// Configura i18next
i18n
    .use(initReactI18next) // Inicializa i18next
    .init({
        resources: {
            en: {
                translation: translationEN // Traducciones en inglés
            },
            es: {
                translation: translationES // Traducciones en español
            }
        },
        lng: 'en', // Establece el idioma predeterminado
        fallbackLng: 'en', // Define el idioma de respaldo
        interpolation: {
            escapeValue: false // No es necesario escapar los valores
        }
    });

export default i18n;
