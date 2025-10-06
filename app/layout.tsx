// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // <- CSS buradan yüklenir

export const metadata: Metadata = {
  title: "Secure Global Invoice Automator",
  description:
    "Ödemesiz MVP – fatura oluştur, PDF indir/yazdır, manuel ödeme bilgisi ekle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <div className="mx-auto max-w-5xl p-4">{children}</div>
      </body>
    </html>
  );
}
