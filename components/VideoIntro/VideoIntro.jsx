'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './VideoIntro.module.css'
import CinematicLayer from '../CinematicLayer/CinematicLayer'

export default function VideoIntro() {
  const videoRef = useRef(null)
  const bgVideoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(true)
  const [showBadge, setShowBadge] = useState(true)

  useEffect(() => {
    // Hide sound badge after 4s
    const t = setTimeout(() => setShowBadge(false), 4000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    // GSAP entrance animations
    const runGsap = async () => {
      const { gsap } = await import('gsap')
      const tl = gsap.timeline({ delay: 0.3 })
      tl.to(`.${styles.location}`, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0)
        .to(`.${styles.availBadge}`, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.2)
        .to(`.${styles.nameBlock}`, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, 0.35)
        .to(`.${styles.role}`, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.55)
        .to(`.${styles.subtitle}`, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.7)
        .to(`.${styles.ctaRow}`, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.85)

      // Set initial states
      gsap.set([
        `.${styles.location}`,
        `.${styles.availBadge}`,
        `.${styles.nameBlock}`,
        `.${styles.role}`,
        `.${styles.subtitle}`,
        `.${styles.ctaRow}`,
      ], { y: 30 })
    }
    runGsap()
  }, [])

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !muted
    // background video always stays muted to prevent echo
    setMuted(!muted)
    setShowBadge(false)
  }

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (playing) {
      v.pause()
      bgVideoRef.current?.pause()
    } else {
      v.play()
      bgVideoRef.current?.play()
    }
    setPlaying(!playing)
  }

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      {/* Background ambient video */}
      <video
        ref={bgVideoRef}
        className={styles.bgVideo}
        src="/video/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Foreground video */}
      <video
        ref={videoRef}
        className={styles.fgVideo}
        src="/video/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlays */}
      <div className={styles.gradLeft} />
      <div className={styles.gradBottom} />
      <div className={styles.gradTop} />
      <div className={styles.scanLine} />

      {/* Three.js particles */}
      <CinematicLayer />

      {/* Hero Content */}
      <div className={styles.content}>
        <div className={styles.location}>
          <span className={styles.locDot} />
          Based in London, UK
        </div>

        <div className={styles.availBadge}>
          <span className={styles.availDot} />
          Available for opportunities
        </div>

        <div className={styles.nameBlock}>
          <span className={styles.nameFirst}>ISAM</span>
          <span className={styles.nameLast}>KHAN</span>
        </div>

        <div className={styles.role}>AI / ML Engineer</div>

        <p className={styles.subtitle}>
          Building generative AI pipelines, agentic workflows,
          and intelligent systems that move at the speed of ideas.
        </p>

        <div className={styles.ctaRow}>
          <a href="#projects" className={styles.btnPrimary} onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View Projects →
          </a>
          <a href="#contact" className={styles.btnSecondary} onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Get in touch
          </a>
        </div>
      </div>

      {/* Video Controls */}
      <div className={styles.videoControls}>
        <button className={styles.controlBtn} onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
          {playing ? '⏸' : '▶'}
        </button>
        <button className={styles.controlBtn} onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
          {muted ? '🔇' : '🔊'}
        </button>
      </div>

      {/* Sound badge */}
      <div className={`${styles.soundBadge} ${!showBadge ? styles.hidden : ''}`}>
        <span className={styles.tapIcon}>👆</span>
        Tap for sound
      </div>

      {/* Scroll indicator */}
      <button className={styles.scrollIndicator} onClick={scrollDown} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </button>
    </section>
  )
}
