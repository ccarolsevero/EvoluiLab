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
    a: "Somos especialistas em criar sites e landing pages para advogados e escritórios de advocacia, com projetos alinhados à imagem e às necessidades da profissão.",
  },
  {
    q: "Meu escritório já possui um site. Vocês fazem reformulações?",
    a: "Sim. Podemos modernizar o visual, reorganizar o conteúdo e atualizar a estrutura do seu site.",
  },
  {
    q: "Também desenvolvem landing pages para Google Ads?",
    a: "Sim. Criamos páginas específicas para campanhas de Google Ads, pensadas para apresentar o escritório com clareza e facilitar o contato.",
  },
  {
    q: "Meu site funcionará no celular?",
    a: "Sim. Todos os projetos são desenvolvidos para funcionar bem em computadores, tablets e smartphones.",
  },
  {
    q: "Posso integrar WhatsApp ao site?",
    a: "Sim. O WhatsApp pode ser integrado para facilitar o contato de quem deseja falar com o escritório.",
  },
  {
    q: "Meu site poderá aparecer no Google?",
    a: "Desenvolvemos os projetos seguindo boas práticas de SEO para facilitar a indexação e fortalecer a presença nas buscas.",
  },
  {
    q: "Posso publicar artigos jurídicos?",
    a: "Sim. Podemos desenvolver uma área de conteúdo para o escritório publicar artigos e materiais informativos.",
  },
  {
    q: "Vocês fazem Google Ads?",
    a: "Sim. Além do site, também desenvolvemos campanhas de Google Ads para escritórios que desejam fortalecer a presença nas pesquisas.",
  },
  {
    q: "Quanto tempo leva para o site ficar pronto?",
    a: "O prazo depende da estrutura do projeto e será informado após entendermos suas necessidades.",
  },
  {
    q: "Quanto custa?",
    a: "Cada projeto é personalizado. Entre em contato para receber uma proposta adequada ao seu escritório.",
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
