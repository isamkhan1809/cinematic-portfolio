'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './About.module.css'

const stats = [
  { number: '7+', label: 'Projects Built' },
  { number: '3+', label: 'Cloud Platforms' },
  { number: 'AWS', label: 'Hackathon 2026' },
  { number: 'BSc', label: 'CS & AI, Brunel' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const runGsap = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const el = sectionRef.current
      if (!el) return

      gsap.fromTo(el.querySelectorAll('[data-anim]'),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 75%' }
        }
      )
    }
    runGsap()
  }, [])

  return (
    <section className={styles.section} id="about" ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <p className="section-label" data-anim>01 — About</p>
            <h2 className="section-title" data-anim>
              Building the future <br />
              <span className="gradient-text">with AI & code</span>
            </h2>

            <p className={styles.bio} data-anim>
              I&apos;m <strong>Isam Khan</strong>, a Computer Science &amp; AI graduate from <strong>Brunel University London</strong>.
              I have worked as a <strong>Junior AI Engineer</strong> at <strong>Firemind</strong> and as a <strong>Data Analyst</strong> at <strong>FOIL | Data &amp; AI</strong> in London.
            </p>
            <p className={styles.bio} data-anim>
              I specialise in <strong>generative AI systems</strong>, fine-tuning language models with LoRA/QLoRA,
              building <strong>production RAG pipelines</strong> with hybrid retrieval, developing <strong>MCP servers</strong> for natural language cloud control,
              designing <strong>multi-agent research systems</strong>, and shipping full-stack AI applications with real-time capabilities.
            </p>
            <p className={styles.bio} data-anim>
              From taking part in the <strong>AWS Hackathon 2026</strong> to deploying production-grade AI pipelines —
              I bridge the gap between cutting-edge research and real-world impact.
            </p>

            <div className={styles.infoList} data-anim>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📍</div>
                <span>Harrow, London, UK</span>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📧</div>
                <a href="mailto:isamkhan1809@gmail.com">isamkhan1809@gmail.com</a>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>💼</div>
                <a href="https://www.linkedin.com/in/isam-khan-3a1260292" target="_blank" rel="noreferrer">
                  linkedin.com/in/isam-khan-3a1260292
                </a>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>🐙</div>
                <a href="https://github.com/isamkhan1809" target="_blank" rel="noreferrer">
                  github.com/isamkhan1809
                </a>
              </div>
            </div>

            <div className={styles.statsGrid} data-anim>
              {stats.map(s => (
                <div className={styles.statCard} key={s.label}>
                  <div className={styles.statNumber}>{s.number}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightCol} data-anim>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/avatar.jpg"
                alt="Isam Khan"
                fill
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                priority
              />
            </div>
            <div className={styles.imageGlow} />
            <div className={styles.tagRow}>
              <span className={`${styles.tag} ${styles.accent}`}>AI Engineer</span>
              <span className={styles.tag}>London, UK</span>
              <span className={styles.tag}>Open to work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
