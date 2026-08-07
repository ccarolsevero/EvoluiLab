import { ProfessionalLanding } from "@/components/ProfessionalLanding";
import { requireProfessionalLanding } from "@/lib/professional-landings";
import { buildPageMetadata } from "@/lib/seo";

const config = requireProfessionalLanding("medicos");

export const metadata = buildPageMetadata({
  title: config.metadata.title,
  description: config.metadata.description,
  keywords: config.metadata.keywords,
  path: "/medicos",
});

export default function MedicosPage() {
  return <ProfessionalLanding config={config} />;
}
