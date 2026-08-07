export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formatDate(value: Date | string) {
  const date = typeof value === "string" ? new Date(value) : value;
  return new Intl.DateTimeFormat("pt-BR").format(date);
}

export function toDateInputValue(value: Date | string) {
  const date = typeof value === "string" ? new Date(value) : value;
  return date.toISOString().slice(0, 10);
}

export function parseValuesList(raw: string): number[] {
  return raw
    .split(/[,\n;]+/)
    .map((part) => part.trim().replace(/\./g, "").replace(",", "."))
    .map((part) => Number(part))
    .filter((n) => Number.isFinite(n) && n > 0);
}
