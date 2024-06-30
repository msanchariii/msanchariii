"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const pages = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
];

const NavLink = ({ name, path, currentPath }) => {
    return (
        <Link
            href={path}
            className={`font-semibold text-xl py-2 px-4 h-11 rounded-full ${
                currentPath === path
                    ? "bg-lime text-gray"
                    : "text-lime hover:bg-lime hover:text-gray transition duration-300"
            }`}
        >
            {name}
        </Link>
    );
};

function Navbar() {
    const pathName = usePathname();
    console.log("Path name", pathName);
    return (
        <nav className="w-full bg-gray h-16 p-2 flex flex-col md:flex-row items-center">
            <div className="lg:w-1/5 text-2xl px-4 font-bold">sanchari</div>
            <div className="w-full lg:w-3/5 flex justify-center gap-x-12">
                {pages.map((link) => {
                    return (
                        <NavLink
                            key={link.name}
                            id={link.name}
                            name={link.name}
                            path={link.path}
                            currentPath={pathName}
                        />
                    );
                })}
            </div>
            <div className="w-1/5 text-xl px-4 text-right">Connect</div>
        </nav>
    );
}

export default Navbar;
