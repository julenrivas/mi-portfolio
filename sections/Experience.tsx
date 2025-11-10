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
    const experiences = source.length
        ? source
        : [
            {
                company: "Twitch",
                role: "Creador de Contenido",
                start: "Actualmente",
                description:
                    "Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.",
                highlights: ["Saber más →"],
            },
            {
                company: "Adevinta Spain",
                role: "Principal Frontend Engineer",
                start: "Septiembre 2022",
                end: "",
                description:
                    "Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora del 30% en la entrega de software.",
            },
        ];

    const first = experiences[0];
    const rest = experiences.slice(1);

    return (
        <Section id="experience" className="pt-8">
            {/* Cabecera con icono */}
            <header className="mb-8 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800/60 text-yellow-400 ring-1 ring-zinc-700">
                    <BriefcaseIcon className="h-4 w-4" />
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Experiencia laboral</h2>
            </header>

            <div className="grid gap-12 md:grid-cols-2">
                {/* Línea de tiempo a la izquierda */}
                <ol className="relative border-l border-zinc-700/60 pl-6">
                    {[first, ...rest].map((e, idx) => (
                        <li key={`${e.company}-${e.role}-${idx}`} className="relative mb-10 last:mb-0">
                            {/* Punto */}
                            <span className="absolute -left-[9px] top-1 inline-block h-2.5 w-2.5 rounded-full bg-yellow-400" />

                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-semibold text-yellow-400">{e.role}</p>
                                <p className="text-sm font-medium text-zinc-100">{e.company}</p>
                                <p className="text-xs text-zinc-400">{e.start}{e.end ? ` — ${e.end}` : ""}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                {/* Descripción a la derecha */}
                <div>
                    <p className="text-sm leading-6 text-zinc-300">{first.description}</p>
                    <div className="mt-4">
                        <a href="#projects" className="text-sm font-medium text-yellow-400 hover:underline underline-offset-4">
                            Saber más →
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
}
