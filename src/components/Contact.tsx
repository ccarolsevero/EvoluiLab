"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const segment = String(data.get("segment") || "").trim();
    const message = String(data.get("message") || "").trim();

    const text = encodeURIComponent(
      `Olá, EvoluiLab! Sou ${name || "interessado(a)"}.${
        segment ? ` Segmento: ${segment}.` : ""
      } ${message || "Quero evoluir minha presença digital."}`
    );

    window.open(`https://wa.me/5500000000000?text=${text}`, "_blank");
    setSent(true);
  }

  return (
    <section id="contato" className="relative overflow-hidden border-t border-white/6 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(196,165,116,0.1),transparent_55%)]"
      />
      <div className="section-pad relative">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-20">
          <Reveal >
            <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
              Contato
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.8vw,3.4rem)] leading-[1.08] font-medium tracking-[-0.035em]">
              Vamos fazer sua presença digital{" "}
              <span className="text-teal">evoluir</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-mist/55">
              Conte um pouco do seu negócio. Retornamos com o melhor caminho
              para site, landing ou sistema.
            </p>
            <p className="mt-10 text-sm tracking-wide text-teal/55">
              Estratégia · Tecnologia · Resultados
            </p>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              className="border border-teal/20 bg-elevated/80 p-6 sm:p-8"
            >
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-mist/70">
                    Nome
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Seu nome"
                    className="h-11 rounded-md border-white/10 bg-ink"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="segment" className="text-mist/70">
                    Segmento
                  </Label>
                  <Input
                    id="segment"
                    name="segment"
                    placeholder="Ex.: clínica, advocacia, consultoria"
                    className="h-11 rounded-md border-white/10 bg-ink"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message" className="text-mist/70">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="O que você precisa?"
                    className="min-h-28 rounded-md border-white/10 bg-ink"
                  />
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                className="mt-7 h-11 w-full rounded-md text-sm font-semibold tracking-[0.04em]"
              >
                Quero evoluir
              </Button>
              {sent && (
                <p className="mt-3 text-center text-sm text-mist/55">
                  Abrindo o WhatsApp… se não abrir, verifique o bloqueio de
                  pop-ups.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
