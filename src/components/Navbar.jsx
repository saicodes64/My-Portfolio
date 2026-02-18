import { useState } from 'react'

const navItems = [
    { id: 'home', icon: 'fa-home', label: 'Home' },
    { id: 'about', icon: 'fa-user', label: 'About' },
    { id: 'education', icon: 'fa-graduation-cap', label: 'Education' },
    { id: 'experience', icon: 'fa-briefcase', label: 'Experience' },
    { id: 'projects', icon: 'fa-code', label: 'Projects' },
    { id: 'contact', icon: 'fa-envelope', label: 'Contact' },
]

export default function Navbar({ activeSection, onNavigate }) {
    const [collapsed, setCollapsed] = useState(true)

    const handleNavClick = (id) => {
        onNavigate(id)
        setCollapsed(true)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
                <a
                    className="navbar-brand"
                    href="#home"
                    onClick={(e) => { e.preventDefault(); handleNavClick('home') }}
                >
                    SAI.DEV
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setCollapsed(!collapsed)}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse${collapsed ? '' : ' show'}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {navItems.map(({ id, icon, label }) => (
                            <li className="nav-item" key={id}>
                                <a
                                    className={`nav-link${activeSection === id ? ' active' : ''}`}
                                    href={`#${id}`}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(id) }}
                                >
                                    <i className={`fas ${icon} me-1`}></i>{label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
