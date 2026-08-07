import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";

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

const pains = [
  "Não tenho um site — ou o que tenho parece amador",
  "As pessoas não entendem minha especialidade antes de chegar",
  "Perco pacientes porque o contato e o agendamento são confusos",
  "Dependo só de indicação e não tenho uma vitrine profissional",
];

const solutions = [
  {
    title: "Site com posicionamento",
    text: "Páginas que apresentam sua especialidade com clareza e autoridade — sem parecer genérica.",
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
    niche: "Nutrição esportiva",
    result: "+62% de agendamentos via site",
    tag: "Landing page",
    image: "/portfolio/portfolio-marina.png",
  },
  {
    name: "Consultório NutriVida",
    niche: "Emagrecimento saudável",
    result: "Site + formulário de triagem",
    tag: "Site institucional",
    image: "/portfolio/portfolio-nutrivida.png",
  },
  {
    name: "Dra. Camila Rocha",
    niche: "Nutrição clínica",
    result: "3x mais contatos qualificados",
    tag: "Site + sistema",
    image: "/portfolio/portfolio-camila.png",
  },
  {
    name: "Espaço Equilíbrio",
    niche: "Nutrição comportamental",
    result: "Vitrine profissional e agenda organizada",
    tag: "Site institucional",
    image: "/portfolio/portfolio-equilibrio.png",
  },
];

const testimonials = [
  {
    quote:
      "Meu site antigo não transmitia nada do meu método. Depois da reformulação, os pacientes chegam já entendendo o que eu faço — e pedindo consulta.",
    name: "Marina Alves",
    role: "Nutricionista esportiva",
  },
  {
    quote:
      "Finalmente tenho um site que transmite o cuidado do consultório. Visual, textos e o fluxo de contato fizeram toda a diferença.",
    name: "Camila Rocha",
    role: "Nutricionista clínica",
  },
  {
    quote:
      "Antes eu dependia só de indicação. Hoje o site traz pacientes certos e o sistema ajuda a organizar a demanda.",
    name: "Helena Duarte",
    role: "Nutrição comportamental",
  },
];

const steps = [
  {
    n: "01",
    title: "Conversa",
    text: "Entendemos sua especialidade, se você precisa de site, sistema ou os dois.",
  },
  {
    n: "02",
    title: "Criação",
    text: "Desenvolvemos o site, a landing ou o sistema com foco em clareza e conversão.",
  },
  {
    n: "03",
    title: "Resultado",
    text: "Publicamos, testamos e entregamos pronto para gerar e organizar consultas.",
  },
];

