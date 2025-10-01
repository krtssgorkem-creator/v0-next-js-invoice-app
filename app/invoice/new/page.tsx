// app/invoice/new/page.tsx
import dynamic from 'next/dynamic';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

// Formu client'ta çalıştır (SSR kapalı)
const InvoiceForm = dynamic(
  () => import('@/components/InvoiceForm').then(m => m.default || m.InvoiceForm),
  { ssr: false }
);

export default function Page() {
  return <InvoiceForm />;
}
