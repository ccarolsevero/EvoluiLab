"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const services = [
  {
    title: "Sites institucionais",
    text: "Presença profissional com identidade forte, páginas claras e foco em autoridade.",
  },
  {
    title: "Landing pages",
    text: "Páginas de alta conversão para campanhas, lançamentos e captação de leads.",
  },
  {
    title: "Sistemas e automações",
    text: "Áreas logadas, painéis, integrações e fluxos que organizam a operação.",
  },
  {
    title: "Sites para profissionais",
    text: "Sob medida para advocacia, saúde, arquitetura, consultoria e clínicas.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative border-y border-white/6 bg-surface py-24 sm:py-32">
      <div className="section-pad">
        <div className="container-site">
          <Reveal className="max-w-2xl" >
            <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-mist/45 uppercase">
              Serviços
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.8vw,3.25rem)] leading-[1.08] font-medium tracking-[-0.035em]">
              O que construímos com você
            </h2>
          </Reveal>

          <Stagger as="ol" className="mt-16" stagger={0.07}>
            {services.map((service, index) => (
              <StaggerItem key={service.title} as="li">
                <a
                  href="#contato"
                  className="group grid items-baseline gap-4 border-t border-white/8 py-8 transition-colors sm:grid-cols-[5rem_1fr_auto] sm:gap-10 sm:py-10"
                >
                  <span className="font-display text-sm text-mist/30 tabular-nums">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-[-0.025em] transition-colors group-hover:text-teal sm:text-[1.75rem]">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-mist/50 sm:text-base">
                      {service.text}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1 hidden size-5 text-mist/25 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-mist/70 sm:block" />
                </a>
              </StaggerItem>
            ))}
            <li aria-hidden className="border-t border-white/8" />
          </Stagger>
        </div>
      </div>
    </section>
  );
}
