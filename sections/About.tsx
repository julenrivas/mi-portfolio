import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-12 sm:py-16">
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
                <header className="mb-10 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800/60 text-yellow-400 ring-1 ring-zinc-700">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="h-4 w-4">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z" />
                            <path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" />
                        </svg>
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-100">Sobre mí</h2>
                </header>
                <div className="grid gap-10 md:grid-cols-3 md:items-start">
                    {/* Texto bio */}
                    <div className="md:col-span-2 space-y-5 text-sm leading-relaxed text-white">
                        <p>
                            Me llamo Julen y desde muy joven me apasiona la tecnología. Empecé curioseando cómo funcionaban los
                            sistemas y hoy aplico ese conocimiento para asegurar entornos estables y escalables.
                        </p>
                        <p>
                            Actualmente trabajo como <strong className="text-yellow-400 font-medium">Problems Management Analyst</strong> asegurando el correcto
                            funcionamiento de los procesos Batch en plataformas críticas usando herramientas como <strong className="text-accent">Control-M, AS400, BPM e iSeries</strong>.
                        </p>
                        <p>
                            Me motiva seguir mejorando la observabilidad, automatización y calidad de los procesos para reducir incidencias y
                            acelerar la entrega de valor. Disfruto aprendiendo y compartiendo conocimiento con el equipo.
                        </p>
                        <p>
                            Fuera del trabajo continúo formándome en arquitectura de sistemas distribuidos y buenas prácticas de desarrollo.
                        </p>
                    </div>
                    {/* Foto */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-xl overflow-hidden ring-1 ring-zinc-700 bg-zinc-800/40 shadow-lg shadow-black/30 rotate-1">
                            <Image
                                src="/avatar.png"
                                alt="Foto de perfil de Julen"
                                fill
                                sizes="(max-width: 2920px) 2920px, (max-width: 2920px) 2920x, 2920px"
                                quality={92}
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
