import { Section } from "@/components/ui/Section";

export function Contact() {
    return (
        <Section id="contact" title="Contacto" eyebrow="Hablemos">
            <p className="text-sm text-zinc-700 dark:text-zinc-300 max-w-prose">
                ¿Tienes una idea o proyecto? Puedes escribirme a{' '}
                <a href="mailto:tu-email@ejemplo.com" className="underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-zinc-500 dark:hover:decoration-zinc-500">
                    tu-email@ejemplo.com
                </a>{' '}o por cualquiera de mis redes sociales.
            </p>
        </Section>
    );
}
