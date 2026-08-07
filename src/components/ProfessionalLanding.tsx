import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { Logo } from "@/components/Logo";
import { ProfessionalFaq } from "@/components/ProfessionalFaq";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import {
  SHARED_LANDING,
  type ProfessionalLandingConfig,
} from "@/lib/professional-landings";
import { SITE_NAME, SITE_URL } from "@/lib/site";

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-mist/70 sm:text-base">
      <Check className="mt-0.5 size-4 shrink-0 text-teal" strokeWidth={2.2} />
      <span>{children}</span>
    </li>
  );
}

export function ProfessionalLanding({
  config,
}: {
  config: ProfessionalLandingConfig;
}) {
  const WA = config.wa;
  const WA_ADS = config.waAds;
  const pageUrl = `${SITE_URL}/${config.slug}`;
  const adsCta =
    config.audienceLabel === "clientes"
      ? "Quero atrair mais clientes pelo Google"
      : "Quero atrair mais pacientes pelo Google";
  const steps = SHARED_LANDING.steps(config.stepsAudience);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: config.metadata.title,
      description: config.metadata.description,
      url: pageUrl,
      inLanguage: "pt-BR",
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Sites e landing pages para ${config.pluralLabel}`,
      description: config.metadata.description,
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        telephone: "+5511999278282",
        email: "suporteevoluilab@gmail.com",
      },
      areaServed: "BR",
      url: pageUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: config.faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
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
                Falar com Especialista
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
              src={config.heroImage}
              alt=""
              fill
              priority
              fetchPriority="high"
              quality={95}
              sizes="100vw"
              className="object-cover object-[80%_12%] sm:object-[78%_8%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,19,17,0.92)_0%,rgba(20,19,17,0.72)_34%,rgba(20,19,17,0.18)_62%,rgba(20,19,17,0.12)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,19,17,0.12)_0%,rgba(20,19,17,0.35)_100%)]" />
          </div>
          <div className="section-pad relative">
            <div className="container-site">
              <div className="max-w-3xl">
                <Reveal>
                  <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
                    {config.hero.eyebrow}
                  </p>
                  <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.05] font-medium tracking-[-0.04em] text-mist">
                    {config.hero.titleBefore}{" "}
                    <span className="text-teal">{config.hero.highlightA}</span>{" "}
                    {config.hero.titleMiddle}{" "}
                    <span className="text-teal">{config.hero.highlightB}</span>
                    {config.hero.titleAfter ?? ""}
                  </h1>
                </Reveal>

                <Reveal delay={100}>
                  <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                    {SHARED_LANDING.heroFeatures.map((item) => (
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
                  Conheça alguns sites que desenvolvemos para {config.pluralLabel}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist/60">
                  Seu site é muito mais do que um cartão de visitas. É o lugar
                  onde muitas pessoas decidem se entram em contato com você ou
                  continuam procurando outro {config.singularLabel}.
                </p>
              </Reveal>

              <Stagger
                as="ul"
                className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                stagger={0.08}
              >
                {config.portfolio.map((item) => (
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
                {config.situations.map((item) => (
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
                  {config.imagineItems.map((item) => (
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
                src={config.adsImage}
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
                      Seja encontrado por quem já está procurando{" "}
                      {config.pluralLabel}
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
                      {adsCta}
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
                    {config.searchTerms.map((term) => (
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
                    Essas pessoas já decidiram que querem{" "}
                    {config.audienceLabel === "clientes"
                      ? "contratar um profissional"
                      : "marcar uma consulta"}
                    . Elas só estão escolhendo com quem. É aí que o Google Ads
                    pode fazer toda a diferença — você aparece no momento em que
                    alguém está procurando pelo seu atendimento.
                  </p>
                  <h3 className="mt-10 font-display text-xl font-medium tracking-[-0.02em]">
                    Como funciona?
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {SHARED_LANDING.adsHow.map((item) => (
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
                    {adsCta}
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
                {config.manifesto.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-mist/60">
                {config.manifesto.p1}
              </p>
              <p className="mt-4 text-base leading-relaxed text-mist/60">
                {config.manifesto.p2}
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
                {SHARED_LANDING.siteFeatures.map((item) => (
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
                  O que nossos clientes dizem
                </h2>
              </Reveal>

              <Stagger as="ul" className="mt-12 max-w-4xl space-y-10" stagger={0.1}>
                {config.testimonials.map((item) => (
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
                <ProfessionalFaq items={config.faqs} />
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
                {config.cta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-mist/60">
                {config.cta.p1}
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-mist/60">
                {config.cta.p2}
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
                {config.footerBlurb}
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
              <p className="mt-2 text-sm text-mist/55">Política de Privacidade</p>
              <p className="mt-1 text-sm text-mist/55">Termos de Uso</p>
            </div>
          </div>
          <div className="container-site mt-10 border-t border-white/6 pt-6 text-xs text-mist/55">
            © {new Date().getFullYear()} EvoluiLab — Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}
