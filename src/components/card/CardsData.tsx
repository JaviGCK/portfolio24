import { useTranslation } from 'react-i18next';
import { CiDesktop, CiMobile2 } from 'react-icons/ci';
import ApolloFyImg from '../../assets/images/apollofy-figma.webp';
import RickMortyImg from '../../assets/images/rick_morty.webp'
import movieshubImg from '../../assets/images/movieshub-next-copia.webp';
import CalendarTsImg from '../../assets/images/calendar.webp';
import ServerImg from '../../assets/images/server.webp';
import DDDImg from '../../assets/images/destok.webp';
import { TbBrandBootstrap, TbBrandMongodb, TbBrandNextjs, TbBrandReact } from 'react-icons/tb';
import { SiExpressvpn, SiFigma } from 'react-icons/si';
import { SlSocialGithub } from 'react-icons/sl';
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2';
import { BiLogoCss3, BiLogoJavascript, BiLogoMongodb, BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { PiDevicesLight } from 'react-icons/pi';
import { FaNode } from 'react-icons/fa';

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
            id: 'CALENDAR_TS',
            name: t('cards.CALENDAR_TS.name'),
            iconDevice: <PiDevicesLight />,
            img: CalendarTsImg,
            icons: [<BiLogoJavascript />, <BiLogoTypescript />, < BiLogoCss3 />],
            description: t('cards.CALENDAR_TS.description'),
            iconsNav: [<SlSocialGithub />, <HiMiniArrowTopRightOnSquare />],
            urls: ['https://github.com/JaviGCK/calendar-hamilton', 'https://ts-calendar-ruby.vercel.app/'],
            labels: [t('cards.labels.verGitHub'), t('cards.labels.verDeploy')]
        },
        {
            id: 'SERVER',
            name: t('cards.SERVER.name'),
            iconDevice: <PiDevicesLight />,
            img: ServerImg,
            icons: [<FaNode />, <SiExpressvpn />, <BiLogoTypescript />, <TbBrandMongodb />],
            description: t('cards.SERVER.description'),
            iconsNav: [<SlSocialGithub />],
            urls: ['https://github.com/JaviGCK/server_Movies'],
            labels: [t('cards.labels.verGitHub')]
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
        },
        {
            id: 'DROP_DRAG_DEMON',
            name: t('cards.DROP_DRAG_DEMON.name'),
            iconDevice: <PiDevicesLight />,
            img: DDDImg,
            icons: [<TbBrandReact />, <BiLogoTypescript />, <BiLogoCss3 />],
            description: t('cards.DROP_DRAG_DEMON.description'),
            iconsNav: [<SlSocialGithub />, <HiMiniArrowTopRightOnSquare />],
            urls: ['https://github.com/JaviGCK/drag-and-drop', 'https://glittering-capybara-a60804.netlify.app/'],
            labels: [t('cards.labels.verGitHub'), t('cards.labels.verDeploy')]
        }

    ];
};
