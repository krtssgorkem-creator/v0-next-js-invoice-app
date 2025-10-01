"use client"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info } from "lucide-react"

interface LegalNoticeProps {
  country: string
}

const LEGAL_NOTICES: Record<string, string> = {
  "United States": `No VAT charged. Supplier is not registered for U.S. sales tax. Services provided cross-border to a U.S. business recipient. Payment should not be subject to U.S. withholding as services are performed outside the U.S. Beneficial owner certification will be provided on Form W-8BEN/W-8BEN-E upon request.`,
  Germany: `VAT exempt under the reverse charge mechanism. VAT to be accounted for by the customer under Article 196 of Directive 2006/112/EC and §13b UStG (Germany). Place of supply determined under Art. 44 of the Directive.`,
  "Other-B2B": `Supplied to a non-resident business; place of use/benefit is outside Türkiye. Transaction qualifies as export of services; no Turkish VAT charged.`,
}

export function LegalNotice({ country }: LegalNoticeProps) {
  const notice = LEGAL_NOTICES[country]

  if (!notice) {
    return null
  }

  return (
    <Alert className="bg-primary/5 border-primary/20">
      <Info className="h-4 w-4 text-primary" />
      <AlertDescription className="text-sm leading-relaxed">
        <strong className="font-semibold">Legal Notice:</strong> {notice}
      </AlertDescription>
    </Alert>
  )
}
