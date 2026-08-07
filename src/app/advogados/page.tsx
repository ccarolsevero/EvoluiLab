import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { AdvogadosFaq } from "@/components/AdvogadosFaq";
import { Logo } from "@/components/Logo";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { WA_ADVOGADOS, WA_ADVOGADOS_ADS } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Sites e landing pages para advogados | EvoluiLab",
  description:
    "Sites profissionais para advogados e escritórios que desejam transmitir credibilidade, aparecer melhor no Google e facilitar o contato com novos clientes.",
  keywords: [
    "site para advogado",
    "landing page advocacia",
    "site escritório de advocacia",
    "Google Ads para advogados",
    "EvoluiLab",
  ],
  openGraph: {
    title: "Sites e landing pages para advogados | EvoluiLab",
    description:
      "Projetos exclusivos para advogados e escritórios que querem credibilidade e presença no Google.",
    locale: "pt_BR",
    type: "website",
  },
};

const WA = WA_ADVOGADOS;
const WA_ADS = WA_ADVOGADOS_ADS;

const heroFeatures = [
  "Pagamento único",
  "Sem mensalidade",
  "Design exclusivo",
  "SEO incluso",
];

const situations = [
  "Ainda não tenho um site profissional.",
  "Meu site está antigo e não representa a qualidade do meu trabalho.",
  "Quando pesquisam meu nome no Google, encontram poucas informações.",
  "Meu escritório depende quase só de indicações.",
  "Quero transmitir mais credibilidade online.",
  "Quero facilitar o contato de quem procura meus serviços.",
  "Quero aparecer melhor nas pesquisas do Google.",
];

const firstImpression = [
  "Quais são suas áreas de atuação",
  "Como entrar em contato",
  "Onde o escritório está localizado",
  "Quem é o profissional que irá atendê-la",
  "Que existe um escritório sério por trás daquele nome",
];

const searchTerms = [
  "Advogado Trabalhista",
  "Advogado Previdenciário",
  "Advogado de Família",
  "Advogado Empresarial",
  "Advogado Imobiliário",
  "Advogado em [cidade]",
];

const adsHow = [
  "Criamos campanhas segmentadas para as áreas de atuação do escritório.",
  "Seus anúncios aparecem para quem já pesquisa por um advogado.",
  "Direcionamos o clique para uma landing page feita para gerar contato.",
  "Acompanhamos resultados e ajustamos a campanha continuamente.",
];

const siteFeatures = [
  "Design exclusivo",
  "Página Inicial",
  "Áreas de Atuação",
  "Sobre o Escritório",
  "Equipe",
  "Perfil dos Advogados",
  "Formulário de Contato",
  "WhatsApp Integrado",
  "Google Maps",
  "Blog Jurídico",
  "Perguntas Frequentes",
  "SEO",
  "Landing Pages",
  "Site Responsivo",
  "Alta Performance",
  "Pronto para Google Ads",
];

const steps = [
  {
    n: "01",
    title: "Conversamos",
    text: "Entendemos sua área de atuação, o escritório e o objetivo do projeto.",
  },
  {
    n: "02",
    title: "Planejamos",
    text: "Definimos a estrutura ideal para apresentar seus serviços com clareza.",
  },
  {
    n: "03",
    title: "Desenvolvemos",
    text: "Criamos o design, organizamos o conteúdo e desenvolvemos o site.",
  },
  {
    n: "04",
    title: "Publicamos",
    text: "Seu site fica no ar, pronto para receber visitantes e novos contatos.",
  },
];

const portfolio = [
  {
    name: "Escritório Mendes & Associados",
    area: "Direito Empresarial",
    tag: "Site institucional",
    image: "/portfolio/portfolio-mendes.png",
  },
  {
    name: "Dra. Helena Carvalho",
    area: "Direito de Família",
    tag: "Landing page",
    image: "/portfolio/portfolio-helena.png",
  },
  {
    name: "Costa Advocacia",
    area: "Direito Trabalhista",
    tag: "Site + Ads",
    image: "/portfolio/portfolio-costa.png",
  },
  {
    name: "Ribeiro & Silva",
    area: "Direito Previdenciário",
    tag: "Site institucional",
    image: "/portfolio/portfolio-ribeiro.png",
  },
  {
    name: "Dr. André Figueiredo",
    area: "Direito Imobiliário",
    tag: "Landing page",
    image: "/portfolio/portfolio-andre.png",
  },
  {
    name: "Almeida Advogados",
    area: "Direito Tributário",
    tag: "Site + blog",
    image: "/portfolio/portfolio-almeida.png",
  },
];

