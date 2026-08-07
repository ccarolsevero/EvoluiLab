"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const cases = [
  {
    segment: "Advocacia",
    title: "Autoridade digital para escritório jurídico",
    result: "+48% de leads qualificados em 90 dias",
  },
  {
    segment: "Clínica",
    title: "Landing de alta conversão para agendamentos",
    result: "3x mais conversões via campanha",
  },
  {
    segment: "Consultoria",
    title: "Site institucional com funil de conteúdo",
    result: "Mais autoridade e agenda preenchida",
  },
];

export function Cases() {
  return (
    <section id="cases" className="relative border-y border-white/6 bg-surface py-24 sm:py-32">
      <div className="section-pad">
        <div className="container-site">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <Reveal className="max-w-2xl" >
              <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
                Cases
              </p>
              <h2 className="mt-5 font-display text-[clamp(2rem,3.8vw,3.25rem)] leading-[1.08] font-medium tracking-[-0.035em]">
                Projetos com cara de resultado
              </h2>
            </Reveal>
            <Button
              asChild
              variant="outline"
              className="h-10 w-fit rounded-md border-teal/35 bg-transparent text-mist hover:border-teal/60 hover:bg-teal/10 hover:text-mist"
            >
              <Link href="#contato">Quero um case assim</Link>
            </Button>
          </div>

          <Stagger as="ul" className="mt-16" stagger={0.1}>
            {cases.map((item, index) => (
              <StaggerItem key={item.title} as="li">
                <article className="group grid gap-6 border-t border-white/8 py-10 transition-colors sm:grid-cols-[6rem_1fr_minmax(0,16rem)] sm:items-end sm:gap-12 lg:py-12">
                  <span className="font-display text-4xl font-medium tracking-[-0.05em] text-teal/25 tabular-nums sm:text-5xl">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-[0.7rem] font-medium tracking-[0.18em] text-teal uppercase">
                      {item.segment}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.03em] sm:text-[1.85rem]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-teal/80 sm:text-right">
                    {item.result}
                  </p>
                </article>
              </StaggerItem>
            ))}
            <li aria-hidden className="border-t border-white/8" />
          </Stagger>
        </div>
      </div>
    </section>
  );
}
