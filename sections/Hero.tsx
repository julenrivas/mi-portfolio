import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/SocialLinks";
import Image from "next/image";

export function Hero() {
    return (
        <div id="home" className="py-16 sm:py-20">
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
                        <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1 text-xs font-medium text-yellow-400">
                            Disponible para trabajar
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-100">
                        Hey, soy Tu Nombre
                    </h1>
                    <p className="max-w-2xl text-lg text-zinc-300">
                        +15 años de experiencia. <span className="font-semibold text-accent">Ingeniero de Software y Creador de Contenido sobre Programación</span> especializado en el desarrollo de aplicaciones web únicas.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#contact" className="inline-flex items-center rounded-md border border-zinc-700 bg-zinc-800/60 px-4 py-2 text-sm font-medium text-zinc-200 hover:text-yellow-400 transition-colors">
                            Contáctame
                        </a>
                        <a href="https://www.linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 hover:text-yellow-400 transition-colors">
                            LinkedIn
                        </a>
                    </div>
                    <SocialLinks className="mt-2" />
                </div>
            </Container>
        </div>
    );
}
