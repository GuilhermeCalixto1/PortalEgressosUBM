import { useState } from "react";
import NavBar from "../components/NavBar";
import type { Page } from "../App";

const COURSES = [
  {
    name: "HTML5 & CSS3",
    icon: "🌐",
    level: "Básico",
    duration: "40h",
    students: 312,
    color: "#e34c26",
    bg: "#fff4f0",
  },
  {
    name: "Python",
    icon: "🐍",
    level: "Intermediário",
    duration: "60h",
    students: 248,
    color: "#3572a5",
    bg: "#f0f6ff",
  },
  {
    name: "C++",
    icon: "⚙️",
    level: "Avançado",
    duration: "80h",
    students: 142,
    color: "#004482",
    bg: "#f0f4ff",
  },
  {
    name: "JavaScript",
    icon: "⚡",
    level: "Intermediário",
    duration: "60h",
    students: 396,
    color: "#f7df1e",
    bg: "#fefce8",
  },
  {
    name: "Java",
    icon: "☕",
    level: "Intermediário",
    duration: "70h",
    students: 203,
    color: "#b07219",
    bg: "#fffbeb",
  },
  {
    name: "VS Code & Git",
    icon: "🛠️",
    level: "Básico",
    duration: "20h",
    students: 475,
    color: "#007acc",
    bg: "#f0f9ff",
  },
];

const LEVEL_COLORS: Record<string, string> = {
  Básico: "#4a9e3a",
  Intermediário: "#2563eb",
  Avançado: "#dc2626",
};

export default function CursosPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [shareOpen, setShareOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  return (
    <div className="min-h-screen" style={{ background: "#f0f4f9" }}>
      <NavBar active="cursos" onNavigate={onNavigate} />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left - course grid */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Outfit, sans-serif" }}>
                Cursos Disponíveis
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                Recursos de aprendizagem compartilhados pelos egressos
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {COURSES.map(course => (
                <button
                  key={course.name}
                  onClick={() => setSelected(selected === course.name ? null : course.name)}
                  className="group p-5 rounded-2xl border text-left transition-all hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
                  style={{
                    background: course.bg,
                    borderColor: selected === course.name ? course.color : "transparent",
                    boxShadow: selected === course.name
                      ? `0 0 0 2px ${course.color}40, 0 8px 24px ${course.color}20`
                      : "0 1px 4px rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="text-4xl mb-3 transition-transform group-hover:scale-110">
                    {course.icon}
                  </div>
                  <div className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                    {course.name}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        color: LEVEL_COLORS[course.level],
                        background: `${LEVEL_COLORS[course.level]}15`,
                      }}
                    >
                      {course.level}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
                    <span>⏱ {course.duration}</span>
                    <span>👥 {course.students}</span>
                  </div>

                  {selected === course.name && (
                    <div
                      className="mt-3 flex items-center gap-1.5 text-xs font-semibold"
                      style={{ color: course.color }}
                    >
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Selecionado
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right - Share panel */}
          <div className="lg:w-80">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-32">
              <div
                className="px-6 py-4"
                style={{ background: "linear-gradient(135deg, #1b3680 0%, #2150a8 100%)" }}
              >
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                  </svg>
                  <h3 className="text-white font-semibold text-sm">Compartilhar Curso</h3>
                </div>
                <p className="text-blue-200 text-xs mt-1">
                  Disponibilize materiais para seus colegas
                </p>
              </div>

              <div className="p-6 space-y-4">
                {selected ? (
                  <div
                    className="flex items-center gap-2 p-3 rounded-xl"
                    style={{ background: "#f0f4ff", border: "1px solid #dbeafe" }}
                  >
                    <span className="text-xl">{COURSES.find(c => c.name === selected)?.icon}</span>
                    <span className="text-sm font-semibold text-blue-800">{selected}</span>
                  </div>
                ) : (
                  <p className="text-xs text-gray-400 text-center py-2">
                    Selecione um curso à esquerda
                  </p>
                )}

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Link do Material
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      placeholder="https://..."
                      value={shareUrl}
                      onChange={e => setShareUrl(e.target.value)}
                      className="flex-1 px-3 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Descrição (opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Breve descrição do material..."
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-400 transition-colors resize-none"
                  />
                </div>

                <button
                  onClick={() => {
                    if (selected && shareUrl) {
                      setShareOpen(true);
                      setTimeout(() => setShareOpen(false), 2500);
                    }
                  }}
                  className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2"
                  style={{
                    background: shareOpen
                      ? "linear-gradient(135deg, #4a9e3a, #6abf4b)"
                      : "linear-gradient(135deg, #1b3680 0%, #2563eb 100%)",
                  }}
                >
                  {shareOpen ? (
                    <>
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Compartilhado!
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                      </svg>
                      Compartilhar
                    </>
                  )}
                </button>
              </div>

              {/* Stats */}
              <div className="border-t border-gray-50 px-6 py-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Estatísticas
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Cursos", value: COURSES.length },
                    { label: "Materiais", value: 34 },
                    { label: "Alunos", value: "1.8k" },
                    { label: "Avaliação", value: "4.7★" },
                  ].map(stat => (
                    <div key={stat.label} className="bg-gray-50 rounded-xl p-3 text-center">
                      <div className="font-bold text-gray-800 text-lg" style={{ fontFamily: "Outfit, sans-serif" }}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
