import { useEffect, useState } from 'react'
import { asset } from '../lib/asset'

const links: { label: string; href: string }[] = [
  { label: 'Product', href: '#cowork' },
  { label: 'Skills Market', href: '#skills-market' },
  { label: 'Cowork', href: '#cowork' },
  { label: 'Remote', href: '#remote' },
  { label: '24/7', href: '#automation' },
  { label: 'Platform', href: '#platform' },
  { label: 'FAQ', href: '#faq' },
]
const words = ['coding', 'making slides', 'sorting files', 'crunching numbers', 'running 24/7', 'writing papers']

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light'
    return (localStorage.getItem('aionui-theme') as 'light' | 'dark') || 'light'
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('aionui-theme', theme)
  }, [theme])
  return { theme, toggle: () => setTheme((t) => (t === 'light' ? 'dark' : 'light')) }
}

export function ThemeToggle({ theme, onToggle }: { theme: string; onToggle: () => void }) {
  return (
    <button className="icon-btn" onClick={onToggle} aria-label="Toggle dark mode" title="Toggle dark mode">
      {theme === 'light' ? (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
      ) : (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
      )}
    </button>
  )
}

export function Header({ theme, onToggle }: { theme: string; onToggle: () => void }) {
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <a className="brand" href="#top">
          <span className="brand-mark" />
          <span>AionUi<small>civil build</small></span>
        </a>
        <nav className="nav">
          {links.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="hdr-actions">
          <a className="btn btn-ghost" href="#faq">Docs</a>
          <a className="btn btn-primary" href="#download">Download</a>
          <ThemeToggle theme={theme} onToggle={onToggle} />
        </div>
      </div>
    </header>
  )
}

export function useRotator(words: string[], speed = 1100) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), speed)
    return () => clearInterval(t)
  }, [words.length, speed])
  return words[i]
}

export function Hero() {
  const word = useRotator(words)
  return (
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="wrap">
        <a className="trend" href="https://github.com/iOfficeAI/AionUi" target="_blank" rel="noreferrer">
          <span className="dot" /><b>GitHub Trending</b>&nbsp;· #1 on GitHub this week
        </a>
        <h1>
          One desktop. Your AI agents, actually <span className="rot" key={word}>{word}</span>
          <span className="caret" />
        </h1>
        <p className="lede">
          They live on your computer. Work with one, team them up, or control them remotely — getting stuff done, 24/7.
        </p>
        <div className="hero-cta">
          <a className="btn btn-primary btn-lg" href="#download">Download for Linux</a>
          <a className="btn btn-ghost btn-lg" href="https://github.com/iOfficeAI/AionUi" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
        <p className="hero-note">Free and open-source · Apache-2.0 · macOS, Windows, Linux</p>

        <div className="strip">
          <div className="avs">
            {['ppt-creator', 'excel-creator', 'word-creator', 'ui-ux-pro-max', 'story-roleplay', 'cowork'].map((p) => (
              <img key={p} src={asset(`/profiles/${p}.jpg`)} alt="" loading="lazy" />
            ))}
          </div>
          <p>20+ built-in assistants, each with a specialty. No setup — open AionUi and start assigning work.</p>
        </div>

        <Mockup />
      </div>
    </section>
  )
}

function Mockup() {
  const on = ['Claude Code', 'Codex']
  return (
    <div className="mock rv">
      <div className="mock-bar">
        <i /><i /><i />
        <span className="mock-title">AionUi — Cowork</span>
      </div>
      <div className="mock-body">
        <div className="mock-left">
          <div className="greet">Hi, what’s your plan for today?</div>
          <div className="chips">
            {['Aion CLI', 'Claude Code', 'Codex', 'Gemini CLI', 'OpenCode', 'OpenClaw', 'Goose', 'Copilot', 'Kimi CLI'].map((c) => (
              <span key={c} className={`chip${on.includes(c) ? ' on' : ''}`}>{c}</span>
            ))}
          </div>
          <div className="composer">
            Send a message, upload files, or create a scheduled task…
            <div className="composer-row">
              <span className="mini">📎 Upload</span>
              <span className="mini">✦ Skills</span>
              <span className="mini">⏰ Schedule</span>
              <span className="mini" style={{ marginLeft: 'auto', background: 'rgb(var(--color-primary))', border: 0, color: '#fff' }}>➤ Send</span>
            </div>
          </div>
        </div>
        <div className="mock-right">
          <div className="grid-assist">
            {[
              { i: 'excel-creator', n: 'Emily · Excel Creator', s: 'Pivot, chart & clean data' },
              { i: 'ppt-creator', n: 'Patrick · Slide Creator', s: 'Slides from bullet points' },
              { i: 'word-creator', n: 'William · Word Creator', s: 'Reports, proposals, letters' },
              { i: 'ui-ux-pro-max', n: 'Stella · UI/UX Pro Max', s: 'Design with best practices' },
            ].map((a) => (
              <div key={a.i} className="assist-mini">
                <img src={asset(`/profiles/${a.i}.jpg`)} alt="" />
                <div><b>{a.n}</b><span>{a.s}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
