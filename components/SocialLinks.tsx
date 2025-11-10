import { socialLinks } from "@/lib/data";

export function SocialLinks({ className = "" }: { className?: string }) {
    return (
        <ul className={`flex items-center gap-4 ${className}`}>
            {socialLinks.map((s) => (
                <li key={s.name}>
                    <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 text-sm"
                    >
                        {s.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}
