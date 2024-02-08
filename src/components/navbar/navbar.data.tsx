import { BiBookOpen } from "react-icons/bi";
import { BsTranslate } from "react-icons/bs";
import { FiFolder, FiMail } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { PiPaintBrushBroad } from "react-icons/pi";

export const dataNavbar = [
    {
        id: 'home',
        name: 'Inicio'
    },
    {
        id: 'proyects',
        name: 'Proyectos'
    },
    {
        id: 'about',
        name: 'Sobre mí'
    },
    {
        id: 'contact',
        name: 'Contacto'
    },
    {
        id: 4,
        name: <BsTranslate />
    },
    {
        id: 5,
        name: <PiPaintBrushBroad />
    }
];

export const dataNavbarIcon = [
    {
        id: 'home',
        name: <HiOutlineHome />
    },
    {
        id: 'proyects',
        name: <FiFolder />
    },
    {
        id: 'about',
        name: <BiBookOpen />
    },
    {
        id: 'contact',
        name: <FiMail />
    },
    {
        id: 4,
        name: <BsTranslate />
    },
    {
        id: 5,
        name: <PiPaintBrushBroad />
    }
];

