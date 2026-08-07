import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminNav } from "@/components/admin/AdminNav";
import { ClientForm } from "@/components/admin/ClientForm";
import { DocumentUpload } from "@/components/admin/DocumentUpload";
import { deleteClientAction } from "@/lib/admin-actions";
import { labelClientPayment } from "@/lib/admin-labels";
import { prisma } from "@/lib/db";
import { formatCurrency, formatDate } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function ClienteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const client = await prisma.client.findUnique({
    where: { id },
    include: { documents: { orderBy: { createdAt: "desc" } } },
  });

  if (!client) notFound();

  const values = JSON.parse(client.valuesJson || "[]") as number[];

  return (
    <>
      <AdminNav current="/admin/clientes" />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Link
              href="/admin/clientes"
              className="text-sm text-mist/45 hover:text-mist"
            >
              ← Voltar para clientes
            </Link>
            <h1 className="mt-3 font-display text-3xl font-medium tracking-[-0.03em]">
              {client.name}
            </h1>
            <p className="mt-2 text-sm text-mist/55">
              {client.service} · {formatDate(client.hireDate)} ·{" "}
              {labelClientPayment(client.paymentStatus)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[0.65rem] tracking-[0.14em] text-mist/40 uppercase">
              Valor total
            </p>
            <p className="mt-1 font-display text-2xl text-teal">
              {formatCurrency(client.totalValue)}
            </p>
            <form action={deleteClientAction} className="mt-3">
              <input type="hidden" name="id" value={client.id} />
              <button
                type="submit"
                className="text-xs text-red-300/80 hover:text-red-300"
              >
                Excluir cliente
              </button>
            </form>
          </div>
        </div>

        {values.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {values.map((value, index) => (
              <span
                key={`${value}-${index}`}
                className="border border-white/10 px-3 py-1.5 text-sm text-mist/70"
              >
                Parcela/item {index + 1}: {formatCurrency(value)}
              </span>
            ))}
          </div>
        )}

        {client.observation && (
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mist/55">
            {client.observation}
          </p>
        )}

        <section className="mt-10">
          <h2 className="font-display text-xl font-medium">Editar dados</h2>
          <div className="mt-4">
            <ClientForm initial={client} mode="edit" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-medium">
            Documentos e anamneses
          </h2>
          <p className="mt-1 text-sm text-mist/50">
            Anexe contratos, briefings, anamneses e demais arquivos do cliente.
          </p>
          <div className="mt-4">
            <DocumentUpload
              clientId={client.id}
              documents={client.documents}
            />
          </div>
        </section>
      </main>
    </>
  );
}
