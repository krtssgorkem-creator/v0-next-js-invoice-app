// lib/types.ts
export type Currency = "usd" | "eur" | "try";
export type Status = "pending" | "paid";

export interface Invoice {
  id: string;
  clientName: string;
  clientEmail: string;
  clientCountry: string; // ISO-2
  description: string;
  amount: number;
  currency: Currency;
  status: Status;
  payInfo?: string;
  createdAt: string; // ISO date
}
