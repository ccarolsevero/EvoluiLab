import Link from "next/link";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";

const footerLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#cases", label: "Cases" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/6 bg-ink py-14">
      <div className="section-pad">
        <Reveal>
          <div className="container-site flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Logo />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist/45">
                Sites e sistemas de alta performance para profissionais e
                empresas.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Rodapé">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-mist/45 transition hover:text-teal"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="container-site mt-12 flex flex-col gap-2 border-t border-white/6 pt-6 text-xs text-mist/30 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} EvoluiLab. Todos os direitos reservados.</p>
            <p className="text-teal/45">Estratégia · Tecnologia · Resultados</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
