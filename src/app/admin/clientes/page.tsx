import Link from "next/link";
import { AdminNav } from "@/components/admin/AdminNav";
import { ClientForm } from "@/components/admin/ClientForm";
import { CLIENT_PAYMENT_OPTIONS, labelClientPayment } from "@/lib/admin-labels";
import { prisma } from "@/lib/db";
import { formatCurrency, formatDate } from "@/lib/format";
import type { ClientPaymentStatus, Prisma } from "@/generated/prisma";

export const dynamic = "force-dynamic";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function one(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ClientesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const q = (one(params.q) || "").trim();
  const status = one(params.status) as ClientPaymentStatus | undefined;
  const dateFrom = one(params.dateFrom);
  const dateTo = one(params.dateTo);
  const minAmount = one(params.minAmount);
  const maxAmount = one(params.maxAmount);

  const where: Prisma.ClientWhereInput = {
    AND: [
      q
        ? {
            OR: [
              { name: { contains: q } },
              { service: { contains: q } },
              { observation: { contains: q } },
            ],
          }
        : {},
      status ? { paymentStatus: status } : {},
      minAmount ? { totalValue: { gte: Number(minAmount) } } : {},
      maxAmount ? { totalValue: { lte: Number(maxAmount) } } : {},
      dateFrom || dateTo
        ? {
            hireDate: {
              ...(dateFrom ? { gte: new Date(`${dateFrom}T00:00:00`) } : {}),
              ...(dateTo ? { lte: new Date(`${dateTo}T23:59:59`) } : {}),
            },
          }
        : {},
    ],
  };

  const [clients, agg] = await Promise.all([
    prisma.client.findMany({
      where,
      orderBy: { hireDate: "desc" },
      include: { _count: { select: { documents: true } } },
    }),
    prisma.client.aggregate({
      where,
      _sum: { totalValue: true },
      _count: true,
    }),
  ]);

  return (
    <>
      <AdminNav current="/admin/clientes" />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-[0.7rem] font-medium tracking-[0.22em] text-teal uppercase">
              Carteira
            </p>
            <h1 className="mt-3 font-display text-3xl font-medium tracking-[-0.03em]">
              Clientes
            </h1>
          </div>
          <div className="text-right">
            <p className="text-sm text-mist/45">
              {agg._count} cliente(s) ·{" "}
              <span className="text-teal">
                {formatCurrency(agg._sum.totalValue || 0)}
              </span>
            </p>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="font-display text-xl font-medium">Novo cliente</h2>
          <div className="mt-4">
            <ClientForm />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-medium">Buscar clientes</h2>
          <form className="mt-4 grid gap-3 border border-white/8 bg-surface p-4 sm:grid-cols-2 lg:grid-cols-3">
            <input
              name="q"
              defaultValue={q}
              placeholder="Nome, serviço ou observação"
              className="h-10 rounded-md border border-white/12 bg-ink px-3 text-sm outline-none focus:border-teal/50 sm:col-span-2"
            />
            <select
              name="status"
              defaultValue={status || ""}
              className="h-10 rounded-md border border-white/12 bg-ink px-3 text-sm"
            >
              <option value="">Status (todos)</option>
              {CLIENT_PAYMENT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <input
              name="dateFrom"
              type="date"
              defaultValue={dateFrom || ""}
              className="h-10 rounded-md border border-white/12 bg-ink px-3 text-sm"
            />
            <input
              name="dateTo"
              type="date"
              defaultValue={dateTo || ""}
              className="h-10 rounded-md border border-white/12 bg-ink px-3 text-sm"
            />
            <input
              name="minAmount"
              type="number"
              step="0.01"
              defaultValue={minAmount || ""}
              placeholder="Valor mín."
              className="h-10 rounded-md border border-white/12 bg-ink px-3 text-sm"
            />
            <input
              name="maxAmount"
              type="number"
              step="0.01"
              defaultValue={maxAmount || ""}
              placeholder="Valor máx."
              className="h-10 rounded-md border border-white/12 bg-ink px-3 text-sm"
            />
            <div className="flex gap-2 sm:col-span-2 lg:col-span-3">
              <button type="submit" className="btn-primary">
                Buscar
              </button>
              <Link href="/admin/clientes" className="btn-ghost">
                Limpar
              </Link>
            </div>
          </form>

          <ul className="mt-6 space-y-3">
            {clients.length === 0 && (
              <li className="border border-dashed border-white/10 px-4 py-10 text-center text-sm text-mist/45">
                Nenhum cliente encontrado.
              </li>
            )}
            {clients.map((client) => (
              <li key={client.id}>
                <Link
                  href={`/admin/clientes/${client.id}`}
                  className="flex flex-col gap-3 border border-white/8 bg-surface p-4 transition hover:border-teal/30 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-display text-lg font-medium">
                      {client.name}
                    </h3>
                    <p className="mt-1 text-sm text-mist/55">
                      {client.service} · contratado em{" "}
                      {formatDate(client.hireDate)} ·{" "}
                      {labelClientPayment(client.paymentStatus)} ·{" "}
                      {client._count.documents} anexo(s)
                    </p>
                  </div>
                  <p className="font-display text-xl text-teal">
                    {formatCurrency(client.totalValue)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
