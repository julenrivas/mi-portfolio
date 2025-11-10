"use client";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "../ui/ThemeToggle";

const links = [
    { href: "#experience", label: "Experiencia" },
    { href: "#projects", label: "Proyectos" },
    { href: "#about", label: "Sobre mí" },
    { href: "#contact", label: "Contacto" },
];

export function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/70 backdrop-blur dark:border-zinc-800 dark:bg-black/40">
            <Container className="relative flex h-14 items-center justify-center">
                {/* Nav centrado */}
                <nav className="flex items-center gap-6 text-sm">
                    {links.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            scroll
                            className="text-zinc-500 transition-colors hover:text-yellow-400 dark:text-zinc-400 dark:hover:text-yellow-400"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
                {/* Toggle a la derecha */}
                <div className="absolute right-0">
                    <ThemeToggle />
                </div>
            </Container>
        </header>
    );
}
