// components/InvoiceForm.tsx
"use client";
import { useState } from "react";
import type { Invoice } from "@/lib/types";
import { saveInvoice } from "@/lib/store";
import { gdprConsent, legalNoticeByCountry } from "@/lib/legal";
import { PDFPreview } from "@/components/PDFPreview";

export function InvoiceForm() {
  const [form, setForm] = useState<Invoice>({
    id: crypto.randomUUID(),
    clientName: "",
    clientEmail: "",
    clientCountry: "US",
    description: "",
    amount: 0,
    currency: "usd",
    status: "pending",
    payInfo: "",
    createdAt: new Date().toISOString(),
  });
  const [showPreview, setShowPreview] = useState(false);

  function update<K extends keyof Invoice>(k: K, v: Invoice[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.clientName || !form.clientEmail || !form.description || !form.amount) {
      return alert("Lütfen zorunlu alanları doldurun.");
    }
    saveInvoice(form);
    setShowPreview(true);
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm">Müşteri Adı *</label>
          <input
            className="w-full rounded-lg border p-2"
            value={form.clientName}
            onChange={(e) => update("clientName", e.target.value)}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm">Müşteri E-posta *</label>
          <input
            className="w-full rounded-lg border p-2"
            value={form.clientEmail}
            onChange={(e) => update("clientEmail", e.target.value)}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm">Müşteri Ülke</label>
          <select
            className="w-full rounded-lg border p-2"
            value={form.clientCountry}
            onChange={(e) => update("clientCountry", e.target.value)}
          >
            <option value="US">United States</option>
            <option value="DE">Germany</option>
            <option value="TR">Turkey</option>
            <option value="GB">United Kingdom</option>
            <option value="FR">France</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm">Hizmet Açıklaması *</label>
          <input
            className="w-full rounded-lg border p-2"
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-sm">Tutar *</label>
            <input
              type="number"
              className="w-full rounded-lg border p-2"
              value={form.amount}
              onChange={(e) => update("amount", Number(e.target.value))}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm">Para Birimi</label>
            <select
              className="w-full rounded-lg border p-2"
              value={form.currency}
              onChange={(e) => update("currency", e.target.value as any)}
            >
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="try">TRY</option>
            </select>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm">Ödeme Bilgisi (Wise/Payoneer/IBAN)</label>
          <textarea
            className="w-full rounded-lg border p-2"
            rows={3}
            placeholder="Örn: EUR IBAN: BE12 3456 7890 1234 — Ad Soyad"
            value={form.payInfo}
            onChange={(e) => update("payInfo", e.target.value)}
          />
        </div>

        <div className="rounded-lg bg-gray-50 p-3 text-xs text-gray-700">
          <p className="font-medium">GDPR Onayı (müşteriye gösterilecek):</p>
          <p>{gdprConsent}</p>
        </div>

        <button className="w-full rounded-lg bg-emerald-600 py-2 text-white">
          Fatura Oluştur & Önizle
        </button>
      </form>

      <div>
        {showPreview ? (
          <PDFPreview invoice={form} legalText={legalNoticeByCountry(form.clientCountry)} />
        ) : (
          <div className="rounded-lg border p-6 text-sm text-gray-600">
            Sağda PDF önizleme görünecek.
          </div>
        )}
      </div>
    </div>
  );
}
