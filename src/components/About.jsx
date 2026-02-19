import { useState, useEffect, useRef } from 'react'

/* ── data ────────────────────────────────────────────────── */

const skillGroups = [
    {
        icon: 'fa-code',
        title: 'Languages',
        skills: ['C++', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
        icon: 'fa-server',
        title: 'Backend & Web',
        skills: ['Node.js', 'Express.js', 'React', 'MongoDB Atlas', 'REST APIs'],
    },
    {
        icon: 'fa-shield-alt',
        title: 'Auth & State',
        skills: ['OAuth 2.0', 'JWT', 'Zustand', 'Redux'],
    },
    {
        icon: 'fa-cloud',
        title: 'Infra & DevOps',
        skills: ['AWS EC2', 'Docker', 'Nginx', 'Linux (Ubuntu)', 'Systemd', 'GitHub Actions'],
    },
    {
        icon: 'fa-database',
        title: 'Databases',
        skills: ['MongoDB', 'Redis', 'MySQL'],
    },
    {
        icon: 'fa-tools',
        title: 'Tools',
        skills: ['Git', 'GitHub', 'Postman', 'Jira'],
    },
]

const headlineStats = [
    { value: 1003, suffix: '+', label: 'Hours Tracked', icon: 'fa-clock' },
    { value: 4, suffix: '', label: 'Focus Domains', icon: 'fa-bullseye' },
    { value: 9.0, suffix: '', label: 'Avg SGPA', icon: 'fa-graduation-cap', decimals: 2 },
    { value: 200, suffix: '+', label: 'DSA Problems', icon: 'fa-code' },
]

const effortBars = [
    { label: 'Web Development (May - Dec)', hours: 360, color: '#00d4ff', icon: 'fa-laptop-code' },
    { label: 'Academics (Jan-Dec)', hours: 443, color: '#00f5ff', icon: 'fa-book' },
    { label: 'DSA', hours: 170, color: '#0066cc', icon: 'fa-project-diagram' },
    { label: 'Aptitude', hours: 30, color: '#003d7a', icon: 'fa-brain' },
]

const MAX_HOURS = 500 // scale bar against

const academicHighlights = [
    { semester: 'Semester 4', period: 'Jan – Apr', sgpa: 8.95 },
    { semester: 'Semester 5', period: 'Aug – Dec', sgpa: 9.05 },
]

/* ── animated counter hook ──────────────────────────────── */

function useCountUp(target, duration = 2000, decimals = 0) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true
                    const start = performance.now()

                    const tick = (now) => {
                        const elapsed = now - start
                        const progress = Math.min(elapsed / duration, 1)
                        // ease-out cubic
                        const eased = 1 - Math.pow(1 - progress, 3)
                        setCount(parseFloat((eased * target).toFixed(decimals)))
                        if (progress < 1) requestAnimationFrame(tick)
                    }
                    requestAnimationFrame(tick)
                }
            },
            { threshold: 0.3 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [target, duration, decimals])

    return [count, ref]
}

/* ── sub-components ─────────────────────────────────────── */

