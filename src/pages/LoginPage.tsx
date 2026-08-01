import { useState } from "react";
import { FaeterjLogo } from "../components/NavBar";

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [mode, setMode] = useState<"login" | "register">("register");
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex">
      {/* Left - Form panel */}
      <div className="w-full lg:w-[45%] flex flex-col bg-white relative overflow-hidden">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #1b3680 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 flex flex-col h-full p-10 lg:p-14">
          {/* Logo */}
          <div className="mb-12">
            <FaeterjLogo />
          </div>

          <div className="flex-1 flex flex-col justify-center max-w-sm">
            {/* Avatar */}
            <div className="mb-8">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                style={{ background: "linear-gradient(135deg, #1b3680 0%, #2563eb 100%)" }}
              >
                <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
                  <path strokeLinecap="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>

              <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "Outfit, sans-serif" }}>
                {mode === "register" ? "Cadastre-se" : "Entrar"}
              </h1>
              <p className="text-gray-500 mt-1 text-sm">
                {mode === "register"
                  ? "Crie sua conta no Portal de Egressos"
                  : "Acesse sua conta"}
              </p>
            </div>

            {/* Tab toggle */}
            <div className="flex bg-gray-100 rounded-xl p-1 mb-8 w-fit">
              {(["register", "login"] as const).map(m => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                    mode === m
                      ? "bg-white text-blue-700 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {m === "register" ? "Cadastro" : "Login"}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "register" && (
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={e => setForm({ ...form, nome: e.target.value })}
                    onFocus={() => setFocused("nome")}
                    onBlur={() => setFocused(null)}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                    style={{
                      borderColor: focused === "nome" ? "#2563eb" : "#e5e7eb",
                      boxShadow: focused === "nome" ? "0 0 0 3px rgba(37,99,235,0.1)" : "none",
                    }}
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                  style={{
                    borderColor: focused === "email" ? "#2563eb" : "#e5e7eb",
                    boxShadow: focused === "email" ? "0 0 0 3px rgba(37,99,235,0.1)" : "none",
                  }}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  Senha
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={form.senha}
                  onChange={e => setForm({ ...form, senha: e.target.value })}
                  onFocus={() => setFocused("senha")}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                  style={{
                    borderColor: focused === "senha" ? "#2563eb" : "#e5e7eb",
                    boxShadow: focused === "senha" ? "0 0 0 3px rgba(37,99,235,0.1)" : "none",
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-white text-sm mt-2 transition-all hover:opacity-90 active:scale-[0.99] shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #1b3680 0%, #2563eb 100%)",
                  boxShadow: "0 4px 16px rgba(37,99,235,0.35)",
                }}
              >
                {mode === "register" ? "Criar conta" : "Entrar"}
              </button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-6">
              Portal de Egressos · FAETERJ © 2025
            </p>
          </div>
        </div>
      </div>

      {/* Right - Info panel */}
      <div
        className="hidden lg:flex flex-col flex-1 relative overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #1b3680 0%, #1e4db7 40%, #2e7ec7 75%, #3b9fd1 100%)",
        }}
      >
        {/* Geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 opacity-10"
            style={{ background: "radial-gradient(circle, #6abf4b 0%, transparent 70%)" }}
          />
          <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 400 500" fill="none">
            <path d="M0 0 L400 0 L400 500 L0 500 Z" fill="url(#grid)" />
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 flex flex-col h-full p-14 justify-between">
          <div />

          <div>
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase"
              style={{ background: "rgba(106,191,75,0.2)", color: "#a3e070", border: "1px solid rgba(106,191,75,0.3)" }}
            >
              Portal de Egressos
            </div>
            <h2
              className="text-6xl font-bold text-white leading-none mb-6"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Bem-<br />vindo!
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xs">
              Este espaço foi criado para que nossos ex-alunos compartilhem suas experiências e opinem sobre a qualidade da formação recebida.
            </p>
            <p className="text-blue-200 text-sm leading-relaxed max-w-xs">
              Sua participação é fundamental para identificarmos oportunidades de melhoria e aprimorarmos continuamente os cursos oferecidos pela instituição.
            </p>

            <div className="flex gap-3 mt-10">
              {[
                { n: "1.200+", l: "Egressos" },
                { n: "12", l: "Cursos" },
                { n: "98%", l: "Aprovação" },
              ].map(stat => (
                <div
                  key={stat.l}
                  className="flex-1 rounded-xl p-4"
                  style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}
                >
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {stat.n}
                  </div>
                  <div className="text-xs text-blue-200 mt-0.5">{stat.l}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-blue-300/60 text-xs">
            Faculdade de Educação Tecnológica do Estado do Rio de Janeiro
          </p>
        </div>
      </div>
    </div>
  );
}
