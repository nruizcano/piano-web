export enum Socials {
    YOUTUBE = "YOUTUBE",
    INSTAGRAM = "INSTAGRAM"
}

type Props = {
    name: string;
    url: string;
    icon: string;
    description?: string;
}

export const SocialsInfo: Record<Socials, Props> = {
    [Socials.YOUTUBE]: {
        name: "YouTube",
        url: "https://www.youtube.com/@nerearuizcano",
        icon: "/socials/youtube.svg",
        description: "My channel for all things music — performances, covers, updates, and more.",
    },
    [Socials.INSTAGRAM]: {
        name: "Instagram",
        url: "https://www.instagram.com/nerea.rc88",
        icon: "/socials/instagram.svg",
        description: "A more personal side of me, featuring snippets of my life and, mostly, my two Malinois — Nala and Liam are the main characters 😅",
    }
};