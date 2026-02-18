const socialLinks = [
    { href: 'https://github.com/saicodes64', icon: 'fab fa-github', label: 'GitHub Profile' },
    { href: 'https://in.linkedin.com/in/saisurve', icon: 'fab fa-linkedin', label: 'LinkedIn Profile' },
    { href: 'https://www.youtube.com/@SaiTheStumbler', icon: 'fab fa-youtube', label: 'YouTube Channel' },
    { href: 'https://codolio.com/profile/saisurve', icon: 'fas fa-code', label: 'Codolio Profile' },
]

export default function Contact() {
    return (
        <section id="contact" className="page-section active">
            <div className="container">
                <h2 className="section-header">Get In Touch</h2>
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="futuristic-card">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="text-primary-cyan mb-4">
                                        <i className="fas fa-envelope me-2"></i>Contact Information
                                    </h4>

                                    <div className="contact-info">
                                        <h6><i className="fas fa-envelope text-primary-cyan me-2"></i>Email</h6>
                                        <p>saisurveit@gmail.com</p> 
                                        <button
                                        className="btn btn-outline-primary"
                                        onClick={() =>
                                            window.open(
                                            "https://mail.google.com/mail/?view=cm&to=saisurveit@gmail.com",
                                            "_blank"
                                            )
                                        }
                                        >
                                        Send Email
                                        </button>
                                    </div>

                                    <div className="contact-info">
                                        <h6><i className="fas fa-phone text-primary-cyan me-2"></i>Phone</h6>
                                        <p>+91 72767693xx</p>
                                    </div>

                                    <div className="contact-info">
                                        <h6><i className="fas fa-map-marker-alt text-primary-cyan me-2"></i>Location</h6>
                                        <p>Pune, Maharashtra, India</p>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <h4 className="text-primary-cyan mb-4">
                                        <i className="fas fa-link me-2"></i>Connect With Me
                                    </h4>
                                    {socialLinks.map(({ href, icon, label }) => (
                                        <div className="mb-3" key={label}>
                                            <a href={href} target="_blank" rel="noreferrer" className="cyber-btn d-block text-center mb-2">
                                                <i className={`${icon} me-2`}></i>{label}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-12 text-center">
                                    <p className="text-muted">
                                        <i className="fas fa-quote-left me-2"></i>
                                        Always open to discussing new opportunities, collaborations, and innovative projects!
                                        <i className="fas fa-quote-right ms-2"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
