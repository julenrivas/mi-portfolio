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
                        className="text-white/70 hover:text-white text-sm"
                    >
                        {s.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}
