import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          IK<span className={styles.logoAccent}>.</span>
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Isam Khan · Built with Next.js
        </p>

        <div className={styles.links}>
          <a href="https://github.com/isamkhan1809" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/isam-khan-3a1260292" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:isamkhan1809@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
