import type { Metadata } from "next";
import { ProfessionalLanding } from "@/components/ProfessionalLanding";
import { requireProfessionalLanding } from "@/lib/professional-landings";

const config = requireProfessionalLanding("medicos");

export const metadata: Metadata = {
  title: config.metadata.title,
  description: config.metadata.description,
  keywords: config.metadata.keywords,
  openGraph: {
    title: config.metadata.title,
    description: config.metadata.description,
    locale: "pt_BR",
    type: "website",
  },
};

export default function MedicosPage() {
  return <ProfessionalLanding config={config} />;
}
