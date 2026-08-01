import { useState } from 'react'
import type { Page } from '../App'

/* ─── brand colours ─────────────────────────────── */
export const C = {
  navy:   '#0f2057',
  navyDk: '#091640',
  teal:   '#00a878',
  tealLt: '#e6f8f3',
  sky:    '#3b9fd1',
  bg:     '#f4f6fb',
  white:  '#ffffff',
}

/* ─── Logo ───────────────────────────────────────── */
export function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="37" stroke={C.navy} strokeWidth="4" fill="white"/>
      <path d="M40 11 L69 40 L40 69 L11 40 Z" stroke={C.navy} strokeWidth="3.5" fill="none"/>
      <circle cx="40" cy="40" r="13" stroke={C.sky} strokeWidth="3" fill="none"/>
      <line x1="40" y1="11" x2="69" y2="40" stroke={C.sky} strokeWidth="2" strokeLinecap="round"/>
      <line x1="11" y1="40" x2="40" y2="69" stroke={C.sky} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

/* ─── Wordmark ───────────────────────────────────── */
export function Wordmark({ sub }: { sub?: string }) {
  return (
    <div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: 20, letterSpacing: '-0.02em', lineHeight: 1 }}>
        <span style={{ color: C.navy }}>FAET</span><span style={{ color: C.sky }}>ERJ</span>
      </div>
      {sub && (
        <div style={{ fontSize: 9, color: '#9ca3af', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 2 }}>
          {sub}
        </div>
      )}
    </div>
  )
}

/* ─── Nav items ──────────────────────────────────── */
const NAV: { key: Page; label: string }[] = [
  { key: 'formulario', label: 'Formulário' },
  { key: 'forum',      label: 'Fórum'      },
  { key: 'estagios',   label: 'Estágios'   },
  { key: 'cursos',     label: 'Cursos'     },
]

/* ─── Shell (header + nav + page wrapper) ────────── */
export default function Shell({
  active,
  onNavigate,
  children,
}: {
  active: Page
  onNavigate: (p: Page) => void
  children: React.ReactNode
}) {
  const [search, setSearch] = useState('')

  return (
    <div style={{ minHeight: '100vh', background: C.bg }}>
      {/* ── Top bar ── */}
      <header style={{ background: C.white, borderBottom: '1px solid #e8ecf4', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', gap: 20 }}>

          {/* Logo + wordmark */}
          <button
            onClick={() => onNavigate('home')}
            style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <Logo size={34} />
            <Wordmark sub="Portal do Egresso" />
          </button>

          <div style={{ flex: 1 }} />

          {/* Search */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: '#f4f6fb', border: '1.5px solid #e2e6f0',
            borderRadius: 12, padding: '8px 14px', width: 210,
            transition: 'border-color .15s',
          }}>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" strokeWidth={2.5}>
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35" strokeLinecap="round"/>
            </svg>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar…"
              style={{ background: 'none', border: 'none', outline: 'none', fontSize: 13, color: '#374151', width: '100%' }}
            />
          </div>

          {/* Avatar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#111827', lineHeight: 1 }}>Egresso</div>
              <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>Turma 2023</div>
            </div>
            <div style={{
              width: 38, height: 38, borderRadius: '50%',
              background: `linear-gradient(135deg, ${C.navy}, ${C.sky})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', fontWeight: 700, fontSize: 14,
            }}>E</div>
          </div>
        </div>
      </header>

      {/* ── Nav bar ── */}
      <nav style={{ background: C.navy, position: 'sticky', top: 64, zIndex: 40 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', display: 'flex', gap: 2 }}>
          {NAV.map(item => {
            const on = active === item.key
            return (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                style={{
                  background: on ? 'rgba(255,255,255,0.12)' : 'none',
                  border: 'none', cursor: 'pointer',
                  padding: '14px 20px',
                  fontSize: 13, fontWeight: on ? 600 : 400,
                  color: on ? '#fff' : 'rgba(200,215,255,0.75)',
                  position: 'relative',
                  borderRadius: '8px 8px 0 0',
                  transition: 'color .15s, background .15s',
                }}
              >
                {on && (
                  <span style={{
                    position: 'absolute', bottom: 0, left: 10, right: 10,
                    height: 3, background: C.teal, borderRadius: '3px 3px 0 0',
                  }}/>
                )}
                {item.label}
              </button>
            )
          })}
        </div>
      </nav>

      {/* ── Page content ── */}
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px 80px' }}>
        {children}
      </main>
    </div>
  )
}

/* ─── Tiny reusable helpers ──────────────────────── */
export function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: C.white, borderRadius: 16, border: '1px solid #e8ecf4',
      boxShadow: '0 1px 6px rgba(15,32,87,.05)',
      ...style,
    }}>
      {children}
    </div>
  )
}

export function SectionHead({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12, flexShrink: 0,
        background: `linear-gradient(135deg, ${C.navy}, ${C.sky})`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {icon}
      </div>
      <div>
        <h1 style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 800, fontSize: 22, margin: 0, color: '#111827' }}>
          {title}
        </h1>
        <p style={{ margin: '3px 0 0', fontSize: 13, color: '#6b7280' }}>{sub}</p>
      </div>
    </div>
  )
}

export function Btn({
  children, onClick, variant = 'primary', small, disabled, style,
}: {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'ghost' | 'danger'
  small?: boolean
  disabled?: boolean
  style?: React.CSSProperties
}) {
  const base: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: 7,
    border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'inherit', fontWeight: 600,
    fontSize: small ? 12 : 14,
    padding: small ? '7px 14px' : '11px 22px',
    borderRadius: 10, transition: 'opacity .15s, transform .1s',
    opacity: disabled ? 0.5 : 1,
  }
  const variants: Record<string, React.CSSProperties> = {
    primary: { background: `linear-gradient(135deg, ${C.navy}, ${C.sky})`, color: '#fff', boxShadow: '0 4px 14px rgba(15,32,87,.28)' },
    ghost:   { background: '#f4f6fb', color: C.navy, border: `1.5px solid #dce2f0` },
    danger:  { background: '#fef2f2', color: '#dc2626', border: '1.5px solid #fecaca' },
  }
  return (
    <button onClick={onClick} disabled={disabled} style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={e => { if (!disabled) (e.currentTarget as HTMLButtonElement).style.opacity = '0.88' }}
      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = disabled ? '0.5' : '1' }}
    >
      {children}
    </button>
  )
}
