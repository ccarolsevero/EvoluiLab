import { ProfessionalLanding } from "@/components/ProfessionalLanding";
import { requireProfessionalLanding } from "@/lib/professional-landings";
import { buildPageMetadata } from "@/lib/seo";

const config = requireProfessionalLanding("clinicas");

export const metadata = buildPageMetadata({
  title: config.metadata.title,
  description: config.metadata.description,
  keywords: config.metadata.keywords,
  path: "/clinicas",
});

export default function ClinicasPage() {
  return <ProfessionalLanding config={config} />;
}
