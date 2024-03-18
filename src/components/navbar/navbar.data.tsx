import { BiBookOpen } from "react-icons/bi";
import { FiFolder, FiMail } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import LanguageButton from "../buttons/LanguajeButton";

export const dataNavbar = [
    {
        id: 'home',
        name: 'menu.home'
    },
    {
        id: 'proyects',
        name: 'menu.projects'
    },
    {
        id: 'about',
        name: 'menu.about'
    },
    {
        id: 'contact',
        name: 'menu.contact'
    },
    {
        id: 4,
        name: <LanguageButton />
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
        name: <LanguageButton />
    }
];

