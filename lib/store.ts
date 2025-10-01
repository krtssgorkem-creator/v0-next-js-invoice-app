// lib/store.ts
import type { Invoice } from "@/lib/types";

const KEY = "sgia_invoices";

export function getInvoices(): Invoice[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Invoice[]) : [];
  } catch {
    return [];
  }
}

export function saveInvoice(inv: Invoice) {
  const list = getInvoices();
  const next = [inv, ...list];
  localStorage.setItem(KEY, JSON.stringify(next));
}

export function markPaid(id: string) {
  const list = getInvoices();
  const next = list.map((x) => (x.id === id ? { ...x, status: "paid" as const } : x));
  localStorage.setItem(KEY, JSON.stringify(next));
}