function PortfolioCard({
  name,
  niche,
  result,
  tag,
  image,
}: (typeof portfolio)[number]) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/8 bg-ink transition duration-300 hover:-translate-y-1 hover:border-teal/35">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate/40">
        <Image
          src={image}
          alt={`Preview do site ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[0.7rem] font-bold tracking-[0.14em] text-teal uppercase">
            {tag}
          </span>
          <span className="text-xs text-mist/45">{niche}</span>
        </div>
        <h3 className="mt-3 font-display text-lg font-bold">{name}</h3>
        <p className="mt-2 text-sm font-semibold text-mist/75">{result}</p>
      </div>
    </article>
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
                className="hidden text-sm text-mist/60 transition hover:text-mist sm:inline"
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
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(243,241,236,0.08),transparent_48%),linear-gradient(180deg,#141311_0%,#1a1916_100%)]"
          />
          <div className="grain" />
          <div className="section-pad relative">
            <div className="container-site max-w-3xl">
              <p className="rise-in font-display text-sm font-semibold tracking-[0.2em] text-teal uppercase">
                Para nutricionistas
              </p>
              <h1 className="rise-in rise-in-delay-1 mt-4 font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08] font-extrabold tracking-[-0.03em]">
                Sites e sistemas para nutricionistas que desejam{" "}
                <span className="text-teal">crescer com direção</span>
              </h1>
              <p className="rise-in rise-in-delay-2 mt-6 max-w-xl text-base leading-relaxed text-mist/70 sm:text-lg">
                Criamos sites, landing pages e sistemas sob medida — para atrair
                pacientes certos, transmitir autoridade e organizar sua agenda.
              </p>
              <div className="rise-in rise-in-delay-3 mt-9 flex flex-wrap gap-3">
                <a href={WA} className="btn-primary">
                  Quero um site profissional
                </a>
                <a href="#portfolio" className="btn-ghost">
                  Ver exemplos
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pains */}
        <section className="relative border-y border-white/5 bg-surface py-16 sm:py-20">
          <div className="section-pad">
            <div className="container-site">
              <Reveal>
                <h2 className="text-center font-display text-[clamp(1.6rem,3vw,2.4rem)] font-bold tracking-[-0.02em]">
                  Você se sente assim sobre o seu site?
                </h2>
              </Reveal>
              <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
                {pains.map((pain, i) => (
                  <Reveal key={pain} as="li" delay={80 + i * 70}>
                    <div className="rounded-xl border border-white/8 bg-ink/60 px-5 py-5 text-center text-base text-mist/80 italic transition duration-300 hover:-translate-y-0.5 hover:border-teal/25 sm:text-left">
                      “{pain}”
                    </div>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={200}>
                <p className="mx-auto mt-10 max-w-2xl text-center text-mist/70">
                  Se você quer um site (ou sistema) que gera confiança e consultas,{" "}
                  <span className="text-teal">vamos conversar</span>.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Free diagnosis */}
        <section className="relative py-16 sm:py-20">
          <div className="section-pad">
            <Reveal>
              <div className="container-site overflow-hidden rounded-2xl border border-white/12 bg-elevated p-8 sm:p-12">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                  <div>
                    <p className="font-display text-sm font-semibold tracking-[0.2em] text-teal uppercase">
                      Sem compromisso
                    </p>
                    <h2 className="mt-3 font-display text-[clamp(1.7rem,3vw,2.6rem)] font-bold tracking-[-0.02em]">
                      Diagnóstico gratuito do seu site
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-mist/70">
                      Analisamos seu site atual — ou a falta dele — e mostramos o
                      que mudar para gerar mais confiança e consultas. Sem
                      compromisso.
                    </p>
                  </div>
                  <div className="flex justify-start lg:justify-end">
                    <a href={WA_DIAGNOSTICO} className="btn-primary">
                      Solicitar diagnóstico gratuito
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Solutions */}
        <section className="relative border-y border-white/5 bg-surface py-16 sm:py-24">
          <div className="section-pad">
            <div className="container-site">
              <Reveal className="max-w-2xl">
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-teal uppercase">
                  A solução
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-bold tracking-[-0.02em]">
                  O que entregamos para o seu consultório
                </h2>
                <p className="mt-4 text-mist/70">
                  Você não está contratando “um site bonito”. Está contratando
                  uma estrutura digital que vende e organiza o seu atendimento.
                </p>
              </Reveal>

              <ul className="mt-12 grid gap-4 sm:grid-cols-2">
                {solutions.map((item, i) => (
                  <Reveal key={item.title} as="li" delay={100 + i * 80}>
                    <div className="h-full rounded-xl border border-white/8 bg-ink p-6 transition duration-300 hover:-translate-y-1 hover:border-teal/30">
                      <h3 className="font-display text-xl font-bold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-mist/65">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={180}>
                <div className="mt-10 rounded-xl border border-teal/20 bg-ink/50 p-6 sm:p-8">
                  <p className="font-display text-xl font-bold sm:text-2xl">
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
        <section className="relative py-16 sm:py-24">
          <div className="section-pad">
            <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-teal uppercase">
                  Entrega
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-bold tracking-[-0.02em]">
                  Tudo o que seu site precisa para gerar consultas
                </h2>
                <p className="mt-4 text-mist/70">
                  Do briefing à publicação — e, quando fizer sentido, sistemas
                  para organizar leads e o fluxo do consultório.
                </p>
                <a href={WA} className="btn-primary mt-8 inline-flex">
                  Quero um site assim
                </a>
              </Reveal>
              <ul className="grid gap-3 sm:grid-cols-2">
                {includes.map((item, i) => (
                  <Reveal key={item} as="li" delay={80 + i * 50}>
                    <div className="flex gap-3 rounded-xl border border-white/5 bg-slate/30 px-4 py-4 text-sm text-mist/80 transition duration-300 hover:border-teal/20">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal" />
                      {item}
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section
          id="portfolio"
          className="relative border-y border-white/5 bg-surface py-16 sm:py-24"
        >
          <div className="section-pad">
            <div className="container-site">
              <Reveal className="max-w-2xl">
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-teal uppercase">
                  Portfólio
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-bold tracking-[-0.02em]">
                  Exemplos de sites e sistemas para nutricionistas
                </h2>
                <p className="mt-4 text-mist/70">
                  Projetos no estilo do que criamos — landings, sites
                  institucionais e sistemas pensados para autoridade e agenda.
                </p>
              </Reveal>
              <div className="mt-12 grid gap-5 sm:grid-cols-2">
                {portfolio.map((item, i) => (
                  <Reveal key={item.name} delay={100 + i * 90}>
                    <PortfolioCard {...item} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative py-16 sm:py-24">
          <div className="section-pad">
            <div className="container-site">
              <Reveal>
                <h2 className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-bold tracking-[-0.02em]">
                  Um caminho claro até o resultado
                </h2>
              </Reveal>
              <ol className="mt-12 grid gap-6 sm:grid-cols-3">
                {steps.map((step, i) => (
                  <Reveal key={step.n} as="li" delay={100 + i * 100}>
                    <span className="font-display text-sm font-bold text-teal">
                      {step.n}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-bold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist/65">
                      {step.text}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative border-y border-white/5 bg-surface py-16 sm:py-24">
          <div className="section-pad">
            <div className="container-site">
              <Reveal className="max-w-2xl">
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-teal uppercase">
                  Depoimentos
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-bold tracking-[-0.02em]">
                  Nutricionistas que evoluíram com um site profissional
                </h2>
              </Reveal>
              <ul className="mt-12 grid gap-5 lg:grid-cols-3">
                {testimonials.map((item, i) => (
                  <Reveal key={item.name} as="li" delay={120 + i * 90}>
                    <div className="flex h-full flex-col rounded-xl border border-white/8 bg-ink p-6 transition duration-300 hover:-translate-y-1 hover:border-teal/25">
                      <p className="flex-1 text-base leading-relaxed text-mist/80">
                        “{item.quote}”
                      </p>
                      <div className="mt-8 border-t border-white/8 pt-5">
                        <p className="font-display font-bold">{item.name}</p>
                        <p className="mt-1 text-sm text-mist/55">{item.role}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(243,241,236,0.18),transparent_50%)]"
          />
          <div className="section-pad relative">
            <Reveal className="container-site max-w-3xl text-center">
              <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] font-bold tracking-[-0.02em]">
                Vamos criar o site (ou sistema) do seu consultório
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-mist/70">
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

      <footer className="border-t border-white/5 bg-ink py-10">
        <div className="section-pad">
          <div className="container-site flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Logo href="/" />
            <p className="text-sm text-mist/45">
              Sites e sistemas para nutricionistas · EvoluiLab
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
