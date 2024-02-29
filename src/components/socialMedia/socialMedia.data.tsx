import { BsFileEarmarkText } from 'react-icons/bs'
import { SlSocialGithub, SlSocialLinkedin } from 'react-icons/sl'

export const socialMediaData = [
    {
        id: 0,
        platform: "LinkedIn",
        icon: <SlSocialLinkedin />,
        url: "https://www.linkedin.com/in/javiergcdeveloper/",
        label: "Perfil de LinkedIn",
    },
    {
        id: 1,
        platform: "GitHub",
        icon: <SlSocialGithub />,
        url: "https://github.com/JaviGCK",
        label: "Perfil de GitHub",
    },
    {
        id: 2,
        platform: "CV",
        icon: <BsFileEarmarkText />,
        url: "https://drive.google.com/file/d/1RVHosjxRWQ5e93UdQANpp96Y5XBA6__A/view?usp=sharing",
        label: "Descargar CV",
    }
];
