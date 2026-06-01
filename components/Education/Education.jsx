'use client'
import { useEffect, useRef } from 'react'
import styles from './Education.module.css'

const education = [
  {
    icon: '🎓',
    iconClass: 'primary',
    primary: true,
    type: 'Bachelor of Science',
    institution: 'Brunel University London',
    degree: 'BSc Honours Computer Science & Artificial Intelligence',
    period: 'Sep 2021 – Jul 2024',
    current: false,
    desc: 'Focused on machine learning, artificial intelligence, software engineering, and algorithms. Final year project: AI-Powered Fitness Recommendation System.',
  },
  {
    icon: '🏫',
    iconClass: '',
    primary: false,
    type: 'Secondary & Sixth Form',
    institution: 'Park High School & Sixth Form',
    degree: 'GCSEs & A Levels',
    period: 'Sep 2014 – May 2021',
    current: false,
    desc: 'Harrow, London. A Levels and GCSEs, building the academic foundation for university study.',
  },
]

const interests = [
  { icon: '⚽', label: 'Football' },
  { icon: '🏎️', label: 'Formula 1' },
  { icon: '🏋️', label: 'Gym & Fitness' },
  { icon: '🤖', label: 'AI Research' },
  { icon: '☁️', label: 'Cloud Tech' },
]

export default function Education() {
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
    <section className={styles.section} id="education" ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label" data-anim>07 — Education</p>
          <h2 className="section-title" data-anim>
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {education.map((e, i) => (
            <div className={`${styles.card} ${e.primary ? styles.primary : ''}`} key={i} data-anim>
              <div className={styles.cardTop}>
                <div className={`${styles.iconWrap} ${e.iconClass ? styles[e.iconClass] : ''}`}>
                  {e.icon}
                </div>
                <div>
                  <div className={styles.degreeType}>{e.type}</div>
                  <div className={styles.institution}>{e.institution}</div>
                </div>
              </div>
              <div className={styles.degreeName}>{e.degree}</div>
              <div className={`${styles.period} ${!e.current ? styles.past : ''}`}>{e.period}</div>
              <p className={styles.desc}>{e.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.interestsSection} data-anim>
          <div className={styles.interestsTitle}>Interests & Hobbies</div>
          <div className={styles.interestTags}>
            {interests.map(it => (
              <div className={styles.interestTag} key={it.label}>
                <span>{it.icon}</span>
                <span>{it.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
