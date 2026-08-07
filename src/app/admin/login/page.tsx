"use client";

import { useState, useTransition } from "react";
import { loginAction } from "@/lib/admin-actions";

export default function AdminLoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  return (
    <main className="flex min-h-svh items-center justify-center px-4">
      <div className="w-full max-w-md border border-white/10 bg-surface p-8">
        <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
          Painel administrativo
        </p>
        <h1 className="mt-3 font-display text-3xl font-medium tracking-[-0.03em]">
          Entrar
        </h1>
        <p className="mt-2 text-sm text-mist/55">
          Acesso restrito à equipe EvoluiLab.
        </p>

        <form
          className="mt-8 space-y-4"
          action={(formData) => {
            startTransition(async () => {
              const result = await loginAction(formData);
              if (result && !result.ok) setError(result.error);
            });
          }}
        >
          <div>
            <label htmlFor="user" className="mb-1.5 block text-sm text-mist/65">
              Usuário
            </label>
            <input
              id="user"
              name="user"
              required
              autoComplete="username"
              className="h-11 w-full rounded-md border border-white/12 bg-ink px-3 text-sm outline-none focus:border-teal/50"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm text-mist/65"
            >
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="h-11 w-full rounded-md border border-white/12 bg-ink px-3 text-sm outline-none focus:border-teal/50"
            />
          </div>
          {error && <p className="text-sm text-red-300">{error}</p>}
          <button
            type="submit"
            disabled={pending}
            className="btn-primary mt-2 w-full disabled:opacity-60"
          >
            {pending ? "Entrando…" : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}
