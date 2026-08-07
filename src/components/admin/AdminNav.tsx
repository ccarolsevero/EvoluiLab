import Link from "next/link";
import { logoutAction } from "@/lib/admin-actions";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/custos", label: "Custos" },
  { href: "/admin/clientes", label: "Clientes" },
];

export function AdminNav({ current }: { current?: string }) {
  return (
    <header className="border-b border-white/8 bg-ink/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link href="/admin" className="font-display text-lg font-medium tracking-tight">
            <span className="text-mist">evolui</span>
            <span className="text-teal">lab</span>
            <span className="ml-2 text-xs tracking-[0.18em] text-mist/40 uppercase">
              Admin
            </span>
          </Link>
          <nav className="flex flex-wrap gap-1">
            {links.map((link) => {
              const active = current === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-1.5 text-sm transition ${
                    active
                      ? "bg-teal/15 text-teal"
                      : "text-mist/55 hover:bg-white/5 hover:text-mist"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/" className="text-sm text-mist/45 transition hover:text-mist">
            Ver site
          </Link>
          <form action={logoutAction}>
            <button
              type="submit"
              className="rounded-md border border-white/12 px-3 py-1.5 text-sm text-mist/70 transition hover:border-teal/40 hover:text-mist"
            >
              Sair
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
