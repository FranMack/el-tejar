import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";
import { envs } from "./config/envs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Clínica Dental El Tejar - Odontología Avanzada en Fuengirola",
  description:
    "La Clínica Dental El Tejar, dirigida por el Dr. Luciano Mackinnon, ofrece tratamientos odontológicos de alta calidad en Fuengirola, España. Especializados en estética dental, implantes, ortodoncia y rehabilitación oral.",
  keywords:
    "clínica dental Fuengirola, dentista Fuengirola, odontólogo Luciano Mackinnon, estética dental, implantes dentales, ortodoncia, blanqueamiento dental, rehabilitación oral, salud bucal",
  //robots: "index, follow"//,
  robots: envs.DOMAIN.includes("vercel.app") ? "noindex, nofollow" : "index, follow",

  openGraph: {
    title: "Clínica Dental El Tejar - Odontología en Fuengirola",
    description:
      "Clínica Dental El Tejar del Dr. Luciano Mackinnon. Tratamientos de estética dental, implantes, ortodoncia y cuidado integral de la salud bucal en Fuengirola.",
    images: `${envs.DOMAIN}/favicon.png`,
    url: `${envs.DOMAIN}`,
    type: "website",
    locale: "es_ES",
  },

  twitter: {
    card: "summary_large_image",
    title: "Clínica Dental El Tejar - Odontología en Fuengirola",
    description:
      "Tratamientos avanzados de salud y estética dental en Clínica Dental El Tejar, liderada por el Dr. Luciano Mackinnon en Fuengirola, España.",
    images: `${envs.DOMAIN}/favicon.png`,
  },

  authors: { 
    name: "Clínica Dental El Tejar - Dr. Luciano Mackinnon",
    url: `${envs.DOMAIN}`,
  },

  alternates: {
    canonical: `${envs.DOMAIN}`,
  },

  icons: {
    icon: "/favicon.ico",
  },
};;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="es" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <main>{children}</main>
        <Analytics />
         <Toaster />
      </body>
    </html>
  );
}
