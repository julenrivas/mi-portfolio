import type { Experience, Project, SocialLink } from "@/types/portfolio";

// export const socialLinks: SocialLink[] = [
//     { name: "GitHub", url: "https://github.com/tu-usuario" },
//     { name: "LinkedIn", url: "https://www.linkedin.com/in/tu-usuario" },
//     { name: "X", url: "https://x.com/tu-usuario" },
// ];

// Export vacío por defecto para evitar errores de compilación si el componente SocialLinks está presente
export const socialLinks: SocialLink[] = [];

export const projects: Project[] = [
    {
        slug: "mi-portfolio",
        title: "Portfolio personal",
        description:
            "Portafolio personal desarrollado con Next.js, React y Tailwind CSS. SPA\u00A0responsive, microinteracciones y animaciones sutiles. Está optimizado para SEO, estructurado con componentes reutilizables y desplegado en Vercel.",

        tags: ["Next.js", "Tailwind CSS", "React"],
        repoUrl: "https://github.com/julenrivas/mi-portfolio",
        demoUrl: "https://julenrp.vercel.app/",
        image: "/screen_portfolio.png",
    },
];

export const experiences: Experience[] = [
    // {
    //   company: "Empresa S.A.",
    //   role: "Desarrollador Frontend",
    //   start: "2024-01",
    //   end: "2025-06",
    //   location: "Remoto",
    //   description: "Trabajé en aplicaciones Next.js de alto rendimiento.",
    //   highlights: [
    //     "Mejora del rendimiento en un 30%",
    //     "Implementación de diseño accesible",
    //   ],
    //   logo: "/logos/empresa.png",
    // },
];
