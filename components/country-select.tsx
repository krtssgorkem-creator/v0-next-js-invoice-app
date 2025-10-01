"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CountrySelectProps {
  value: string
  onChange: (value: string) => void
  error?: string
}

export function CountrySelect({ value, onChange, error }: CountrySelectProps) {
  return (
    <div className="space-y-2">
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          id="clientCountry"
          aria-required="true"
          aria-invalid={!!error}
          aria-describedby={error ? "clientCountry-error" : undefined}
          aria-label="Select client country"
        >
          <SelectValue placeholder="Select country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="United States">United States</SelectItem>
          <SelectItem value="Germany">Germany</SelectItem>
          <SelectItem value="Other-B2B">Other-B2B</SelectItem>
        </SelectContent>
      </Select>
      {error && (
        <p id="clientCountry-error" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
