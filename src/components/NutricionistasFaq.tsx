"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Vocês fazem sites apenas para nutricionistas?",
    a: "Somos especialistas em criar sites e landing pages para nutricionistas, com projetos alinhados às necessidades da profissão.",
  },
  {
    q: "Também criam landing pages para Google Ads?",
    a: "Sim. Desenvolvemos páginas específicas para campanhas com foco em gerar mais contatos.",
  },
  {
    q: "Meu site funcionará no celular?",
    a: "Sim. Todos os projetos são totalmente responsivos.",
  },
  {
    q: "O site terá botão para WhatsApp?",
    a: "Sim. O WhatsApp pode ser integrado em pontos estratégicos da página.",
  },
  {
    q: "Posso integrar meu sistema de agendamento?",
    a: "Sempre que houver compatibilidade técnica, sim.",
  },
  {
    q: "Meu site poderá aparecer no Google?",
    a: "Sim. Desenvolvemos os projetos seguindo boas práticas de SEO.",
  },
  {
    q: "Já tenho um site. Vocês podem reformular?",
    a: "Claro. Também reformulamos sites antigos.",
  },
  {
    q: "Quanto tempo leva?",
    a: "O prazo depende da complexidade do projeto e será informado após entendermos sua necessidade.",
  },
  {
    q: "Quanto custa?",
    a: "Cada projeto é personalizado. Entre em contato para receber uma proposta.",
  },
];

export function NutricionistasFaq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((item, i) => (
        <AccordionItem
          key={item.q}
          value={`item-${i}`}
          className="border-white/8"
        >
          <AccordionTrigger className="py-5 font-display text-base font-medium tracking-[-0.01em] text-mist hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-mist/55">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
