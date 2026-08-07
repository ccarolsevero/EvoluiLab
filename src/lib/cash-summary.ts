import { prisma } from "@/lib/db";

/** Status de cliente que contam como dinheiro já no caixa */
const RECEIVED_CLIENT_STATUSES = ["PAGO", "PIX", "PARCELADO_CARTAO"] as const;

/**
 * Em caixa = receitas confirmadas de clientes − despesas já pagas (custo/pró-labore).
 * Previsto = em caixa − despesas pendentes/atrasadas + receitas ainda a receber.
 */
export async function getCashSummary() {
  const [
    receivedClients,
    pendingClients,
    paidExpenses,
    pendingExpenses,
    cashWriteOffs,
  ] = await Promise.all([
    prisma.client.aggregate({
      where: { paymentStatus: { in: [...RECEIVED_CLIENT_STATUSES] } },
      _sum: { totalValue: true },
      _count: true,
    }),
    prisma.client.aggregate({
      where: { paymentStatus: "PENDENTE" },
      _sum: { totalValue: true },
      _count: true,
    }),
    prisma.costEntry.aggregate({
      where: {
        type: { in: ["CUSTO", "PROLABORE"] },
        paymentStatus: "PAGO",
        relatedCostId: null,
      },
      _sum: { amount: true },
      _count: true,
    }),
    prisma.costEntry.aggregate({
      where: {
        type: { in: ["CUSTO", "PROLABORE"] },
        paymentStatus: { in: ["PENDENTE", "ATRASADO"] },
        relatedCostId: null,
      },
      _sum: { amount: true },
      _count: true,
    }),
    prisma.costEntry.aggregate({
      where: { type: "FUNDO_CAIXA" },
      _sum: { amount: true },
      _count: true,
    }),
  ]);

  const receitasConfirmadas = receivedClients._sum.totalValue || 0;
  const receitasPrevistas = pendingClients._sum.totalValue || 0;
  const despesasPagas = paidExpenses._sum.amount || 0;
  const despesasPrevistas = pendingExpenses._sum.amount || 0;
  const baixasCaixa = cashWriteOffs._sum.amount || 0;

  const emCaixa = receitasConfirmadas - despesasPagas;
  const saldoPrevisto = emCaixa - despesasPrevistas + receitasPrevistas;

  return {
    receitasConfirmadas,
    receitasPrevistas,
    despesasPagas,
    despesasPrevistas,
    baixasCaixa,
    emCaixa,
    saldoPrevisto,
    counts: {
      clientesRecebidos: receivedClients._count,
      clientesPendentes: pendingClients._count,
      despesasPagas: paidExpenses._count,
      despesasPrevistas: pendingExpenses._count,
      baixasCaixa: cashWriteOffs._count,
    },
  };
}
