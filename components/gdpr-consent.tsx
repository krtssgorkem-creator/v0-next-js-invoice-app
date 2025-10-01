"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface GdprConsentProps {
  checked: boolean
  onChange: (checked: boolean) => void
  error?: string
}

const GDPR_TEXT_EN = `I consent to the processing of my personal data (name, email, billing details) for creating and managing invoices and payments. I understand that I can withdraw my consent at any time, and that my data will be processed in accordance with the Privacy Policy. For details on purposes, legal bases, data retention, and my rights (access, erasure, objection), see the Privacy Policy. I can withdraw consent as easily as I gave it.`

const GDPR_TEXT_TR = `Kişisel verilerimin (ad, e-posta, fatura bilgileri) fatura oluşturma ve ödemelerin yönetimi amacıyla işlenmesine onay veriyorum. Onayı dilediğim zaman geri çekebileceğimi ve verilerimin Gizlilik Politikası'na uygun şekilde işleneceğini anlıyorum. Amaçlar, hukuki sebepler, saklama süresi ve haklarıma (erişim, silme, itiraz) ilişkin ayrıntılar için Gizlilik Politikası'nı inceleyebilirim. Onayı vermek kadar kolay biçimde geri çekebilirim.`

export function GdprConsent({ checked, onChange, error }: GdprConsentProps) {
  const [language, setLanguage] = useState<"EN" | "TR">("EN")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "TR" : "EN"))
  }

  const gdprText = language === "EN" ? GDPR_TEXT_EN : GDPR_TEXT_TR

  return (
    <div className="space-y-3 p-4 border border-border rounded-lg bg-card">
      <div className="flex items-center justify-between">
        <Label className="text-sm font-semibold">GDPR Consent</Label>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={toggleLanguage}
          aria-label={`Switch to ${language === "EN" ? "Turkish" : "English"}`}
        >
          {language === "EN" ? "TR" : "EN"}
        </Button>
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="gdprConsent"
          checked={checked}
          onCheckedChange={onChange}
          aria-required="true"
          aria-invalid={!!error}
          aria-describedby={error ? "gdprConsent-error" : "gdprConsent-text"}
          className="mt-1"
        />
        <Label htmlFor="gdprConsent" id="gdprConsent-text" className="text-sm leading-relaxed cursor-pointer">
          {gdprText}
        </Label>
      </div>

      {error && (
        <p id="gdprConsent-error" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
