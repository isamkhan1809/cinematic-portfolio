'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Projects.module.css'

const projects = [
  {
    icon: '🏆',
    iconClass: 'award',
    name: 'AWS Hackathon 2026 — Breaking Barriers',
    org: 'AWS × Race Against Dementia',
    badge: 'award',
    badgeText: '🥇 1st Place',
    category: 'web',
    desc: 'Full-stack web app on AWS for Race Against Dementia charity. AI-powered academic paper analysis & peer review system — reduced review time from 6–12 months to instant and cost from £5,000 to £0.',
    highlights: [
      'Reduced peer review time from 6–12 months to instant',
      'Eliminated £5,000 review cost per paper',
      'AWS serverless architecture with Lambda & S3',
      'AI analysis pipeline for research papers',
    ],
    stack: ['AWS', 'S3', 'Lambda', 'CloudFormation', 'Full-Stack', 'AI Analysis'],
    featured: true,
  },
  {
    icon: '💪',
    iconClass: '',
    name: 'AI-Powered Fitness Recommendation System',
    org: 'Final Year Project, Brunel University — 2023/24',
    badge: 'academic',
    badgeText: 'Academic',
    category: 'ml',
    desc: 'ML fitness recommendation engine with separate models for muscle gain, fat loss, and strength training. Achieved 100% user testing success. Full-stack React application.',
    highlights: [
      '3 separate ML models for different fitness goals',
      '100% user testing success rate',
      'Full-stack React frontend + Python ML backend',
      'Classification & recommendation algorithms',
    ],
    stack: ['Python', 'Machine Learning', 'React.js', 'Classification', 'REST API'],
    featured: false,
  },
  {
    icon: '☁️',
    iconClass: '',
    name: 'Azure CLI MCP Server',
    org: 'Firemind — Confidential',
    badge: 'confidential',
    badgeText: 'Confidential',
    category: 'ai',
    desc: 'MCP server enabling natural language control of Azure cloud infrastructure. Engineers can provision, manage, and query Azure resources conversationally.',
    highlights: [],
    stack: ['Python', 'MCP Protocol', 'Azure CLI', 'LLMs'],
    featured: false,
  },
  {
    icon: '🤖',
    iconClass: '',
    name: 'RPA MCP Server',
    org: 'Firemind — Confidential',
    badge: 'confidential',
    badgeText: 'Confidential',
    category: 'ai',
    desc: 'Browser and VM automation server using the MCP protocol. Enables agentic control of Windows and Linux virtual machines and web browsers.',
    highlights: [],
    stack: ['Python', 'MCP Protocol', 'RPA', 'Browser Automation'],
    featured: false,
  },
  {
    icon: '📊',
    iconClass: '',
    name: 'Agentic Report Generation Workflow',
    org: 'Firemind — Confidential',
    badge: 'confidential',
    badgeText: 'Confidential',
    category: 'ai',
    desc: 'End-to-end agentic workflow that reads Excel campaign data, processes it through an LLM, and automatically pushes reports to Google DV360.',
    highlights: [],
    stack: ['Python', 'Agentic AI', 'Excel', 'Google DV360', 'LLMs'],
    featured: false,
  },
  {
    icon: '🧬',
    iconClass: '',
    name: 'Synthetic Data Generation Pipeline',
    org: 'Firemind — Confidential',
    badge: 'confidential',
    badgeText: 'Confidential',
    category: 'ml',
    desc: 'Pipeline to generate high-quality synthetic training data for ML models, enabling safe development without exposing sensitive real-world data.',
    highlights: [],
    stack: ['Python', 'LLMs', 'Data Engineering', 'ML Pipeline'],
    featured: false,
  },
]

const filters = [
  { key: 'all', label: 'All Projects' },
  { key: 'ai', label: 'Agentic AI' },
  { key: 'ml', label: 'Machine Learning' },
  { key: 'web', label: 'Web / Cloud' },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)

  useEffect(() => {
    const runGsap = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      const el = sectionRef.current
      if (!el) return
      gsap.fromTo(el.querySelectorAll('[data-anim]'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 75%' } }
      )
    }
    runGsap()
  }, [])

  return (
    <section className={styles.section} id="projects" ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label" data-anim>04 — Projects</p>
          <h2 className="section-title" data-anim>
            Things I&apos;ve <span className="orange-gradient">Built</span>
          </h2>
        </div>

        <div className={styles.filterRow} data-anim>
          {filters.map(f => (
            <button
              key={f.key}
              className={`${styles.filterBtn} ${activeFilter === f.key ? styles.active : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((p, i) => (
            <div
              className={`${styles.card} ${p.featured ? styles.featured : ''}`}
              key={p.name}
              data-anim
            >
              <div className={styles.cardTop}>
                <div className={`${styles.projectIcon} ${p.iconClass ? styles[p.iconClass] : ''}`}>
                  {p.icon}
                </div>
                <span className={`${styles.badge} ${styles[p.badge]}`}>{p.badgeText}</span>
              </div>

              <div>
                <div className={styles.projectName}>{p.name}</div>
                <div className={styles.projectOrg}>{p.org}</div>
              </div>

              <p className={styles.projectDesc}>{p.desc}</p>

              {p.highlights.length > 0 && (
                <ul className={styles.highlightList}>
                  {p.highlights.map(h => <li key={h}>{h}</li>)}
                </ul>
              )}

              <div className={styles.stackRow}>
                {p.stack.map(t => <span className={styles.tag} key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
