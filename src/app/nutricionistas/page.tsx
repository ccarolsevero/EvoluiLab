import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Sites e sistemas para nutricionistas | EvoluiLab",
  description:
    "Criamos sites, landing pages e sistemas para nutricionistas que querem atrair pacientes, transmitir autoridade e organizar a agenda com mais eficiência.",
  keywords: [
    "site para nutricionista",
    "landing page nutricionista",
    "sistema para nutricionista",
    "site nutricionista",
    "EvoluiLab",
  ],
  openGraph: {
    title: "Sites e sistemas para nutricionistas | EvoluiLab",
    description:
      "Sites, landing pages e sistemas pensados para autoridade, conversão e agenda de nutricionistas.",
    locale: "pt_BR",
    type: "website",
  },
};

const WA =
  "https://wa.me/5500000000000?text=" +
  encodeURIComponent(
    "Olá, EvoluiLab! Quero saber mais sobre sites e sistemas para nutricionistas."
  );

const WA_DIAGNOSTICO =
  "https://wa.me/5500000000000?text=" +
  encodeURIComponent(
    "Olá! Quero um diagnóstico gratuito do meu site (ou da falta dele) como nutricionista."
  );

const heroFeatures = [
  "Design exclusivo",
  "SEO",
  "WhatsApp",
  "Agendamento",
  "Responsivo",
];

const pains = [
  "Não tenho um site — ou o que tenho parece amador.",
  "As pessoas não entendem minha especialidade antes de chegar.",
  "Perco pacientes porque o contato e o agendamento são confusos.",
  "Dependo só de indicação e não tenho uma vitrine profissional.",
  "Meu site não transmite a qualidade do meu atendimento.",
  "Quero aparecer melhor quando pesquisam meu nome no Google.",
];

const solutions = [
  {
    title: "Site com posicionamento",
    text: "Páginas que apresentam sua especialidade com clareza e autoridade — sem parecer genéricas.",
  },
  {
    title: "Landing que converte",
    text: "Uma página objetiva para campanhas e indicações, com foco em gerar consultas.",
  },
  {
    title: "Sistemas sob medida",
    text: "Áreas logadas, formulários, painéis e fluxos que organizam leads, pacientes e operação.",
  },
  {
    title: "Jornada até a agenda",
    text: "CTAs, WhatsApp e caminhos simples para transformar visita em agendamento.",
  },
];

const includes = [
  "Estrutura de páginas pensada para confiança e conversão",
  "Textos claros sobre quem você atende e como ajuda",
  "Botões de WhatsApp e agendamento em pontos estratégicos",
  "Visual profissional alinhado à sua identidade",
  "Versão responsiva para celular e computador",
  "SEO básico para ser encontrada no Google",
  "Integrações e sistemas quando o consultório precisa escalar",
  "Entrega pronta para publicar e usar",
];

const portfolio = [
  {
    name: "Nutri Marina Alves",
    area: "Nutrição esportiva",
    tag: "Landing page",
    image: "/portfolio/portfolio-marina.png",
  },
  {
    name: "Consultório NutriVida",
    area: "Emagrecimento saudável",
    tag: "Site institucional",
    image: "/portfolio/portfolio-nutrivida.png",
  },
  {
    name: "Dra. Camila Rocha",
    area: "Nutrição clínica",
    tag: "Site + sistema",
    image: "/portfolio/portfolio-camila.png",
  },
  {
    name: "Espaço Equilíbrio",
    area: "Nutrição comportamental",
    tag: "Site institucional",
    image: "/portfolio/portfolio-equilibrio.png",
  },
];

const testimonials = [
  {
    quote:
      "Meu site antigo não transmitia nada do meu método. Depois da reformulação, os pacientes chegam já entendendo o que eu faço — e pedindo consulta.",
    name: "Marina Alves",
    place: "Nutricionista esportiva",
  },
  {
    quote:
      "Finalmente tenho um site que transmite o cuidado do consultório. Visual, textos e o fluxo de contato fizeram toda a diferença.",
    name: "Camila Rocha",
    place: "Nutricionista clínica",
  },
  {
    quote:
      "Antes eu dependia só de indicação. Hoje o site traz pacientes certos e o sistema ajuda a organizar a demanda.",
    name: "Helena Duarte",
    place: "Nutrição comportamental",
  },
];

const steps = [
  {
    n: "01",
    title: "Conversamos",
    text: "Entendemos sua especialidade, se você precisa de site, sistema ou os dois.",
  },
  {
    n: "02",
    title: "Planejamos",
    text: "Definimos a estrutura ideal para apresentar seus serviços com clareza e autoridade.",
  },
  {
    n: "03",
    title: "Desenvolvemos",
    text: "Criamos o design, organizamos o conteúdo e desenvolvemos o site ou o sistema.",
  },
  {
    n: "04",
    title: "Publicamos",
    text: "Entregamos pronto para gerar consultas, organizar a agenda e fortalecer sua presença.",
  },
];

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-mist/70 sm:text-base">
      <Check className="mt-0.5 size-4 shrink-0 text-teal" strokeWidth={2.2} />
      <span>{children}</span>
    </li>
  );
}

