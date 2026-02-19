import { useEffect, useRef } from 'react'
import profileImg from '../assets/profile.PNG'

const typingTexts = [
    'Full-Stack Developer',
    'MERN Stack Engineer',
    'AWS & DevOps Enthusiast',
    'Problem Solver',
]

export default function Home({ onNavigate }) {
    const subtitleRef = useRef(null)

    useEffect(() => {
        const el = subtitleRef.current
        if (!el) return
        let textIndex = 0
        let charIndex = 0
        let isDeleting = false
        let timeout

        const type = () => {
            const current = typingTexts[textIndex]
            if (isDeleting) {
                el.textContent = current.substring(0, charIndex - 1)
                charIndex--
            } else {
                el.textContent = current.substring(0, charIndex + 1)
                charIndex++
            }

            let delay = isDeleting ? 50 : 80

            if (!isDeleting && charIndex === current.length) {
                delay = 1800
                isDeleting = true
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false
                textIndex = (textIndex + 1) % typingTexts.length
                delay = 300
            }

            timeout = setTimeout(type, delay)
        }

        const startTimer = setTimeout(type, 1200)
        return () => {
            clearTimeout(startTimer)
            clearTimeout(timeout)
        }
    }, [])

    return (
        <section id="home" className="page-section active">
            <div className="container hero-section">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h1>Sai Surve</h1>
                            <p className="subtitle" ref={subtitleRef}></p>
                            <p className="lead">
                                Full-stack developer specializing in MERN stack and AWS. Building scalable web systems,
                                secure APIs, and cloud-native applications with 200+ DSA problems solved.
                            </p>
                            <div className="mt-4">
                                <a
                                    href="#projects"
                                    className="cyber-btn me-3"
                                    onClick={(e) => { e.preventDefault(); onNavigate('projects') }}
                                >
                                    <i className="fas fa-rocket me-2"></i>View Projects
                                </a>
                                <a
                                    href="https://drive.google.com/file/d/1HzLz2mPB7a2t05-EoPjmjo9Ho9bN5b4g/view?usp=drivesdk"
                                    className="cyber-btn me-3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-envelope me-2"></i>My Resume
                                </a>
                            </div>
                            <div className="social-links mt-4">
                                <a href="https://github.com/saicodes64" target="_blank" rel="noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://in.linkedin.com/in/saisurve" target="_blank" rel="noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://www.youtube.com/@SaiTheStumbler" target="_blank" rel="noreferrer">
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a href="https://codolio.com/profile/saisurve" target="_blank" rel="noreferrer">
                                    <i className="fas fa-code"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center">
                        <div className="hero-avatar">
                            <img src={profileImg} alt="Sai Surve" style={{ borderRadius: '50%', height: '100%', width: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
