'use client'
import { useEffect, useRef } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
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
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%' } }
      )
    }
    runGsap()
  }, [])

  return (
    <section className={styles.section} id="contact" ref={sectionRef}>
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.header} data-anim>
            <p className="section-label" style={{ justifyContent: 'center' }}>08 — Contact</p>
            <h2 className="section-title">
              Let&apos;s Build <span className="gradient-text">Something</span>
            </h2>
            <p className={styles.subtext}>
              I&apos;m open to Junior AI/ML roles, freelance AI projects, and collaborations.
              Whether you have a question, an opportunity, or just want to say hi — my inbox is always open.
            </p>
          </div>

          <div data-anim>
            <a href="mailto:isamkhan1809@gmail.com" className={styles.emailLink}>
              isamkhan1809@gmail.com
            </a>
          </div>

          <div className={styles.socialRow} data-anim>
            <a href="https://www.linkedin.com/in/isam-khan-3a1260292" target="_blank" rel="noreferrer" className={styles.socialBtn}>
              💼 LinkedIn
            </a>
            <a href="https://github.com/isamkhan1809" target="_blank" rel="noreferrer" className={styles.socialBtn}>
              🐙 GitHub
            </a>
            <a href="https://isamkhan.com/" target="_blank" rel="noreferrer" className={styles.socialBtn}>
              🌐 Portfolio
            </a>
          </div>

          <div data-anim>
            <a href="mailto:isamkhan1809@gmail.com" className={styles.ctaBtn}>
              Send me a message →
            </a>
          </div>

          <div className={styles.contactCard} data-anim>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📍</div>
              <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>Location</div>
                <div className={styles.contactValue}>Harrow, London, UK</div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📞</div>
              <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>Phone</div>
                <div className={styles.contactValue}>
                  <a href="tel:+447487653695">+44 7487 653695</a>
                </div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>🗣️</div>
              <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>Languages</div>
                <div className={styles.contactValue}>English & Urdu (Native)</div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>✅</div>
              <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>Status</div>
                <div className={styles.contactValue}>Available for opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
