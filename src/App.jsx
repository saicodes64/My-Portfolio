import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import BgAnimation from './components/BgAnimation'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BitsBg from './components/BitsBg'

const SECTIONS = ['home', 'about', 'education', 'experience', 'projects', 'contact']

export default function App() {
    const [activeSection, setActiveSection] = useState('home')

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + 100 // offset for navbar height

            for (const id of SECTIONS) {
                const el = document.getElementById(id)
                if (!el) continue
                const { offsetTop, offsetHeight } = el
                if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
                    setActiveSection(id)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navigateTo = (sectionId) => {
        const el = document.getElementById(sectionId)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <LoadingScreen />
            <BgAnimation />
            <BitsBg />
            <Navbar activeSection={activeSection} onNavigate={navigateTo} />

            <div style={{ paddingTop: '76px' }}>
                <Home onNavigate={navigateTo} />
                <About />
                <Education />
                <Experience />
                <Projects />
                <Contact />
            </div>

            <Footer />
        </>
    )
}
