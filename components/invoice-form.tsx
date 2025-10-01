"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CountrySelect } from "@/components/country-select"
import { GdprConsent } from "@/components/gdpr-consent"
import { LegalNotice } from "@/components/legal-notice"
import { InvoicePreview } from "@/components/invoice-preview"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export type InvoiceData = {
  clientName: string
  clientCountry: string
  serviceDescription: string
  amount: string
  currency: string
  clientVatId: string
  email: string
  gdprConsent: boolean
}

export function InvoiceForm() {
  const [formData, setFormData] = useState<InvoiceData>({
    clientName: "",
    clientCountry: "",
    serviceDescription: "",
    amount: "",
    currency: "USD",
    clientVatId: "",
    email: "",
    gdprConsent: false,
  })

  const [errors, setErrors] = useState<Partial<Record<keyof InvoiceData, string>>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    const newErrors: Partial<Record<keyof InvoiceData, string>> = {}

    if (!formData.clientName.trim()) {
      newErrors.clientName = "Client name is required"
    }
    if (!formData.clientCountry) {
      newErrors.clientCountry = "Client country is required"
    }
    if (!formData.serviceDescription.trim()) {
      newErrors.serviceDescription = "Service description is required"
    }
    if (!formData.amount || Number.parseFloat(formData.amount) <= 0) {
      newErrors.amount = "Valid amount is required"
    }
    if (!formData.gdprConsent) {
      newErrors.gdprConsent = "GDPR consent is required"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log("[v0] Invoice form submitted:", JSON.stringify(formData, null, 2))
      alert("Invoice data logged to console. Check browser console for details.")
    }
  }

  const updateField = (field: keyof InvoiceData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Form Section */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Invoice Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Client Name */}
              <div className="space-y-2">
                <Label htmlFor="clientName">
                  Client Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="clientName"
                  type="text"
                  value={formData.clientName}
                  onChange={(e) => updateField("clientName", e.target.value)}
                  aria-required="true"
                  aria-invalid={!!errors.clientName}
                  aria-describedby={errors.clientName ? "clientName-error" : undefined}
                />
                {errors.clientName && (
                  <p id="clientName-error" className="text-sm text-destructive">
                    {errors.clientName}
                  </p>
                )}
              </div>

              {/* Client Country */}
              <div className="space-y-2">
                <Label htmlFor="clientCountry">
                  Client Country <span className="text-destructive">*</span>
                </Label>
                <CountrySelect
                  value={formData.clientCountry}
                  onChange={(value) => updateField("clientCountry", value)}
                  error={errors.clientCountry}
                />
              </div>

              {/* Service Description */}
              <div className="space-y-2">
                <Label htmlFor="serviceDescription">
                  Service Description <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="serviceDescription"
                  value={formData.serviceDescription}
                  onChange={(e) => updateField("serviceDescription", e.target.value)}
                  rows={4}
                  aria-required="true"
                  aria-invalid={!!errors.serviceDescription}
                  aria-describedby={errors.serviceDescription ? "serviceDescription-error" : undefined}
                />
                {errors.serviceDescription && (
                  <p id="serviceDescription-error" className="text-sm text-destructive">
                    {errors.serviceDescription}
                  </p>
                )}
              </div>

              {/* Amount and Currency */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">
                    Amount <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.amount}
                    onChange={(e) => updateField("amount", e.target.value)}
                    aria-required="true"
                    aria-invalid={!!errors.amount}
                    aria-describedby={errors.amount ? "amount-error" : undefined}
                  />
                  {errors.amount && (
                    <p id="amount-error" className="text-sm text-destructive">
                      {errors.amount}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select value={formData.currency} onValueChange={(value) => updateField("currency", value)}>
                    <SelectTrigger id="currency" aria-label="Select currency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="TRY">TRY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Client VAT ID */}
              <div className="space-y-2">
                <Label htmlFor="clientVatId">Client VAT ID (Optional)</Label>
                <Input
                  id="clientVatId"
                  type="text"
                  value={formData.clientVatId}
                  onChange={(e) => updateField("clientVatId", e.target.value)}
                  placeholder="e.g., DE123456789"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="client@example.com"
                />
              </div>

              {/* Legal Notice */}
              <LegalNotice country={formData.clientCountry} />

              {/* GDPR Consent */}
              <GdprConsent
                checked={formData.gdprConsent}
                onChange={(checked) => updateField("gdprConsent", checked)}
                error={errors.gdprConsent}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full"
                disabled={!formData.gdprConsent}
                aria-disabled={!formData.gdprConsent}
              >
                Generate Invoice
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Preview Section */}
      <div className="lg:sticky lg:top-8 lg:self-start">
        <InvoicePreview data={formData} />
      </div>
    </div>
  )
}
