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
        title: 'Portfolio Website',
        desc: 'My personal portfolio website.',
        tag: 'HTML | CSS | Javascript',
        initials: 'PW',
        tone: 'portfolio-thumb'
    },
    {
        title: 'Weather App',
        desc: 'Application to check weather report according to the location.',
        tag: 'Javascript | API',
        initials: 'WA',
        tone: 'tree-thumb'
    },
    {
        title: 'Student Productivity App',
        desc: 'Built a student productivity platform for task management, notes, and study planning.',
        tag: 'HTML | CSS | Javascript',
        initials: 'SP',
        tone: 'tree-thumb'
    },
    {
        title: 'Handwriting to Font Generator',
        desc: 'Scan handwriting from paper, analyze strokes, and generate a custom font.',
        tag: 'Python | ML',
        initials: 'HF',
        tone: 'handwriting-thumb'
    }
];

const projGrid = document.getElementById('projectsGrid');
projects.forEach((p) => {
    const el = document.createElement('div');
    el.className = 'project';
    el.tabIndex = 0;
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', `Open details for ${p.title}`);
    el.innerHTML = `<div class="thumb visual-thumb ${p.tone}" aria-hidden="true"><span>${p.initials}</span></div><div class="meta"><strong>${p.title}</strong><small>${p.desc}</small><div style="margin-top:8px;font-size:12px;color:var(--muted)">${p.tag}</div></div>`;
    el.addEventListener('click', () => openProjectModal(p));
    el.addEventListener('keydown', (event) => {
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
            <div class="modal-thumb visual-thumb ${p.tone}" aria-hidden="true"><span>${p.initials}</span></div>
            <div class="modal-copy">
              <h3 id="projectModalTitle">${p.title}</h3>
              <div class="muted">${p.tag}</div>
              <p>${p.desc}</p>
            </div>
            <button class="btn btn-ghost" id="closeModal" type="button">Close</button>
          </div>
        </div>
      `;

    function closeModal() {
        document.body.removeChild(overlay);
        document.removeEventListener('keydown', handleEscape);
    }

    function handleEscape(event) {
        if (event.key === 'Escape') closeModal();
    }

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
    overlay.querySelector('#closeModal').addEventListener('click', closeModal);
    document.addEventListener('keydown', handleEscape);
    document.body.appendChild(overlay);
    overlay.querySelector('#closeModal').focus();
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