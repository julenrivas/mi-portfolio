import { Section } from "@/components/ui/Section";

export function About() {
    return (
        <Section id="about" title="Sobre mí" eyebrow="Perfil">
            <div className="prose prose-zinc dark:prose-invert max-w-none">
                <p>
                    Soy un desarrollador frontend con pasión por construir productos útiles y con atención al detalle. Disfruto trabajar con
                    Next.js, React y TailwindCSS.
                </p>
            </div>
        </Section>
    );
}
