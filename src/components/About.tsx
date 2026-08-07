"use client";

import { Separator } from "@/components/ui/separator";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const pillars = [
  {
    title: "Estratégia",
    text: "Posicionamento, mensagem e estrutura pensados para atrair o público certo.",
  },
  {
    title: "Tecnologia",
    text: "Sites rápidos, seguros e prontos para crescer com o seu negócio.",
  },
  {
    title: "Performance",
    text: "Velocidade, SEO e experiência mobile para ranquear e converter.",
  },
  {
    title: "Conversão",
    text: "CTAs, funis e páginas desenhadas para transformar visita em cliente.",
  },
  {
    title: "Acompanhamento",
    text: "Evolução contínua com ajustes, métricas e suporte próximo.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="section-pad">
        <div className="container-site grid gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
          <Reveal  className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
              Sobre
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.8vw,3.25rem)] leading-[1.08] font-medium tracking-[-0.035em]">
              Menos amadorismo.
              <br />
              Mais presença que{" "}
              <span className="text-teal">vende</span>.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-mist/55">
              A EvoluiLab une design, tecnologia e conversão para criar presença
              online que gera agenda, autoridade e crescimento.
            </p>
          </Reveal>

          <Stagger as="ul" className="flex flex-col" stagger={0.08}>
            {pillars.map((item, i) => (
              <StaggerItem key={item.title} as="li">
                {i > 0 && <Separator className="bg-white/8" />}
                <div className="grid gap-3 py-7 sm:grid-cols-[7rem_1fr] sm:gap-8">
                  <span className="font-display text-sm text-teal/60 tabular-nums">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium tracking-[-0.02em]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-mist/55">
                      {item.text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
