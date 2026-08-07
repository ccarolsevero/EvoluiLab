import Link from "next/link";
import { AdminNav } from "@/components/admin/AdminNav";
import { prisma } from "@/lib/db";
import { formatCurrency } from "@/lib/format";
import {
  labelClientPayment,
  labelCostType,
  labelPaidBy,
} from "@/lib/admin-labels";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [costs, clients, costAgg, clientAgg] = await Promise.all([
    prisma.costEntry.findMany({
      orderBy: { paymentDate: "desc" },
      take: 5,
    }),
    prisma.client.findMany({
      orderBy: { hireDate: "desc" },
      take: 5,
    }),
    prisma.costEntry.groupBy({
      by: ["type"],
      _sum: { amount: true },
      _count: true,
    }),
    prisma.client.aggregate({
      _sum: { totalValue: true },
      _count: true,
    }),
  ]);

  const totalCosts = costAgg.reduce((s, row) => s + (row._sum.amount || 0), 0);
  const byType = Object.fromEntries(
    costAgg.map((row) => [row.type, row._sum.amount || 0])
  );

  return (
    <>
      <AdminNav current="/admin" />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
          Visão geral
        </p>
        <h1 className="mt-3 font-display text-3xl font-medium tracking-[-0.03em]">
          Painel administrativo
        </h1>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total de custos" value={formatCurrency(totalCosts)} />
          <StatCard
            label="Pró-labore"
            value={formatCurrency(byType.PROLABORE || 0)}
          />
          <StatCard
            label="Fundo de caixa"
            value={formatCurrency(byType.FUNDO_CAIXA || 0)}
          />
          <StatCard
            label="Clientes / valor"
            value={`${clientAgg._count} · ${formatCurrency(clientAgg._sum.totalValue || 0)}`}
          />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <section className="border border-white/8 bg-surface p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-xl font-medium">Últimos custos</h2>
              <Link href="/admin/custos" className="text-sm text-teal hover:underline">
                Ver todos
              </Link>
            </div>
            <ul className="mt-4 space-y-3">
              {costs.length === 0 && (
                <li className="text-sm text-mist/45">Nenhum custo cadastrado.</li>
              )}
              {costs.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start justify-between gap-3 border-t border-white/6 pt-3 text-sm"
                >
                  <div>
                    <p className="font-medium text-mist/90">{item.description}</p>
                    <p className="mt-1 text-mist/45">
                      {labelCostType(item.type)} · {labelPaidBy(item.paidBy)}
                    </p>
                  </div>
                  <p className="shrink-0 text-teal">{formatCurrency(item.amount)}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="border border-white/8 bg-surface p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-xl font-medium">Últimos clientes</h2>
              <Link
                href="/admin/clientes"
                className="text-sm text-teal hover:underline"
              >
                Ver todos
              </Link>
            </div>
            <ul className="mt-4 space-y-3">
              {clients.length === 0 && (
                <li className="text-sm text-mist/45">Nenhum cliente cadastrado.</li>
              )}
              {clients.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start justify-between gap-3 border-t border-white/6 pt-3 text-sm"
                >
                  <div>
                    <Link
                      href={`/admin/clientes/${item.id}`}
                      className="font-medium text-mist/90 hover:text-teal"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 text-mist/45">
                      {item.service} · {labelClientPayment(item.paymentStatus)}
                    </p>
                  </div>
                  <p className="shrink-0 text-teal">
                    {formatCurrency(item.totalValue)}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/8 bg-surface p-5">
      <p className="text-[0.7rem] tracking-[0.16em] text-mist/40 uppercase">
        {label}
      </p>
      <p className="mt-3 font-display text-2xl font-medium tracking-[-0.02em] text-teal">
        {value}
      </p>
    </div>
  );
}
