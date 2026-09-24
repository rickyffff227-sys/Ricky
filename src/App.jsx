import { useEffect, useState } from 'react'
import './App.css'

// Edit these values when new photos, case studies, or career details are ready.
const profile = {
  name: 'Ricky Fu', email: 'rickyfff227@outlook.com',
  phone: '+86 133 8971 0959', phoneLink: '+8613389710959',
  location: '中国 · 天津',
}

const INTRO_STORAGE_KEY = 'ricky-intro-seen-v1'

const experiences = [
  { number: '01', category: 'MARKET RESEARCH / 实习经历', title: '从竞品资料，读懂消费市场。', organization: '红星美凯龙 · 北京公司企划部', period: '2026.07 — 2026.09', description: '整理家居行业竞品活动、促销政策与消费趋势资料，并比较商场活动案例。', theme: 'research', visual: 'MARKET / 01' },
  { number: '02', category: 'ECONOMIC ANALYSIS / 实习经历', title: '让数据成为判断的依据。', organization: '阳光保险集团 · 资产管理部', period: '2025.07 — 2025.08', description: '收集宏观经济与资本市场资料，维护投资台账，协助制作 Excel 报表。', theme: 'analysis', visual: 'DATA / 02' },
  { number: '03', category: 'EDUCATION & SKILLS / 学历与技能', title: '以经济与贸易为学习起点。', organization: '天津商业大学 · 国际经济与贸易', period: '预计 2027.06 毕业', description: '关注消费者行为与市场研究，运用 Excel 进行资料汇总、台账维护与报表制作。', theme: 'education', visual: 'LEARN / 03' },
]

const strengths = [
  { number: '01', symbol: '◎', title: '研究与洞察', english: 'RESEARCH', description: '从竞品、趋势与客群资料中提炼有用信息，形成清晰的观察。' },
  { number: '02', symbol: '▦', title: '数据整理', english: 'DATA THINKING', description: '使用 Excel 整理数据、维护台账，并将复杂资料组织成易读的报告。' },
  { number: '03', symbol: '↗', title: '跨领域视角', english: 'PERSPECTIVE', description: '实践覆盖零售企划、资产管理、公共传播与外贸业务。' },
  { number: '04', symbol: '⌁', title: '沟通与表达', english: 'COMMUNICATION', description: '能将调研发现整理为案例、简报与面向不同受众的内容。' },
]

