import { Container } from "@/components/ui/Container";
// import { SocialLinks } from "@/components/SocialLinks"; // Social links ocultos por ahora
import Image from "next/image";

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" {...props}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
        </svg>
    );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.65 4.78 6.1V24h-4v-6.8c0-1.62-.03-3.7-2.26-3.7-2.26 0-2.61 1.77-2.61 3.59V24h-4V8.5z" />
        </svg>
    );
}

export function Hero() {
    return (
        <div id="home" className="py-8 sm:py-12">
            <Container>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-zinc-700 bg-zinc-800">
                            <Image
                                src="/avatar.png"
                                alt="Foto de perfil"
                                fill
                                className="object-cover"
                                sizes="80px"
                                priority
                            />
                        </div>
                        {/* Badge de disponibilidad (comentado para posible activación futura)
                        <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1 text-xs font-medium text-yellow-400">
                            Disponible para trabajar
                        </span> */}
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100">
                        Hey, soy Julen
                    </h1>
                    <p className="max-w-2xl text-lg text-zinc-300">
                        Un profesional en el campo de la informática con experiencia en <span className="font-semibold text-accent">sistemas distribuidos y control de procesos Batch</span>. Actualmente, me desempeño como Problems Management Analyst en Banco Santander Digital Services, asegurando el correcto funcionamiento de los procesos Batch a través de las herramientas de <span className="font-semibold text-accent">Control-M, AS400, BPM, iSeries</span>, entre otras.

                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="mailto:julenrivasplaza@gmail.com"
                            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-zinc-200 ring-1 ring-inset ring-zinc-600/60 hover:bg-white hover:text-zinc-900 hover:shadow-sm transition-colors"
                        >
                            <MailIcon className="h-4 w-4" />
                            Contáctame
                        </a>
                        <a
                            href="https://www.linkedin.com/in/julen-rivas-plaza/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-zinc-200 ring-1 ring-inset ring-zinc-600/60 hover:bg-white hover:text-zinc-900 hover:shadow-sm transition-colors"
                        >
                            <LinkedInIcon className="h-4 w-4 translate-y-[0.5px]" />
                            LinkedIn
                        </a>
                    </div>
                    {/* <SocialLinks className="mt-2" /> */}
                </div>
            </Container>
        </div>
    );
}
