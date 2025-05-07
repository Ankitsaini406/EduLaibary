"use client";

import { useState } from "react";
import { Close, Menu } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const items = [
        { title: "Home", link: "/" },
        { title: "Features", link: "#features" },
        { title: "Pricing", link: "#pricing" },
        // { title: "Testimonials", link: "#" },
        { title: "Download", link: "#download" },
        { title: "Contact", link: "#contact" },
        { title: "About Us", link: "#about-us" },
    ];

    return (
        <header className="fixed w-full top-0 z-50 py-3 shadow-lg bg-accent text-white backdrop-blur-lg">
            <nav className="lg:container flex justify-between items-center mx-auto">
                <div className="relative h-14 aspect-square bg-white">
                    <Image src='/hero.png' alt="Laibary Image" fill />
                </div>

                {/* Desktop Menu */}
                <div className="hidden ipad:flex gap-5">
                    {items.map((item) => (
                        <Link key={item.title} href={item.link} className="cursor-pointer text-lg hover:text-black duration-300">
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="ipad:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
                </button>
            </nav>

            {/* Mobile Dropdown Menu with Framer Motion */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="ipad:hidden px-5 pb-4 pt-2"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "100vh", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="flex flex-col gap-4 mt-5">
                            {items.map((item) => (
                                <Link
                                key={item.title}
                                href={item.link}
                                    className="cursor-pointer text-base hover:text-amber-500 duration-300 pb-2 border-b"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
