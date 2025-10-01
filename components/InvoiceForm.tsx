"use client";

import { useState } from "react";

export default function InvoiceForm() {
  const [country, setCountry] = useState("US");
  const [gdpr, setGdpr] = useState(false);

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Client Country</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="mt-1 w-full border rounded-md px-3 py-2"
        >
          <option value="US">United States</option>
          <option value="DE">Germany</option>
          <option value="TR">Turkey</option>
        </select>
      </div>

      <div className="p-3 bg-gray-100 rounded-md text-sm">
        {country === "US" && (
          <p>US B2B dijital hizmet – VAT uygulanmaz (reverse charge mantığı dışı).</p>
        )}
        {country === "DE" && (
          <p>§3a UStG – Reverse Charge. Vergiyi alıcı hesaplar.</p>
        )}
        {country === "TR" && (
          <p>Türkiye’den sağlanan dijital hizmetlerde KDV istisnası (B2B yurt dışı).</p>
        )}
      </div>

      <label className="flex items-center space-x-2 text-sm">
        <input
          type="checkbox"
          checked={gdpr}
          onChange={(e) => setGdpr(e.target.checked)}
          className="h-4 w-4"
        />
        <span>GDPR’a uygun veri işleme onayını veriyorum.</span>
      </label>

      <button
        type="button"
        className="w-full bg-emerald-600 text-white px-4 py-2 rounded-md"
      >
        Create Invoice
      </button>
    </form>
  );
}
