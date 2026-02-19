const educationData = [
    {
        institute: 'PCET\'s Pimpri Chinchwad University',
        short: 'B.Tech in Computer Science',
        qualification: 'B.Tech – Computer Science',
        sub: 'Currently in 6th Semester',
        badgeClass: 'current',
        grade: 'CGPA: 8.87 / 10.0',
        gradeWidth: '88.7%',
        duration: '2022 – 2027',
        status: 'Ongoing',
        statusClass: 'text-primary-cyan',
        coreSubjects: 'Data Structures & Algorithms, Computer Networks, Cloud Computing, Software Testing',
    },
    {
        institute: 'Modern College',
        short: 'Higher Secondary',
        qualification: 'HSC – 12th',
        sub: 'Science Stream',
        badgeClass: '',
        grade: '69%',
        gradeWidth: '69%',
        duration: '2021 – 2022',
        status: 'Completed',
        statusClass: 'text-success',
        coreSubjects: null,
    },
    {
        institute: 'RKS School',
        short: 'Secondary School',
        qualification: 'SSC – 10th',
        sub: 'Maharashtra Board',
        badgeClass: '',
        grade: '86%',
        gradeWidth: '86%',
        duration: '2021',
        status: 'Completed',
        statusClass: 'text-success',
        coreSubjects: null,
    },
]

export default function Education() {
    return (
        <section id="education" className="page-section active">
            <div className="container">
                <h2 className="section-header">Education</h2>
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="futuristic-card">
                            <div className="text-center mb-4">
                                <i className="fas fa-graduation-cap fa-3x text-primary-cyan mb-3"></i>
                                <h4 className="text-primary-cyan">Academic Journey</h4>
                                <p className="text-muted">Building a strong foundation through quality education</p>
                            </div>

                            <div className="table-responsive">
                                <table className="futuristic-table">
                                    <thead>
                                        <tr>
                                            <th><i className="fas fa-university me-2"></i>Institute</th>
                                            <th><i className="fas fa-certificate me-2"></i>Qualification</th>
                                            <th><i className="fas fa-award me-2"></i>Grade</th>
                                            <th><i className="fas fa-calendar me-2"></i>Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {educationData.map((row) => (
                                            <tr key={row.institute}>
                                                <td>
                                                    <div className="institute-info">
                                                        <strong>{row.institute}</strong>
                                                        <br />
                                                        <small className="text-secondary-cyan">{row.short}</small>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className={`qualification-badge${row.badgeClass ? ' ' + row.badgeClass : ''}`}>
                                                        {row.qualification}
                                                    </span>
                                                    <br />
                                                    <small className="text-zinc-600">{row.sub}</small>
                                                    {row.coreSubjects && (
                                                        <>
                                                            <br />
                                                            <small className="text-secondary-cyan" style={{ fontSize: '0.75rem' }}>
                                                                <i className="fas fa-book me-1"></i>{row.coreSubjects}
                                                            </small>
                                                        </>
                                                    )}
                                                </td>
                                                <td>
                                                    <div className="grade-display">
                                                        <span className="grade-value">{row.grade}</span>
                                                        <div className="grade-bar">
                                                            <div className="grade-fill" style={{ width: row.gradeWidth }}></div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="duration">{row.duration}</span>
                                                    <br />
                                                    <small className={row.statusClass}>{row.status}</small>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Academic Summary */}
                            <div className="row mt-4">
                                <div className="col-md-4 text-center">
                                    <div className="academic-stat">
                                        <i className="fas fa-trophy text-primary-cyan fa-2x mb-2"></i>
                                        <h5 className="text-neon-cyan">8.87</h5>
                                        <p>Current CGPA</p>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="academic-stat">
                                        <i className="fas fa-calendar-check text-primary-cyan fa-2x mb-2"></i>
                                        <h5 className="text-neon-cyan">6th</h5>
                                        <p>Current Semester</p>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center">
                                    <div className="academic-stat">
                                        <i className="fas fa-graduation-cap text-primary-cyan fa-2x mb-2"></i>
                                        <h5 className="text-neon-cyan">2027</h5>
                                        <p>Expected Graduation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
