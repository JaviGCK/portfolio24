import { CiDesktop, CiMobile2 } from "react-icons/ci";
import ApolloFyImg from '../../assets/images/apollofy-figma.webp'
import movieshubImg from '../../assets/images/movieshub-next-copia.webp'
import { TbBrandNextjs, TbBrandReact } from "react-icons/tb";
import { SiFigma } from "react-icons/si";
import { SlSocialGithub } from "react-icons/sl";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { BiLogoCss3, BiLogoMongodb, BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";

export const cardsData = [
    {
        id: 'APOLOFY',
        name: 'APOLOFY',
        iconDevice: <CiMobile2 />,
        img: ApolloFyImg,
        icons: [<TbBrandReact />, <BiLogoTypescript />, <BiLogoCss3 />, <BiLogoMongodb />, <BiLogoPostgresql />],
        description: 'Bienvenido a Apollofy, un proyecto fullstack que fusiona la sofisticación de Spotify con la versatilidad de SoundCloud, ofreciendo un reproductor de música personalizado. Desarrollado con MERN Stack (MongoDB, Express, React y Node.js), Apollofy va más allá al permitir a los usuarios no solo disfrutar de la música, sino también gestionar su propia biblioteca, subir canciones, seguir a otros usuarios, crear álbumes personalizados y mucho más. Explora Apollofy y descubre una nueva forma de experimentar la música en línea.',
        iconsNav: [<SiFigma />, <SlSocialGithub />, <HiMiniArrowTopRightOnSquare />],
        urls: ['https://www.figma.com/file/cBZpDBEbATlHylRqXISKLe/apollofy?type=design&node-id=495%3A561&mode=design&t=ylMMTKr3hSQ6SEO3-1', 'https://github.com/JaviGCK/Apollofy-Hamilton', 'https://apollofy-frontend.vercel.app/'],
        labels: ['Ver Figma', 'Ver GitHub', 'Ver Deploy']
    },
    {
        id: 'MOVIESHUB',
        name: 'MOVIESHUB',
        iconDevice: <CiDesktop />,
        img: movieshubImg,
        icons: [<TbBrandNextjs />, <BiLogoTypescript />, <BiLogoCss3 />, <BiLogoMongodb />],
        description: 'Bienvenido a MoviesHub! Un emocionante proyecto fullstack creado con Next.js, CSS, MongoDB, Node.js y Express. En MoviesHub, tú tomas el control de tu propia experiencia cinematográfica. Sube, modifica y elimina tus películas favoritas con facilidad. Personaliza cada entrada con descripciones detalladas, puntuaciones e imágenes llamativas.',
        iconsNav: [<SiFigma />, <SlSocialGithub />],
        urls: ['https://www.figma.com/file/ElRHzSTZPlxa75AHzLeBfR/Untitled?type=design&node-id=0%3A1&mode=dev&t=1lpAYSsiIVmmBjia-1', 'https://github.com/JaviGCK/MoviesHub_next'],
        labels: ['Ver Figma', 'Ver GitHub']
    }
];
