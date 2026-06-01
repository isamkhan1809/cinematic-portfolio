'use client'
import { useEffect, useRef } from 'react'
import styles from './Experience.module.css'

const experiences = [
  {
    role: 'Junior AI Engineer',
    company: 'Firemind LTD',
    location: 'London',
    period: 'Aug 2025 – Present',
    current: true,
    bullets: [
      'Delivering end-to-end generative AI pipelines using LLMs and fine-tuning SLMs for production use',
      'Built MCP servers integrated with Azure CLI for natural language cloud infrastructure control',
      'Developed RPA MCP servers enabling automation of Windows/Linux VMs and browser workflows',
      'Engineered agentic workflow for automated report generation: Excel data → Google DV360 campaigns',
      'Created synthetic data generation pipeline for safe and diverse ML model training',
      'Managed full ML lifecycle: data preparation, model training, evaluation, and deployment',
    ],
    stack: ['Python', 'LLMs', 'MCP Protocol', 'Azure CLI', 'Agentic AI', 'RPA', 'GenAI'],
  },
  {
    role: 'Customer Assistant',
    company: 'Morrisons',
    location: 'London',
    period: 'Aug 2023 – Aug 2025',
    current: false,
    bullets: [
      'Delivered excellent customer service in a high-volume retail environment',
      'Developed strong communication, teamwork and time management skills',
    ],
    stack: [],
  },
  {
    role: 'Sales Assistant',
    company: 'Medi2data',
    location: 'London',
    period: 'Jun 2021 – Aug 2021',
    current: false,
    bullets: [
      'Supported sales operations for a healthcare data technology company',
      'Gained exposure to B2B sales processes and CRM systems',
    ],
    stack: [],
  },
]

export default function Experience() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const runGsap = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)
      const el = sectionRef.current
      if (!el) return
      gsap.fromTo(el.querySelectorAll('[data-anim]'),
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 75%' } }
      )
    }
    runGsap()
  }, [])

  return (
    <section className={styles.section} id="experience" ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label" data-anim>03 — Experience</p>
          <h2 className="section-title" data-anim>
            Work <span className="gradient-text">History</span>
          </h2>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div className={styles.item} key={i} data-anim>
              <div className={`${styles.dot} ${exp.current ? '' : styles.orange}`} />
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={`${styles.period} ${!exp.current ? styles.past : ''}`}>
                    {exp.period}
                  </span>
                </div>
                <div className={styles.company}>
                  {exp.current ? '🔵' : '⚪'} {exp.company} · {exp.location}
                </div>
                <ul className={styles.bullets}>
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                {exp.stack.length > 0 && (
                  <div className={styles.stackRow}>
                    {exp.stack.map(t => <span className={styles.stackTag} key={t}>{t}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
