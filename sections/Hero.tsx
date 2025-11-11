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

// Icono de LinkedIn desde public/linkedin_logo.svg
function LinkedInIcon({ className = "" }: { className?: string }) {
    return (
        <Image src="/linkedin_logo.svg" alt="LinkedIn" width={16} height={16} className={className} />
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
                                quality={90}
                                priority
                            />
                        </div>
                        {/* Badge de disponibilidad (comentado para posible activación futura)
                        <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1 text-xs font-medium text-yellow-400">
                            Disponible para trabajar
                        </span> */}
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                        Hey, soy Julen
                    </h1>
                    <p className="max-w-2xl text-lg text-white">
                        Un profesional en el campo de la informática con experiencia en <span className="font-semibold text-accent">sistemas distribuidos y control de procesos Batch</span>. Actualmente, me desempeño como Problems Management Analyst en Banco Santander Digital Services, asegurando el correcto funcionamiento de los procesos Batch a través de las herramientas de <span className="font-semibold text-accent">Control-M, AS400, BPM, iSeries</span>, entre otras.

                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="mailto:julenrivasplaza@gmail.com"
                            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm leading-none font-medium text-white ring-1 ring-inset ring-zinc-600/60 hover:bg-white hover:text-zinc-900 transition-colors"
                        >
                            <MailIcon className="h-4 w-4" />
                            Contáctame
                        </a>
                        <a
                            href="https://www.linkedin.com/in/julen-rivas-plaza/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm leading-none font-medium text-white ring-1 ring-inset ring-zinc-600/60 hover:bg-white hover:text-zinc-900 transition-colors"
                        >
                            <LinkedInIcon className="h-4 w-4" />
                            LinkedIn
                        </a>
                    </div>
                    {/* <SocialLinks className="mt-2" /> */}
                </div>
            </Container>
        </div>
    );
}
