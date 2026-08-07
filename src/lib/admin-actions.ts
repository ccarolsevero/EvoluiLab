"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { mkdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  createAdminSession,
  destroyAdminSession,
  isAdminAuthenticated,
  verifyAdminCredentials,
} from "@/lib/auth";
import { prisma } from "@/lib/db";
import {
  servicesFromFormData,
  summarizeServices,
} from "@/lib/client-services";
import type {
  ClientPaymentStatus,
  CostType,
  DocumentKind,
  PaidBy,
  PaymentStatus,
} from "@/generated/prisma";

async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }
}

export async function loginAction(formData: FormData) {
  const user = String(formData.get("user") || "").trim();
  const password = String(formData.get("password") || "");

  if (!verifyAdminCredentials(user, password)) {
    return { ok: false as const, error: "Usuário ou senha inválidos." };
  }

  await createAdminSession();
  redirect("/admin");
}

export async function logoutAction() {
  await destroyAdminSession();
  redirect("/admin/login");
}

async function syncCashWriteOff(sourceId: string) {
  const source = await prisma.costEntry.findUnique({ where: { id: sourceId } });
  if (!source) return;

  // Baixas do próprio fundo de caixa não geram outra baixa
  if (source.type === "FUNDO_CAIXA" || source.relatedCostId) {
    return;
  }

  const existing = await prisma.costEntry.findFirst({
    where: { relatedCostId: source.id, type: "FUNDO_CAIXA" },
  });

  if (source.paymentStatus === "PAGO") {
    const payload = {
      amount: source.amount,
      description: `Baixa no caixa: ${source.description}`,
      paymentDate: source.paymentDate,
      paymentStatus: "PAGO" as PaymentStatus,
      paidBy: source.paidBy,
      type: "FUNDO_CAIXA" as CostType,
      observation: `Baixa automática do lançamento (${source.type}).`,
      relatedCostId: source.id,
    };

    if (existing) {
      await prisma.costEntry.update({
        where: { id: existing.id },
        data: payload,
      });
    } else {
      await prisma.costEntry.create({ data: payload });
    }
    return;
  }

  if (existing) {
    await prisma.costEntry.delete({ where: { id: existing.id } });
  }
}

export async function createCostAction(formData: FormData) {
  await requireAdmin();

  const amount = Number(String(formData.get("amount") || "").replace(",", "."));
  const description = String(formData.get("description") || "").trim();
  const paymentDate = String(formData.get("paymentDate") || "");
  const paymentStatus = String(formData.get("paymentStatus") || "PENDENTE") as PaymentStatus;
  const paidBy = String(formData.get("paidBy") || "LUANA") as PaidBy;
  const type = String(formData.get("type") || "CUSTO") as CostType;
  const observation = String(formData.get("observation") || "").trim();

  if (!Number.isFinite(amount) || amount <= 0 || !description || !paymentDate) {
    return { ok: false as const, error: "Preencha valor, descrição e data." };
  }

  const created = await prisma.costEntry.create({
    data: {
      amount,
      description,
      paymentDate: new Date(`${paymentDate}T12:00:00`),
      paymentStatus,
      paidBy,
      type,
      observation,
    },
  });

  await syncCashWriteOff(created.id);

  revalidatePath("/admin");
  revalidatePath("/admin/custos");
  return { ok: true as const };
}

export async function updateCostAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const amount = Number(String(formData.get("amount") || "").replace(",", "."));
  const description = String(formData.get("description") || "").trim();
  const paymentDate = String(formData.get("paymentDate") || "");
  const paymentStatus = String(formData.get("paymentStatus") || "PENDENTE") as PaymentStatus;
  const paidBy = String(formData.get("paidBy") || "LUANA") as PaidBy;
  const type = String(formData.get("type") || "CUSTO") as CostType;
  const observation = String(formData.get("observation") || "").trim();

  if (!id || !Number.isFinite(amount) || amount <= 0 || !description || !paymentDate) {
    return { ok: false as const, error: "Dados inválidos." };
  }

  const current = await prisma.costEntry.findUnique({ where: { id } });
  if (!current) {
    return { ok: false as const, error: "Lançamento não encontrado." };
  }

  // Não editar manualmente baixas automáticas como se fossem custo comum
  if (current.relatedCostId) {
    return {
      ok: false as const,
      error: "Esta é uma baixa automática do caixa. Altere o lançamento original.",
    };
  }

  await prisma.costEntry.update({
    where: { id },
    data: {
      amount,
      description,
      paymentDate: new Date(`${paymentDate}T12:00:00`),
      paymentStatus,
      paidBy,
      type,
      observation,
    },
  });

  await syncCashWriteOff(id);

  revalidatePath("/admin");
  revalidatePath("/admin/custos");
  return { ok: true as const };
}

