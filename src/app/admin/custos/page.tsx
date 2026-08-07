import Link from "next/link";
import { AdminNav } from "@/components/admin/AdminNav";
import { CostForm } from "@/components/admin/CostForm";
import { CostTable } from "@/components/admin/CostTable";
import {
  COST_TYPE_OPTIONS,
  PAID_BY_OPTIONS,
  PAYMENT_STATUS_OPTIONS,
} from "@/lib/admin-labels";
import { prisma } from "@/lib/db";
import { formatCurrency } from "@/lib/format";
import type { CostType, PaidBy, PaymentStatus, Prisma } from "@/generated/prisma";

export const dynamic = "force-dynamic";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function one(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function CustosPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const q = (one(params.q) || "").trim();
  const paidBy = one(params.paidBy) as PaidBy | undefined;
  const type = one(params.type) as CostType | undefined;
  const status = one(params.status) as PaymentStatus | undefined;
  const minAmount = one(params.minAmount);
  const maxAmount = one(params.maxAmount);
  const dateFrom = one(params.dateFrom);
  const dateTo = one(params.dateTo);

  const where: Prisma.CostEntryWhereInput = {
    AND: [
      q
        ? {
            OR: [
              { description: { contains: q } },
              { observation: { contains: q } },
            ],
          }
        : {},
      paidBy ? { paidBy } : {},
      type ? { type } : {},
      status ? { paymentStatus: status } : {},
      minAmount ? { amount: { gte: Number(minAmount) } } : {},
      maxAmount ? { amount: { lte: Number(maxAmount) } } : {},
      dateFrom || dateTo
        ? {
            paymentDate: {
              ...(dateFrom ? { gte: new Date(`${dateFrom}T00:00:00`) } : {}),
              ...(dateTo ? { lte: new Date(`${dateTo}T23:59:59`) } : {}),
            },
          }
        : {},
    ],
  };

  const [items, totals] = await Promise.all([
    prisma.costEntry.findMany({
      where,
      orderBy: { paymentDate: "desc" },
    }),
    prisma.costEntry.groupBy({
      by: ["type"],
      where,
      _sum: { amount: true },
    }),
  ]);

  const total = totals.reduce((s, row) => s + (row._sum.amount || 0), 0);
  const byType = Object.fromEntries(
    totals.map((row) => [row.type, row._sum.amount || 0])
  );

  return (
    <>
      <AdminNav current="/admin/custos" />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
              Financeiro
            </p>
            <h1 className="mt-3 font-display text-3xl font-medium tracking-[-0.03em]">
              Custos e retiradas
            </h1>
          </div>
          <Link href="/admin" className="text-sm text-mist/45 hover:text-mist">
            Voltar ao dashboard
          </Link>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-4">
          <TotalChip label="Total filtrado" value={formatCurrency(total)} />
          <TotalChip
            label="Custos"
            value={formatCurrency(byType.CUSTO || 0)}
          />
          <TotalChip
            label="Pró-labore"
            value={formatCurrency(byType.PROLABORE || 0)}
          />
          <TotalChip
            label="Fundo de caixa"
            value={formatCurrency(byType.FUNDO_CAIXA || 0)}
          />
        </div>

        <section className="mt-10">
          <h2 className="font-display text-xl font-medium">Novo lançamento</h2>
          <p className="mt-1 text-sm text-mist/50">
            Inclui custos, pró-labore (Luana, Andressa, Ana Carolina) e fundo de
            caixa. Ao marcar um custo ou pró-labore como <strong>Pago</strong>, a
            baixa no fundo de caixa é gerada automaticamente.
          </p>
          <div className="mt-4">
            <CostForm />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-medium">Buscar e filtrar</h2>
          <form className="mt-4 grid gap-3 border border-white/8 bg-surface p-4 sm:grid-cols-2 lg:grid-cols-4">
            <input
              name="q"
              defaultValue={q}
              placeholder="Descrição ou observação"
              className="h-10 rounded-md border border-white/12 bg-ink px-3 text-sm outline-none focus:border-teal/50 sm:col-span-2"
            />
            <input
              name="minAmount"
              type="number"
              step="0.01"
              defaultValue={minAmount || ""}
              placeholder="Valor mín."
              className="h-10 rounded-md border border-white/12 bg-ink px-3 text-sm outline-none focus:border-teal/50"
            />
            <input
              name="maxAmount"
              type="number"
              step="0.01"
              defaultValue={maxAmount || ""}
              placeholder="Valor máx."
              className="h-10 rounded-md border border-white/12 bg-ink px-3 text-sm outline-none focus:border-teal/50"
            />
            <input
              name="dateFrom"
              type="date"
              defaultValue={dateFrom || ""}
              className="h-10 rounded-md border border-white/12 bg-ink px-3 text-sm outline-none focus:border-teal/50"
            />
            <input
              name="dateTo"
              type="date"
              defaultValue={dateTo || ""}
              className="h-10 rounded-md border border-white/12 bg-ink px-3 text-sm outline-none focus:border-teal/50"
            />
            <select
              name="paidBy"
              defaultValue={paidBy || ""}
              className="h-10 rounded-md border border-white/12 bg-ink px-3 text-sm outline-none focus:border-teal/50"
            >
              <option value="">Quem pagou (todos)</option>
              {PAID_BY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <select
              name="type"
              defaultValue={type || ""}
              className="h-10 rounded-md border border-white/12 bg-ink px-3 text-sm outline-none focus:border-teal/50"
            >
              <option value="">Tipo (todos)</option>
              {COST_TYPE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <select
              name="status"
              defaultValue={status || ""}
              className="h-10 rounded-md border border-white/12 bg-ink px-3 text-sm outline-none focus:border-teal/50"
            >
              <option value="">Status (todos)</option>
              {PAYMENT_STATUS_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="flex gap-2 sm:col-span-2 lg:col-span-4">
              <button type="submit" className="btn-primary">
                Aplicar filtros
              </button>
              <Link href="/admin/custos" className="btn-ghost">
                Limpar
              </Link>
            </div>
          </form>

          <div className="mt-6">
            <CostTable items={items} />
          </div>
        </section>
      </main>
    </>
  );
}

function TotalChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/8 bg-surface px-4 py-3">
      <p className="text-[0.65rem] tracking-[0.14em] text-mist/40 uppercase">
        {label}
      </p>
      <p className="mt-1 font-display text-lg text-teal">{value}</p>
    </div>
  );
}
