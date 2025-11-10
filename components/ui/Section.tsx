import { ReactNode } from "react";
import { Container } from "./Container";

type Props = {
    id?: string;
    title?: string;
    eyebrow?: string;
    children: ReactNode;
    className?: string;
};

export function Section({ id, title, eyebrow, children, className = "" }: Props) {
    return (
        <section id={id} className={`scroll-mt-20 py-12 sm:py-16 ${className}`}>
            <Container>
                {(title || eyebrow) && (
                    <header className="mb-8">
                        {eyebrow && (
                            <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold mb-2">
                                {eyebrow}
                            </p>
                        )}
                        {title && (
                            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                                {title}
                            </h2>
                        )}
                    </header>
                )}
                {children}
            </Container>
        </section>
    );
}
