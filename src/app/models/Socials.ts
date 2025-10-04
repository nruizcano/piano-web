export enum Socials {
    YOUTUBE = "YOUTUBE",
    INSTAGRAM = "INSTAGRAM",
    MUSESCORE = "MUSESCORE",
    GOOGLE_DRIVE = "GOOGLE_DRIVE",
}

interface Props {
    title: string;
    url: string;
    icon: string;
}

export const SocialsInfo: Record<Socials, Props> = {
    [Socials.YOUTUBE]: {
        title: "YouTube",
        url: "https://www.youtube.com/@nerearuizcano",
        icon: "/socials/youtube.svg",
    },
    [Socials.INSTAGRAM]: {
        title: "Instagram",
        url: "https://www.instagram.com/nerea.rc88",
        icon: "/socials/instagram.svg",
    },
    [Socials.MUSESCORE]: {
        title: "MuseScore",
        url: "https://musescore.com/user/63972640",
        icon: "/socials/musescore.svg",
    },
    [Socials.GOOGLE_DRIVE]: {
        title: "Google Drive",
        url: "https://drive.google.com/drive/folders/1QtDkUT90EoXOAhGXZli3yW7wP0K8IqGE",
        icon: "/socials/googledrive.svg",
    },
};