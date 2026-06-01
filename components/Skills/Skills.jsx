'use client'
import { useEffect, useRef } from 'react'
import styles from './Skills.module.css'

const skills = [
  { name: 'Python', percent: 90, meta: 'Primary language — ML/AI', orange: false },
  { name: 'Generative AI & LLMs', percent: 85, meta: 'Fine-tuning, Prompting, RAG', orange: false },
  { name: 'Agentic AI Workflows', percent: 82, meta: 'MCP Servers, Automation', orange: false },
  { name: 'Machine Learning', percent: 83, meta: 'Supervised, Unsupervised, KNN, K-means', orange: false },
  { name: 'AWS & Azure', percent: 80, meta: 'Cloud Infrastructure, Deployment', orange: true },
  { name: 'Docker & DevOps', percent: 75, meta: 'Containers, CI/CD', orange: true },
  { name: 'SQL & Databases', percent: 78, meta: 'Microsoft SQL Server, Firebase', orange: true },
  { name: 'Full-Stack Development', percent: 70, meta: 'React.js, Node.js, JavaScript', orange: true },
]

const techTags = [
  'Python', 'TensorFlow', 'PyTorch', 'LangChain', 'OpenAI SDK', 'Anthropic SDK',
  'AWS Lambda', 'S3', 'Azure CLI', 'Terraform', 'IAM', 'VPC',
  'Docker', 'Git', 'React.js', 'Node.js', 'Microsoft SQL Server', 'Firebase',
  'Java', 'Spring Boot', 'Agile', 'Jupyter', 'MCP Protocol',
]

export default function Skills() {
  const sectionRef = useRef(null)
  const barsRef = useRef([])

  useEffect(() => {
    const runGsap = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const el = sectionRef.current
      if (!el) return

      gsap.fromTo(el.querySelectorAll('[data-anim]'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 75%' } }
      )

      // Animate bars
      ScrollTrigger.create({
        trigger: el,
        start: 'top 70%',
        onEnter: () => {
          barsRef.current.forEach(bar => {
            if (bar) {
              const pct = bar.getAttribute('data-pct')
              gsap.to(bar, { width: pct + '%', duration: 1.2, ease: 'power2.out', delay: 0.3 })
            }
          })
        }
      })
    }
    runGsap()
  }, [])

  return (
    <section className={styles.section} id="skills" ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label" data-anim style={{ justifyContent: 'center' }}>02 — Skills</p>
          <h2 className="section-title" data-anim>
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p style={{ color: 'var(--text2)', maxWidth: '500px', margin: '0 auto', fontSize: '1rem' }} data-anim>
            From low-level ML pipelines to cloud-scale agentic architectures
          </p>
        </div>

        <div className={styles.grid}>
          {skills.map((s, i) => (
            <div className={styles.skillCard} key={s.name} data-anim>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{s.name}</span>
                <span className={styles.skillPercent}>{s.percent}%</span>
              </div>
              <div className={styles.skillMeta}>{s.meta}</div>
              <div className={styles.barTrack}>
                <div
                  className={`${styles.barFill} ${s.orange ? styles.orange : ''}`}
                  data-pct={s.percent}
                  ref={el => barsRef.current[i] = el}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.tagCloud} data-anim>
          {techTags.map(t => (
            <span className={styles.techTag} key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
