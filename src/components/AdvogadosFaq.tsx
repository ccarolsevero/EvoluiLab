"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Vocês fazem só sites para advogados?",
    a: "Sim. Somos especializados em sites e landing pages para advocacia.",
  },
  {
    q: "Já tenho site. Vocês reformulam?",
    a: "Sim. Modernizamos visual, conteúdo e estrutura.",
  },
  {
    q: "O site funciona no celular?",
    a: "Sim. Todos os projetos são responsivos.",
  },
  {
    q: "Dá para integrar WhatsApp e SEO?",
    a: "Sim. Incluímos WhatsApp e boas práticas de SEO.",
  },
  {
    q: "Vocês fazem Google Ads?",
    a: "Sim. Também criamos campanhas e landing pages para Ads.",
  },
  {
    q: "Quanto custa e quanto tempo leva?",
    a: "Cada projeto é sob medida. Envie uma mensagem e montamos a proposta com prazo.",
  },
];

export function AdvogadosFaq() {
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
