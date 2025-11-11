import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Julen Rivas · Portfolio",
    template: "%s · Julen Rivas",
  },
  description:
    "Portafolio de Julen Rivas. Problems Management Analyst especializado en procesos Batch (Control‑M, AS400, BPM, iSeries).",
  metadataBase: new URL("https://julenrp.vercel.app/"),
  icons: {
    icon: "/jr_logo.png?v=2",
    shortcut: "/jr_logo.png?v=2",
    apple: "/jr_logo.png?v=2",
  },
  openGraph: {
    title: "Julen Rivas · Portafolio",
    description:
      "Portafolio de Julen Rivas. Problems Management Analyst especializado en procesos Batch (Control‑M, AS400, BPM, iSeries).",
    url: "https://julenrp.vercel.app/",
    siteName: "Julen Rivas",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/jr_logo.png",
        width: 1200,
        height: 630,
        alt: "Logo JR — Julen Rivas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Julen Rivas · Portafolio",
    description:
      "Problems Management Analyst especializado en procesos Batch (Control‑M, AS400, BPM, iSeries). Experiencia, proyectos y contacto.",
    images: [
      {
        url: "/jr_logo.png",
        width: 1200,
        height: 630,
        alt: "Logo JR — Julen Rivas",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${onest.variable} antialiased min-h-screen flex flex-col bg-white dark:bg-black`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
