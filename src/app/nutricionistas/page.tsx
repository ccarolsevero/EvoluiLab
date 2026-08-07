import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NutricionistasFaq } from "@/components/NutricionistasFaq";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { WA_NUTRI, WA_NUTRI_ADS } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Sites e landing pages para nutricionistas | EvoluiLab",
  description:
    "Sites profissionais para nutricionistas que desejam transmitir confiança, aparecer melhor no Google e conquistar novos pacientes.",
  keywords: [
    "site para nutricionista",
    "landing page nutricionista",
    "Google Ads nutricionista",
    "site nutricionista",
    "EvoluiLab",
  ],
  openGraph: {
    title: "Sites e landing pages para nutricionistas | EvoluiLab",
    description:
      "Projetos exclusivos para nutricionistas que querem confiança, presença no Google e mais pacientes.",
    locale: "pt_BR",
    type: "website",
  },
};

const WA = WA_NUTRI;
const WA_ADS = WA_NUTRI_ADS;

const heroFeatures = [
  "Design exclusivo",
  "SEO",
  "WhatsApp",
  "Google Maps",
  "Agendamento online",
];

const situations = [
  "Meu Instagram acabou virando meu site.",
  "Tenho vergonha de dizer que não tenho um site profissional.",
  "Quando pesquisam meu nome no Google, quase não encontram informações sobre mim.",
  "Quero parecer mais profissional na internet.",
  "Meu site está antigo e já não representa meu trabalho.",
  "Gostaria que os pacientes entendessem melhor como funciona meu atendimento.",
  "Vejo outras nutricionistas transmitindo muito mais confiança.",
  "Quero crescer, mas não quero depender apenas do Instagram.",
];

const imagineItems = [
  "Encontrasse um site bonito e profissional.",
  "Entendesse rapidamente como você trabalha.",
  "Conhecesse suas especialidades.",
  "Descobrisse onde você atende.",
  "Encontrasse seu WhatsApp em poucos segundos.",
  "Sentisse confiança antes mesmo da primeira consulta.",
  "Escolhesse você sem precisar continuar pesquisando.",
];

const searchTerms = [
  "Nutricionista em [cidade]",
  "Nutricionista esportiva",
  "Nutricionista para emagrecimento",
  "Nutricionista infantil",
  "Nutricionista online",
];

const adsHow = [
  "Criamos campanhas focadas no seu público.",
  "Seus anúncios aparecem para quem pesquisa pela sua especialidade.",
  "Direcionamos os cliques para uma landing page feita para gerar contato.",
  "Acompanhamos resultados e ajustamos a campanha continuamente.",
];

const siteFeatures = [
  "Design exclusivo",
  "Landing Page",
  "Site institucional",
  "WhatsApp integrado",
  "Formulário de contato",
  "Google Maps",
  "Agendamento online",
  "SEO",
  "Blog",
  "Página para especialidades",
  "Área para depoimentos",
  "Totalmente responsivo",
  "Alta velocidade",
];

