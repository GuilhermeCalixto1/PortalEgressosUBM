import NavBar from "../components/NavBar";
import type { Page } from "../App";

export default function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <div className="min-h-screen" style={{ background: "#f0f4f9" }}>
      <NavBar active="home" onNavigate={onNavigate} />

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero banner */}
        <div
          className="rounded-2xl overflow-hidden mb-8 flex flex-col lg:flex-row shadow-xl"
          style={{ minHeight: 320 }}
        >
          {/* Left - MEC branding */}
          <div
            className="flex-1 flex flex-col justify-between p-10 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1b3680 0%, #1565c0 100%)" }}
          >
            <div
              className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full opacity-10"
              style={{ background: "white" }}
            />
            <div className="relative z-10">
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 tracking-wider uppercase"
                style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)" }}
              >
                Ministério da Educação
              </div>
              <div
                className="text-8xl font-black text-white leading-none"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                MEC
              </div>
            </div>
            <div className="relative z-10 mt-8">
              <div className="text-white/70 text-xs uppercase tracking-widest mb-1">Governo Federal</div>
              <div
                className="font-bold text-white text-lg"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Brasil · União e Reconstrução
              </div>
              <div className="flex gap-2 mt-2">
                {["#009c3b", "#ffdf00", "#002776"].map(c => (
                  <div key={c} className="w-8 h-2 rounded-sm" style={{ background: c }} />
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form CTA */}
          <div
            className="flex-1 flex flex-col justify-center items-center p-10 gap-6"
            style={{ background: "#f8fafc" }}
          >
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth={1.8}>
                  <path strokeLinecap="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
                Formulário de Avaliação
              </h2>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                Preencha o formulário do MEC e contribua com a melhoria dos cursos da FAETERJ.
              </p>
            </div>

            <button
              className="flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white text-sm shadow-lg hover:opacity-90 active:scale-[0.98] transition-all"
              style={{
                background: "linear-gradient(135deg, #1b3680 0%, #2563eb 100%)",
                boxShadow: "0 4px 16px rgba(37,99,235,0.3)",
              }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Acessar Formulário MEC
            </button>

            <p className="text-xs text-gray-400">
              Clique para ser redirecionado ao formulário oficial
            </p>
          </div>
        </div>

        {/* Quick access cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            {
              icon: (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              ),
              label: "Fórum",
              desc: "Discussões e comentários",
              color: "#4a9e3a",
              bg: "#f0faf0",
              border: "#c6e8be",
              page: "forum" as Page,
            },
            {
              icon: (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              ),
              label: "Estágios",
              desc: "Explore vagas disponíveis",
              color: "#b45309",
              bg: "#fffbeb",
              border: "#fde68a",
              page: "estagios" as Page,
            },
            {
              icon: (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              ),
              label: "Cursos",
              desc: "Grade e tecnologias",
              color: "#7c3aed",
              bg: "#f5f3ff",
              border: "#ddd6fe",
              page: "cursos" as Page,
            },
          ].map(card => (
            <button
              key={card.label}
              onClick={() => onNavigate(card.page)}
              className="group flex items-center gap-4 p-5 rounded-xl border text-left hover:shadow-md transition-all hover:-translate-y-0.5"
              style={{ background: card.bg, borderColor: card.border }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                style={{ background: "white", color: card.color }}
              >
                {card.icon}
              </div>
              <div>
                <div className="font-semibold text-gray-800" style={{ fontFamily: "Outfit, sans-serif" }}>
                  {card.label}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{card.desc}</div>
              </div>
              <svg className="ml-auto text-gray-300 group-hover:text-gray-500 transition-colors" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          ))}
        </div>

        {/* News / Notices */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-gray-800 text-lg" style={{ fontFamily: "Outfit, sans-serif" }}>
              Avisos Recentes
            </h3>
            <span className="text-xs text-blue-600 font-medium cursor-pointer hover:underline">Ver todos</span>
          </div>
          <div className="space-y-3">
            {[
              { date: "28 Jul", title: "Prazo para preenchimento do formulário MEC encerra em 15 de agosto", tag: "Urgente", tagColor: "#dc2626", tagBg: "#fef2f2" },
              { date: "22 Jul", title: "Novas vagas de estágio cadastradas na área de Tecnologia da Informação", tag: "Estágios", tagColor: "#2563eb", tagBg: "#eff6ff" },
              { date: "15 Jul", title: "Fórum de egressos: participe da discussão sobre empregabilidade", tag: "Fórum", tagColor: "#4a9e3a", tagBg: "#f0faf0" },
            ].map(n => (
              <div key={n.title} className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="text-xs font-mono text-gray-400 w-10 flex-shrink-0">{n.date}</div>
                <div className="flex-1 text-sm text-gray-700 leading-snug">{n.title}</div>
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0"
                  style={{ color: n.tagColor, background: n.tagBg }}
                >
                  {n.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
