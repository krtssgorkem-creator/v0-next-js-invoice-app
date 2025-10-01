"use client";
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

import InvoiceForm from "@/components/InvoiceForm";

export default function InvoicePage() {
  return (
    <div className="min-h-[60vh] max-w-xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-4 text-emerald-700">Create Invoice</h1>
      <div className="bg-white rounded-2xl shadow p-6">
        <InvoiceForm />
      </div>
    </div>
  );
}