function StatCard({ value, suffix, label, icon, decimals = 0 }) {
    const [count, ref] = useCountUp(value, 2000, decimals)

    return (
        <div className="col-6 col-md-3" ref={ref}>
            <div className="exec-stat-card">
                <div className="exec-stat-icon">
                    <i className={`fas ${icon}`}></i>
                </div>
                <h3 className="exec-stat-value">
                    {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
                    <span className="exec-stat-suffix">{suffix}</span>
                </h3>
                <p className="exec-stat-label">{label}</p>
            </div>
        </div>
    )
}

function EffortBar({ label, hours, color, icon, delay }) {
    const [visible, setVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.2 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    const pct = Math.min((hours / MAX_HOURS) * 100, 100)

    return (
        <div className="exec-effort-row" ref={ref} style={{ animationDelay: `${delay}ms` }}>
            <div className="exec-effort-header">
                <span className="exec-effort-label">
                    <i className={`fas ${icon} me-2`} style={{ color }}></i>
                    {label}
                </span>
                <span className="exec-effort-hours" style={{ color }}>{hours}+ hrs</span>
            </div>
            <div className="exec-effort-track">
                <div
                    className="exec-effort-fill"
                    style={{
                        width: visible ? `${pct}%` : '0%',
                        background: `linear-gradient(90deg, ${color}33, ${color})`,
                        transitionDelay: `${delay}ms`,
                    }}
                />
            </div>
        </div>
    )
}

/* ── main component ─────────────────────────────────────── */

export default function About() {
    return (
        <section id="about" className="page-section active">
            <div className="container">
                <h2 className="section-header">About Me</h2>
                <div className="row">
                    <div className="col-lg-9 mx-auto">

                        {/* Professional Summary */}
                        <div className="futuristic-card mb-4">
                            <h4 className="text-primary-cyan mb-3">
                                <i className="fas fa-user-tie me-2"></i>Professional Summary
                            </h4>
                            <p className="lead mb-3">
                                Full-stack developer specializing in <strong className="text-neon-cyan">MERN stack and AWS</strong> with experience in end-to-end
                                application development and deployment.
                            </p>
                            <p>
                                Built and deployed a scalable platform on AWS EC2 featuring secure authentication,
                                responsive UI, and optimized APIs. Strong problem-solving skills with 200+ DSA problems solved.
                                Focused on developing scalable web systems and cloud-native applications.
                            </p>
                        </div>

                        {/* ── 2025 Execution Report ──────────────────── */}
                        <div className="futuristic-card mb-4 exec-report-card">
                            <h4 className="text-primary-cyan mb-2">
                                <i className="fas fa-chart-line me-2"></i>2025 Execution Report
                            </h4>
                            <p className="exec-report-subtitle mb-4">
                                Every productive hour outside of college tracked and categorized.
                            </p>

                            {/* Headline Stats */}
                            <div className="row g-3 mb-4">
                                {headlineStats.map((s) => (
                                    <StatCard key={s.label} {...s} />
                                ))}
                            </div>

                            {/* Effort Distribution */}
                            <h6 className="text-secondary-cyan mb-3">
                                <i className="fas fa-layer-group me-2"></i>Effort Distribution
                            </h6>
                            <div className="exec-effort-section mb-4">
                                {effortBars.map((bar, i) => (
                                    <EffortBar key={bar.label} {...bar} delay={i * 150} />
                                ))}
                            </div>

                            {/* Academic Performance */}
                            <h6 className="text-secondary-cyan mb-3">
                                <i className="fas fa-award me-2"></i>Academic Performance
                            </h6>
                            <div className="row g-3 mb-4">
                                {academicHighlights.map((sem) => (
                                    <div className="col-6" key={sem.semester}>
                                        <div className="exec-sem-card">
                                            <span className="exec-sem-period">{sem.period}</span>
                                            <h5 className="exec-sem-sgpa">{sem.sgpa}</h5>
                                            <span className="exec-sem-label">{sem.semester} SGPA</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Key Insight */}
                            <div className="exec-insight">
                                <i className="fas fa-quote-left exec-insight-icon"></i>
                                <p>
                                    Effort tracking eliminates perception bias. Measured consistency reveals actual
                                    priority distribution. Progress becomes quantifiable when effort is recorded systematically.
                                </p>
                            </div>
                        </div>

                        {/* Technical Skills */}
                        <div className="futuristic-card">
                            <h4 className="text-primary-cyan mb-4">
                                <i className="fas fa-code me-2"></i>Technical Skills
                            </h4>
                            <div className="row">
                                {skillGroups.map(({ icon, title, skills }) => (
                                    <div className="col-md-6 mb-4" key={title}>
                                        <h6 className="text-secondary-cyan mb-2">
                                            <i className={`fas ${icon} me-2`}></i>{title}
                                        </h6>
                                        <div>
                                            {skills.map((s) => (
                                                <span className="skill-item" key={s}>{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
