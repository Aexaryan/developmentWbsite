// Language switching functionality
let currentLang = localStorage.getItem('language') || 'en';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    
    // Add event listeners to language buttons (navbar and footer)
    document.querySelectorAll('.lang-btn, .lang-btn-footer').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize scroll animations
    initScrollAnimations();
    
    // Navbar scroll effect
    initNavbarScroll();

    // Hamburger menu toggle
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Close menu when clicking a link
        document.querySelectorAll(".nav-menu li a").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));
    }
});

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '0.8rem 0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '1rem 0';
        }
        
        lastScroll = currentScroll;
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });

    // Observe creative cards
    document.querySelectorAll('.creative-card').forEach(card => {
        observer.observe(card);
    });

    // Observe skill categories
    document.querySelectorAll('.skill-category').forEach(category => {
        observer.observe(category);
    });

    // Observe creative items
    document.querySelectorAll('.creative-item').forEach(item => {
        observer.observe(item);
    });

    // Observe section intros
    document.querySelectorAll('.section-intro').forEach(intro => {
        const introObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    introObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        introObserver.observe(intro);
    });

    // Observe headings
    document.querySelectorAll('h2').forEach(heading => {
        const headingObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    headingObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        headingObserver.observe(heading);
    });

    // Observe about content
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        const aboutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    aboutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        aboutObserver.observe(aboutContent);
    }

    // Observe contact info
    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        const contactObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    contactObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        contactObserver.observe(contactInfo);
    }

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        sectionObserver.observe(section);
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update active language button (navbar and footer)
    document.querySelectorAll('.lang-btn, .lang-btn-footer').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute and direction
    document.documentElement.lang = lang;
    if (lang === 'fa') {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update page title and meta description
    updateMetaTags(lang);
}

function updateMetaTags(lang) {
    const titles = {
        en: 'Full Stack Developer | Portfolio',
        fa: 'توسعه‌دهنده فول استک | پورتفولیو',
        sv: 'Full Stack Utvecklare | Portfolio'
    };
    
    const descriptions = {
        en: 'Full Stack Developer Portfolio - Specializing in React, Node.js, Cloudflare Workers, Android (Kotlin), and SEO-optimized web solutions',
        fa: 'پورتفولیو توسعه‌دهنده فول استک - تخصص در React، Node.js، Cloudflare Workers، اندروید (Kotlin) و راه‌حل‌های وب بهینه‌شده برای SEO',
        sv: 'Full Stack Utvecklare Portfolio - Specialiserad på React, Node.js, Cloudflare Workers, Android (Kotlin) och SEO-optimerade webbplatslösningar'
    };
    
    document.title = titles[lang] || titles.en;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = descriptions[lang] || descriptions.en;
    }
}

