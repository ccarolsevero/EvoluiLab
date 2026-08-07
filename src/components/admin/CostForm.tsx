"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import {
  COST_TYPE_OPTIONS,
  PAID_BY_OPTIONS,
  PAYMENT_STATUS_OPTIONS,
} from "@/lib/admin-labels";
import { createCostAction, updateCostAction } from "@/lib/admin-actions";
import type { CostEntry } from "@/generated/prisma";
import { toDateInputValue } from "@/lib/format";

const field =
  "h-10 w-full rounded-md border border-white/12 bg-ink px-3 text-sm outline-none focus:border-teal/50";
const labelCls = "mb-1.5 block text-xs tracking-wide text-mist/55";

type Props = {
  initial?: CostEntry | null;
  onDone?: () => void;
};

export function CostForm({ initial = null, onDone }: Props) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const editing = Boolean(initial);

  return (
    <form
      className="grid gap-4 border border-white/10 bg-surface p-5 sm:grid-cols-2"
      action={(formData) => {
        startTransition(async () => {
          const result = editing
            ? await updateCostAction(formData)
            : await createCostAction(formData);
          if (!result.ok) {
            setError(result.error);
            return;
          }
          setError(null);
          onDone?.();
          router.refresh();
        });
      }}
    >
      {initial && <input type="hidden" name="id" value={initial.id} />}

      <div>
        <label className={labelCls} htmlFor="amount">
          Valor (R$)
        </label>
        <input
          id="amount"
          name="amount"
          type="number"
          step="0.01"
          min="0"
          required
          defaultValue={initial?.amount ?? ""}
          className={field}
        />
      </div>

      <div>
        <label className={labelCls} htmlFor="paymentDate">
          Data de pagamento
        </label>
        <input
          id="paymentDate"
          name="paymentDate"
          type="date"
          required
          defaultValue={
            initial ? toDateInputValue(initial.paymentDate) : ""
          }
          className={field}
        />
      </div>

      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="description">
          Descrição
        </label>
        <input
          id="description"
          name="description"
          required
          defaultValue={initial?.description ?? ""}
          className={field}
        />
      </div>

      <div>
        <label className={labelCls} htmlFor="type">
          Tipo
        </label>
        <select
          id="type"
          name="type"
          defaultValue={initial?.type ?? "CUSTO"}
          className={field}
        >
          {COST_TYPE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelCls} htmlFor="paidBy">
          Quem pagou / retirou
        </label>
        <select
          id="paidBy"
          name="paidBy"
          defaultValue={initial?.paidBy ?? "LUANA"}
          className={field}
        >
          {PAID_BY_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
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
          {PAYMENT_STATUS_OPTIONS.map((opt) => (
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
            : editing
              ? "Salvar alterações"
              : "Adicionar lançamento"}
        </button>
      </div>
    </form>
  );
}
