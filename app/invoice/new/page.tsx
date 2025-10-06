'use client';                 // Form/etkileşim varsa client component

export const dynamic = 'force-dynamic';

export default function NewInvoicePage() {
  return (
    <main className="p-8">
      <h1 className="text-xl font-semibold">Create Invoice</h1>
      <form className="mt-4 space-y-3">
        <input className="border p-2 rounded w-full" placeholder="Client name" />
        <input className="border p-2 rounded w-full" placeholder="Amount" />
        <button className="bg-emerald-600 text-white px-4 py-2 rounded">Save</button>
      </form>
    </main>
  );
}