const steps = [
  {
    n: "01",
    title: "Conversamos",
    text: "Entendemos sua especialidade, seus objetivos e o momento da sua carreira.",
  },
  {
    n: "02",
    title: "Planejamos",
    text: "Definimos a melhor estrutura para apresentar seu trabalho.",
  },
  {
    n: "03",
    title: "Criamos",
    text: "Desenvolvemos o design, os textos e toda a experiência do seu site.",
  },
  {
    n: "04",
    title: "Publicamos",
    text: "Seu site fica pronto para receber pacientes do Google, Instagram e indicações.",
  },
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
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Quero conversar
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative min-h-[72svh] overflow-hidden pt-28 pb-20 sm:min-h-[76svh] sm:pt-32 sm:pb-28">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <Image
              src="/hero/hero-nutricionistas.png"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[88%_top] sm:object-[80%_8%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,19,17,0.95)_0%,rgba(20,19,17,0.8)_36%,rgba(20,19,17,0.28)_68%,rgba(20,19,17,0.38)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_0%,rgba(196,165,116,0.12),transparent_45%),linear-gradient(180deg,rgba(20,19,17,0.2)_0%,rgba(20,19,17,0.68)_100%)]" />
          </div>
          <div className="grain" />
          <div className="section-pad relative">
            <div className="container-site">
              <div className="max-w-3xl">
                <Reveal>
                  <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
                    Especialistas em sites e landing pages para nutricionistas
                  </p>
                  <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] font-medium tracking-[-0.04em] text-mist">
                    Desenvolvemos sites profissionais para nutricionistas que
                    querem transmitir mais{" "}
                    <span className="text-teal">confiança</span> e conquistar{" "}
                    <span className="text-teal">novos pacientes</span>.
                  </h1>
                  <p className="mt-8 max-w-2xl text-base leading-relaxed text-mist/55 sm:mt-9 sm:text-lg">
                    Criamos sites e landing pages exclusivos para nutricionistas
                    que desejam fortalecer sua presença online, aparecer melhor
                    no Google e facilitar o contato de novos pacientes.
                  </p>
                </Reveal>

                <Reveal delay={100}>
                  <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                    {heroFeatures.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-2 text-sm text-mist/70"
                      >
                        <Check className="size-3.5 text-teal" strokeWidth={2.4} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={160}>
                  <div className="mt-10">
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      Quero um Site Profissional
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section
          id="projetos"
          className="relative border-y border-white/6 bg-surface py-20 sm:py-28"
        >
          <div className="section-pad">
            <div className="container-site">
              <Reveal className="max-w-3xl">
                <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
                  Projetos
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                  Conheça alguns sites que desenvolvemos para nutricionistas
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist/60">
                  Seu site é muito mais do que um cartão de visitas. É o lugar
                  onde muitas pessoas decidem se entram em contato com você ou
                  continuam procurando outra nutricionista.
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
                  <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    Quero um site como esses
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Situations */}
        <section className="relative py-20 sm:py-28">
          <div className="section-pad">
            <div className="container-site grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <Reveal>
                <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
                  Diagnóstico
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                  Talvez você já tenha pensado isso...
                </h2>
                <p className="mt-5 text-base leading-relaxed text-mist/60">
                  Se você se identificou com algumas dessas situações, saiba que
                  isso é mais comum do que parece. Você não precisa trabalhar
                  mais — precisa mostrar melhor o excelente trabalho que já faz.
                </p>
              </Reveal>

              <Stagger as="ul" className="space-y-3" stagger={0.05}>
                {situations.map((item) => (
                  <StaggerItem key={item} as="li">
                    <div className="flex gap-3 border border-white/8 bg-elevated/50 px-4 py-4 text-sm leading-relaxed text-mist/70">
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center border border-teal/50 text-[0.65rem] text-teal">
                        ✓
                      </span>
                      {item}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Imagine */}
        <section className="relative border-y border-white/6 bg-surface py-20 sm:py-28">
          <div className="section-pad">
            <div className="container-site max-w-3xl">
              <Reveal>
                <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                  Imagine se...
                </h2>
                <p className="mt-5 text-base leading-relaxed text-mist/60">
                  Imagine se, quando alguém pesquisasse seu nome:
                </p>
              </Reveal>

              <Reveal delay={80}>
                <ul className="mt-6 space-y-3">
                  {imagineItems.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
                <p className="mt-8 text-base leading-relaxed text-mist/60">
                  É exatamente essa experiência que um bom site proporciona.
                </p>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">
                  Quero um Site Profissional
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Google Ads */}
        <section id="google-ads" className="relative">
          <div className="relative flex min-h-[420px] items-center overflow-hidden py-16 sm:aspect-[21/9] sm:min-h-0 sm:py-0">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <Image
                src="/hero/hero-nutricionistas.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-[92%_62%] sm:object-[88%_58%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,19,17,0.96)_0%,rgba(20,19,17,0.82)_32%,rgba(20,19,17,0.22)_62%,rgba(20,19,17,0.35)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_0%,rgba(196,165,116,0.1),transparent_45%),linear-gradient(180deg,rgba(20,19,17,0.15)_0%,rgba(20,19,17,0.55)_100%)]" />
            </div>
            <div className="grain" />
            <div className="section-pad relative w-full py-10 sm:py-14">
              <div className="container-site">
                <div className="max-w-3xl">
                  <Reveal>
                    <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
                      Google Ads
                    </p>
                    <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                      Seja encontrada por quem já está procurando uma nutricionista
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist/60 sm:text-lg">
                      Ter um site profissional é o primeiro passo. O segundo é
                      fazer com que as pessoas certas encontrem você.
                    </p>
                  </Reveal>
                  <Reveal delay={100}>
                    <a
                      href={WA_ADS}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary mt-9 inline-flex"
                    >
                      Quero atrair mais pacientes pelo Google
                    </a>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-y border-white/6 bg-surface py-20 sm:py-28">
            <div className="section-pad">
              <div className="container-site max-w-3xl">
                <Reveal>
                  <p className="text-base leading-relaxed text-mist/60">
                    Todos os dias, milhares de pessoas pesquisam no Google por
                    termos como:
                  </p>
                </Reveal>

                <Reveal delay={80}>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {searchTerms.map((term) => (
                      <li
                        key={term}
                        className="border border-white/10 bg-ink px-3 py-2 text-sm text-mist/70"
                      >
                        {term}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={120} className="mt-10">
                  <p className="text-base leading-relaxed text-mist/60">
                    Essas pessoas já decidiram que querem marcar uma consulta.
                    Elas só estão escolhendo com quem. É aí que o Google Ads
                    pode fazer toda a diferença — você aparece no momento em que
                    alguém está procurando pelo seu atendimento.
                  </p>
                  <h3 className="mt-10 font-display text-xl font-medium tracking-[-0.02em]">
                    Como funciona?
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {adsHow.map((item) => (
                      <CheckItem key={item}>{item}</CheckItem>
                    ))}
                  </ul>
                </Reveal>

                <Reveal
                  delay={160}
                  className="mt-12 border border-teal/25 bg-ink/70 p-6 sm:p-8"
                >
                  <h3 className="font-display text-xl font-medium tracking-[-0.02em] sm:text-2xl">
                    Site + Google Ads: uma combinação muito mais eficiente
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-mist/60">
                    Um anúncio leva a pessoa até o seu site. O site transmite
                    confiança. E essa confiança aumenta as chances de a visita
                    se transformar em um contato.
                  </p>
                  <a
                    href={WA_ADS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-7 inline-flex"
                  >
                    Quero atrair mais pacientes pelo Google
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto */}
        <section className="relative border-y border-white/6 bg-surface py-20 sm:py-28">
          <div className="section-pad">
            <Reveal className="container-site max-w-3xl">
              <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
                Nossa entrega
              </p>
              <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                É exatamente isso que criamos
              </h2>
              <p className="mt-5 text-base leading-relaxed text-mist/60">
                Na EvoluiLab, desenvolvemos sites e landing pages para
                nutricionistas que querem passar mais confiança, valorizar seu
                trabalho e facilitar o contato com novos pacientes.
              </p>
              <p className="mt-4 text-base leading-relaxed text-mist/60">
                Cada projeto é personalizado. Nada de modelos prontos. Cada
                detalhe é pensado para que seu site represente a qualidade do
                atendimento que você oferece no consultório.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Features */}
        <section className="relative py-20 sm:py-28">
          <div className="section-pad">
            <div className="container-site">
              <Reveal className="max-w-2xl">
                <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
                  Entrega
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                  O que seu site pode ter
                </h2>
              </Reveal>

              <Stagger
                as="ul"
                className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
                stagger={0.04}
              >
                {siteFeatures.map((item) => (
                  <StaggerItem key={item} as="li">
                    <div className="flex h-full items-center gap-3 border border-white/8 bg-elevated/40 px-4 py-3.5 text-sm text-mist/75">
                      <Check className="size-4 shrink-0 text-teal" strokeWidth={2.2} />
                      {item}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal delay={100}>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">
                  Quero um Site Profissional
                </a>
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
                  Processo
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                  Como funciona
                </h2>
              </Reveal>

              <Stagger
                as="ol"
                className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
                stagger={0.1}
              >
                {steps.map((step) => (
                  <StaggerItem key={step.n} as="li">
                    <p className="font-display text-4xl font-medium tracking-[-0.05em] text-teal/35">
                      {step.n}
                    </p>
                    <h3 className="mt-4 font-display text-xl font-medium tracking-[-0.02em]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist/55">
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
              <Reveal>
                <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
                  Depoimentos
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                  O que nossas clientes dizem
                </h2>
              </Reveal>

              <Stagger as="ul" className="mt-12 max-w-4xl space-y-10" stagger={0.1}>
                {testimonials.map((item) => (
                  <StaggerItem key={item.name} as="li">
                    <blockquote className="border-t border-white/8 pt-8">
                      <p className="text-teal tracking-[0.2em]">★★★★★</p>
                      <p className="mt-4 font-display text-[clamp(1.15rem,2.2vw,1.5rem)] leading-[1.4] font-medium tracking-[-0.02em] text-mist/90">
                        “{item.quote}”
                      </p>
                      <footer className="mt-5">
                        <cite className="font-display text-base font-medium not-italic">
                          {item.name}
                        </cite>
                        <p className="mt-1 text-sm text-mist/45">{item.place}</p>
                      </footer>
                    </blockquote>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative border-y border-white/6 bg-surface py-20 sm:py-28">
          <div className="section-pad">
            <div className="container-site max-w-3xl">
              <Reveal>
                <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
                  FAQ
                </p>
                <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                  Perguntas frequentes
                </h2>
              </Reveal>
              <Reveal delay={80} className="mt-10">
                <NutricionistasFaq />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(196,165,116,0.12),transparent_50%)]"
          />
          <div className="section-pad relative">
            <Reveal className="container-site max-w-3xl text-center">
              <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                Seu trabalho merece uma presença profissional
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-mist/60">
                Seu paciente pesquisa antes de escolher. Quando ele encontrar
                você, a primeira impressão precisa transmitir a mesma confiança
                que você oferece no atendimento.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-mist/60">
                Vamos conversar sobre o seu projeto?
              </p>
              <Button asChild size="lg" className="mt-9 h-11 rounded-md px-7">
                <a href={WA} target="_blank" rel="noopener noreferrer">
                  Quero um Site Profissional
                </a>
              </Button>
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
                Especialistas em sites e landing pages para nutricionistas.
              </p>
            </div>
            <div className="sm:text-right">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-mist/55 transition hover:text-teal"
              >
                WhatsApp: (11) 99927-8282
              </a>
              <a
                href="mailto:suporteevoluilab@gmail.com"
                className="mt-2 block text-sm text-mist/55 transition hover:text-teal"
              >
                E-mail: suporteevoluilab@gmail.com
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
