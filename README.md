<div align="center">

# Portafolio de Julen Rivas

Sitio personal construido con Next.js (App Router), React y Tailwind CSS. Diseño oscuro, navegación por secciones y detalles visuales como timeline de experiencia, iconografía personalizada y tarjetas de proyectos en formato horizontal.

[Ver online →](https://julenrp.vercel.app/)

</div>

## ✨ Características

- Single‑page con anclas: Home, Experiencia, Proyectos y Sobre mí
- Tema oscuro por defecto con tipografía Onest
- Timeline de experiencia con línea continua y marcadores
- Iconos SVG personalizados (header de secciones, badges de tecnologías)
- Tarjetas de proyectos en formato horizontal con hover sutil
- SEO básico: metadata, sitemap y robots

## 🧰 Stack técnico

- Next.js 16 (App Router) + React 19
- TypeScript 5
- Tailwind CSS v4 (postcss) y utilidades personalizadas
- next/image optimizado con calidades ajustadas

## 📁 Estructura

```
app/           # Páginas y layout (App Router)
components/    # Navbar, Footer, UI y cards
sections/      # Hero, Experience, Projects, About
lib/           # Datos mock y utilidades
public/        # Imágenes y SVGs
types/         # Tipos TypeScript
```

## 🧭 Configuración destacada

- `app/layout.tsx`: metadata, favicon, Open Graph/Twitter
- `app/head.tsx`: enlaces de icono (con versionado para cache-busting)
- `next.config.ts`: calidades de imagen (75, 85, 90, 92)
- `app/globals.css`: variables de tema y fondo

## 🖼️ Contenido

Edita `lib/data.ts` para actualizar proyectos y experiencia. Las imágenes van en `public/`.

## 📦 Despliegue

Proyecto listo para Vercel. Tras la publicación, usa los validadores para refrescar tarjetas sociales si cambias el OG:

- Meta (Facebook/WhatsApp) Sharing Debugger
- LinkedIn Post Inspector
- X/Twitter Card Validator

## 📝 Licencia

MIT. Si te sirve, ¡me encantará tu ⭐ en el repo!
