// components/PDFPreview.tsx
"use client";
import type { Invoice } from "@/lib/types";

export function PDFPreview({ invoice, legalText }: { invoice: Invoice; legalText: string }) {
  function printPDF() {
    window.print();
  }

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold">Invoice</h2>
          <p className="text-xs text-gray-500">ID: {invoice.id}</p>
        </div>
        <button onClick={printPDF} className="rounded-md bg-slate-800 px-3 py-1 text-white">
          PDF İndir / Yazdır
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="font-medium">Bill To</p>
          <p>{invoice.clientName}</p>
          <p className="text-gray-600">{invoice.clientEmail}</p>
          <p className="text-gray-600">Country: {invoice.clientCountry}</p>
        </div>
        <div className="text-right">
          <p className="font-medium">Amount</p>
          <p className="text-2xl font-semibold">
            {invoice.amount} {invoice.currency.toUpperCase()}
          </p>
        </div>
      </div>

      <div className="my-4 h-px bg-gray-200" />

      <div className="space-y-2 text-sm">
        <p className="font-medium">Description</p>
        <p className="text-gray-700">{invoice.description}</p>
      </div>

      {invoice.payInfo && (
        <div className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-900">
          <p className="font-medium">Payment Details</p>
          <pre className="whitespace-pre-wrap">{invoice.payInfo}</pre>
        </div>
      )}

      <div className="mt-6 rounded-lg bg-gray-50 p-3 text-xs text-gray-700">
        <p className="font-medium">Legal / VAT Notice</p>
        <p className="whitespace-pre-wrap">{legalText}</p>
      </div>
    </div>
  );
}
