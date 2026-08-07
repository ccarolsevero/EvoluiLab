"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Vocês desenvolvem sites apenas para advogados?",
    a: "Somos especialistas em sites e landing pages para advogados e escritórios de advocacia, com projetos alinhados à imagem da profissão.",
  },
  {
    q: "Meu escritório já possui um site. Vocês fazem reformulações?",
    a: "Sim. Podemos modernizar o visual, reorganizar o conteúdo e atualizar a estrutura do seu site.",
  },
  {
    q: "Também desenvolvem landing pages para Google Ads?",
    a: "Sim. Criamos páginas específicas para campanhas, pensadas para clareza e contato.",
  },
  {
    q: "Meu site funcionará no celular?",
    a: "Sim. Todos os projetos são responsivos — computador, tablet e smartphone.",
  },
  {
    q: "Posso integrar WhatsApp ao site?",
    a: "Sim. O WhatsApp pode ser integrado para facilitar o contato com o escritório.",
  },
  {
    q: "Meu site poderá aparecer no Google?",
    a: "Sim. Seguimos boas práticas de SEO para indexação e presença nas buscas.",
  },
  {
    q: "Vocês fazem Google Ads?",
    a: "Sim. Além do site, também desenvolvemos campanhas de Google Ads.",
  },
  {
    q: "Quanto tempo leva e quanto custa?",
    a: "Prazo e investimento dependem da estrutura do projeto. Entre em contato para receber uma proposta.",
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
