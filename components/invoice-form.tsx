"use client";

import { useState } from "react";

export default function InvoiceForm() {
  const [country, setCountry] = useState("US");
  const [showGDPR, setShowGDPR] = useState(false);

  return (
    <form className="space-y-4">
      {/* Ülke seçimi */}
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

      {/* Hukuki metinler */}
      <div className="p-3 bg-gray-100 rounded-md text-sm">
        {country === "US" && (
          <p>
            This invoice is issued under US B2B digital service rules. VAT is
            not charged according to Section 1441 of the IRS code.
          </p>
        )}
        {country === "DE" && (
          <p>
            Rechnung nach §3a UStG: Reverse Charge-Verfahren. Der
            Leistungsempfänger schuldet die Umsatzsteuer.
          </p>
        )}
        {country === "TR" && (
          <p>
            Türkiye’den sağlanan dijital hizmetlerde KDV muafiyeti uygulanır.
          </p>
        )}
      </div>

      {/* GDPR Onayı */}
      <div className="flex items-center space-x-2">
        <input
          id="gdpr"
          type="checkbox"
          checked={showGDPR}
          onChange={(e) => setShowGDPR(e.target.checked)}
          className="h-4 w-4"
        />
        <label htmlFor="gdpr" className="text-sm">
          I consent to my data being processed in compliance with GDPR.
        </label>
      </div>

      {/* Kaydet Butonu */}
      <button
        type="submit"
        className="w-full bg-emerald-600 text-white px-4 py-2 rounded-md"
      >
        Create Invoice
      </button>
    </form>
  );
}
