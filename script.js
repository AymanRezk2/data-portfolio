document.addEventListener('DOMContentLoaded', () => {
    // ------------------ Preloader ------------------
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.classList.add('hidden');
        });
    }

    // ------------------ Theme Toggle ------------------
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }
        });
    }

    // ------------------ Hamburger Menu ------------------
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');

    if (hamburgerMenu && mobileNavLinks) {
        hamburgerMenu.addEventListener('click', () => {
            mobileNavLinks.classList.toggle('active');
        });

        mobileNavLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNavLinks.classList.remove('active');
            });
        });
    }

    // ------------------ Scroll-to-top ------------------
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    window.addEventListener('scroll', () => {
        if (!scrollToTopBtn) return;
        scrollToTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });

    // ------------------ Smooth Scrolling ------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (!targetEl) return;
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ------------------ Animate on Scroll ------------------
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, {
        threshold: 0.15
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // ------------------ Fetch GitHub Projects ------------------
    async function fetchGithubProjects() {
        const projectsGrid = document.getElementById('github-projects-grid');
        if (!projectsGrid) return;

        const projectRepos = [
            'https://api.github.com/repos/AymanRezk2/50_Startups_Liner_regration',
            'https://api.github.com/repos/AymanRezk2/car-insurance-claim-EDA',
            'https://api.github.com/repos/AymanRezk2/student-performance-analysis-prediction'
        ];

        projectsGrid.innerHTML = '<div class="spinner"></div>';

        try {
            const fetchPromises = projectRepos.map(url =>
                fetch(url)
                    .then(res => res.ok ? res.json() : null)
                    .catch(() => null)
            );

            const allReposData = await Promise.all(fetchPromises);
            const validRepos = allReposData.filter(repo => repo !== null);

            if (validRepos.length === 0) {
                projectsGrid.innerHTML = '<p class="muted-text">GitHub projects will appear here once available.</p>';
                return;
            }

            validRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
            projectsGrid.innerHTML = '';

            validRepos.forEach(repo => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                const projectName = repo.name.replace(/[-_]/g, ' ');
                const projectDescription = repo.description
                    ? (repo.description.length > 110 ? repo.description.substring(0, 110) + '…' : repo.description)
                    : 'Exploratory data analysis and modeling focused on uncovering drivers behind key business outcomes.';

                projectCard.innerHTML = `
                    <div class="project-icon"><i class="fas fa-code"></i></div>
                    <div class="project-content">
                        <h3 class="project-title">${projectName}</h3>
                        <p class="project-description">${projectDescription}</p>
                        <div class="project-links">
                            <a href="${repo.html_url}" class="project-link" target="_blank" rel="noopener">
                                <i class="fab fa-github"></i> View on GitHub
                            </a>
                        </div>
                    </div>
                `;
                projectsGrid.appendChild(projectCard);
            });
        } catch {
            projectsGrid.innerHTML = '<p class="muted-text">Failed to load GitHub projects. Please try again later.</p>';
        }
    }

    fetchGithubProjects();

    // ------------------ Testimonials Carousel ------------------
    if (window.jQuery && $('.testimonials-container').length) {
        $('.testimonials-container').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false
        });
    }

    // ------------------ EmailJS Initialization ------------------
    if (window.emailjs) {
        emailjs.init('A0vwECOW8hLjsaepw'); // Public key
    }

    // ------------------ Contact Form ------------------
    const contactForm = document.getElementById('contactForm');
    if (contactForm && window.emailjs) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');

            let isValid = true;

            if (name.value.trim() === '') { isValid = false; showError(name, 'Name is required.'); } else hideError(name);
            if (email.value.trim() === '') {
                isValid = false; showError(email, 'Email is required.');
            } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
                isValid = false; showError(email, 'Enter a valid email.');
            } else {
                hideError(email);
            }
            if (message.value.trim() === '') { isValid = false; showError(message, 'Message is required.'); } else hideError(message);

            if (isValid) {
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const thankYou = document.getElementById('form-thank-you');
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Sending…';

                emailjs.send(
                    'service_51uuijn', // Service ID
                    'template_uonr6nn', // Template ID
                    { name: name.value, email: email.value, subject: subject.value, message: message.value }
                ).then(() => {
                    if (thankYou) thankYou.style.display = 'block';
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                }).catch(() => {
                    alert('Failed to send message. Please try again in a moment.');
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                });
            }
        });
    }

    function showError(input, msg) {
        const error = input.parentElement.querySelector('.form-error');
        if (!error) return;
        error.textContent = msg;
        input.classList.add('is-invalid');
    }
    function hideError(input) {
        const error = input.parentElement.querySelector('.form-error');
        if (!error) return;
        error.textContent = '';
        input.classList.remove('is-invalid');
    }

    // ------------------ Update Year ------------------
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});


