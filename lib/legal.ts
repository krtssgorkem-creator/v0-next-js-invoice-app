// lib/legal.ts
export const gdprConsent =
  "I consent to the processing of my personal data for the purpose of invoicing and payment, in accordance with GDPR. You can request access or deletion at any time.";

export function legalNoticeByCountry(country: string): string {
  switch (country) {
    case "US":
      return "B2B digital services supplied by a Turkish supplier to a US business are typically outside the scope of US VAT/Sales tax on the supplier. Buyer may be responsible for any use tax in their state. Invoice issued without VAT.";
    case "DE":
      return "Reverse charge (EU VAT, Article 196): The customer (business in DE) is liable for VAT. No VAT charged by the supplier (TR).";
    case "TR":
      return "Türkiye içi hizmetlerde KDV beyanı ticari duruma göre değişir. Bu MVP faturası bilgi amaçlıdır.";
    default:
      return "Cross-border B2B digital services: VAT may be reverse-charged to the customer depending on jurisdiction. No VAT collected by the supplier unless required by local law.";
  }
}
