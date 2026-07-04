// -----------------------
// Theme toggle (persists in localStorage)
// -----------------------
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
    const isLight = theme === 'light';
    if (isLight) document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
    themeToggle.textContent = isLight ? '🌑 Dark' : '☀️ Light';
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

const saved = localStorage.getItem('theme') || 'dark';
applyTheme(saved);
themeToggle.addEventListener('click', () => {
    applyTheme(document.documentElement.hasAttribute('data-theme') ? 'dark' : 'light');
});

// -----------------------
// Smooth scroll helper
// -----------------------
function scrollToId(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// -----------------------
// Projects data
// -----------------------
const projects = [
    {
        title: 'FontSmith',
        desc_s: 'FontSmith is an AI-powered web application that converts handwritten text into personalized digital fonts, allowing users to create, preview, and download unique handwriting styles.',
        desc_l: 'FontSmith is an AI-powered web application that transforms handwritten samples into fully functional digital fonts. Users can upload images of their handwriting, and the system analyzes character shapes, spacing, and writing patterns to generate a personalized font that closely matches their natural style. The platform provides font previews, customization options, and downloadable font files compatible with common design and word-processing software. Built using modern web technologies with AI-based image processing and font generation techniques, FontSmith demonstrates skills in full-stack web development, image analysis, API integration, and creating user-focused applications with practical real-world use cases.',
        tag: 'Python | OpenCV | fontTools | React | TypeScript | Tailwind CSS | MongoDB | Node.js | FastAPI',
        link: '',
        image: 'fontsmith.jpg',
        video: 'fontsmith.mp4'
    },
    {
        title: 'FocusFlow',
        desc_s: 'FocusFlow is a full-stack student productivity web application that helps users manage tasks, track habits, organize study schedules, take notes, and improve productivity through an intuitive dashboard.',
        desc_l: 'FocusFlow is a modern full-stack productivity web application designed to help students organize their academic and personal lives in one place. It offers features such as task management, study planning, habit tracking, Pomodoro focus sessions, note-taking, calendar scheduling, reminders, and productivity analytics through a clean and responsive interface. Built using React, Node.js, Express, and MongoDB, the platform emphasizes performance, usability, and scalability. With secure authentication, real-time progress tracking, and an intuitive dashboard, FocusFlow enables students to stay organized, build consistent study habits, reduce procrastination, and achieve their academic goals more efficiently.',
        tag: 'HTML | CSS | Javascript | React | MongoDB | API',
        link: '',
        image: 'focusflow.jpg',
        video: 'focusflow.mp4'
    },
    {
        title: 'CampusVault',
        desc_s: 'CampusVault is a secure academic resource-sharing platform where students and faculty can upload, organize, discover, bookmark, and download study materials through an intuitive and responsive web interface.',
        desc_l: 'CampusVault is a secure web-based academic resource-sharing platform built to simplify the way students and faculty access and manage educational content. The platform allows authenticated users to upload, organize, search, bookmark, rate, and download academic resources such as lecture notes, textbooks, previous-year question papers, lab manuals, assignments, presentations, and research materials. With role-based authentication, protected file access, advanced search and filtering, and a clean, responsive interface, CampusVault creates a centralized digital repository for educational resources. Designed with PHP, MySQL, JavaScript, HTML, and CSS, it delivers a reliable, user-friendly experience while ensuring secure file management and efficient resource discovery.',
        tag: 'PHP | MySQL | HTML | CSS | JavaScript',
        link: '',
        image: 'campusvault.jpg',
        video: 'campusvault.mp4'
    },
    {
        title: 'Weather Application',
        desc_s: 'A modern and responsive weather application that allows users to search for any city and view real-time weather information using the OpenWeather API.',
        desc_l: 'The Weather Application is a responsive web application that provides real-time weather information and a 5-day forecast for any city worldwide using the OpenWeatherMap API. Users can search for a city to view temperature, weather conditions, humidity, wind speed, visibility, and feels-like temperature in a clean and intuitive interface. The application includes dynamic weather icons, error handling for invalid searches, and a mobile-friendly design for seamless use across devices. Built using HTML, CSS, and JavaScript, this project demonstrates API integration, asynchronous programming with Fetch API and async/await, DOM manipulation, and responsive front-end development skills.',
        tag: 'HTML | CSS | Javascript | API',
        link: 'https://weather-app-by-amol.netlify.app',
        image: 'weather.jpg',
        video: 'weather.mp4'
    },
    {
        title: 'Personal Portfolio Website',
        desc_s: 'A modern, fully responsive personal portfolio website showcasing my projects, technical skills, and contact information with a clean UI and smooth user experience.',
        desc_l: 'The Personal Portfolio Website is a responsive web application designed to showcase my skills, projects, certifications, and professional journey as a web developer. It features a clean and modern interface with smooth navigation, interactive animations, and a fully responsive design for all devices. Visitors can explore my featured projects, technical skills, education, and contact information in one place. Built using HTML, CSS, and JavaScript, the website reflects my front-end development skills, attention to detail, and focus on creating visually appealing and user-friendly web experiences. It serves as my digital portfolio for recruiters, clients, and collaborators.',
        tag: 'HTML | CSS | Javascript',
        link: 'https://amolkr-portfolio.netlify.app/',
        image: 'portfolio.jpg',
        video: 'portfolio.mp4'
    },
    {
        title: 'Interactive Birthday Celebration Website',
        desc_s: 'An interactive, multi-page birthday celebration website featuring personalized messages, animations, photo memories, music, and surprise elements to create a memorable digital gifting experience.',
        desc_l: 'The Interactive Birthday Celebration Website is a responsive, multi-page web application created to deliver a personalized and engaging birthday experience. It features animated greetings, heartfelt messages, photo galleries, interactive transitions, background music, and surprise sections that guide visitors through a memorable digital celebration. Designed with a modern and visually appealing interface, the website focuses on storytelling and user engagement while ensuring smooth navigation across desktop and mobile devices. Built using HTML, CSS, and JavaScript, the project demonstrates front-end development skills, responsive design, creative UI/UX implementation, animation techniques, and interactive web experiences.',
        tag: 'HTML | CSS | Javascript',
        link: '',
        image: 'birthday.jpg',
        video: 'birthday.mp4'
    }
];

const projGrid = document.getElementById('projectsGrid');
projects.forEach((p) => {
    const el = document.createElement('div');
    el.className = 'project';
    el.tabIndex = 0;
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', `Open details for ${p.title}`);
    el.innerHTML = `<div class="thumb" aria-hidden="true">
                        <div class="img-container">
                            <img src="/assets/project-images/${p.image}" alt="" srcset="">
                        </div>
                        <button class="btn btn-primary open-modal">View More</button>
                    </div>
                    <div class="meta"><strong>${p.title}</strong><small>${p.desc_s}</small>
                        <div style="margin-top:8px;font-size:12px;color:var(--muted)">${p.tag}</div>
                    </div>`;
    const om = el.querySelector(".open-modal");
    om.addEventListener('click', () => openProjectModal(p));
    om.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openProjectModal(p);
        }
    });
    projGrid.appendChild(el);
});

