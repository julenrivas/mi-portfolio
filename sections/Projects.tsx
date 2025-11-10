import { Section } from "@/components/ui/Section";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/cards/ProjectCard";

export function Projects() {
    return (
        <Section id="projects" title="Proyectos" eyebrow="Trabajo" className="bg-white dark:bg-black">
            {projects.length === 0 ? (
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Aún no hay proyectos cargados.</p>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p) => (
                        <ProjectCard key={p.slug} project={p} />
                    ))}
                </div>
            )}
        </Section>
    );
}
