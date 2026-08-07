import { ProfessionalLanding } from "@/components/ProfessionalLanding";
import { requireProfessionalLanding } from "@/lib/professional-landings";
import { buildPageMetadata } from "@/lib/seo";

const config = requireProfessionalLanding("dentistas");

export const metadata = buildPageMetadata({
  title: config.metadata.title,
  description: config.metadata.description,
  keywords: config.metadata.keywords,
  path: "/dentistas",
});

export default function DentistasPage() {
  return <ProfessionalLanding config={config} />;
}
