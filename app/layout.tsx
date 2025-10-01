// app/layout.tsx
import "@/styles/globals.css";
import { ReactNode } from "react";

export const metadata = { title: "Secure Global Invoice Automator" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <div className="mx-auto max-w-5xl p-4">{children}</div>
      </body>
    </html>
  );
}