// -----------------------
// Modal (simple) - creates an overlay with project details
// -----------------------
function openProjectModal(p) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
        <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="projectModalTitle">
          <div class="modal-content">
            <div class="modal-thumb" aria-hidden="true"><video autoplay muted loop src="/assets/project-videos/${p.video}"></video></div>
            <div class="modal-copy">
              <h3 id="projectModalTitle">${p.title}</h3>
              <div class="muted">${p.tag}</div>
              <a href="${p.link}" target="_blank"><button class="btn btn-primary" type="button">Live link</button></a>
              <p>${p.desc_l}</p>
            </div>
            <button class="btn btn-ghost" id="closeModal" type="button">Close</button>
          </div>
        </div>
      `;

    function closeModal() {
        document.body.style.overflow = "";
        document.body.removeChild(overlay);
    }

    overlay.querySelector('#closeModal').addEventListener('click', closeModal);
    document.body.style.overflow = "hidden";
    document.body.appendChild(overlay);
    overlay.querySelector('#closeModal').blur();
}

// -----------------------
// Cursor glow follows mouse
// -----------------------
const cg = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
    cg.style.left = e.clientX + 'px';
    cg.style.top = e.clientY + 'px';
    cg.style.opacity = 1;
    cg.style.background = 'radial-gradient(circle at 40% 30%, rgba(96,165,250,0.14), rgba(94,234,212,0.06) 25%, transparent 42%)';
});
document.addEventListener('mouseleave', () => {
    cg.style.opacity = 0;
});

// -----------------------
// Small entrance animations for projects (stagger)
// -----------------------
window.addEventListener('load', () => {
    const items = document.querySelectorAll('.project');
    items.forEach((it, i) => {
        setTimeout(() => {
            it.classList.add('fade-up');
        }, 120 * i);
    });
});


// -----------------------
// Contact form handler (demo only)
// -----------------------
function handleContact(e) {
    e.preventDefault();
    const name = document.getElementById('cname').value.trim();
    const email = document.getElementById('cemail').value.trim();
    const msg = document.getElementById('cmsg').value.trim();
    if (name.length < 2) {
        alert('Please enter your name');
        return;
    }
    if (email.indexOf('@') === -1) {
        alert('Enter a valid email');
        return;
    }
    if (msg.length < 4) {
        alert('Message too short');
        return;
    }

    const btn = e.target.querySelector('button');
    btn.disabled = true;
    btn.textContent = 'Sending...';
    setTimeout(() => {
        btn.textContent = 'Sent!';
        btn.classList.remove('btn-primary');
        btn.disabled = false;
        alert('Message sent (demo). I will contact you soon.');
        btn.textContent = 'Send message';
    }, 900);
    e.target.reset();
}