import { BsTranslate } from "react-icons/bs";
import { PiPaintBrushHousehold } from "react-icons/pi";

type IconType = typeof BsTranslate | typeof PiPaintBrushHousehold;

export const dataNavbar = [
    {
        id: 0,
        name: 'Inicio'
    },
    {
        id: 1,
        name: 'Proyectos'
    },
    {
        id: 2,
        name: 'Sobre mí'
    },
    {
        id: 3,
        name: 'Contacto'
    },
    {
        id: 4,
        name: BsTranslate as IconType
    },
    {
        id: 5,
        name: PiPaintBrushHousehold as IconType
    }
];
