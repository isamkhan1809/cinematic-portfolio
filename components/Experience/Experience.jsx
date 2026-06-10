'use client'
import { useEffect, useRef } from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import styles from './Experience.module.css'

const experiences = [
  {
    role: 'Junior AI Engineer',
    company: 'Firemind LTD',
    location: 'London',
    period: 'Aug 2025 – Present',
    current: true,
    iconBg: '#6d28d9',
    icon: '🤖',
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
    iconBg: '#1e3a5f',
    icon: '🛒',
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
    iconBg: '#1e3a5f',
    icon: '💼',
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
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
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
      </div>

      <VerticalTimeline lineColor="rgba(109,40,217,0.3)">
        {experiences.map((exp, i) => (
          <VerticalTimelineElement
            key={i}
            contentStyle={{
              background: 'rgba(17,24,39,0.85)',
              border: '1px solid rgba(109,40,217,0.3)',
              borderRadius: '1rem',
              boxShadow: '0 4px 32px rgba(109,40,217,0.08)',
              color: '#e2e8f0',
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(109,40,217,0.4)' }}
            date={exp.period}
            dateClassName={styles.date}
            iconStyle={{
              background: exp.iconBg,
              border: '2px solid rgba(109,40,217,0.5)',
              fontSize: '1.4rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 12px rgba(109,40,217,0.4)',
            }}
            icon={<span>{exp.icon}</span>}
          >
            <div>
              <h3 className={styles.timelineRole}>{exp.role}</h3>
              <p className={styles.timelineCompany}>{exp.company} · {exp.location}</p>
            </div>
            <ul className={styles.bullets}>
              {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
            {exp.stack.length > 0 && (
              <div className={styles.stackRow}>
                {exp.stack.map(t => <span className={styles.stackTag} key={t}>{t}</span>)}
              </div>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  )
}
