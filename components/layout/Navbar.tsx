"use client";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
// Theme toggle desactivado temporalmente

const links = [
    { href: "#experience", label: "Experiencia" },
    { href: "#projects", label: "Proyectos" },
    { href: "#about", label: "Sobre mí" },
    { href: "mailto:julenrivasplaza@gmail.com", label: "Contacto" },
];

export function Navbar() {
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (!href.startsWith("#")) return;
        e.preventDefault();
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <header className="sticky top-0 z-40 bg-transparent">
            <Container className="relative flex h-14 items-center justify-center">
                {/* Nav centrado */}
                <nav className="flex items-center gap-6 text-sm">
                    {links.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            scroll
                            onClick={(e) => handleAnchorClick(e, href)}
                            className="text-zinc-500 transition-colors hover:text-yellow-400 dark:text-zinc-400 dark:hover:text-yellow-400"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
                {/* Toggle de tema oculto por ahora */}
            </Container>
        </header>
    );
}
