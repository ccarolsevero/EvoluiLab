"use client";

import { Separator } from "@/components/ui/separator";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const testimonials = [
  {
    quote:
      "A EvoluiLab transformou nossa presença online. Em poucos meses, o site virou o principal canal de novos pacientes.",
    name: "Dra. Marina Costa",
    role: "Clínica odontológica",
  },
  {
    quote:
      "Design impecável e foco em conversão. Finalmente temos uma página que comunica autoridade e gera agenda.",
    name: "Carlos Mendes",
    role: "Escritório de advocacia",
  },
  {
    quote:
      "Do briefing ao lançamento, tudo foi claro e estratégico. O site elevou o posicionamento da consultoria.",
    name: "Helena Duarte",
    role: "Consultoria empresarial",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 sm:py-32">
      <div className="section-pad">
        <div className="container-site">
          <Reveal className="max-w-2xl" >
            <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-mist/45 uppercase">
              Depoimentos
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.8vw,3.25rem)] leading-[1.08] font-medium tracking-[-0.035em]">
              Quem evolui conosco recomenda
            </h2>
          </Reveal>

          <Stagger as="ul" className="mt-16 max-w-4xl" stagger={0.12}>
            {testimonials.map((item, i) => (
              <StaggerItem key={item.name} as="li">
                {i > 0 && <Separator className="my-10 bg-white/8 sm:my-12" />}
                <blockquote>
                  <p className="font-display text-[clamp(1.25rem,2.4vw,1.85rem)] leading-[1.35] font-medium tracking-[-0.025em] text-mist/90">
                    “{item.quote}”
                  </p>
                  <footer className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <cite className="font-display text-base font-medium not-italic">
                      {item.name}
                    </cite>
                    <span className="text-sm text-mist/40">{item.role}</span>
                  </footer>
                </blockquote>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
