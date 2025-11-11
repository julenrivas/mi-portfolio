import { Section } from "@/components/ui/Section";
import { experiences as source } from "@/lib/data";

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" {...props}>
            <path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M3 12h18" />
        </svg>
    );
}

export function Experience() {
    const experiences = (source.length
        ? source
        : [
            {
                company: "Twitch",
                role: "Creador de Contenido",
                start: "Actualmente",
                description:
                    "Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.",
            },
            {
                company: "Adevinta Spain",
                role: "Principal Frontend Engineer",
                start: "Septiembre 2022",
                description:
                    "Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.",
            },
        ]) as typeof source;

    return (
        <Section id="experience" className="pt-8">
            {/* Título con icono */}
            <header className="mb-10 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800/60 text-yellow-400 ring-1 ring-zinc-700">
                    <BriefcaseIcon className="h-4 w-4" />
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Experiencia laboral</h2>
            </header>

            {/* Contenedor de la línea vertical continua */}
            <div className="relative">
                <div className="pointer-events-none absolute left-[11px] top-0 h-full w-px bg-zinc-700/60 md:left-[13px]" />

                <ul className="space-y-12">
                    {experiences.map((e, idx) => (
                        <li key={`${e.company}-${e.role}-${idx}`} className="grid gap-10 md:grid-cols-2">
                            {/* Columna izquierda con timeline */}
                            <div className="relative pl-8 md:pl-10">
                                {/* Punto */}
                                <span className="absolute left-0 top-2 inline-block h-3 w-3 -translate-x-1/2 rounded-full bg-yellow-400" />

                                <p className="text-base font-semibold text-yellow-400">{e.role}</p>
                                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{e.company}</p>
                                {e.start && (
                                    <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{e.start}{e.end ? ` — ${e.end}` : ""}</p>
                                )}
                            </div>

                            {/* Columna derecha con descripción */}
                            <div className="text-zinc-700 dark:text-zinc-300 leading-7">
                                <p>{e.description}</p>
                                {idx === 0 && (
                                    <div className="mt-3">
                                        <a href="#projects" className="text-sm font-medium text-yellow-400 hover:underline underline-offset-4">
                                            Saber más →
                                        </a>
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    );
}
