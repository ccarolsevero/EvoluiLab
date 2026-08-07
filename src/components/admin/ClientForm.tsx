"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition } from "react";
import { CLIENT_PAYMENT_OPTIONS } from "@/lib/admin-labels";
import { createClientAction, updateClientAction } from "@/lib/admin-actions";
import {
  parseClientServices,
  type ClientServiceLine,
} from "@/lib/client-services";
import type { Client } from "@/generated/prisma";
import { formatCurrency, toDateInputValue } from "@/lib/format";

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
  const [services, setServices] = useState<ClientServiceLine[]>(() =>
    parseClientServices(
      initial?.valuesJson,
      initial?.service ?? "",
      initial?.totalValue ?? 0
    )
  );

  const totalValue = useMemo(
    () =>
      services.reduce(
        (sum, line) =>
          sum +
          (Number.isFinite(line.amount) && line.amount > 0 ? line.amount : 0),
        0
      ),
    [services]
  );

  function updateService(
    index: number,
    patch: Partial<ClientServiceLine>
  ) {
    setServices((prev) =>
      prev.map((line, i) => (i === index ? { ...line, ...patch } : line))
    );
  }

  function addService() {
    setServices((prev) => [...prev, { name: "", amount: 0 }]);
  }

  function removeService(index: number) {
    setServices((prev) =>
      prev.length <= 1 ? prev : prev.filter((_, i) => i !== index)
    );
  }

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
        <div className="mb-2 flex items-center justify-between gap-3">
          <label className={labelCls + " mb-0"}>Serviços</label>
          <button
            type="button"
            onClick={addService}
            className="text-xs tracking-wide text-teal hover:text-mist"
          >
            + Adicionar serviço
          </button>
        </div>

        <div className="space-y-3">
          {services.map((line, index) => (
            <div
              key={index}
              className="grid gap-3 border border-white/8 bg-ink/40 p-3 sm:grid-cols-[1fr_9rem_auto]"
            >
              <div>
                <label className={labelCls} htmlFor={`serviceName-${index}`}>
                  Serviço {index + 1}
                </label>
                <input
                  id={`serviceName-${index}`}
                  name="serviceName"
                  required
                  placeholder="Ex.: Site institucional"
                  value={line.name}
                  onChange={(e) =>
                    updateService(index, { name: e.target.value })
                  }
                  className={field}
                />
              </div>
              <div>
                <label className={labelCls} htmlFor={`serviceAmount-${index}`}>
                  Valor (R$)
                </label>
                <input
                  id={`serviceAmount-${index}`}
                  name="serviceAmount"
                  type="number"
                  step="0.01"
                  min="0"
                  required
                  value={line.amount || ""}
                  onChange={(e) =>
                    updateService(index, {
                      amount: Number(e.target.value.replace(",", ".")),
                    })
                  }
                  className={field}
                />
              </div>
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={() => removeService(index)}
                  disabled={services.length <= 1}
                  className="h-10 px-2 text-xs text-mist/45 hover:text-red-300 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-3 text-sm text-mist/55">
          Valor total:{" "}
          <span className="font-display text-base text-teal">
            {formatCurrency(totalValue)}
          </span>
        </p>
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
