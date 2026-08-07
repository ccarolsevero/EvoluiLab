export type ClientServiceLine = {
  name: string;
  amount: number;
};

/** Lê valuesJson legado ([números]) ou atual ([{name, amount}]). */
export function parseClientServices(
  valuesJson: string | null | undefined,
  fallbackService = "",
  fallbackTotal = 0
): ClientServiceLine[] {
  try {
    const parsed = JSON.parse(valuesJson || "[]") as unknown;
    if (!Array.isArray(parsed) || parsed.length === 0) {
      if (fallbackService) {
        return [
          {
            name: fallbackService,
            amount: fallbackTotal > 0 ? fallbackTotal : 0,
          },
        ];
      }
      return [{ name: "", amount: 0 }];
    }

    if (typeof parsed[0] === "number") {
      const amounts = parsed.filter(
        (n): n is number => typeof n === "number" && Number.isFinite(n) && n > 0
      );
      const names = fallbackService
        .split(/\s*[·|,;/]\s*/)
        .map((s) => s.trim())
        .filter(Boolean);
      return amounts.map((amount, index) => ({
        name:
          names[index] ||
          (names[0] && amounts.length === 1
            ? names[0]
            : `Serviço ${index + 1}`),
        amount,
      }));
    }

    const lines = (parsed as Array<{ name?: unknown; amount?: unknown }>)
      .map((item) => ({
        name: String(item?.name ?? "").trim(),
        amount: Number(item?.amount),
      }))
      .filter(
        (item) => item.name || (Number.isFinite(item.amount) && item.amount > 0)
      );

    return lines.length > 0
      ? lines
      : fallbackService
        ? [{ name: fallbackService, amount: fallbackTotal || 0 }]
        : [{ name: "", amount: 0 }];
  } catch {
    return fallbackService
      ? [{ name: fallbackService, amount: fallbackTotal || 0 }]
      : [{ name: "", amount: 0 }];
  }
}

export function servicesFromFormData(formData: FormData): ClientServiceLine[] {
  const names = formData.getAll("serviceName").map((v) => String(v).trim());
  const amounts = formData.getAll("serviceAmount").map((v) =>
    Number(String(v).replace(",", "."))
  );

  const lines: ClientServiceLine[] = [];
  const len = Math.max(names.length, amounts.length);
  for (let i = 0; i < len; i++) {
    const name = names[i] || "";
    const amount = amounts[i];
    if (!name && !(Number.isFinite(amount) && amount > 0)) continue;
    lines.push({
      name,
      amount: Number.isFinite(amount) && amount > 0 ? amount : 0,
    });
  }
  return lines;
}

export function summarizeServices(lines: ClientServiceLine[]) {
  const valid = lines.filter(
    (line) => line.name && Number.isFinite(line.amount) && line.amount > 0
  );
  return {
    lines: valid,
    serviceLabel: valid.map((line) => line.name).join(" · "),
    totalValue: valid.reduce((sum, line) => sum + line.amount, 0),
    valuesJson: JSON.stringify(valid),
  };
}
