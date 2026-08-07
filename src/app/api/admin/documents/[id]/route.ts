import { NextRequest, NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { isAdminAuthenticated } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { id } = await context.params;
  const doc = await prisma.clientDocument.findUnique({ where: { id } });
  if (!doc) {
    return NextResponse.json({ error: "Não encontrado" }, { status: 404 });
  }

  const filePath = path.join(process.cwd(), "uploads", "clientes", doc.fileName);
  try {
    const data = await readFile(filePath);
    return new NextResponse(data, {
      headers: {
        "Content-Type": doc.mimeType,
        "Content-Disposition": `inline; filename="${encodeURIComponent(doc.originalName)}"`,
      },
    });
  } catch {
    return NextResponse.json({ error: "Arquivo ausente" }, { status: 404 });
  }
}
