import { CiMobile2 } from "react-icons/ci";
import ApolloFyImg from '../../assets/images/apollofy-figma.webp'
import { FaReact } from "react-icons/fa";
import { TbBrandCss3, TbBrandMongodb, TbBrandTypescript } from "react-icons/tb";
import { SiFigma, SiPostgresql } from "react-icons/si";
import { SlSocialGithub } from "react-icons/sl";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

export const cardsData = [
    {
        id: 'ApolloFy',
        name: 'ApolloFy',
        iconDevice: <CiMobile2 />,
        img: ApolloFyImg,
        icons: [<FaReact />, <TbBrandTypescript />, <TbBrandCss3 />, <TbBrandMongodb />, <SiPostgresql />],
        description: 'Bienvenido a Apollofy, un proyecto fullstack que fusiona la sofisticación de Spotify con la versatilidad de SoundCloud, ofreciendo un reproductor de música personalizado. Desarrollado con MERN Stack (MongoDB, Express, React y Node.js), Apollofy va más allá al permitir a los usuarios no solo disfrutar de la música, sino también gestionar su propia biblioteca, subir canciones, seguir a otros usuarios, crear álbumes personalizados y mucho más. Explora Apollofy y descubre una nueva forma de experimentar la música en línea.',
        iconsNav: [<SiFigma />, <SlSocialGithub />, <HiMiniArrowTopRightOnSquare />],
        urls: ['https://www.figma.com/file/cBZpDBEbATlHylRqXISKLe/apollofy?type=design&node-id=495%3A561&mode=design&t=ylMMTKr3hSQ6SEO3-1', 'https://github.com/JaviGCK/Apollofy-Hamilton', 'https://apollofy-frontend.vercel.app/']

    }
]