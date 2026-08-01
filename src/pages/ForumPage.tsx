import { useState } from "react";
import NavBar from "../components/NavBar";
import type { Page } from "../App";

const PARTICIPANTS = [
  { name: "Ana Lima", course: "Sistemas de Informação", avatar: "AL", color: "#7c3aed" },
  { name: "Bruno Costa", course: "Redes de Computadores", avatar: "BC", color: "#2563eb" },
  { name: "Carla Melo", course: "Análise e Desenvolvimento", avatar: "CM", color: "#4a9e3a" },
  { name: "Daniel Faria", course: "Gestão de TI", avatar: "DF", color: "#b45309" },
  { name: "Eduardo Reis", course: "Sistemas de Informação", avatar: "ER", color: "#dc2626" },
  { name: "Fernanda Dutra", course: "Redes de Computadores", avatar: "FD", color: "#0891b2" },
];

const POSTS = [
  {
    author: "Ana Lima",
    avatar: "AL",
    color: "#7c3aed",
    time: "há 2 horas",
    subject: "Mercado de trabalho em TI no Rio de Janeiro",
    content: "Gostaria de saber como estão as oportunidades de emprego na área de TI no Rio. Após me formar em 2023, tive dificuldades iniciais mas acabei encontrando uma boa posição.",
    replies: 8,
    likes: 14,
  },
  {
    author: "Bruno Costa",
    avatar: "BC",
    color: "#2563eb",
    time: "há 5 horas",
    subject: "Dicas para entrevistas técnicas",
    content: "Compartilhando minha experiência com processos seletivos para desenvolvedor. O que mais cai nas entrevistas e como me preparei.",
    replies: 5,
    likes: 22,
  },
];

export default function ForumPage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !message.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSubject("");
      setMessage("");
    }, 2500);
  };

  return (
    <div className="min-h-screen" style={{ background: "#f0f4f9" }}>
      <NavBar active="forum" onNavigate={onNavigate} />

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #4a9e3a, #6abf4b)" }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
                <path strokeLinecap="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Outfit, sans-serif" }}>
              Faça seu comentário
            </h1>
          </div>
          <p className="text-gray-500 text-sm ml-13">
            Compartilhe experiências e interaja com outros egressos da FAETERJ
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            {/* New post form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div
                className="px-6 py-4 flex items-center gap-2"
                style={{ background: "linear-gradient(135deg, #1b3680 0%, #2150a8 100%)" }}
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M12 8v4m0 4h.01" />
                </svg>
                <span className="text-white font-semibold text-sm">Nova Publicação</span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Assunto
                  </label>
                  <input
                    type="text"
                    placeholder="Título da sua publicação..."
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                    style={{
                      borderColor: focusedField === "subject" ? "#2563eb" : "#e5e7eb",
                      boxShadow: focusedField === "subject" ? "0 0 0 3px rgba(37,99,235,0.1)" : "none",
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    placeholder="Escreva sua mensagem aqui..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none"
                    style={{
                      borderColor: focusedField === "message" ? "#2563eb" : "#e5e7eb",
                      boxShadow: focusedField === "message" ? "0 0 0 3px rgba(37,99,235,0.1)" : "none",
                    }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {message.length}/500 caracteres
                  </span>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
                    style={{
                      background: submitted
                        ? "linear-gradient(135deg, #4a9e3a, #6abf4b)"
                        : "linear-gradient(135deg, #1b3680 0%, #2563eb 100%)",
                    }}
                  >
                    {submitted ? (
                      <>
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Publicado!
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                        Publicar
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Posts feed */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wider">
                Publicações Recentes
              </h3>
              {POSTS.map(post => (
                <div key={post.subject} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ background: post.color }}
                    >
                      {post.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-800 text-sm">{post.author}</span>
                        <span className="text-xs text-gray-400">{post.time}</span>
                      </div>
                      <div className="font-semibold text-gray-900 mt-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                        {post.subject}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{post.content}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>
                      {post.replies} respostas
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                      {post.likes}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Participants */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-32">
              <div
                className="px-5 py-4 flex items-center gap-2"
                style={{ background: "linear-gradient(135deg, #1b3680 0%, #2150a8 100%)" }}
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                  <path strokeLinecap="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
                <span className="text-white font-semibold text-sm">Participantes</span>
                <span className="ml-auto bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
                  {PARTICIPANTS.length}
                </span>
              </div>
              <div className="divide-y divide-gray-50">
                {PARTICIPANTS.map(p => (
                  <div key={p.name} className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 transition-colors cursor-pointer">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ background: p.color }}
                    >
                      {p.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-800">{p.name}</div>
                      <div className="text-xs text-gray-400">{p.course}</div>
                    </div>
                    <div className="ml-auto w-2 h-2 rounded-full bg-green-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
