"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import {
  DOCUMENT_KIND_OPTIONS,
  labelDocumentKind,
} from "@/lib/admin-labels";
import {
  deleteClientDocumentAction,
  uploadClientDocumentAction,
} from "@/lib/admin-actions";
import { formatDate } from "@/lib/format";
import type { ClientDocument } from "@/generated/prisma";

export function DocumentUpload({
  clientId,
  documents,
}: {
  clientId: string;
  documents: ClientDocument[];
}) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  return (
    <div className="space-y-6">
      <form
        className="grid gap-3 border border-white/10 bg-surface p-5 sm:grid-cols-[1fr_1fr_auto]"
        action={(formData) => {
          startTransition(async () => {
            const result = await uploadClientDocumentAction(formData);
            if (!result.ok) {
              setError(result.error);
              return;
            }
            setError(null);
            router.refresh();
          });
        }}
      >
        <input type="hidden" name="clientId" value={clientId} />
        <div>
          <label className="mb-1.5 block text-xs text-mist/55" htmlFor="kind">
            Tipo
          </label>
          <select
            id="kind"
            name="kind"
            className="h-10 w-full rounded-md border border-white/12 bg-ink px-3 text-sm"
            defaultValue="DOCUMENTO"
          >
            {DOCUMENT_KIND_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs text-mist/55" htmlFor="file">
            Arquivo
          </label>
          <input
            id="file"
            name="file"
            type="file"
            required
            className="block w-full text-sm text-mist/70 file:mr-3 file:rounded-md file:border-0 file:bg-teal/20 file:px-3 file:py-2 file:text-teal"
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            disabled={pending}
            className="btn-primary w-full disabled:opacity-60 sm:w-auto"
          >
            {pending ? "Enviando…" : "Anexar"}
          </button>
        </div>
        {error && <p className="sm:col-span-3 text-sm text-red-300">{error}</p>}
      </form>

      <ul className="space-y-3">
        {documents.length === 0 && (
          <li className="text-sm text-mist/45">
            Nenhum documento ou anamnese anexado.
          </li>
        )}
        {documents.map((doc) => (
          <li
            key={doc.id}
            className="flex flex-wrap items-center justify-between gap-3 border border-white/8 bg-ink/40 px-4 py-3 text-sm"
          >
            <div>
              <p className="font-medium text-mist/90">{doc.originalName}</p>
              <p className="mt-1 text-mist/45">
                {labelDocumentKind(doc.kind)} · {formatDate(doc.createdAt)} ·{" "}
                {Math.round(doc.size / 1024)} KB
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href={`/api/admin/documents/${doc.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-white/12 px-3 py-1.5 text-xs text-mist/70 hover:border-teal/40"
              >
                Abrir
              </a>
              <button
                type="button"
                disabled={pending}
                onClick={() => {
                  const fd = new FormData();
                  fd.set("id", doc.id);
                  fd.set("clientId", clientId);
                  startTransition(async () => {
                    await deleteClientDocumentAction(fd);
                    router.refresh();
                  });
                }}
                className="rounded-md border border-red-400/30 px-3 py-1.5 text-xs text-red-300/80"
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
