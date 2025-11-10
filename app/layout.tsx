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
    default: "Tu Nombre · Desarrollador Web",
    template: "%s · Tu Nombre",
  },
  description: "Portafolio personal construido con Next.js",
  metadataBase: new URL("https://tu-dominio.com"),
  openGraph: {
    title: "Tu Nombre · Desarrollador Web",
    description: "Portafolio personal construido con Next.js",
    url: "https://tu-dominio.com",
    siteName: "Tu Nombre",
    locale: "es_ES",
    type: "website",
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
    <html lang="es">
      <body className={`${onest.variable} antialiased min-h-screen flex flex-col bg-white dark:bg-black`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
