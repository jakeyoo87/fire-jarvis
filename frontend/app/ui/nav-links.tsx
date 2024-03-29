"use client";

import {
    ArrowTrendingUpIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: "Portfolio", href: "/portfolio", icon: ChartPieIcon },
    {
        name: "Quote",
        href: "/quote",
        icon: ArrowTrendingUpIcon,
    },
    { name: "News", href: "/new", icon: UserGroupIcon },
    { name: "Setting", href: "/setting", icon: Cog6ToothIcon },
];

export default function NavLinks() {
    const pathname = usePathname();
    // console.log(pathname);
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                                "bg-sky-100 text-blue-600":
                                    pathname === link.href,
                            }
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
