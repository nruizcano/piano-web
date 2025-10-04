export enum NavLinks {
    HOME = "HOME",
    ABOUT = "ABOUT",
    SHEET_MUSIC = "SHEET_MUSIC",
    EQUIPMENT = "EQUIPMENT",
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
    [NavLinks.EQUIPMENT]: {
        title: "Equipment",
        href: "/equipment",
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