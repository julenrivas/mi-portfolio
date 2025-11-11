import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/cards/ProjectCard";

// Icono de proyectos usando el SVG proporcionado (adaptado a currentColor)
function ProjectsIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
            <path d="M7 8L3 12L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 8L21 12L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 4L9.8589 19.4548" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export function Projects() {
    return (
        <section id="projects" className="py-12 sm:py-16">
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
                {/* Header con icono como experiencia */}
                <header className="mb-8 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800/60 text-yellow-400 ring-1 ring-zinc-700">
                        <ProjectsIcon className="h-4 w-4" />
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Proyectos</h2>
                </header>
                {projects.length === 0 ? (
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Aún no hay proyectos cargados.</p>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((p) => (
                            <ProjectCard key={p.slug} project={p} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
