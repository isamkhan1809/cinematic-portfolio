'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact', cta: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          IK<span className={styles.logoAccent}>.</span>
        </div>

        <ul className={styles.links}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={link.cta ? styles.cta : ''}
                onClick={e => { e.preventDefault(); handleNav(link.href) }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={e => { e.preventDefault(); handleNav(link.href) }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
