"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RealtimeRender } from "./RealtimeRender";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="topo"
      className="relative min-h-[100svh] overflow-hidden pt-24 pb-16 sm:pt-28 lg:pb-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_40%_0%,rgba(240,235,227,0.07),transparent_52%),radial-gradient(ellipse_at_90%_80%,rgba(90,85,75,0.14),transparent_42%),linear-gradient(180deg,#141311_0%,#1a1916_50%,#141311_100%)]"
      />
      <div className="grain" />

      <div className="section-pad relative flex min-h-[calc(100svh-6rem)] items-center">
        <div className="container-site grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="max-w-[36rem]">
            <motion.h1
              className="font-display text-[clamp(2.6rem,5.6vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.04em] text-mist"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              Sua presença digital evolui. Seu negócio cresce.
            </motion.h1>

            <motion.p
              className="mt-8 max-w-[27rem] text-[1.05rem] leading-[1.7] text-mist/55 sm:text-lg"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease }}
            >
              Sites, landing pages e sistemas feitos com precisão — para
              profissionais e empresas que levam resultado a sério.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-3"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22, ease }}
            >
              <Button
                asChild
                size="lg"
                className="h-11 rounded-md px-6 text-sm font-semibold tracking-[0.04em]"
              >
                <Link href="#contato">Quero evoluir</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 rounded-md border-white/20 bg-transparent px-6 text-sm font-semibold tracking-[0.04em] text-mist hover:bg-white/5 hover:text-mist"
              >
                <Link href="#cases">Ver cases</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="lg:justify-self-end"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease }}
          >
            <RealtimeRender />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
