import { InvoiceForm } from "@/components/invoice-form"

export default function InvoicePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-foreground">Create Invoice</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <InvoiceForm />
      </main>
    </div>
  )
}
