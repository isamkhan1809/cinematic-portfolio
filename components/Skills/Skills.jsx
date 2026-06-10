'use client'
import { useEffect, useRef } from 'react'
import {
  SiPython, SiTensorflow, SiPytorch, SiDocker,
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript,
  SiJavascript, SiGit, SiLangchain, SiOpenai, SiFirebase,
  SiJupyter, SiLinux, SiPostgresql,
} from 'react-icons/si'
import { FaBrain, FaRobot, FaCloud, FaAws } from 'react-icons/fa'
import styles from './Skills.module.css'

const techIcons = [
  { Icon: SiPython,         name: 'Python',        color: '#3776AB' },
  { Icon: SiTensorflow,     name: 'TensorFlow',     color: '#FF6F00' },
  { Icon: SiPytorch,        name: 'PyTorch',        color: '#EE4C2C' },
  { Icon: FaBrain,          name: 'Gen AI',         color: '#a78bfa' },
  { Icon: FaRobot,          name: 'Agentic AI',     color: '#34d399' },
  { Icon: SiLangchain,      name: 'LangChain',      color: '#1C3C3C' },
  { Icon: SiOpenai,         name: 'OpenAI',         color: '#74AA9C' },
  { Icon: FaAws,             name: 'AWS',            color: '#FF9900' },
  { Icon: FaCloud,          name: 'Azure',          color: '#0078D4' },
  { Icon: SiDocker,         name: 'Docker',         color: '#2496ED' },
  { Icon: SiReact,          name: 'React',          color: '#61DAFB' },
  { Icon: SiNextdotjs,      name: 'Next.js',        color: '#ffffff' },
  { Icon: SiNodedotjs,      name: 'Node.js',        color: '#339933' },
  { Icon: SiTypescript,     name: 'TypeScript',     color: '#3178C6' },
  { Icon: SiJavascript,     name: 'JavaScript',     color: '#F7DF1E' },
  { Icon: SiGit,            name: 'Git',            color: '#F05032' },
  { Icon: SiFirebase,       name: 'Firebase',       color: '#FFCA28' },
  { Icon: SiJupyter,        name: 'Jupyter',        color: '#F37626' },
  { Icon: SiPostgresql,     name: 'PostgreSQL',     color: '#4169E1' },
  { Icon: SiLinux,          name: 'Linux',          color: '#FCC624' },
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

      // Title slides in from left, like slideIn('left') in the 3D portfolio
      gsap.fromTo(el.querySelector('.section-label'),
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%' } }
      )
      gsap.fromTo(el.querySelector('.section-title'),
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%' } }
      )
      // Cards fade up with stagger
      gsap.fromTo(el.querySelectorAll('[data-anim]'),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.07, ease: 'power3.out',
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

        {/* Tech icon grid — inspired by space-portfolio skills section */}
        <div className={styles.iconGridTitle} data-anim>Technologies</div>
        <div className={styles.iconGrid} data-anim>
          {techIcons.map(({ Icon, name, color }) => (
            <div key={name} className={styles.iconCard} title={name}>
              <Icon size={36} color={color} />
              <span className={styles.iconLabel}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
