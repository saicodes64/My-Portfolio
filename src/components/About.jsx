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
                                Full-stack developer specializing in MERN stack and AWS with experience in end-to-end
                                application development and deployment.
                            </p>
                            <p>
                                Built and deployed a scalable platform on AWS EC2 featuring secure authentication,
                                responsive UI, and optimized APIs. Strong problem-solving skills with <strong className="text-neon-cyan">300+ DSA problems solved</strong>.
                                Focused on developing scalable web systems and cloud-native applications.
                            </p>
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
