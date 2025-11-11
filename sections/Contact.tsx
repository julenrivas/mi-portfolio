import { Section } from "@/components/ui/Section";

export function Contact() {
    return (
        <Section id="contact" title="Contacto" eyebrow="Hablemos">
            <p className="text-sm text-white max-w-prose">
                ¿Tienes una idea o proyecto? Puedes escribirme a{' '}
                <a href="mailto:tu-email@ejemplo.com" className="underline underline-offset-4 decoration-white/70 hover:decoration-white">
                    tu-email@ejemplo.com
                </a>{' '}o por cualquiera de mis redes sociales.
            </p>
        </Section>
    );
}
