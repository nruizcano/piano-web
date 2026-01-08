export enum Socials {
    YOUTUBE = "YOUTUBE",
    INSTAGRAM = "INSTAGRAM",
    GOOGLE_DRIVE = "GOOGLE_DRIVE",
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
    },
    [Socials.GOOGLE_DRIVE]: {
        name: "Google Drive",
        url: "https://drive.google.com/drive/folders/1QtDkUT90EoXOAhGXZli3yW7wP0K8IqGE",
        icon: "/socials/googledrive.svg",
        description: "A shared folder where I also upload sheet music for my own arrangements."
    },
};