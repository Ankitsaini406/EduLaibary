"use client";

import { useState } from "react";
import { Close, Menu } from "@mui/icons-material";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const items = [
        { title: "Home", link: "/" },
        { title: "About Us", link: "#" },
        { title: "Features", link: "#" },
        { title: "Pricing", link: "#" },
        { title: "Testimonials", link: "#" },
        { title: "Download", link: "#" },
        { title: "Contact", link: "#" }
    ];

    return (
        <header className="fixed w-full top-0 z-50 p-5 shadow-lg bg-white/50 backdrop-blur-lg">
            <nav className="lg:container flex justify-between items-center mx-auto">
                <h1 className="text-2xl bg-gradient-to-b from-red-400 to-yellow-400 bg-clip-text text-transparent">
                    EduLibrary
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden ipad:flex gap-5">
                    {items.map((item) => (
                        <li key={item.title} className="cursor-pointer text-lg hover:text-amber-500 duration-300">
                            {item.title}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="ipad:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
                </button>
            </nav>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="ipad:hidden px-5 pb-4 h-screen">
                    <ul className="flex flex-col gap-3">
                        {items.map((item) => (
                            <li
                                key={item.title}
                                className="cursor-pointer text-base hover:text-amber-500 duration-300 pb-2"
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
