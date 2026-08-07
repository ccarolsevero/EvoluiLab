"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#cases", label: "Cases" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/8 bg-ink/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="section-pad">
        <div className="container-site flex h-[4.25rem] items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav-link uppercase">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="hidden h-9 rounded-md px-4 text-xs font-semibold tracking-[0.06em] sm:inline-flex"
            >
              <Link href="#contato">Fale conosco</Link>
            </Button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/12 text-mist lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 h-px w-full bg-current transition ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute top-1.5 left-0 h-px w-full bg-current transition ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-full bg-current transition ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`section-pad border-t border-white/5 bg-ink/95 lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-3 text-sm font-medium tracking-[0.06em] text-mist/75 uppercase transition hover:bg-elevated hover:text-mist"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-3 h-11 rounded-md">
            <Link href="#contato" onClick={() => setOpen(false)}>
              Fale conosco
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