function Arrow({ diagonal = false }) {
  return diagonal ? <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M7 5h12v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg> : <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function SectionHeading({ eyebrow, title, note }) {
  return <div className="section-heading"><div><span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span><h2>{title}</h2></div><p>{note}</p></div>
}

function Intro() {
  return <div className="intro" aria-hidden="true"><div className="intro-name">RICKY FU</div><span className="intro-accent" /></div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return localStorage.getItem(INTRO_STORAGE_KEY) !== 'true'
    } catch {
      return true
    }
  })
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!showIntro) return undefined

    try {
      localStorage.setItem(INTRO_STORAGE_KEY, 'true')
    } catch {
      // The intro still works when storage is unavailable.
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.body.classList.add('intro-active')
    const timer = window.setTimeout(() => setShowIntro(false), reduceMotion ? 120 : 1720)

    return () => {
      window.clearTimeout(timer)
      document.body.classList.remove('intro-active')
    }
  }, [showIntro])

  return <>
    {showIntro && <Intro />}
    <header className="site-header">
      <a href="#top" className="wordmark" aria-label="Ricky Fu，返回首页" onClick={closeMenu}><span className="wordmark-symbol">R<span>·</span>F</span><span className="wordmark-label">RICKY FU<br />PERSONAL HOME</span></a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '关闭' : '菜单'}<span>{menuOpen ? '×' : '+'}</span></button>
      <nav id="main-nav" className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="主导航"><a href="#about" onClick={closeMenu}>关于我</a><a href="#work" onClick={closeMenu}>精选经历</a><a href="#strengths" onClick={closeMenu}>个人优势</a></nav>
      <a className="header-contact" href="#contact">联系我 <Arrow diagonal /></a>
    </header>

    <main>
      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-content page-width">
          <div className="hero-name" aria-label="Ricky Fu">RICKY FU</div>
          <div className="hero-rule" aria-hidden="true"><span /></div>
          <div className="hero-statement">
            <h1 id="hero-title">在复杂中理解<span className="title-comma">，</span><br />在变化中成长。</h1>
            <div className="hero-aside"><p className="hero-subtitle">我试着理解现实如何运转，也试着理解人与世界。</p><a className="hero-link" href="#about">继续了解 <Arrow /></a></div>
          </div>
        </div>
      </section>

      <section id="about" className="about section-shell page-width"><SectionHeading eyebrow="01 / ABOUT ME" title={<>理性思考，<br /><span>保持好奇。</span></>} note="个人叙事 / NARRATIVE" /><div className="about-layout"><div className="portrait-card" aria-label="人物照片预留区域，后续替换为 Ricky 的真实人像"><div className="portrait-image-slot" aria-hidden="true"><span className="portrait-initial">RF</span></div><span className="portrait-line portrait-line-top" aria-hidden="true" /><span className="portrait-line portrait-line-side" aria-hidden="true" /><span className="portrait-accent" aria-hidden="true" /><span className="portrait-caption">RICKY FU / PORTRAIT STUDY</span><span className="portrait-status">IMAGE RESERVED</span></div><div className="about-copy"><span className="small-label">HELLO, I'M RICKY FU</span><h3>我习惯先理解，再判断。</h3><p>面对陌生的问题，我会先理清背景与逻辑，再形成自己的判断。不同的声音，也常常让我重新检查自己是否遗漏了什么。</p><p>我对科技、经济与市场的兴趣，最终都指向同一个问题：现实究竟是如何运转的。越是深入其中，我越在意人的处境、选择与关系——我们如何理解彼此，又如何对待彼此。</p><p className="about-reflection">我仍然在变化，也仍然在学习。<strong>理解现实的逻辑，也试着理解身处其中的人。</strong></p></div></div></section>

      <section id="work" className="work-section"><div className="page-width section-shell"><SectionHeading eyebrow="02 / SELECTED EXPERIENCE" title={<>经历构成视角<span className="accent-period">.</span></>} note="实习 · 学历 · 技能" /><div className="work-intro"><p>以真实经历为起点，记录研究、分析与实践的过程。</p><span>SELECTED WORK / 2024—2027</span></div><div className="experience-grid">{experiences.map(item => <article className={`experience-card ${item.theme}`} key={item.number}><div className="experience-top"><span>{item.category}</span><span>{item.number} / 03</span></div><div className="experience-visual" aria-hidden="true"><span className="visual-index">{item.visual}</span><span className="visual-orbit" /><span className="visual-core" /><span className="visual-small">RICKY FU / EXPERIENCE</span></div><div className="experience-body"><div><h3>{item.title}</h3><p>{item.description}</p></div><div className="experience-foot"><span>{item.organization}<br /><small>{item.period}</small></span><span className="card-arrow"><Arrow diagonal /></span></div></div></article>)}</div><p className="work-note">案例截图、具体成果与项目详情将随资料补充持续更新。</p></div></section>

      <section id="strengths" className="strengths section-shell page-width"><SectionHeading eyebrow="03 / WHAT I BRING" title={<>在变化中，<br /><span>建立自己的方法。</span></>} note="个人优势 / STRENGTHS" /><div className="strengths-grid">{strengths.map(item => <article className="strength-card" key={item.number}><div className="strength-top"><span>{item.number} / 04</span><span className="strength-symbol" aria-hidden="true">{item.symbol}</span></div><div><span className="small-label">{item.english}</span><h3>{item.title}</h3><p>{item.description}</p></div><span className="strength-bottom">RICKY FU · {item.number}</span></article>)}</div></section>

      <section id="contact" className="contact-section"><div className="contact-bg-mark" aria-hidden="true">RF</div><div className="page-width contact-inner"><div className="contact-top"><span className="eyebrow"><span className="eyebrow-dot" />04 / CONTACT</span><span>下一段合作，从这里开始。</span></div><div className="contact-main"><p>LET'S CONNECT</p><h2>期待与你，<br /><em>开启对话。</em></h2><a className="contact-cta" href={`mailto:${profile.email}`} aria-label={`发送邮件至 ${profile.email}`}><Arrow diagonal /></a></div><div className="contact-details"><a href={`mailto:${profile.email}`}>{profile.email} <span>↗</span></a><a href={`tel:${profile.phoneLink}`}>{profile.phone} <span>↗</span></a><span>{profile.location}</span></div><footer><span>© {new Date().getFullYear()} RICKY FU</span><span>BUILT WITH CURIOSITY & PURPOSE</span><a href="#top">返回顶部 ↑</a></footer></div></section>
    </main>
  </>
}

export default App
