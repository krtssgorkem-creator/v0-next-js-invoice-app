# Secure Global Invoice Automator

A production-ready Next.js 14 application for creating compliant invoices with automatic VAT handling, GDPR compliance, and support for cross-border transactions.

## Features

- **Landing Page**: Professional product showcase with value propositions
- **Dynamic Invoice Form**: Comprehensive form with real-time validation
- **Legal Compliance**: Automatic legal notices based on client country
  - United States B2B (withholding tax compliance)
  - Germany B2B (reverse charge mechanism)
  - Other B2B (export of services)
- **GDPR Consent**: Bilingual consent component (EN/TR)
- **Invoice Preview**: Live preview with print/PDF functionality
- **Accessibility**: Full ARIA support, keyboard navigation, and screen reader compatibility
- **Type Safety**: TypeScript throughout with proper validation

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository or download the ZIP file

2. Install dependencies:
\`\`\`bash
pnpm install
# or
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
pnpm dev
# or
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx              # Landing page
│   ├── invoice/
│   │   └── page.tsx          # Invoice form page
│   ├── api/
│   │   └── health/
│   │       └── route.ts      # Health check endpoint
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── invoice-form.tsx      # Main form component
│   ├── country-select.tsx    # Country selection dropdown
│   ├── gdpr-consent.tsx      # GDPR consent with EN/TR toggle
│   ├── legal-notice.tsx      # Dynamic legal notices
│   ├── invoice-preview.tsx   # Live invoice preview
│   └── ui/                   # shadcn/ui components
└── README.md
\`\`\`

## Usage

### Creating an Invoice

1. Navigate to the invoice page by clicking "Create Invoice"
2. Fill in the required fields:
   - Client Name
   - Client Country (United States, Germany, or Other-B2B)
   - Service Description
   - Amount and Currency
   - Optional: Client VAT ID and Email
3. Review the automatically generated legal notice
4. Accept GDPR consent (toggle EN/TR for language preference)
5. Click "Generate Invoice" to submit

The form data will be logged to the browser console (no backend integration yet).

### Printing/Saving as PDF

Click the "Print / PDF" button in the invoice preview to open the browser's print dialog. You can save as PDF from there.

## Deployment

### Deploy to Vercel

The easiest way to deploy is using Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Your app will be live with automatic HTTPS and global CDN.

### Environment Variables

Currently, no environment variables are required. When adding backend integrations (database, payments), add them in your Vercel project settings.

## Future Enhancements

- Backend API integration for invoice storage
- Payment processing with tokenization
- User authentication and dashboard
- Invoice history and management
- Email delivery of invoices
- Multi-language support beyond GDPR consent
- PDF generation on the server

## Legal Compliance

This application provides legal notice templates for:
- U.S. cross-border B2B services
- EU reverse charge mechanism (Germany)
- Turkish export of services

**Important**: These templates are provided as-is. Consult with legal and tax professionals to ensure compliance with your specific business requirements and jurisdictions.

## License

MIT

## Support

For issues or questions, please open an issue in the repository.
