import { useTranslation } from 'react-i18next';
import { CiDesktop, CiMobile2 } from 'react-icons/ci';
import ApolloFyImg from '../../assets/images/apollofy-figma.webp';
import RickMortyImg from '../../assets/images/rick_morty.webp'
import movieshubImg from '../../assets/images/movieshub-next-copia.webp';
import { TbBrandBootstrap, TbBrandNextjs, TbBrandReact } from 'react-icons/tb';
import { SiFigma } from 'react-icons/si';
import { SlSocialGithub } from 'react-icons/sl';
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2';
import { BiLogoCss3, BiLogoJavascript, BiLogoMongodb, BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { PiDevicesLight } from 'react-icons/pi';

export const CardsData = () => {
    const { t } = useTranslation();

    return [
        {
            id: 'APOLOFY',
            name: t('cards.APOLOFY.name'),
            iconDevice: <CiMobile2 />,
            img: ApolloFyImg,
            icons: [<TbBrandReact />, <BiLogoTypescript />, <BiLogoCss3 />, <BiLogoMongodb />, <BiLogoPostgresql />],
            description: t('cards.APOLOFY.description'),
            iconsNav: [<SiFigma />, <SlSocialGithub />, <HiMiniArrowTopRightOnSquare />],
            urls: ['https://www.figma.com/file/cBZpDBEbATlHylRqXISKLe/apollofy?type=design&node-id=495%3A561&mode=design&t=ylMMTKr3hSQ6SEO3-1', 'https://github.com/JaviGCK/Apollofy-Hamilton', 'https://apollofy-frontend.vercel.app/'],
            labels: [t('cards.labels.verFigma'), t('cards.labels.verGitHub'), t('cards.labels.verDeploy')]
        },
        {
            id: 'MOVIESHUB',
            name: t('cards.MOVIESHUB.name'),
            iconDevice: <CiDesktop />,
            img: movieshubImg,
            icons: [<TbBrandNextjs />, <BiLogoTypescript />, <BiLogoCss3 />, <BiLogoMongodb />],
            description: t('cards.MOVIESHUB.description'),
            iconsNav: [<SiFigma />, <SlSocialGithub />],
            urls: ['https://www.figma.com/file/ElRHzSTZPlxa75AHzLeBfR/Untitled?type=design&node-id=0%3A1&mode=dev&t=1lpAYSsiIVmmBjia-1', 'https://github.com/JaviGCK/MoviesHub_next'],
            labels: [t('cards.labels.verFigma'), t('cards.labels.verGitHub')]
        },
        {
            id: 'RICK&MORTY',
            name: t('cards.RICK&MORTY.name'),
            iconDevice: <PiDevicesLight />,
            img: RickMortyImg,
            icons: [<BiLogoJavascript />, <BiLogoTypescript />, <TbBrandBootstrap />],
            description: t('cards.RICK&MORTY.description'),
            iconsNav: [<SlSocialGithub />, <HiMiniArrowTopRightOnSquare />],
            urls: ['https://github.com/JaviGCK/Rick-Morty-Api', 'https://rick-morty-api-sooty.vercel.app/'],
            labels: [t('cards.labels.verGitHub'), t('cards.labels.verDeploy')]
        }

    ];
};