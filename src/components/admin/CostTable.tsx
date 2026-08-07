"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  labelCostType,
  labelPaidBy,
  labelPaymentStatus,
} from "@/lib/admin-labels";
import { deleteCostAction } from "@/lib/admin-actions";
import { formatCurrency, formatDate } from "@/lib/format";
import type { CostEntry } from "@/generated/prisma";
import { CostForm } from "./CostForm";
import { useState } from "react";

export function CostTable({ items }: { items: CostEntry[] }) {
  const router = useRouter();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  if (items.length === 0) {
    return (
      <p className="border border-dashed border-white/10 px-4 py-10 text-center text-sm text-mist/45">
        Nenhum lançamento encontrado com esses filtros.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <article key={item.id} className="border border-white/8 bg-surface p-4">
          {editingId === item.id ? (
            <CostForm
              initial={item}
              onDone={() => setEditingId(null)}
            />
          ) : (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-medium">
                    {item.description}
                  </h3>
                  <span className="rounded border border-teal/30 px-2 py-0.5 text-[0.65rem] tracking-wide text-teal uppercase">
                    {labelCostType(item.type)}
                  </span>
                </div>
                <p className="mt-2 text-sm text-mist/55">
                  {formatDate(item.paymentDate)} · {labelPaidBy(item.paidBy)} ·{" "}
                  {labelPaymentStatus(item.paymentStatus)}
                </p>
                {item.observation && (
                  <p className="mt-2 text-sm text-mist/45">{item.observation}</p>
                )}
              </div>
              <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                <p className="font-display text-xl text-teal">
                  {formatCurrency(item.amount)}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingId(item.id)}
                    className="rounded-md border border-white/12 px-3 py-1.5 text-xs text-mist/70 hover:border-teal/40"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    disabled={pending}
                    onClick={() => {
                      const fd = new FormData();
                      fd.set("id", item.id);
                      startTransition(async () => {
                        await deleteCostAction(fd);
                        router.refresh();
                      });
                    }}
                    className="rounded-md border border-red-400/30 px-3 py-1.5 text-xs text-red-300/80 hover:border-red-300/50"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
