const ALLOWED_MIME = new Set([
  "application/pdf",
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/heic",
  "image/heif",
]);

const ALLOWED_EXT = new Set([
  ".pdf",
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".heic",
  ".heif",
]);

export const MAX_CLIENT_DOCUMENT_BYTES = 8 * 1024 * 1024; // 8 MB

export function resolveDocumentMime(file: File): string {
  if (file.type && ALLOWED_MIME.has(file.type.toLowerCase())) {
    return file.type.toLowerCase() === "image/jpg" ? "image/jpeg" : file.type;
  }

  const lower = file.name.toLowerCase();
  const ext = lower.slice(lower.lastIndexOf("."));
  switch (ext) {
    case ".pdf":
      return "application/pdf";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".webp":
      return "image/webp";
    case ".gif":
      return "image/gif";
    case ".heic":
      return "image/heic";
    case ".heif":
      return "image/heif";
    default:
      return "";
  }
}

export function validateClientDocument(file: File): string | null {
  if (!file || file.size === 0) return "Selecione um arquivo.";
  if (file.size > MAX_CLIENT_DOCUMENT_BYTES) {
    return "Arquivo muito grande. Máximo: 8 MB.";
  }

  const mime = resolveDocumentMime(file);
  const lower = file.name.toLowerCase();
  const ext = lower.slice(lower.lastIndexOf("."));

  if (!mime || !ALLOWED_EXT.has(ext)) {
    return "Envie apenas PDF ou imagem (JPG, PNG, WEBP ou GIF).";
  }

  return null;
}
