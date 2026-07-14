import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Skills from '../components/Skills'
import Services from '../components/Services'
import FeaturedProjects from '../components/FeaturedProjects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')

      let attempts = 0
      const tryScroll = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else if (attempts < 10) {
          attempts++
          setTimeout(tryScroll, 100)
        }
      }
      tryScroll()
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="services">
        <Services />
      </div>

      <FeaturedProjects />

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  )
}

export default Home