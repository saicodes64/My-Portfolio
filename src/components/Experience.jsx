const youtubeBullets = [
    'Create gaming and storytelling content for 350,000+ subscribers on YouTube.',
    'Selected as the only Tier-3 creator from India in Scopely\'s Stumble Guys Creator Program based on sustained performance, quality standards, and community impact.',
    'Develop short- and long-form video content optimized for audience engagement and retention.',
    'Manage community growth through regular content delivery and active audience interaction.',
]

const kaizenBullets = [
    'Designed and developed a production-grade discipline tracking platform from scratch using the MERN stack, Redis, and AWS EC2.',
    'Researched existing habit-tracking solutions and engineered a unified system focused on streak integrity, timezone-safe logging, and persistent focus sessions.',
    'Architected and deployed backend infrastructure on AWS EC2 (Ubuntu) with Nginx reverse proxy and CI/CD via GitHub Actions.',
    'Implemented secure authentication (OTP verification, Google OAuth 2.0, JWT access/refresh tokens) and Redis-based rate limiting to ensure reliability under real user traffic.',
    'Launched and iterated the product independently, managing production debugging, infrastructure optimization, and continuous feature improvements.',
]

export default function Experience() {
    return (
        <section id="experience" className="page-section active">
            <div className="container">
                <h2 className="section-header">Experience</h2>
                <div className="row">
                    <div className="col-lg-8 mx-auto">

                        {/* Kaizen */}
                        <div className="futuristic-card mb-4">
                            <div className="row align-items-start">
                                <div className="col-md-2 text-center">
                                    <i className="fas fa-bullseye fa-3x text-primary-cyan mb-3"></i>
                                </div>
                                <div className="col-md-10">
                                    <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                        <div>
                                            <h4 className="text-primary-cyan mb-0">Founder &amp; Full-Stack Developer</h4>
                                            <h6 className="text-secondary-cyan">
                                                Kaizen: The Discipline Tracker &nbsp;·&nbsp;
                                                <a href="https://www.kaizentracker.in" target="_blank" rel="noreferrer" className="text-secondary-cyan">
                                                    kaizentracker.in
                                                </a>
                                            </h6>
                                        </div>
                                        <span className="qualification-badge" style={{ fontSize: '0.8rem', padding: '4px 12px' }}>
                                            Oct 2025 – Present
                                        </span>
                                    </div>

                                    <ul className="mt-3" style={{ paddingLeft: '1.2rem' }}>
                                        {kaizenBullets.map((b) => (
                                            <li key={b} className="mb-2">{b}</li>
                                        ))}
                                    </ul>

                                    <div className="row mt-3">
                                        <div className="col-md-4">
                                            <div className="experience-metric">
                                                <h6 className="text-primary-cyan">Stack</h6>
                                                <p className="mb-0">MERN + Redis</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="experience-metric">
                                                <h6 className="text-primary-cyan">Infrastructure</h6>
                                                <p className="mb-0">AWS EC2 + Nginx</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="experience-metric">
                                                <h6 className="text-primary-cyan">Role</h6>
                                                <p className="mb-0">Solo Founder</p>
                                            </div>
                                        </div>
                                    </div>

                                    <a
                                        href="https://www.kaizentracker.in"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="cyber-btn mt-3"
                                    >
                                        <i className="fas fa-external-link-alt me-2"></i>Visit Platform
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* YouTube */}
                        <div className="futuristic-card">
                            <div className="row align-items-start">
                                <div className="col-md-2 text-center">
                                    <i className="fab fa-youtube fa-3x text-primary-cyan mb-3"></i>
                                </div>
                                <div className="col-md-10">
                                    <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                        <div>
                                            <h4 className="text-primary-cyan mb-0">Content Creator</h4>
                                            <h6 className="text-secondary-cyan">
                                                YouTube &amp; Online Platforms &nbsp;·&nbsp;
                                                <a href="https://www.youtube.com/@SaiTheStumbler" target="_blank" rel="noreferrer" className="text-secondary-cyan">
                                                    youtube.com/@SaiTheStumbler
                                                </a>
                                            </h6>
                                        </div>
                                        <span className="qualification-badge" style={{ fontSize: '0.8rem', padding: '4px 12px' }}>
                                            Jan 2023 – Present
                                        </span>
                                    </div>

                                    <ul className="mt-3" style={{ paddingLeft: '1.2rem' }}>
                                        {youtubeBullets.map((b) => (
                                            <li key={b} className="mb-2">{b}</li>
                                        ))}
                                    </ul>

                                    <div className="row mt-3">
                                        <div className="col-md-4">
                                            <div className="experience-metric">
                                                <h6 className="text-primary-cyan">Subscribers</h6>
                                                <p className="mb-0">350,000+</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="experience-metric">
                                                <h6 className="text-primary-cyan">Content Focus</h6>
                                                <p className="mb-0">Gaming &amp; Storytelling</p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="experience-metric">
                                                <h6 className="text-primary-cyan">Duration</h6>
                                                <p className="mb-0">2+ Years</p>
                                            </div>
                                        </div>
                                    </div>

                                    <a
                                        href="https://www.youtube.com/@SaiTheStumbler"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="cyber-btn mt-3"
                                    >
                                        <i className="fab fa-youtube me-2"></i>Visit Channel
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}