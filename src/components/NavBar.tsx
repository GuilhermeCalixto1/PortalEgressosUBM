import { useState } from "react";
import type { Page } from "../App";

const NAV_ITEMS: { key: Page; label: string }[] = [
  { key: "home", label: "Formulário" },
  { key: "forum", label: "Fórum" },
  { key: "estagios", label: "Estágios" },
  { key: "cursos", label: "Cursos" },
];

interface NavBarProps {
  active: Page;
  onNavigate: (p: Page) => void;
}

export default function NavBar({ active, onNavigate }: NavBarProps) {
  const [search, setSearch] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar..."
              className="pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-xl w-56 outline-none focus:border-blue-400 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Logo */}
        <button onClick={() => onNavigate("home")} className="flex flex-col items-center group">
          <FaeterjLogo />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-sm font-semibold shadow">
            E
          </div>
          <span className="text-sm font-medium text-gray-700 hidden sm:block">Egresso</span>
        </div>
      </div>

      {/* Nav bar */}
      <nav className="bg-gradient-to-r from-[#1b3680] to-[#2150a8]">
        <div className="max-w-6xl mx-auto px-6 flex items-center">
          {NAV_ITEMS.map(item => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`relative px-6 py-3.5 text-sm font-medium tracking-wide transition-all ${
                active === item.key
                  ? "text-white"
                  : "text-blue-200 hover:text-white"
              }`}
            >
              {active === item.key && (
                <span className="absolute inset-x-2 top-1 bottom-1 bg-white/15 rounded-lg" />
              )}
              {active === item.key && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#6abf4b] rounded-t-full" />
              )}
              <span className="relative">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function FaeterjLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="42" height="42" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="38" stroke="#1b3680" strokeWidth="3" fill="white" />
        <path d="M40 14 L66 40 L40 66 L14 40 Z" fill="none" stroke="#1b3680" strokeWidth="3.5" />
        <path d="M40 14 L66 40" stroke="#3b9fd1" strokeWidth="2.5" />
        <path d="M40 66 L14 40" stroke="#3b9fd1" strokeWidth="2.5" />
        <ellipse cx="40" cy="40" rx="14" ry="14" fill="none" stroke="#1b3680" strokeWidth="2.5" />
      </svg>
      <div>
        <div className="font-display font-800 text-lg leading-none tracking-tight" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700 }}>
          <span style={{ color: "#1b3680" }}>FAET</span><span style={{ color: "#3b9fd1" }}>ERJ</span>
        </div>
        <div className="text-[9px] text-gray-400 leading-none mt-0.5 tracking-wide">Faculdade de Educação Tecnológica</div>
      </div>
    </div>
  );
}
