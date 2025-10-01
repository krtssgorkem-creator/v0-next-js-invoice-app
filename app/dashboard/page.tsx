// app/dashboard/page.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Invoice } from "@/lib/types";
import { getInvoices, markPaid } from "@/lib/store";

export default function Dashboard() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    setInvoices(getInvoices());
  }, []);

  function onMarkPaid(id: string) {
    markPaid(id);
    setInvoices(getInvoices());
  }

  return (
    <main className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Faturalar</h1>
        <Link href="/invoice/new" className="rounded-lg bg-emerald-600 px-4 py-2 text-white">
          Yeni Fatura
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="p-3">Müşteri</th>
              <th className="p-3">Açıklama</th>
              <th className="p-3">Tutar</th>
              <th className="p-3">Para Birimi</th>
              <th className="p-3">Durum</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {invoices.length === 0 && (
              <tr>
                <td className="p-4" colSpan={6}>
                  Henüz fatura yok.
                </td>
              </tr>
            )}
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-t">
                <td className="p-3">{inv.clientName}</td>
                <td className="p-3">{inv.description}</td>
                <td className="p-3">{inv.amount}</td>
                <td className="p-3">{inv.currency.toUpperCase()}</td>
                <td className="p-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      inv.status === "paid"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {inv.status === "paid" ? "Paid" : "Pending"}
                  </span>
                </td>
                <td className="p-3 text-right">
                  {inv.status !== "paid" && (
                    <button
                      onClick={() => onMarkPaid(inv.id)}
                      className="rounded-md bg-slate-800 px-3 py-1 text-white"
                    >
                      Paid İşaretle
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
