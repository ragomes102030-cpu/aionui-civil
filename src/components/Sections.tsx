import { useEffect, useRef, useState } from 'react'
import { assistants, channels, coTasks, skills, faqs, scheduledTasks } from '../data/content'
import { asset } from '../lib/asset'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 },
    )
    el.querySelectorAll('.rv').forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
  return ref
}

export function Assistants() {
  const ref = useReveal()
  return (
    <section className="sec alt" id="skills-market">
      <div className="wrap" ref={ref}>
        <div className="sec-head rv">
          <span className="eyebrow">Built-in Assistants</span>
          <h2>Meet your team.</h2>
          <p className="sub">
            20+ assistants live on your computer, each with a specialty. No setup — open AionUi and start assigning work.
          </p>
        </div>
        <div className="agrid">
          {assistants.map((a) => (
            <button key={a.name + a.title} className="acard rv">
              <img src={asset(a.img)} alt={a.name} loading="lazy" />
              <b>{a.name} · {a.title}</b>
              <em>{a.title}</em>
              <p>{a.desc}</p>
            </button>
          ))}
        </div>
        <p className="rv" style={{ marginTop: 26, color: 'rgb(var(--color-accent-sub))', fontSize: 14.5 }}>
          You can also create your own — tailored to your workflow.
        </p>
      </div>
    </section>
  )
}