export async function deleteCostAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  if (!id) return { ok: false as const, error: "ID inválido." };
  await prisma.costEntry.delete({ where: { id } });
  revalidatePath("/admin");
  revalidatePath("/admin/custos");
  return { ok: true as const };
}

export async function createClientAction(formData: FormData) {
  await requireAdmin();

  const name = String(formData.get("name") || "").trim();
  const hireDate = String(formData.get("hireDate") || "");
  const paymentStatus = String(
    formData.get("paymentStatus") || "PENDENTE"
  ) as ClientPaymentStatus;
  const observation = String(formData.get("observation") || "").trim();
  const { lines, serviceLabel, totalValue, valuesJson } = summarizeServices(
    servicesFromFormData(formData)
  );

  if (!name || !hireDate || lines.length === 0 || totalValue <= 0) {
    return {
      ok: false as const,
      error: "Preencha nome, data e ao menos um serviço com valor.",
    };
  }

  const client = await prisma.client.create({
    data: {
      name,
      hireDate: new Date(`${hireDate}T12:00:00`),
      service: serviceLabel,
      valuesJson,
      totalValue,
      paymentStatus,
      observation,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/admin/clientes");
  redirect(`/admin/clientes/${client.id}`);
}

export async function updateClientAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const name = String(formData.get("name") || "").trim();
  const hireDate = String(formData.get("hireDate") || "");
  const paymentStatus = String(
    formData.get("paymentStatus") || "PENDENTE"
  ) as ClientPaymentStatus;
  const observation = String(formData.get("observation") || "").trim();
  const { lines, serviceLabel, totalValue, valuesJson } = summarizeServices(
    servicesFromFormData(formData)
  );

  if (!id || !name || !hireDate || lines.length === 0 || totalValue <= 0) {
    return {
      ok: false as const,
      error: "Preencha nome, data e ao menos um serviço com valor.",
    };
  }

  await prisma.client.update({
    where: { id },
    data: {
      name,
      hireDate: new Date(`${hireDate}T12:00:00`),
      service: serviceLabel,
      valuesJson,
      totalValue,
      paymentStatus,
      observation,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/admin/clientes");
  revalidatePath(`/admin/clientes/${id}`);
  return { ok: true as const };
}

export async function deleteClientAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  if (!id) return;

  const docs = await prisma.clientDocument.findMany({ where: { clientId: id } });
  for (const doc of docs) {
    const filePath = path.join(process.cwd(), "uploads", "clientes", doc.fileName);
    try {
      await unlink(filePath);
    } catch {
      // ignore missing files
    }
  }

  await prisma.client.delete({ where: { id } });
  revalidatePath("/admin");
  revalidatePath("/admin/clientes");
  redirect("/admin/clientes");
}

export async function uploadClientDocumentAction(formData: FormData) {
  await requireAdmin();
  const clientId = String(formData.get("clientId") || "");
  const kind = String(formData.get("kind") || "DOCUMENTO") as DocumentKind;
  const file = formData.get("file");

  if (!clientId || !(file instanceof File) || file.size === 0) {
    return { ok: false as const, error: "Selecione um arquivo." };
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const safeBase = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const fileName = `${Date.now()}-${safeBase}`;
  const dir = path.join(process.cwd(), "uploads", "clientes");
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, fileName), bytes);

  await prisma.clientDocument.create({
    data: {
      clientId,
      kind,
      originalName: file.name,
      fileName,
      mimeType: file.type || "application/octet-stream",
      size: file.size,
    },
  });

  revalidatePath(`/admin/clientes/${clientId}`);
  return { ok: true as const };
}

export async function deleteClientDocumentAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const clientId = String(formData.get("clientId") || "");
  if (!id) return { ok: false as const, error: "ID inválido." };

  const doc = await prisma.clientDocument.findUnique({ where: { id } });
  if (!doc) return { ok: false as const, error: "Arquivo não encontrado." };

  const filePath = path.join(process.cwd(), "uploads", "clientes", doc.fileName);
  try {
    await unlink(filePath);
  } catch {
    // ignore
  }

  await prisma.clientDocument.delete({ where: { id } });
  revalidatePath(`/admin/clientes/${clientId || doc.clientId}`);
  return { ok: true as const };
}
