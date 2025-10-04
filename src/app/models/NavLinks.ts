export enum NavLinks {
    HOME = "HOME",
    ABOUT = "ABOUT",
    SHEET_MUSIC = "SHEET_MUSIC",
    GEAR = "GEAR",
    SOCIALS = "SOCIALS",
    CONTACT = "CONTACT",
}

interface Props {
    title: string;
    href: string;
}

export const NavLinksInfo: Record<NavLinks, Props> = {
    [NavLinks.HOME]: {
        title: "Home",
        href: "/",
    },
    [NavLinks.ABOUT]: {
        title: "About",
        href: "/about",
    },
    [NavLinks.SHEET_MUSIC]: {
        title: "Sheet Music",
        href: "/sheet-music",
    },
    [NavLinks.GEAR]: {
        title: "Gear",
        href: "/gear",
    },
    [NavLinks.SOCIALS]: {
        title: "Socials",
        href: "/socials",
    },
    [NavLinks.CONTACT]: {
        title: "Contact",
        href: "/contact",
    },
};