export default function NutricionistasPage() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/85 backdrop-blur-xl">
        <div className="section-pad">
          <div className="container-site flex h-[4.5rem] items-center justify-between gap-4">
            <Logo href="/" />
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="hidden text-sm text-mist/55 transition hover:text-mist sm:inline"
              >
                Voltar ao início
              </Link>
              <a href={WA} className="btn-primary">
                Quero conversar
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(196,165,116,0.12),transparent_45%),linear-gradient(180deg,#141311_0%,#1a1916_100%)]"
          />
          <div className="grain" />
          <div className="section-pad relative">
            <div className="container-site max-w-3xl">
              <Reveal>
                <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
                  Especialistas em sites e sistemas para nutricionistas
                </p>
                <h1 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] font-medium tracking-[-0.04em]">
                  Sites e sistemas para nutricionistas que desejam crescer com{" "}
                  <span className="text-teal">direção</span>
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist/60 sm:text-lg">
                  Desenvolvemos sites, landing pages e sistemas sob medida — para
                  atrair pacientes certos, transmitir autoridade e organizar a
                  agenda do consultório.
                </p>
              </Reveal>

              <Reveal delay={100}>
                <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                  {heroFeatures.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 text-sm text-mist/70"
                    >
                      <Check
                        className="size-3.5 shrink-0 text-teal"
                        strokeWidth={2.4}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={160}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a href={WA} className="btn-primary">
                    Quero um site profissional
                  </a>
                  <a href="#portfolio" className="btn-ghost">
                    Ver exemplos
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Pains / situations */}
        <section className="relative border-y border-white/6 bg-surface py-20 sm:py-28">
          <div className="section-pad">
            <div className="container-site grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <Reveal>
                <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
                  Diagnóstico
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                  Você se identifica com alguma dessas situações?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-mist/60">
                  Se respondeu &quot;sim&quot; para algumas delas, talvez seja o
                  momento de investir em um site (ou sistema) que represente
                  melhor o seu consultório.
                </p>
                <a href={WA_DIAGNOSTICO} className="btn-ghost mt-8 inline-flex">
                  Solicitar diagnóstico gratuito
                </a>
              </Reveal>

              <Stagger as="ul" className="space-y-3" stagger={0.05}>
                {pains.map((pain) => (
                  <StaggerItem key={pain} as="li">
                    <div className="flex gap-3 border border-white/8 bg-ink px-4 py-4 text-sm leading-relaxed text-mist/75 transition hover:border-teal/30 sm:text-base">
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center border border-teal/50 text-teal">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {pain}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="relative py-20 sm:py-28">
          <div className="section-pad">
            <div className="container-site">
              <Reveal className="max-w-2xl">
                <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
                  A solução
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                  O que entregamos para o seu consultório
                </h2>
                <p className="mt-5 text-base leading-relaxed text-mist/60">
                  Você não está contratando “um site bonito”. Está contratando
                  uma estrutura digital que vende e organiza o seu atendimento.
                </p>
              </Reveal>

              <Stagger
                as="ul"
                className="mt-12 grid gap-4 sm:grid-cols-2"
                stagger={0.08}
              >
                {solutions.map((item) => (
                  <StaggerItem key={item.title} as="li">
                    <article className="h-full border border-white/8 bg-surface p-6 transition hover:border-teal/30">
                      <h3 className="font-display text-xl font-medium tracking-[-0.02em]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-mist/60">
                        {item.text}
                      </p>
                    </article>
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal delay={120}>
                <div className="mt-10 border border-teal/25 bg-surface px-6 py-8 sm:px-8">
                  <p className="font-display text-xl font-medium tracking-[-0.02em] sm:text-2xl">
                    Você continua sendo a nutricionista.
                    <br />
                    <span className="text-teal">
                      Nós criamos o site e o sistema que sustentam o consultório.
                    </span>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Includes */}
        <section className="relative border-y border-white/6 bg-surface py-20 sm:py-28">
          <div className="section-pad">
            <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <Reveal>
                <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
                  Entrega
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                  Tudo o que seu site precisa para gerar consultas
                </h2>
                <p className="mt-5 text-base leading-relaxed text-mist/60">
                  Do briefing à publicação — e, quando fizer sentido, sistemas
                  para organizar leads e o fluxo do consultório.
                </p>
                <a href={WA} className="btn-primary mt-8 inline-flex">
                  Quero um site assim
                </a>
              </Reveal>
              <ul className="grid gap-4 sm:grid-cols-2">
                {includes.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section
          id="portfolio"
          className="relative py-20 sm:py-28"
        >
          <div className="section-pad">
            <div className="container-site">
              <Reveal className="max-w-3xl">
                <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
                  Projetos
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                  Exemplos de sites e sistemas para nutricionistas
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist/60">
                  Projetos no estilo do que criamos — landings, sites
                  institucionais e sistemas pensados para autoridade e agenda.
                </p>
              </Reveal>

              <Stagger
                as="ul"
                className="mt-12 grid gap-4 sm:grid-cols-2"
                stagger={0.08}
              >
                {portfolio.map((item) => (
                  <StaggerItem key={item.name} as="li">
                    <article className="group overflow-hidden border border-white/8 bg-ink transition hover:border-teal/30">
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate/40">
                        <Image
                          src={item.image}
                          alt={`Preview do site ${item.name}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                      </div>
                      <div className="p-5">
                        <p className="text-[0.7rem] font-medium tracking-[0.16em] text-teal uppercase">
                          {item.tag}
                        </p>
                        <h3 className="mt-2 font-display text-lg font-medium tracking-[-0.02em]">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-mist/50">{item.area}</p>
                      </div>
                    </article>
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal delay={120}>
                <div className="mt-10">
                  <a href={WA} className="btn-ghost">
                    Quero um projeto como esses
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative border-y border-white/6 bg-surface py-20 sm:py-28">
          <div className="section-pad">
            <div className="container-site">
              <Reveal className="max-w-2xl">
                <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
                  Como funciona
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                  Um caminho claro até o resultado
                </h2>
              </Reveal>

              <Stagger
                as="ol"
                className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                stagger={0.08}
              >
                {steps.map((step) => (
                  <StaggerItem key={step.n} as="li">
                    <span className="font-display text-[0.7rem] font-medium tracking-[0.18em] text-teal uppercase">
                      {step.n}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-medium tracking-[-0.02em]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist/60">
                      {step.text}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative py-20 sm:py-28">
          <div className="section-pad">
            <div className="container-site">
              <Reveal className="max-w-2xl">
                <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
                  Depoimentos
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                  O que nossas clientes dizem
                </h2>
              </Reveal>

              <Stagger
                as="ul"
                className="mt-12 grid gap-4 lg:grid-cols-3"
                stagger={0.08}
              >
                {testimonials.map((item) => (
                  <StaggerItem key={item.name} as="li">
                    <article className="flex h-full flex-col border border-white/8 bg-surface p-6 transition hover:border-teal/25">
                      <p className="text-teal" aria-hidden>
                        ★★★★★
                      </p>
                      <p className="mt-4 flex-1 text-base leading-relaxed text-mist/75">
                        “{item.quote}”
                      </p>
                      <div className="mt-8 border-t border-white/8 pt-5">
                        <p className="font-display font-medium">{item.name}</p>
                        <p className="mt-1 text-sm text-mist/50">{item.place}</p>
                      </div>
                    </article>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden border-t border-white/6 py-20 sm:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(196,165,116,0.12),transparent_50%)]"
          />
          <div className="section-pad relative">
            <Reveal className="container-site max-w-3xl text-center">
              <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                Vamos criar o site (ou sistema) do seu consultório
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-mist/60">
                Se você quer uma estrutura digital que atrai pacientes certos,
                transmite autoridade e organiza a operação, a EvoluiLab está
                pronta para construir isso com você.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a href={WA} className="btn-primary">
                  Quero conversar no WhatsApp
                </a>
                <a href={WA_DIAGNOSTICO} className="btn-ghost">
                  Pedir diagnóstico do meu site
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/6 bg-ink py-14">
        <div className="section-pad">
          <div className="container-site grid gap-10 sm:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Logo href="/" />
              <p className="mt-4 max-w-md text-sm leading-relaxed text-mist/50">
                Especialistas em sites, landing pages e sistemas para
                nutricionistas. Projetos exclusivos para consultórios que desejam
                transmitir mais autoridade, atrair pacientes certos e organizar a
                agenda.
              </p>
            </div>
            <div className="sm:text-right">
              <a
                href={WA}
                className="block text-sm text-mist/55 transition hover:text-teal"
              >
                WhatsApp
              </a>
              <a
                href="mailto:contato@evoluilab.com.br"
                className="mt-2 block text-sm text-mist/55 transition hover:text-teal"
              >
                E-mail
              </a>
              <p className="mt-2 text-sm text-mist/35">Política de Privacidade</p>
              <p className="mt-1 text-sm text-mist/35">Termos de Uso</p>
            </div>
          </div>
          <div className="container-site mt-10 border-t border-white/6 pt-6 text-xs text-mist/35">
            © {new Date().getFullYear()} EvoluiLab — Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}
