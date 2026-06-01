'use client'
import { useEffect, useRef } from 'react'
import styles from './Certifications.module.css'

const earned = [
  {
    icon: '🎓',
    name: 'Google AI Essentials',
    issuer: 'Google',
    date: 'May 2026',
  },
  {
    icon: '🤖',
    name: 'Google AI Professional',
    issuer: 'Google / Coursera',
    date: 'May 2026',
    note: '7-course specialisation',
  },
  {
    icon: '🐙',
    name: 'GitHub Foundations',
    issuer: 'GitHub',
    date: 'May 2026',
  },
]

const inProgress = [
  {
    icon: '☁️',
    name: 'AWS Certified',
    status: 'In Training',
    progress: 55,
  },
  {
    icon: '🔷',
    name: 'Microsoft Azure Certified',
    status: 'In Training',
    progress: 40,
  },
  {
    icon: '🧠',
    name: 'Anthropic Claude Certified Architect – Foundations',
    status: 'In Training',
    progress: 65,
  },
]

export default function Certifications() {
  const sectionRef = useRef(null)

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
    <section className={styles.section} id="certifications" ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label" data-anim style={{ justifyContent: 'center' }}>05 — Certifications</p>
          <h2 className="section-title" data-anim>
            Credentials & <span className="gradient-text">Learning</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: '460px', margin: '0 auto', fontSize: '1rem' }} data-anim>
            Always levelling up — earned and in progress
          </p>
        </div>

        {/* Earned */}
        <div className={styles.earnedTitle} data-anim>
          ✓ Earned Certifications
        </div>
        <div className={styles.earnedGrid}>
          {earned.map((c, i) => (
            <div className={`${styles.certCard} ${styles.earned}`} key={c.name} data-anim>
              <div className={styles.checkmark}>✓</div>
              <div className={styles.certLogoWrap}>{c.icon}</div>
              <div className={styles.certName}>{c.name}</div>
              <div className={styles.certIssuer}>{c.issuer}{c.note ? ` · ${c.note}` : ''}</div>
              <div className={styles.certDate}>Completed {c.date}</div>
            </div>
          ))}
        </div>

        {/* In Progress */}
        <div className={styles.inProgressTitle} data-anim>
          ⚡ Currently In Training
        </div>
        <div className={styles.progressGrid}>
          {inProgress.map((c, i) => (
            <div className={styles.progressCard} key={c.name} data-anim>
              <div className={styles.progressIcon}>{c.icon}</div>
              <div className={styles.progressInfo}>
                <div className={styles.progressName}>{c.name}</div>
                <div className={styles.progressStatus}>{c.status}</div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: `${c.progress}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