const testimonials = [
  {
    quote:
      "A EvoluiLab transformou a presença digital do nosso escritório. Hoje temos orgulho de apresentar o site aos clientes.",
    name: "Dr. Ricardo Mendes",
    place: "São Paulo • SP",
  },
  {
    quote:
      "O projeto ficou elegante, rápido e fácil de navegar — exatamente como imaginávamos.",
    name: "Dra. Camila Souza",
    place: "Curitiba • PR",
  },
  {
    quote:
      "Além do design, orientaram a melhor forma de apresentar o escritório e as áreas de atuação.",
    name: "Dr. Felipe Andrade",
    place: "Belo Horizonte • MG",
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

export default function AdvogadosPage() {
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
              src="/hero/hero-advogados.png"
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
                  Especialistas em sites para advogados
                </p>
                <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] font-medium tracking-[-0.04em] text-mist">
                  Seu escritório merece um site que transmita{" "}
                  <span className="text-teal">autoridade</span> e gere mais{" "}
                  <span className="text-teal">oportunidades de negócio</span>.
                </h1>
                <p className="mt-8 max-w-2xl text-base leading-relaxed text-mist/55 sm:mt-9 sm:text-lg">
                  Desenvolvemos sites e landing pages exclusivos para advogados
                  que desejam apresentar seus serviços com mais profissionalismo,
                  aparecer melhor no Google e facilitar o contato de clientes em
                  potencial.
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
                    Quero meu site
                  </a>
                </div>
              </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio intro + gallery */}
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
                  Conheça alguns projetos para advogados
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist/60">
                  O site é onde muitas pessoas formam a primeira impressão sobre
                  você e seu escritório. Por isso, cada projeto é personalizado —
                  com identidade própria e a credibilidade que a advocacia exige.
                </p>
              </Reveal>

              <Stagger
                as="ul"
                className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
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
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                    Quero um projeto como esses
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
                  Você se identifica com alguma dessas situações?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-mist/60">
                  Se respondeu &quot;sim&quot; para algumas delas, talvez seja o
                  momento de investir em um site que represente melhor o seu
                  escritório.
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

        {/* First impression */}
        <section className="relative border-y border-white/6 bg-surface py-20 sm:py-28">
          <div className="section-pad">
            <div className="container-site max-w-3xl">
              <Reveal>
                <p className="text-base leading-relaxed text-mist/65 sm:text-lg">
                  Você dedica anos ao Direito e oferece um atendimento de
                  qualidade. Sua presença na internet também precisa transmitir
                  essa confiança.
                </p>
                <h2 className="mt-8 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] font-medium tracking-[-0.03em]">
                  A primeira impressão importa
                </h2>
                <p className="mt-5 text-base leading-relaxed text-mist/60">
                  Quando alguém pesquisa seu nome no Google e encontra um site
                  organizado, a chance de contato aumenta. Um bom site deixa
                  claro rapidamente:
                </p>
              </Reveal>

              <Reveal delay={80}>
                <ul className="mt-6 space-y-3">
                  {firstImpression.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
                <p className="mt-7 text-base leading-relaxed text-mist/60">
                  É exatamente essa experiência que desenvolvemos.
                </p>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-flex">
                  Quero meu site
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Google Ads */}
        <section id="google-ads" className="relative">
          {/* Visual banner — same scheme as hero */}
          <div className="relative flex min-h-[420px] items-center overflow-hidden py-16 sm:aspect-[21/9] sm:min-h-0 sm:py-0">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <Image
                src="/hero/ads-google-advogados.png"
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
                    Seja encontrado por quem já procura um advogado
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist/60 sm:text-lg">
                    Ter um site profissional é o primeiro passo. O segundo é
                    fazer com que as pessoas certas encontrem o seu escritório.
                  </p>
                </Reveal>
                <Reveal delay={100}>
                  <a
                    href={WA_ADS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-9 inline-flex"
                  >
                    Quero saber mais sobre Google Ads
                  </a>
                </Reveal>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative border-y border-white/6 bg-surface py-20 sm:py-28">
            <div className="section-pad">
              <div className="container-site max-w-3xl">
                <Reveal>
                  <p className="text-base leading-relaxed text-mist/60">
                    Todos os dias, pessoas pesquisam no Google por termos como:
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
                    Essas pessoas já sabem que precisam de um advogado. Com
                    Google Ads, seu escritório aparece no momento certo — para
                    quem já busca os serviços que você oferece.
                  </p>
                  <h3 className="mt-10 font-display text-xl font-medium tracking-[-0.02em]">
                    Como funciona
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
                    Site + Google Ads: uma estratégia completa
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-mist/60">
                    Não basta aparecer no Google. Quando alguém clica no anúncio,
                    precisa encontrar um escritório que transmita confiança. O
                    anúncio atrai a visita; o site ajuda a transformar essa
                    visita em contato.
                  </p>
                  <a
                    href={WA_ADS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-7 inline-flex"
                  >
                    Quero saber mais sobre Google Ads
                  </a>
                </Reveal>
              </div>
            </div>
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
                <p className="mt-5 text-base leading-relaxed text-mist/60">
                  Tudo o que o escritório precisa para uma experiência
                  profissional desde o primeiro acesso.
                </p>
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
                  Quero meu site
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
                <p className="mt-5 text-base leading-relaxed text-mist/60">
                  Um processo simples para ter um site profissional sem
                  complicação.
                </p>
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
                  O que nossos clientes dizem
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
                <AdvogadosFaq />
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
                Seu escritório merece uma presença digital à altura da sua
                atuação
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-mist/60">
                Antes do contato, muitas pessoas pesquisam no Google. Quando
                encontrarem o seu escritório, a primeira impressão deve
                transmitir a mesma credibilidade do seu atendimento.
              </p>
              <Button asChild size="lg" className="mt-9 h-11 rounded-md px-7">
                <a href={WA} target="_blank" rel="noopener noreferrer">Quero meu site</a>
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
                Especialistas em sites e landing pages para advogados.
                Projetos exclusivos para transmitir credibilidade e facilitar o
                contato com novos clientes.
              </p>
            </div>
            <div className="sm:text-right">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
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
