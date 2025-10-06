// app/layout.tsx
import "@/styles/globals.css";           // <- yolun TAM olarak böyle olduğuna dikkat et
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Global Invoice Automator",
  description:
    "Ödemesiz MVP – fatura oluştur, PDF indir/yazdır, manuel ödeme bilgisi ekle.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
