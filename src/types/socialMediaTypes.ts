export type SocialMediaProps = {
    data: socialItem[];
}

export type socialItem = {
    id: number;
    platform: string;
    icon: JSX.Element;
    url: string;
    label: string;
};