import Image from "next/image";
import type { Project } from "@/types/portfolio";
import type { ReactElement } from "react";

// GitHub mark
function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
            <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.43c.58.11.79-.25.79-.56v-2.16c-3.2.7-3.87-1.37-3.87-1.37-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.27 3.41.97.11-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.47.12-3.07 0 0 .98-.31 3.2 1.19a11.13 11.13 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.64 1.6.24 2.78.12 3.07.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.08.79 2.19v3.24c0 .31.2.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
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
        <article className="group relative rounded-2xl border border-zinc-800 p-5 transition-all duration-300 hover:border-yellow-400/50 hover:shadow-[0_0_0_1px_rgba(250,204,21,0.3)] overflow-hidden bg-zinc-900/40">
            <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-10">
                {/* Columna imagen */}
                <div className="relative w-full md:w-[500px] overflow-hidden rounded-xl md:shrink-0 h-56 md:h-64">
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
                                    <li key={t}>
                                        <TechBadge tech={t} />
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
                                    <GitHubIcon className="h-4 w-4" />
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

// Badge con icono y colores por tecnología
function TechBadge({ tech }: { tech: string }) {
    const { label, Icon, classes } = getTechMeta(tech);
    return (
        <span className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ${classes}`}>
            <Icon className="h-3.5 w-3.5" />
            {label}
        </span>
    );
}

function NextIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10a9.96 9.96 0 0 0 6.54-2.4l-6.13-8.95v6.85h-1.2V7.6h1.22l6.92 10.1A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10Z" />
        </svg>
    );
}

function TailwindIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M12.001 6.001c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.56.9 2.27 1.62 1.17 1.19 2.53 2.58 5.53 2.58 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.56-.9-2.27-1.62-1.17-1.19-2.53-2.58-5.53-2.58Zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.56.9 2.27 1.62 1.17 1.19 2.53 2.58 5.53 2.58 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.56-.9-2.27-1.62-1.17-1.19-2.53-2.58-5.53-2.58Z" />
        </svg>
    );
}

function ReactIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" {...props}>
            <circle cx="12" cy="12" r="1.6" fill="currentColor" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-60 12 12)" />
        </svg>
    );
}

type IconComponent = (props: React.SVGProps<SVGSVGElement>) => ReactElement;

function getTechMeta(tech: string): { label: string; Icon: IconComponent; classes: string } {
    switch (tech.toLowerCase()) {
        case "next.js":
        case "nextjs":
            return {
                label: "Next.js",
                Icon: NextIcon,
                classes: "bg-black text-white ring-white/10",
            };
        case "tailwind":
        case "tailwindcss":
        case "tailwind css":
            return {
                label: "Tailwind CSS",
                Icon: TailwindIcon,
                classes: "bg-cyan-500/10 text-cyan-300 ring-cyan-500/30",
            };
        case "react":
            return {
                label: "React",
                Icon: ReactIcon,
                classes: "bg-cyan-400/10 text-cyan-200 ring-cyan-400/30",
            };
        default:
            return {
                label: tech,
                Icon: (props: React.SVGProps<SVGSVGElement>) => (
                    <svg viewBox="0 0 4 4" fill="currentColor" aria-hidden="true" {...props}>
                        <circle cx="2" cy="2" r="2" />
                    </svg>
                ),
                classes: "bg-zinc-800/70 text-zinc-200 ring-zinc-700",
            };
    }
}
