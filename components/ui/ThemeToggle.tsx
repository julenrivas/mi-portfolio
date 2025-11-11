"use client";
import { useEffect, useState } from "react";

// Implementación sin setState sincrónico en efecto principal: sólo inicializamos tema desde localStorage
export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [hydrated, setHydrated] = useState(false);

    // Hidratar y aplicar tema almacenado solo una vez
    // Diferimos la inicialización de tema a una microtarea para evitar el warning de setState síncrono
    useEffect(() => {
        queueMicrotask(() => {
            const stored = localStorage.getItem("theme") as "light" | "dark" | null;
            const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
            const initial = stored ?? (prefersDark ? "dark" : "light");
            setTheme(initial);
            setHydrated(true);
        });
    }, []);

    // Efecto para sincronizar con DOM cuando cambia theme
    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            // Fuerza eliminación de la clase por si quedó en algún ancestor
            root.classList.remove("dark");
        }
        root.dataset.theme = theme; // útil para depuración / estilos avanzados
        localStorage.setItem("theme", theme);
    }, [theme]);

    if (!hydrated) return null; // evita FOUC

    const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label="Cambiar tema"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-300 px-3 py-1.5 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
        >
            <span className="hidden sm:inline">Tema</span>
            <span>{theme === "dark" ? "🌙" : "☀️"}</span>
        </button>
    );
}
