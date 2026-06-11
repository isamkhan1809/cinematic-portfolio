'use client'
import { useEffect, useRef } from 'react'
import {
  SiPython, SiTensorflow, SiPytorch, SiDocker,
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript,
  SiJavascript, SiGit, SiLangchain, SiOpenai, SiFirebase,
  SiJupyter, SiLinux, SiPostgresql,
} from 'react-icons/si'
import { FaBrain, FaRobot, FaCloud, FaAws, FaServer, FaShieldAlt } from 'react-icons/fa'
import styles from './Skills.module.css'

const techIcons = [
  { Icon: SiPython,     name: 'Python',       color: '#3776AB', desc: 'Primary language for ML, AI pipelines, and backend services.' },
  { Icon: SiTensorflow, name: 'TensorFlow',   color: '#FF6F00', desc: 'Deep learning framework for building and training neural networks.' },
  { Icon: SiPytorch,    name: 'PyTorch',      color: '#EE4C2C', desc: 'Research-first deep learning with dynamic computation graphs.' },
  { Icon: FaBrain,      name: 'Gen AI',       color: '#a78bfa', desc: 'LLMs, fine-tuning, RAG pipelines, and prompt engineering.' },
  { Icon: FaRobot,      name: 'Agentic AI',   color: '#34d399', desc: 'Multi-step AI agents that plan, use tools, and execute workflows.' },
  { Icon: SiLangchain,  name: 'LangChain',    color: '#1C3C3C', desc: 'Framework for chaining LLM calls, tools, and memory into pipelines.' },
  { Icon: SiOpenai,     name: 'OpenAI',       color: '#74AA9C', desc: 'GPT models and APIs for text, embeddings, and multimodal AI.' },
  { Icon: FaAws,        name: 'AWS',          color: '#FF9900', desc: 'Cloud infrastructure — Lambda, S3, EC2, and serverless deployments.' },
  { Icon: FaCloud,      name: 'Azure',        color: '#0078D4', desc: 'Microsoft cloud — CLI, resource management, and AI services.' },
  { Icon: SiDocker,     name: 'Docker',       color: '#2496ED', desc: 'Containerisation for reproducible builds and consistent deployments.' },
  { Icon: SiReact,      name: 'React',        color: '#61DAFB', desc: 'Component-based UI library for building interactive web apps.' },
  { Icon: SiNextdotjs,  name: 'Next.js',      color: '#ffffff', desc: 'Full-stack React framework with SSR, static export, and App Router.' },
  { Icon: SiNodedotjs,  name: 'Node.js',      color: '#339933', desc: 'JavaScript runtime for fast, event-driven backend services.' },
  { Icon: SiTypescript, name: 'TypeScript',   color: '#3178C6', desc: 'Typed JavaScript superset for safer, more maintainable code.' },
  { Icon: SiJavascript, name: 'JavaScript',   color: '#F7DF1E', desc: 'Core web language for dynamic frontend and full-stack development.' },
  { Icon: SiGit,        name: 'Git',          color: '#F05032', desc: 'Version control for tracking changes and team collaboration.' },
  { Icon: SiFirebase,   name: 'Firebase',     color: '#FFCA28', desc: 'Google platform for real-time databases, auth, and cloud hosting.' },
  { Icon: SiJupyter,    name: 'Jupyter',      color: '#F37626', desc: 'Interactive notebooks for data exploration and ML experiments.' },
  { Icon: SiPostgresql, name: 'PostgreSQL',   color: '#4169E1', desc: 'Powerful relational database for structured data and complex queries.' },
  { Icon: SiLinux,      name: 'Linux',        color: '#FCC624', desc: 'Unix-based OS for development, servers, and automation scripts.' },
  { Icon: FaShieldAlt,  name: 'Pydantic AI',  color: '#e879f9', desc: 'Type-safe AI agent framework using Pydantic for structured LLM outputs.' },
  { Icon: FaServer,     name: 'MCP Servers',  color: '#38bdf8', desc: 'Model Context Protocol — connects AI agents to tools and data sources.' },
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
          {techIcons.map(({ Icon, name, color, desc }) => (
            <div key={name} className={styles.iconCard}>
              <Icon size={36} color={color} />
              <span className={styles.iconLabel}>{name}</span>
              <div className={styles.iconTooltip}>
                <span className={styles.iconTooltipName}>{name}</span>
                <span className={styles.iconTooltipDesc}>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
