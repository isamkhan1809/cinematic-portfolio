'use client'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import styles from './Skills.module.css'

const BallCanvas = dynamic(() => import('../canvas/BallCanvas'), { ssr: false })
const ComputerCanvas = dynamic(() => import('../canvas/ComputerCanvas'), { ssr: false })

const techBalls = [
  { name: 'Python', icon: '/tech/python.svg' },
  { name: 'PyTorch', icon: '/tech/pytorch.svg' },
  { name: 'TensorFlow', icon: '/tech/tensorflow.svg' },
  { name: 'React', icon: '/tech/react.svg' },
  { name: 'Node.js', icon: '/tech/nodejs.svg' },
  { name: 'TypeScript', icon: '/tech/typescript.svg' },
  { name: 'Docker', icon: '/tech/docker.svg' },
  { name: 'AWS', icon: '/tech/aws.svg' },
  { name: 'Azure', icon: '/tech/azure.svg' },
  { name: 'Git', icon: '/tech/git.svg' },
  { name: 'Next.js', icon: '/tech/nextjs.svg' },
  { name: 'JavaScript', icon: '/tech/javascript.svg' },
]

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

        {/* 3D Tech Balls */}
        <div className={styles.ballsTitle} data-anim>Technologies</div>
        <div className={styles.ballsGrid} data-anim>
          {techBalls.map((t) => (
            <div key={t.name} className={styles.ballWrap} title={t.name}>
              <BallCanvas icon={t.icon} />
            </div>
          ))}
        </div>

        {/* 3D Computer Model */}
        <div className={styles.computerSection} data-anim>
          <div className={styles.computerLabel}>
            <span className={styles.computerLabelText}>Interactive 3D Workspace — drag to rotate</span>
          </div>
          <div className={styles.computerCanvas}>
            <ComputerCanvas />
          </div>
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
