"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { CLIENT_PAYMENT_OPTIONS } from "@/lib/admin-labels";
import { createClientAction, updateClientAction } from "@/lib/admin-actions";
import type { Client } from "@/generated/prisma";
import { toDateInputValue } from "@/lib/format";

const field =
  "h-10 w-full rounded-md border border-white/12 bg-ink px-3 text-sm outline-none focus:border-teal/50";
const labelCls = "mb-1.5 block text-xs tracking-wide text-mist/55";

type Props = {
  initial?: Client | null;
  mode?: "create" | "edit";
};

export function ClientForm({ initial = null, mode = "create" }: Props) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const valuesDefault = initial
    ? (JSON.parse(initial.valuesJson || "[]") as number[]).join(", ")
    : "";

  return (
    <form
      className="grid gap-4 border border-white/10 bg-surface p-5 sm:grid-cols-2"
      action={(formData) => {
        startTransition(async () => {
          if (mode === "edit") {
            const result = await updateClientAction(formData);
            if (!result.ok) {
              setError(result.error);
              return;
            }
            setError(null);
            router.refresh();
            return;
          }
          // create redirects on success
          const result = await createClientAction(formData);
          if (result && !result.ok) setError(result.error);
        });
      }}
    >
      {initial && <input type="hidden" name="id" value={initial.id} />}

      <div>
        <label className={labelCls} htmlFor="name">
          Nome
        </label>
        <input
          id="name"
          name="name"
          required
          defaultValue={initial?.name ?? ""}
          className={field}
        />
      </div>

      <div>
        <label className={labelCls} htmlFor="hireDate">
          Data de contratação
        </label>
        <input
          id="hireDate"
          name="hireDate"
          type="date"
          required
          defaultValue={initial ? toDateInputValue(initial.hireDate) : ""}
          className={field}
        />
      </div>

      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="service">
          Serviço
        </label>
        <input
          id="service"
          name="service"
          required
          placeholder="Ex.: Site institucional + landing"
          defaultValue={initial?.service ?? ""}
          className={field}
        />
      </div>

      <div>
        <label className={labelCls} htmlFor="values">
          Valores (separados por vírgula)
        </label>
        <input
          id="values"
          name="values"
          placeholder="1500, 500, 300"
          defaultValue={valuesDefault}
          className={field}
        />
      </div>

      <div>
        <label className={labelCls} htmlFor="totalValue">
          Valor total (R$)
        </label>
        <input
          id="totalValue"
          name="totalValue"
          type="number"
          step="0.01"
          min="0"
          required
          defaultValue={initial?.totalValue ?? ""}
          className={field}
        />
      </div>

      <div>
        <label className={labelCls} htmlFor="paymentStatus">
          Status de pagamento
        </label>
        <select
          id="paymentStatus"
          name="paymentStatus"
          defaultValue={initial?.paymentStatus ?? "PENDENTE"}
          className={field}
        >
          {CLIENT_PAYMENT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="observation">
          Observação
        </label>
        <textarea
          id="observation"
          name="observation"
          rows={3}
          defaultValue={initial?.observation ?? ""}
          className="min-h-20 w-full rounded-md border border-white/12 bg-ink px-3 py-2 text-sm outline-none focus:border-teal/50"
        />
      </div>

      {error && <p className="sm:col-span-2 text-sm text-red-300">{error}</p>}

      <div className="sm:col-span-2">
        <button type="submit" disabled={pending} className="btn-primary disabled:opacity-60">
          {pending
            ? "Salvando…"
            : mode === "edit"
              ? "Salvar cliente"
              : "Cadastrar cliente"}
        </button>
      </div>
    </form>
  );
}
