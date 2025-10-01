// app/login/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return alert("E-posta gerekli");
    // Basit demo oturumu (localStorage)
    localStorage.setItem("sgia_user", JSON.stringify({ email }));
    router.push("/dashboard");
  }

  return (
    <main className="max-w-md space-y-6">
      <h1 className="text-2xl font-semibold">Giriş Yap</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          className="w-full rounded-lg border p-2"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full rounded-lg border p-2"
          placeholder="Şifre"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full rounded-lg bg-emerald-600 py-2 text-white">Giriş</button>
      </form>
    </main>
  );
}
