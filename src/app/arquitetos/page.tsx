import { ProfessionalLanding } from "@/components/ProfessionalLanding";
import { requireProfessionalLanding } from "@/lib/professional-landings";
import { buildPageMetadata } from "@/lib/seo";

const config = requireProfessionalLanding("arquitetos");

export const metadata = buildPageMetadata({
  title: config.metadata.title,
  description: config.metadata.description,
  keywords: config.metadata.keywords,
  path: "/arquitetos",
});

export default function ArquitetosPage() {
  return <ProfessionalLanding config={config} />;
}
