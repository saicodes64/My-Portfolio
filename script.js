// Portfolio JavaScript - Enhanced with smooth animations and interactions

class PortfolioManager {
    constructor() {
        this.currentSection = 'home';
        this.isTransitioning = false;
        this.init();
    }

    init() {
        this.handleLoading();
        this.setupNavigation();
        this.setupAnimations();
        this.setupScrollEffects();
        this.setupInteractiveElements();
        this.setupTypingEffect();
        this.setupParticles();
    }

    // Loading Screen Management
    handleLoading() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loading = document.getElementById('loading');
                if (loading) {
                    loading.classList.add('hidden');
                    setTimeout(() => {
                        loading.style.display = 'none';
                    }, 500);
                }
            }, 1500);
        });
    }

    // Navigation Management
    setupNavigation() {
        // Handle navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.showSection(targetId);
                this.updateActiveNavLink(link);
            });
        });

        // Mobile menu auto-close
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            });
        });
    }

    // Section Navigation
    showSection(sectionId) {
        if (this.isTransitioning || sectionId === this.currentSection) return;
        
        this.isTransitioning = true;
        
        // Hide current section
        const currentSectionEl = document.getElementById(this.currentSection);
        const targetSectionEl = document.getElementById(sectionId);
        
        if (currentSectionEl) {
            currentSectionEl.style.opacity = '0';
            currentSectionEl.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                currentSectionEl.classList.remove('active');
                
                if (targetSectionEl) {
                    targetSectionEl.classList.add('active');
                    targetSectionEl.style.opacity = '0';
                    targetSectionEl.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        targetSectionEl.style.opacity = '1';
                        targetSectionEl.style.transform = 'translateY(0)';
                        this.currentSection = sectionId;
                        this.isTransitioning = false;
                    }, 50);
                }
            }, 300);
        }
    }

    updateActiveNavLink(activeLink) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    // Animation Setup
    setupAnimations() {
        // Add transition styles to sections
        document.querySelectorAll('.page-section').forEach(section => {
            section.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        });

        // Animate elements on scroll/load
        this.observeElements();
    }

    observeElements() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe cards and elements
        document.querySelectorAll('.futuristic-card, .project-card, .hero-content').forEach(el => {
            observer.observe(el);
        });
    }

    // Scroll Effects
    setupScrollEffects() {
        let ticking = false;

        const updateScrollEffects = () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.bg-animation');
            
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }

            // Update particles position
            document.querySelectorAll('.particle').forEach((particle, index) => {
                const speed = (index + 1) * 0.3;
                particle.style.transform = `translateY(${Math.sin(scrolled * 0.01 + index) * 20}px)`;
            });

            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
    }

    // Interactive Elements
    setupInteractiveElements() {
        // Enhanced button hover effects
        document.querySelectorAll('.cyber-btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'scale(1.05)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'scale(1)';
            });
        });

        // Card tilt effect
        document.querySelectorAll('.futuristic-card, .project-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            });
        });

        // Skill item interactions
        document.querySelectorAll('.skill-item').forEach(skill => {
            skill.addEventListener('click', () => {
                skill.style.animation = 'none';
                skill.offsetHeight; // Trigger reflow
                skill.style.animation = 'pulse 0.6s ease';
            });
        });
    }

    // Typing Effect for Hero Section
    setupTypingEffect() {
        const subtitleEl = document.querySelector('.subtitle');
        if (subtitleEl) {
            const text = subtitleEl.textContent;
            subtitleEl.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    subtitleEl.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    subtitleEl.style.borderRight = 'none';
                }
            };
            
            setTimeout(typeWriter, 2000);
        }
    }

    // Enhanced Particle System
    setupParticles() {
        const particleContainer = document.querySelector('.bg-animation');
        if (!particleContainer) return;

        // Add more particles dynamically
        for (let i = 5; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
            particleContainer.appendChild(particle);
        }

        // Add floating geometric shapes
        this.addGeometricShapes();
    }

    addGeometricShapes() {
        const shapes = ['triangle', 'diamond', 'hexagon'];
        const container = document.querySelector('.bg-animation');

        shapes.forEach((shape, index) => {
            const shapeEl = document.createElement('div');
            shapeEl.className = `geometric-shape ${shape}`;
            shapeEl.style.cssText = `
                position: absolute;
                width: 20px;
                height: 20px;
                border: 1px solid rgba(0, 245, 255, 0.3);
                top: ${20 + index * 30}%;
                right: ${10 + index * 20}%;
                animation: rotate 10s linear infinite;
                animation-delay: ${index * 2}s;
            `;
            container.appendChild(shapeEl);
        });
    }
}

// Global Functions (for onclick handlers)
function showSection(sectionId) {
    if (window.portfolioManager) {
        window.portfolioManager.showSection(sectionId);
    }
}

// Initialize Portfolio Manager
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioManager = new PortfolioManager();
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.altKey) {
            const sections = ['home', 'about', 'education', 'projects', 'contact'];
            const currentIndex = sections.indexOf(window.portfolioManager.currentSection);
            
            if (e.key === 'ArrowRight' && currentIndex < sections.length - 1) {
                showSection(sections[currentIndex + 1]);
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                showSection(sections[currentIndex - 1]);
            }
        }
    });
});