export function Cowork() {
  const ref = useReveal()
  return (
    <section className="sec" id="cowork">
      <div className="wrap" ref={ref}>
        <div className="cowork">
          <div className="rv">
            <span className="eyebrow">Multi-Agent Cowork</span>
            <h2>The best AI agents. All in one place.</h2>
            <p className="sub">
              AionUi auto-detects Claude Code, Codex, Gemini CLI and 20+ more on your machine. Run them in parallel, assign tasks to the right agent, or team them up — all in one unified workspace.
            </p>
            <div className="files">
              <span className="file w"><i>W</i> .docx</span>
              <span className="file x"><i>X</i> .xlsx</span>
              <span className="file p"><i>P</i> .pptx</span>
              <span className="file pdf"><i>PDF</i> .pdf</span>
            </div>
          </div>
          <div className="tasklist rv">
            {coTasks.map((t, i) => (
              <div key={t} className="taskrow">
                <span>{t}</span>
                <span className={`st ${i === 2 ? 'done' : i === 0 || i === 1 ? 'run' : i === 3 ? 'idle' : 'queued'}`}>
                  {i === 2 ? '✓ done' : i === 0 || i === 1 ? 'running' : i === 3 ? 'idle' : 'queued'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Remote() {
  const ref = useReveal()
  return (
    <section className="sec alt" id="remote">
      <div className="wrap" ref={ref}>
        <div className="split">
          <div className="rv">
            <span className="eyebrow">Remote Control</span>
            <h2>Left the desk. Not the controls.</h2>
            <p className="sub">
              Send commands from Telegram, WeChat, Lark, DingTalk, or the built-in WebUI. Your agents keep running on your computer while you’re on the go.
            </p>
          </div>
          <div className="remote-visual rv">
            <div className="remote-line">
              <div className="remote-node">
                <img src={asset("/media/remote-telegram.webp")} alt="Send commands from Telegram" style={{ borderRadius: 14, width: '100%' }} />
                <span>From anywhere · any channel</span>
              </div>
            </div>
            <div className="channel-row" style={{ marginTop: 16 }}>
              {channels.map((c) => (
                <img key={c.name} src={asset(c.img)} alt={c.name} title={c.name} loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Cron() {
  const ref = useReveal()
  return (
    <section className="sec" id="automation">
      <div className="wrap" ref={ref}>
        <div className="split">
          <div className="cron rv">
            <div className="cron-hd">Scheduled Tasks <span>5 tasks</span></div>
            {scheduledTasks.map((t) => (
              <div key={t.name} className="cron-row">
                <span className={`led ${t.active ? 'on' : 'off'}`} />
                <span className="t"><b>{t.name}</b><span>{t.schedule}</span></span>
                <span className="agent">{t.agent}</span>
              </div>
            ))}
          </div>
          <div className="rv">
            <span className="eyebrow">24/7 Automation</span>
            <h2>Set it once. Agents never stop.</h2>
            <p className="sub">
              Schedule agents to run tasks on a cron. Code review every morning, backup every night, report every Monday. They work while you sleep.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Platform() {
  const ref = useReveal()
  return (
    <section className="sec alt" id="platform">
      <div className="wrap" ref={ref}>
        <div className="sec-head rv">
          <span className="eyebrow">Platform</span>
          <h2>Your setup. Your way.</h2>
          <p className="sub">Flexible LLM config, extensible skills, unified MCP — everything you need to make agents truly yours.</p>
        </div>
        <div className="fgrid">
          <div className="fcard rv">
            <div className="kpi">Any LLM</div>
            <h3>Any LLM, Your Rules</h3>
            <p>Use any provider, any endpoint, any API key. Assign different models to different agents. Direct API calls — nothing proxied.</p>
          </div>
          <div className="fcard rv">
            <div className="kpi">20+</div>
            <h3>Skills Marketplace</h3>
            <p>Browse and install community skills to extend what your assistants can do. Or create and share your own.</p>
            <div className="marq">{skills.map((s) => <span key={s}>{s}</span>)}</div>
          </div>
          <div className="fcard rv">
            <div className="kpi">MCP</div>
            <h3>Unified MCP</h3>
            <p>Add MCP servers once, auto-sync to every agent. No per-agent config — one setup, all connected.</p>
          </div>
          <div className="fcard rv">
            <div className="kpi">Local</div>
            <h3>Office Toolkit</h3>
            <p>Generate PPT, Excel, Word, PDF natively. No cloud upload, no third-party service — files stay on your machine.</p>
            <div className="files">
              <span className="file w"><i>W</i> .docx</span>
              <span className="file x"><i>X</i> .xlsx</span>
              <span className="file p"><i>P</i> .pptx</span>
              <span className="file pdf"><i>PDF</i> .pdf</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contributors() {
  const ref = useReveal()
  const list = [
    { n: 'kuishou68', c: 685 }, { n: 'IceyLiu', c: 544 }, { n: 'piorpua', c: 264 },
    { n: 'kaizhou-lab', c: 246 }, { n: 'halvee-tech', c: 164 }, { n: 'zhuqingyv', c: 163 },
    { n: 'ringringlin', c: 131 }, { n: 'loonghao', c: 74 }, { n: 'goworm', c: 71 },
    { n: 'JerryLiu369', c: 68 }, { n: 'cdxiaodong', c: 43 }, { n: 'xavierliang', c: 41 },
    { n: 'JAVA-LW', c: 32 }, { n: 'TCP404', c: 31 }, { n: 'mingxuanzi', c: 20 },
  ]
  return (
    <section className="sec">
      <div className="wrap" ref={ref}>
        <div className="sec-head rv">
          <span className="eyebrow">Built by Amazing People</span>
          <h2>Thank you to every contributor</h2>
          <p className="sub">For their passion and dedication.</p>
        </div>
        <div className="contrib rv">
          {list.map((c) => (
            <a key={c.n} href={`https://github.com/${c.n}`} target="_blank" rel="noreferrer">
              <img src={`https://github.com/${c.n}.png?size=56`} alt={c.n} loading="lazy" />
              <span><b>{c.n}</b> <em>{c.c} commits</em></span>
            </a>
          ))}
        </div>
        <p className="rv" style={{ marginTop: 22, fontSize: 14 }}>
          <a href="https://github.com/iOfficeAI/AionUi/graphs/contributors" target="_blank" rel="noreferrer" style={{ color: 'rgb(var(--color-primary-700))', fontWeight: 560 }}>
            View all contributors on GitHub →
          </a>
        </p>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section className="sec alt" id="faq" style={{ paddingTop: 64 }}>
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p className="sub">Answers to what most people ask before installing.</p>
        </div>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Final() {
  return (
    <section className="final" id="download">
      <div className="wrap">
        <div className="avs" style={{ justifyContent: 'center' }}>
          {['ppt-creator', 'excel-creator', 'word-creator', 'ui-ux-pro-max'].map((p) => (
            <img key={p} src={asset(`/profiles/${p}.jpg`)} alt="" />
          ))}
        </div>
        <p style={{ marginTop: 18 }}>20+ agents ready to work.</p>
        <h2>Start coworking with AI agents.</h2>
        <a className="btn btn-primary btn-lg" href="https://www.aionui.com/en/download" target="_blank" rel="noreferrer">Download for Linux</a>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="brand-mark" />
          <span style={{ fontWeight: 620 }}>AionUi <small style={{ color: 'rgb(var(--color-accent-sub))', fontWeight: 400 }}>· civil build</small></span>
        </div>
        <nav className="foot-links">
          <a href="https://github.com/iOfficeAI/AionUi" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://github.com/iOfficeAI/AionUi/issues" target="_blank" rel="noreferrer">Issues</a>
          <a href="https://www.aionui.com/en/download" target="_blank" rel="noreferrer">Download</a>
          <a href="https://trendshift.io/repositories/15423" target="_blank" rel="noreferrer">Trending</a>
        </nav>
        <span>Free & open-source · Apache-2.0</span>
      </div>
    </footer>
  )
}
