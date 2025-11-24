import { useTranslation } from 'react-i18next';
import ApolloFyImg from '../../assets/images/apollofy-figma.webp';
import RickMortyImg from '../../assets/images/rick_morty.webp'
import movieshubImg from '../../assets/images/movieshub-next-copia.webp';
import CalendarTsImg from '../../assets/images/calendar.webp';
import ServerImg from '../../assets/images/server.webp';
import DDDImg from '../../assets/images/destok.webp';
import TDImg from '../../assets/images/todoRN.webp';
import ZerelWebImg from '../../assets/images/Zerel.png';
import ZerelDynamoImg from '../../assets/images/Dynamo.png';
import {
    SiAmazonaws,
    SiBootstrap,
    SiCss3,
    SiExpress,
    SiFigma,
    SiGithub,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiVite
} from 'react-icons/si';
import {
    HiMiniArrowTopRightOnSquare,
    HiOutlineComputerDesktop,
    HiOutlineDevicePhoneMobile,
    HiOutlineServer
} from 'react-icons/hi2';

export const CardsData = () => {
    const { t } = useTranslation();

    return [

        {
            id: 'ZEREL_WEB',
            name: t('cards.ZEREL_WEB.name'),
            iconDevice: <HiOutlineComputerDesktop />,
            img: ZerelWebImg,
            icons: [<SiReact />, <SiTypescript />, <SiTailwindcss />, <SiAmazonaws />],
            description: t('cards.ZEREL_WEB.description'),
            iconsNav: [<HiMiniArrowTopRightOnSquare />],
            urls: [
                'https://zerel.io/'
            ],
            labels: [t('cards.labels.verDeploy')]
        },
        {
            id: 'ZEREL_DYNAMO',
            name: t('cards.ZEREL_DYNAMO.name'),
            iconDevice: <HiOutlineDevicePhoneMobile />,
            img: ZerelDynamoImg,
            icons: [
                <SiReact />,
                <SiTypescript />,
                <SiTailwindcss />,
                <SiVite />,
                <SiAmazonaws />
            ],
            description: t('cards.ZEREL_DYNAMO.description'),
            iconsNav: [<HiMiniArrowTopRightOnSquare />],
            urls: [
                'https://zerel.io/zerel-dynamo/'
            ],
            labels: [
                t('cards.labels.verDeploy')
            ]
        },
        {
            id: 'APOLOFY',
            name: t('cards.APOLOFY.name'),
            iconDevice: <HiOutlineDevicePhoneMobile />,
            img: ApolloFyImg,
            icons: [<SiReact />, <SiTypescript />, <SiCss3 />, <SiMongodb />, <SiPostgresql />],
            description: t('cards.APOLOFY.description'),
            iconsNav: [<SiFigma />, <SiGithub />, <HiMiniArrowTopRightOnSquare />],
            urls: ['https://www.figma.com/file/cBZpDBEbATlHylRqXISKLe/apollofy?type=design&node-id=495%3A561&mode=design&t=ylMMTKr3hSQ6SEO3-1', 'https://github.com/JaviGCK/Apollofy-Hamilton', 'https://apollofy-frontend.vercel.app/'],
            labels: [t('cards.labels.verFigma'), t('cards.labels.verGitHub'), t('cards.labels.verDeploy')]
        },
        {
            id: 'MOVIESHUB',
            name: t('cards.MOVIESHUB.name'),
            iconDevice: <HiOutlineComputerDesktop />,
            img: movieshubImg,
            icons: [<SiNextdotjs />, <SiTypescript />, <SiCss3 />, <SiMongodb />],
            description: t('cards.MOVIESHUB.description'),
            iconsNav: [<SiFigma />, <SiGithub />],
            urls: ['https://www.figma.com/file/ElRHzSTZPlxa75AHzLeBfR/Untitled?type=design&node-id=0%3A1&mode=dev&t=1lpAYSsiIVmmBjia-1', 'https://github.com/JaviGCK/MoviesHub_next'],
            labels: [t('cards.labels.verFigma'), t('cards.labels.verGitHub')]
        },
        {
            id: 'CALENDAR_TS',
            name: t('cards.CALENDAR_TS.name'),
            iconDevice: <HiOutlineComputerDesktop />,
            img: CalendarTsImg,
            icons: [<SiJavascript />, <SiTypescript />, <SiCss3 />],
            description: t('cards.CALENDAR_TS.description'),
            iconsNav: [<SiGithub />, <HiMiniArrowTopRightOnSquare />],
            urls: ['https://github.com/JaviGCK/calendar-hamilton', 'https://ts-calendar-ruby.vercel.app/'],
            labels: [t('cards.labels.verGitHub'), t('cards.labels.verDeploy')]
        },
        {
            id: 'SERVER',
            name: t('cards.SERVER.name'),
            iconDevice: <HiOutlineServer />,
            img: ServerImg,
            icons: [<SiNodedotjs />, <SiExpress />, <SiTypescript />, <SiMongodb />],
            description: t('cards.SERVER.description'),
            iconsNav: [<SiGithub />],
            urls: ['https://github.com/JaviGCK/server_Movies'],
            labels: [t('cards.labels.verGitHub')]
        },
        {
            id: 'RICK&MORTY',
            name: t('cards.RICK&MORTY.name'),
            iconDevice: <HiOutlineComputerDesktop />,
            img: RickMortyImg,
            icons: [<SiJavascript />, <SiTypescript />, <SiBootstrap />],
            description: t('cards.RICK&MORTY.description'),
            iconsNav: [<SiGithub />, <HiMiniArrowTopRightOnSquare />],
            urls: ['https://github.com/JaviGCK/Rick-Morty-Api', 'https://rick-morty-api-sooty.vercel.app/'],
            labels: [t('cards.labels.verGitHub'), t('cards.labels.verDeploy')]
        },
        {
            id: 'DROP_DRAG_DEMON',
            name: t('cards.DROP_DRAG_DEMON.name'),
            iconDevice: <HiOutlineComputerDesktop />,
            img: DDDImg,
            icons: [<SiReact />, <SiTypescript />, <SiCss3 />],
            description: t('cards.DROP_DRAG_DEMON.description'),
            iconsNav: [<SiGithub />, <HiMiniArrowTopRightOnSquare />],
            urls: ['https://github.com/JaviGCK/drag-and-drop', 'https://glittering-capybara-a60804.netlify.app/'],
            labels: [t('cards.labels.verGitHub'), t('cards.labels.verDeploy')]
        },
        {
            id: 'TODOREACTNATIVE',
            name: t('cards.TODO_REACT_NATIVE.name'),
            iconDevice: <HiOutlineDevicePhoneMobile />,
            img: TDImg,
            icons: [<SiReact />, <SiJavascript />, <SiCss3 />],
            description: t('cards.DROP_DRAG_DEMON.description'),
            iconsNav: [<SiGithub />],
            urls: ['https://github.com/JaviGCK/todoReactNative'],
            labels: [t('cards.labels.verGitHub')]
        },

    ];
};
