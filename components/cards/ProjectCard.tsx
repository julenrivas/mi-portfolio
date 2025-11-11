import Image from "next/image";
import type { Project } from "@/types/portfolio";

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" {...props}>
            <path d="M8 9L4 12l4 3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 9l4 3-4 3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 5L10 19" strokeLinecap="round" />
        </svg>
    );
}

function ExternalIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" {...props}>
            <path d="M14 5h5v5" strokeLinecap="round" />
            <path d="M10 14L19 5" strokeLinecap="round" />
            <path d="M19 14v5H5V5h5" strokeLinecap="round" />
        </svg>
    );
}

export function ProjectCard({ project }: { project: Project }) {
    const { title, description, tags, repoUrl, demoUrl, image } = project;
    return (
        <article className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/50 hover:shadow-[0_0_0_1px_rgba(250,204,21,0.3)] overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-10">
                {/* Columna imagen */}
                <div className="relative w-full md:w-[500px] overflow-hidden rounded-xl ring-1 ring-zinc-800 bg-zinc-800 md:shrink-0 h-56 md:h-64">
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, 320px"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                            quality={85}
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs text-zinc-500">Sin imagen</div>
                    )}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-15 bg-linear-to-tr from-yellow-400/10 via-transparent to-purple-500/10" />
                </div>
                {/* Columna contenido */}
                <div className="flex flex-1 flex-col py-1 md:py-2">
                    <div className="flex flex-col gap-3">
                        <h4 className="text-xl md:text-2xl font-semibold tracking-tight text-zinc-100">{title}</h4>
                        {tags && tags.length > 0 && (
                            <ul className="flex flex-wrap gap-2">
                                {tags.map((t) => (
                                    <li key={t} className="inline-flex items-center rounded-full bg-zinc-800/70 px-2.5 py-1 text-xs font-medium text-zinc-200 ring-1 ring-zinc-700">
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {description && (
                            <p className="text-sm md:text-base leading-relaxed text-zinc-300 max-w-prose">
                                {description}
                            </p>
                        )}
                    </div>
                    {(repoUrl || demoUrl) && (
                        <div className="mt-auto pt-5 flex flex-wrap gap-3 text-sm">
                            {repoUrl && (
                                <a
                                    href={repoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 ring-1 ring-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-white hover:text-zinc-900 transition-colors"
                                >
                                    <CodeIcon className="h-4 w-4" />
                                    Code
                                </a>
                            )}
                            {demoUrl && (
                                <a
                                    href={demoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl px-3 py-2 ring-1 ring-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-white hover:text-zinc-900 transition-colors"
                                >
                                    <ExternalIcon className="h-4 w-4" />
                                    Preview
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}
