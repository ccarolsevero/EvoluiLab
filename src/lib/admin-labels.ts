import type {
  ClientPaymentStatus,
  CostType,
  DocumentKind,
  PaidBy,
  PaymentStatus,
} from "@/generated/prisma";

export const PAID_BY_OPTIONS: { value: PaidBy; label: string }[] = [
  { value: "LUANA", label: "Luana" },
  { value: "ANDRESSA", label: "Andressa" },
  { value: "ANA_CAROLINA", label: "Ana Carolina" },
];

export const COST_TYPE_OPTIONS: { value: CostType; label: string }[] = [
  { value: "CUSTO", label: "Custo" },
  { value: "PROLABORE", label: "Pró-labore" },
  { value: "FUNDO_CAIXA", label: "Fundo de caixa" },
];

export const PAYMENT_STATUS_OPTIONS: { value: PaymentStatus; label: string }[] =
  [
    { value: "PENDENTE", label: "Pendente" },
    { value: "PAGO", label: "Pago" },
    { value: "ATRASADO", label: "Atrasado" },
  ];

export const CLIENT_PAYMENT_OPTIONS: {
  value: ClientPaymentStatus;
  label: string;
}[] = [
  { value: "PENDENTE", label: "Pendente" },
  { value: "PAGO", label: "Pago" },
  { value: "PARCELADO_CARTAO", label: "Parcelamento cartão" },
  { value: "PIX", label: "Pix" },
];

export const DOCUMENT_KIND_OPTIONS: { value: DocumentKind; label: string }[] = [
  { value: "DOCUMENTO", label: "Documento" },
  { value: "ANAMNESE", label: "Anamnese" },
];

export function labelPaidBy(value: PaidBy) {
  return PAID_BY_OPTIONS.find((o) => o.value === value)?.label ?? value;
}

export function labelCostType(value: CostType) {
  return COST_TYPE_OPTIONS.find((o) => o.value === value)?.label ?? value;
}

export function labelPaymentStatus(value: PaymentStatus) {
  return PAYMENT_STATUS_OPTIONS.find((o) => o.value === value)?.label ?? value;
}

export function labelClientPayment(value: ClientPaymentStatus) {
  return CLIENT_PAYMENT_OPTIONS.find((o) => o.value === value)?.label ?? value;
}

export function labelDocumentKind(value: DocumentKind) {
  return DOCUMENT_KIND_OPTIONS.find((o) => o.value === value)?.label ?? value;
}
