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
        url: "https://drive.google.com/file/d/1MuWoVpeMfGRA9J5j9WrFO3eLEvHAmIzn/view?usp=drive_link",
        label: "Descargar CV",
    }
];
