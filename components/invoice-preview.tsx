"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"
import type { InvoiceData } from "@/components/invoice-form"

interface InvoicePreviewProps {
  data: InvoiceData
}

const LEGAL_NOTICES: Record<string, string> = {
  "United States": `No VAT charged. Supplier is not registered for U.S. sales tax. Services provided cross-border to a U.S. business recipient. Payment should not be subject to U.S. withholding as services are performed outside the U.S. Beneficial owner certification will be provided on Form W-8BEN/W-8BEN-E upon request.`,
  Germany: `VAT exempt under the reverse charge mechanism. VAT to be accounted for by the customer under Article 196 of Directive 2006/112/EC and §13b UStG (Germany). Place of supply determined under Art. 44 of the Directive.`,
  "Other-B2B": `Supplied to a non-resident business; place of use/benefit is outside Türkiye. Transaction qualifies as export of services; no Turkish VAT charged.`,
}

export function InvoicePreview({ data }: InvoicePreviewProps) {
  const handlePrint = () => {
    window.print()
  }

  const legalNotice = LEGAL_NOTICES[data.clientCountry]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle>Invoice Preview</CardTitle>
        <Button type="button" variant="outline" size="sm" onClick={handlePrint} aria-label="Print or save as PDF">
          <Printer className="h-4 w-4 mr-2" />
          Print / PDF
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Invoice Header */}
        <div className="border-b border-border pb-4">
          <h3 className="text-2xl font-bold text-foreground">INVOICE</h3>
          <p className="text-sm text-muted-foreground">Date: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Client Information */}
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">Bill To:</h4>
          <div className="text-sm space-y-1">
            <p className="text-foreground">
              {data.clientName || <span className="text-muted-foreground italic">Client Name</span>}
            </p>
            <p className="text-muted-foreground">{data.clientCountry || <span className="italic">Country</span>}</p>
            {data.clientVatId && <p className="text-muted-foreground">VAT ID: {data.clientVatId}</p>}
            {data.email && <p className="text-muted-foreground">{data.email}</p>}
          </div>
        </div>

        {/* Service Details */}
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">Service Description:</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {data.serviceDescription || <span className="italic">Service description will appear here</span>}
          </p>
        </div>

        {/* Amount */}
        <div className="border-t border-border pt-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-foreground">Total Amount:</span>
            <span className="text-2xl font-bold text-foreground">
              {data.amount ? `${Number.parseFloat(data.amount).toFixed(2)} ${data.currency}` : "0.00 USD"}
            </span>
          </div>
        </div>

        {/* Legal Notice */}
        {legalNotice && (
          <div className="border-t border-border pt-4">
            <h4 className="font-semibold text-foreground mb-2 text-sm">Legal Notice:</h4>
            <p className="text-xs text-muted-foreground leading-relaxed bg-muted/50 p-3 rounded">{legalNotice}</p>
          </div>
        )}

        {/* GDPR Status */}
        <div className="border-t border-border pt-4">
          <div className="flex items-center gap-2 text-xs">
            <span
              className={`inline-block h-2 w-2 rounded-full ${data.gdprConsent ? "bg-primary" : "bg-muted-foreground"}`}
            />
            <span className="text-muted-foreground">
              {data.gdprConsent ? "GDPR consent provided" : "GDPR consent required"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
