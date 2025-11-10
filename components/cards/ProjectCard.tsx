import type { Project } from "@/types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
    const { title, description, tags, repoUrl, demoUrl } = project;
    return (
        <article className="group rounded-lg border border-zinc-200/60 dark:border-zinc-800 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
            <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {title}
            </h4>
            {description && (
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
            )}
            {tags && tags.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-2">
                    {tags.map((t) => (
                        <li key={t} className="text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-zinc-700 dark:text-zinc-300">
                            {t}
                        </li>
                    ))}
                </ul>
            )}
            {(repoUrl || demoUrl) && (
                <div className="mt-4 flex gap-3 text-sm">
                    {demoUrl && (
                        <a className="text-zinc-900 dark:text-zinc-100 underline-offset-4 hover:underline" href={demoUrl} target="_blank" rel="noreferrer">
                            Demo
                        </a>
                    )}
                    {repoUrl && (
                        <a className="text-zinc-900 dark:text-zinc-100 underline-offset-4 hover:underline" href={repoUrl} target="_blank" rel="noreferrer">
                            Código
                        </a>
                    )}
                </div>
            )}
        </article>
    );
}
