import type { Metadata } from "next";
import { Geist, Syne } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "EvoluiLab | Sites e sistemas de alta performance",
  description:
    "Criamos sites, landing pages e sistemas digitais para profissionais e empresas que levam resultados a sério.",
  keywords: [
    "criação de sites",
    "landing pages",
    "sistemas digitais",
    "EvoluiLab",
    "sites para profissionais",
  ],
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
  },
  openGraph: {
    title: "EvoluiLab | Sua presença digital evolui",
    description:
      "Sites e sistemas de alta performance para profissionais e empresas.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EvoluiLab | Sua presença digital evolui",
    description:
      "Sites e sistemas de alta performance para profissionais e empresas.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("font-sans", geist.variable, syne.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
