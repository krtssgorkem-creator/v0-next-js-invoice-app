import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Globe, CreditCard, CheckCircle } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Secure Global Invoice Automator</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Professional Invoicing for Global Business
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Create compliant invoices with automatic VAT handling, GDPR compliance, and secure payment processing for
            cross-border transactions.
          </p>
          <Link href="/invoice">
            <Button size="lg" className="text-lg px-8 py-6">
              Create Invoice
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose Our Platform?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">Secure Global Invoicing</h4>
                  <p className="text-muted-foreground">
                    Bank-grade encryption and secure data handling for all your international transactions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">VAT/GDPR Compliance</h4>
                  <p className="text-muted-foreground">
                    Automatic VAT calculations and GDPR-compliant data processing for EU and global markets.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">Tokenized Payments</h4>
                  <p className="text-muted-foreground">
                    Secure payment processing with tokenization coming soon. Accept payments globally.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Built for Cross-Border Business</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Automatic reverse charge mechanism for EU B2B",
              "U.S. withholding tax compliance",
              "Multi-currency support (USD, EUR, TRY)",
              "Export of services documentation",
              "GDPR consent management",
              "Professional invoice templates",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-foreground">Ready to Get Started?</h3>
          <p className="text-lg text-muted-foreground mb-8">Create your first compliant invoice in minutes.</p>
          <Link href="/invoice">
            <Button size="lg" className="text-lg px-8 py-6">
              Create Your First Invoice
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Secure Global Invoice Automator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
