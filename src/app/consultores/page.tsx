import { ProfessionalLanding } from "@/components/ProfessionalLanding";
import { requireProfessionalLanding } from "@/lib/professional-landings";
import { buildPageMetadata } from "@/lib/seo";

const config = requireProfessionalLanding("consultores");

export const metadata = buildPageMetadata({
  title: config.metadata.title,
  description: config.metadata.description,
  keywords: config.metadata.keywords,
  path: "/consultores",
});

export default function ConsultoresPage() {
  return <ProfessionalLanding config={config} />;
}
