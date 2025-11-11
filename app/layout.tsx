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
    default: "Julen Rivas · Portafolio",
    template: "%s · Julen Rivas",
  },
  description: "Portafolio personal construido con Next.js",
  metadataBase: new URL("https://julenrp.vercel.app/"),
  icons: {
    icon: "/jr_logo.png",
    shortcut: "/jr_logo.png",
    apple: "/jr_logo.png",
  },
  openGraph: {
    title: "Julen Rivas · Portafolio",
    description: "Portafolio personal construido con Next.js",
    url: "https://julenrp.vercel.app/",
    siteName: "Julen Rivas",
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
    <html lang="es" className="dark">
      <body className={`${onest.variable} antialiased min-h-screen flex flex-col bg-white dark:bg-black`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
