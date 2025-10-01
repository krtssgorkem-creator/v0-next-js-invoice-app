// app/invoice/new/page.tsx
"use client";
import { InvoiceForm } from "@/components/InvoiceForm";

export default function NewInvoicePage() {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-semibold">Yeni Fatura</h1>
      <InvoiceForm />
    </main>
  );
}
