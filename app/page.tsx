import Navbar from '@/components/Navbar/Navbar'
import VideoIntro from '@/components/VideoIntro/VideoIntro'
import About from '@/components/About/About'
import Skills from '@/components/Skills/Skills'
import Experience from '@/components/Experience/Experience'
import Projects from '@/components/Projects/Projects'
import Certifications from '@/components/Certifications/Certifications'
import Education from '@/components/Education/Education'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import ClientEffects from '@/components/ClientEffects/ClientEffects'

export default function Home() {
  return (
    <>
      <ClientEffects />
      <Navbar />
      <main>
        <VideoIntro />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
