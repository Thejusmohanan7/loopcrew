"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
    { href: "/#how-it-works", label: "How it works" },
    { href: "/about", label: "About" },
];

export function Navbar() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <header className="sticky top-0 z-50 border-b border-line/20 bg-chalk/95 backdrop-blur">
            <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMenu}
                    aria-label="Loopcrew home"
                    className="flex items-center"
                >
                    <Image
                        src="/loop.png"
                        alt="Loopcrew"
                        width={24}
                        height={24}
                        priority
                    />
                </Link>

                {/* Desktop navigation */}
                <nav
                    className="hidden items-center gap-8 md:flex"
                    aria-label="Main navigation"
                >
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="font-body text-sm text-ink/70 transition-colors hover:text-ink"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop actions */}
                <div className="hidden items-center gap-3 md:flex">
                    <Link
                        href="/login"
                        className="font-body text-sm font-medium text-ink/80 transition-colors hover:text-ink"
                    >
                        Log in
                    </Link>

                    <Link
                        href="/signup"
                        className="rounded-sm bg-ember px-4 py-2 font-body text-sm font-medium text-chalk transition-colors hover:bg-ember-dim"
                    >
                        Sign up
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    className="flex flex-col gap-1.5 p-2 md:hidden"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="mobile-navigation"
                >
                    <span
                        className={`h-0.5 w-6 bg-ink transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""
                            }`}
                    />

                    <span
                        className={`h-0.5 w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"
                            }`}
                    />

                    <span
                        className={`h-0.5 w-6 bg-ink transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile navigation */}
            {open && (
                <div
                    id="mobile-navigation"
                    className="border-t border-line/20 px-6 py-4 md:hidden"
                >
                    <nav
                        className="flex flex-col gap-4"
                        aria-label="Mobile navigation"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="font-body text-sm text-ink/70 transition-colors hover:text-ink"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="mt-2 flex flex-col gap-3 border-t border-line/20 pt-4">
                            <Link
                                href="/login"
                                onClick={closeMenu}
                                className="font-body text-sm font-medium text-ink/80 transition-colors hover:text-ink"
                            >
                                Log in
                            </Link>

                            <Link
                                href="/signup"
                                onClick={closeMenu}
                                className="w-fit rounded-sm bg-ember px-4 py-2 font-body text-sm font-medium text-chalk transition-colors hover:bg-ember-dim"
                            >
                                Sign up
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}