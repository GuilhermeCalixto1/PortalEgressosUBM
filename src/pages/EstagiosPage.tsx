import { useState } from "react";
import NavBar from "../components/NavBar";
import type { Page } from "../App";

const VAGAS = [
  {
    id: 1,
    title: "Estagiário em Desenvolvimento Web",
    company: "TechSolutions Rio",
    location: "Rio de Janeiro, RJ",
    type: "Presencial",
    area: "Desenvolvimento",
    salary: "R$ 1.200/mês",
    hours: "30h/semana",
    deadline: "15 Ago",
    tags: ["React", "Node.js", "JavaScript"],
    color: "#2563eb",
  },
  {
    id: 2,
    title: "Estagiário em Suporte de TI",
    company: "Prefeitura do Rio",
    location: "Rio de Janeiro, RJ",
    type: "Presencial",
    area: "Infraestrutura",
    salary: "R$ 900/mês",
    hours: "20h/semana",
    deadline: "20 Ago",
    tags: ["Windows", "Redes", "Hardware"],
    color: "#4a9e3a",
  },
  {
    id: 3,
    title: "Estagiário em Análise de Dados",
    company: "DataRio",
    location: "Híbrido",
    type: "Híbrido",
    area: "Dados",
    salary: "R$ 1.500/mês",
    hours: "30h/semana",
    deadline: "31 Ago",
    tags: ["Python", "SQL", "Power BI"],
    color: "#7c3aed",
  },
  {
    id: 4,
    title: "Estagiário em Segurança da Informação",
    company: "SecureBank",
    location: "Remoto",
    type: "Remoto",
    area: "Segurança",
    salary: "R$ 1.800/mês",
    hours: "40h/semana",
    deadline: "10 Set",
    tags: ["Cibersegurança", "Linux", "Redes"],
    color: "#dc2626",
  },
  {
    id: 5,
    title: "Estagiário em Gestão de Projetos",
    company: "Inova Tech",
    location: "Rio de Janeiro, RJ",
    type: "Presencial",
    area: "Gestão",
    salary: "R$ 1.100/mês",
    hours: "30h/semana",
    deadline: "25 Ago",
    tags: ["SCRUM", "Trello", "Gestão"],
    color: "#b45309",
  },
];

const FILTER_OPTIONS = ["Todos", "Presencial", "Híbrido", "Remoto"];

export default function EstagiosPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [saved, setSaved] = useState<number[]>([]);
  const [filter, setFilter] = useState("Todos");

  const toggleSave = (id: number) => {
    setSaved(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  };

  const filtered = filter === "Todos" ? VAGAS : VAGAS.filter(v => v.type === filter);

  return (
    <div className="min-h-screen" style={{ background: "#f0f4f9" }}>
      <NavBar active="estagios" onNavigate={onNavigate} />

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Outfit, sans-serif" }}>
              Explorar Vagas
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              {filtered.length} vagas disponíveis · Atualizado hoje
            </p>
          </div>

          {/* Filters */}
          <div className="flex bg-white rounded-xl p-1 border border-gray-100 shadow-sm gap-1">
            {FILTER_OPTIONS.map(opt => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === opt
                    ? "text-white shadow"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                style={
                  filter === opt
                    ? { background: "linear-gradient(135deg, #1b3680, #2563eb)" }
                    : {}
                }
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(vaga => (
            <div
              key={vaga.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 overflow-hidden group"
            >
              {/* Color accent top bar */}
              <div className="h-1.5 w-full" style={{ background: vaga.color }} />

              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: vaga.color }}
                  >
                    {vaga.company.charAt(0)}
                  </div>
                  <button
                    onClick={() => toggleSave(vaga.id)}
                    className="transition-colors"
                    style={{ color: saved.includes(vaga.id) ? "#f59e0b" : "#d1d5db" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={saved.includes(vaga.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </button>
                </div>

                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                  {vaga.title}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{vaga.company}</p>

                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {vaga.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {vaga.hours} · {vaga.salary}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {vaga.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: `${vaga.color}15`,
                        color: vaga.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <span className="text-xs text-gray-400">
                    Prazo: <span className="font-semibold text-orange-500">{vaga.deadline}</span>
                  </span>
                  <button
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all hover:opacity-90"
                    style={{ background: vaga.color }}
                  >
                    Candidatar-se
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <svg className="mx-auto mb-4 text-gray-200" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            <p className="font-medium">Nenhuma vaga encontrada</p>
          </div>
        )}
      </main>
    </div>
  );
}
