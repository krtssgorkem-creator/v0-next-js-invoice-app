// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-semibold">Secure Global Invoice Automator</h1>
      <p className="text-gray-600">
        Ödemesiz MVP – fatura oluştur, PDF indir/yazdır, manuel ödeme bilgisi ekle.
      </p>
      <div className="flex gap-3">
        <Link href="/login" className="rounded-lg bg-emerald-600 px-4 py-2 text-white">
          Giriş Yap
        </Link>
        <Link href="/dashboard" className="rounded-lg bg-white px-4 py-2 ring-1 ring-gray-300">
          Dashboard
        </Link>
      </div>
    </main>
  );
}
