/** WhatsApp comercial EvoluiLab — +55 11 99927-8282 */
export const WHATSAPP_NUMBER = "5511999278282";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function whatsappLink(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export const WA_HOME = whatsappLink(
  "Olá, EvoluiLab! Quero evoluir minha presença digital."
);

export const WA_ADVOGADOS = whatsappLink(
  "Olá, EvoluiLab! Quero um site profissional para meu escritório de advocacia."
);

export const WA_ADVOGADOS_ADS = whatsappLink(
  "Olá, EvoluiLab! Quero saber mais sobre Google Ads para advogados."
);

export const WA_NUTRI = whatsappLink(
  "Olá, EvoluiLab! Quero um site profissional para nutricionistas."
);

export const WA_NUTRI_ADS = whatsappLink(
  "Olá, EvoluiLab! Quero atrair mais pacientes pelo Google Ads."
);

export const WA_NUTRI_DIAGNOSTICO = whatsappLink(
  "Olá! Quero um diagnóstico gratuito do meu site (ou da falta dele) como nutricionista."
);
