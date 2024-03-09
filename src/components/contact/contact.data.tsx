import { MdOutlineAttachEmail } from 'react-icons/md';
import { PiPhoneCall } from 'react-icons/pi';
import { SlSocialLinkedin } from 'react-icons/sl';

export const contactData = [
    {
        id: 0,
        platform: "Phone",
        icon: <PiPhoneCall />,
        info: "tel:+34663033843",
        label: "Llamar",
    },
    {
        id: 1,
        platform: "Mail",
        icon: <MdOutlineAttachEmail />,
        info: "mailto:javigcpgr@gmail.com",
        label: "Enviar Correo Electrónico",
    },
    {
        id: 2,
        platform: "LinkedIn",
        icon: <SlSocialLinkedin />,
        info: "https://www.linkedin.com/in/javiergcdeveloper/",
        label: "Perfil de LinkedIn",
    }
];
