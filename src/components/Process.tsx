"use client";

import { Reveal, Stagger, StaggerItem } from "./Reveal";

const steps = [
  {
    step: "01",
    title: "Diagnóstico",
    text: "Entendemos seu segmento, oferta e objetivo de negócio.",
  },
  {
    step: "02",
    title: "Estratégia",
    text: "Definimos estrutura, mensagem e jornada do visitante.",
  },
  {
    step: "03",
    title: "Design & build",
    text: "Criamos a interface e desenvolvemos com performance.",
  },
  {
    step: "04",
    title: "Lançamento",
    text: "Publicamos, medimos e otimizamos para conversão.",
  },
];

export function Process() {
  return (
    <section id="processo" className="relative py-24 sm:py-32">
      <div className="section-pad">
        <div className="container-site">
          <Reveal className="max-w-2xl" >
            <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
              Processo
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.8vw,3.25rem)] leading-[1.08] font-medium tracking-[-0.035em]">
              Do briefing ao resultado, sem rodeios
            </h2>
          </Reveal>

          <Stagger
            as="ol"
            className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
            stagger={0.1}
          >
            {steps.map((item) => (
              <StaggerItem key={item.step} as="li" className="relative">
                <p className="font-display text-5xl font-medium tracking-[-0.05em] text-teal/20 sm:text-6xl">
                  {item.step}
                </p>
                <div className="mt-4 h-px w-8 bg-teal/50" aria-hidden />
                <h3 className="mt-4 font-display text-xl font-medium tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist/50">
                  {item.text}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
