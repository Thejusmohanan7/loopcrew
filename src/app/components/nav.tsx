
"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["How its works", "About us", "Contact"];

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="relative flex items-center justify-between px-6 py-3 sm:px-8 md:px-10">
            {/* Logo */}
            <div className="transition-transform duration-300 hover:scale-[1.03]">
                <Image
                    src="/loop.png"
                    alt="Logo"
                    width={150}
                    height={50}
                    priority
                />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden gap-12 md:flex">
                {links.map((link) => (
                    <h1
                        key={link}
                        className="cursor-pointer text-black transition-all duration-200 hover:-translate-y-0.5 hover:underline hover:underline-offset-4"
                    >
                        {link}
                    </h1>
                ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden gap-5 md:flex">
                <button className="cursor-pointer rounded-2xl px-3 py-1 text-black transition-all duration-200 hover:scale-105 hover:border hover:border-zinc-200">
                    Log In
                </button>

                <button className="cursor-pointer rounded-2xl px-3 py-1 text-black transition-all duration-200 hover:scale-105 hover:border hover:border-zinc-200">
                    Sign Up
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="text-black transition-transform duration-200 active:scale-90 md:hidden"
                aria-label="Toggle menu"
                aria-expanded={open}
            >
                <span
                    className={`block transition-all duration-300 ${open ? "rotate-90" : "rotate-0"
                        }`}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </span>
            </button>

            {/* Mobile Menu */}
            <div
                className={`absolute left-0 top-full z-50 w-full overflow-hidden border-t border-zinc-100 bg-white transition-all duration-300 ease-in-out md:hidden ${open
                        ? "max-h-96 translate-y-0 opacity-100"
                        : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
                    }`}
            >
                <div className="flex flex-col gap-5 px-6 py-6 sm:px-8">
                    {/* Mobile Links */}
                    {links.map((link, index) => (
                        <div
                            key={link}
                            onClick={() => setOpen(false)}
                            className="cursor-pointer text-black transition-all duration-300 hover:translate-x-1 hover:underline hover:underline-offset-4"
                            style={{
                                transitionDelay: open
                                    ? `${index * 70}ms`
                                    : "0ms",
                            }}
                        >
                            {link}
                        </div>
                    ))}

                    {/* Mobile Buttons */}
                    <div
                        className="flex gap-5 pt-2 transition-all duration-300"
                        style={{
                            transitionDelay: open ? "210ms" : "0ms",
                        }}
                    >
                        <button className="cursor-pointer rounded-2xl px-3 py-1 text-black transition-all duration-200 hover:scale-105 hover:border hover:border-zinc-200">
                            Log In
                        </button>

                        <button className="cursor-pointer rounded-2xl px-3 py-1 text-black transition-all duration-200 hover:scale-105 hover:border hover:border-zinc-200">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

