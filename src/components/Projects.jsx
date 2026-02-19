const projects = [
    {
        icon: 'fa-chart-line',
        title: 'Kaizen – The Discipline Tracker',
        date: 'Oct 2025 – Present',
        badge: 'Live',
        badgeColor: '#00f5ff',
        desc: 'A production-grade discipline tracking platform for daily goals, focus sessions, streaks, and productivity analytics. Deployed on AWS EC2 with CI/CD via GitHub Actions.',
        features: [
            'Timezone-safe daily log & streak engine (10+ iterations) handling missed days, retroactive edits, and multi-timezone users without streak inflation.',
            'Secure auth with OTP email verification, Google OAuth 2.0, JWT access/refresh tokens, and HttpOnly cookies.',
            'REST APIs with MongoDB unique constraints and Redis-based rate limiting (100 req/15min) securing 5+ endpoints — spam reduced by 95%.',
            'Persistent focus timer with automatic state recovery and cross-day session splitting — tracking 200+ hours of focus time.',
            'Deployed on AWS EC2 (Ubuntu) with Nginx reverse proxy and GitHub Actions CI/CD.',
        ],
        techStack: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Redis', 'SendGrid', 'OAuth 2.0', 'AWS EC2', 'Nginx', 'GitHub Actions'],
        link: 'https://www.kaizentracker.in',
        linkLabel: 'Live Project',
        linkIcon: 'fas fa-external-link-alt',
        disabled: false,
        isLive: true,
    },
    {
        icon: 'fa-chart-bar',
        title: 'Stocker – Stock Portfolio App',
        date: 'Sept 2025',
        badge: 'MERN Learning Project',
        badgeColor: '#0066cc',
        desc: 'A full-stack stock portfolio application with Node.js/Express REST APIs, React frontend, and MongoDB — handling 15+ API endpoints for real-time operations.',
        features: [
            'Full-stack MERN app with 15+ REST API endpoints for real-time portfolio operations.',
            'Secure authentication using JWT tokens, HttpOnly cookies, and middleware-based route protection.',
            'MongoDB schemas with relational modeling and client-side state management for portfolios and transaction history.',
        ],
        techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
        link: null,
        linkLabel: 'Private Repository',
        linkIcon: 'fas fa-code',
        disabled: true,
        isLive: false,
    },
]

function ProjectCard({ icon, title, date, badge, badgeColor, desc, features, techStack, link, linkLabel, linkIcon, disabled, isLive }) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="project-card">
                <div className="d-flex align-items-start mb-3">
                    <i className={`fas ${icon} fa-2x text-primary-cyan me-3 mt-1`}></i>
                    <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-start flex-wrap gap-1">
                            <h4 className="mb-0">{title}</h4>
                            <span
                                className="tech-badge"
                                style={{ background: `linear-gradient(45deg, ${badgeColor}33, ${badgeColor}66)`, borderColor: badgeColor, color: badgeColor, whiteSpace: 'nowrap' }}
                            >
                                {isLive && <i className="fas fa-circle me-1" style={{ fontSize: '0.5rem', verticalAlign: 'middle', color: '#00ff88' }}></i>}
                                {badge}
                            </span>
                        </div>
                        <small className="text-muted">{date}</small>
                    </div>
                </div>

                <p>{desc}</p>

                <div className="mb-3">
                    <h6 className="text-primary-cyan">Key Contributions:</h6>
                    <ul style={{ paddingLeft: '1.2rem' }}>
                        {features.map((f) => (
                            <li key={f} className="mb-1" style={{ fontSize: '0.9rem' }}>{f}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-3">
                    <h6 className="text-primary-cyan mb-2">Tech Stack:</h6>
                    {techStack.map((t) => (
                        <span className="tech-badge" key={t}>{t}</span>
                    ))}
                </div>

                {disabled ? (
                    <div className="cyber-btn disabled">
                        <i className={`${linkIcon} me-2`}></i>{linkLabel}
                    </div>
                ) : (
                    <a href={link} target="_blank" rel="noreferrer" className="cyber-btn">
                        <i className={`${linkIcon} me-2`}></i>{linkLabel}
                    </a>
                )}
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <section id="projects" className="page-section active">
            <div className="container">
                <h2 className="section-header">Featured Projects</h2>
                <div className="row">
                    {projects.map((p) => (
                        <ProjectCard key={p.title} {...p} />
                    ))}
                </div>
            </div>
        </section>
    )
}
