/* =====================================================
   Muhammad Haseeb — Portfolio
   Vanilla JS: no build step required (GitHub Pages friendly)

   ASSET CONVENTION
   -----------------------------------------------------
   Every project below references three optional files,
   named after its `slug`:
     images/<slug>.jpg   → project cover image
     docs/<slug>.pdf     → project documentation
     videos/<slug>.mp4   → demo video (opens in an in-page player)
   Drop matching files into images/, docs/, videos/ and
   they'll appear automatically — nothing else to wire up.
   If a cover image is missing, a gradient monogram is
   shown instead so the layout never breaks.
===================================================== */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* -----------------------------------------------------
   Data: Projects
----------------------------------------------------- */
const PROJECTS = [
  {
    slug: 'synprompt',
    title: 'SynPrompt',
    subtitle: 'Centralized AI Prompt Repository',
    description: 'An AI-powered prompt and project repository that lets users create, organize, execute, and manage prompts across multiple AI models from a single workspace.',
    features: ['Project workspaces', 'Prompt management', 'Execution history', 'Favorite prompts', 'Multi-provider AI support', 'Authentication', 'REST APIs'],
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'OpenRouter API', 'Git'],
    categories: ['ai', 'fullstack'],
    difficulty: 'Advanced',
    date: '2026',
    monogram: 'SP',
    github: 'https://github.com/Haseeb-zai30',
  },
  {
    slug: 'mentalhealth-db',
    title: 'MentalHealth DB',
    subtitle: 'Mental Healthcare Management Platform',
    description: 'A secure mental healthcare management platform built with Laravel, following database normalization and scalable software engineering principles.',
    features: ['Authentication', 'Appointment booking', 'Patient management', 'Therapist management', 'Mood tracking', 'Session notes', 'Admin panel', 'Normalized DB (3NF)'],
    tech: ['Laravel', 'PHP', 'MySQL', 'MVC', 'REST', 'SQL'],
    categories: ['fullstack'],
    difficulty: 'Advanced',
    date: '2026',
    monogram: 'MH',
    github: 'https://github.com/Haseeb-zai30',
  },
  {
    slug: 'dream-team-analyzer',
    title: 'Dream Team Analyzer',
    subtitle: 'AI-Powered Football Analytics',
    description: 'A Flask-based analytics application that scrapes football data and applies machine learning to surface performance insights on an interactive dashboard.',
    features: ['Web scraping', 'Machine learning', 'Prediction models', 'Data visualization', 'Analytics dashboard'],
    tech: ['Python', 'Flask', 'Pandas', 'Scikit-learn', 'BeautifulSoup'],
    categories: ['ai'],
    difficulty: 'Intermediate',
    date: '2025',
    monogram: 'DT',
    github: 'https://github.com/Haseeb-zai30',
  },
  {
    slug: 'vendor-performance-analytics',
    title: 'Vendor Performance Analytics',
    subtitle: 'Business Intelligence Dashboard',
    description: 'An end-to-end BI solution analyzing vendor profitability and inventory turnover, combining SQL data modeling with an interactive Power BI dashboard.',
    features: ['SQL data modeling', 'ETL pipeline', 'Power BI dashboard', 'Profitability analysis', 'Inventory insights'],
    tech: ['SQL', 'Python', 'Power BI'],
    categories: ['analytics'],
    difficulty: 'Intermediate',
    date: '2025',
    monogram: 'VP',
    github: 'https://github.com/Haseeb-zai30',
  },
  {
    slug: 'fpga-arkanoid',
    title: 'FPGA Arkanoid Game',
    subtitle: 'Hardware-Rendered Arcade Game',
    description: 'The classic Arkanoid arcade game implemented entirely on FPGA hardware using Verilog HDL, with real-time VGA rendering and paddle control in pure digital logic.',
    features: ['Game logic in hardware', 'Collision detection', 'Paddle control', 'VGA rendering', 'Finite state machines', 'Precise hardware timing'],
    tech: ['Verilog', 'FPGA', 'Digital Logic', 'VGA', 'FSM'],
    categories: ['fpga', 'embedded'],
    difficulty: 'Advanced',
    date: '2025',
    monogram: 'FA',
    github: 'https://github.com/Haseeb-zai30',
  },
  {
    slug: 'msp430-uart',
    title: 'MSP430 UART Communication',
    subtitle: 'Embedded Serial Communication',
    description: 'Reliable UART-based serial communication between embedded devices, implemented at the register level on the MSP430 microcontroller.',
    features: ['UART protocol', 'Interrupt-driven I/O', 'Serial communication', 'Register-level configuration', 'Hardware debugging'],
    tech: ['Embedded C', 'MSP430', 'UART', 'TI CCS'],
    categories: ['embedded'],
    difficulty: 'Intermediate',
    date: '2025',
    monogram: 'UART',
    github: 'https://github.com/Haseeb-zai30',
  },
  {
    slug: 'soccer-robot',
    title: 'Soccer Robot',
    subtitle: 'Bluetooth-Controlled Robot',
    description: 'A remotely controlled soccer-playing robot driven by an ESP32, with Bluetooth communication and dual motor control via L298N drivers.',
    features: ['Bluetooth control', 'Dual motor driving', 'Real-time response', 'Mobile app integration'],
    tech: ['ESP32', 'Embedded C', 'Bluetooth', 'L298N'],
    categories: ['embedded'],
    difficulty: 'Intermediate',
    date: '2024',
    monogram: 'SR',
    github: 'https://github.com/Haseeb-zai30',
  },
  {
    slug: 'music-player',
    title: 'Desktop Music Player',
    subtitle: 'Lightweight Playlist Manager',
    description: 'A lightweight desktop music player built in C with CSFML, featuring playlist management and a responsive queue system.',
    features: ['Playlist management', 'Queue system', 'Custom audio UI', 'Low resource footprint'],
    tech: ['C', 'CSFML'],
    categories: ['desktop'],
    difficulty: 'Beginner',
    date: '2024',
    monogram: '♫',
    github: 'https://github.com/Haseeb-zai30',
  },
];

/* Every project gets matching asset paths derived from its slug,
   with explicit overrides for the files that exist in this workspace. */
const PROJECT_ASSET_MAP = {
  synprompt: { image: 'images/synprompt.PNG', doc: 'docs/synprompt.pdf', video: 'videos/synprompt.mp4' },
  'mentalhealth-db': { image: 'images/mental.PNG', doc: 'docs/mentalhealth-db.pdf', video: 'videos/mentalhealth-db.mp4' },
  'dream-team-analyzer': { image: 'images/dream team analyzer.PNG', doc: 'docs/dream-team-analyzer.pdf', video: 'videos/dream-team-analyzer.mp4' },
  'vendor-performance-analytics': { image: 'images/vendor.PNG', doc: 'docs/vendor-performance-analytics.pdf', video: 'videos/vendor-performance-analytics.mp4' },
  'fpga-arkanoid': { image: 'images/arknoid.PNG', doc: 'docs/fpga-arkanoid.pdf', video: 'videos/fpga-arkanoid.mp4' },
  'msp430-uart': { image: 'images/msp430.PNG', doc: 'docs/msp430-uart.pdf', video: 'videos/msp430-uart.mp4' },
  'soccer-robot': { image: 'images/socour bot.PNG', doc: 'docs/soccer-robot.pdf', video: 'videos/soccer-robot.mp4' },
  'music-player': { image: 'images/music player.PNG', doc: 'docs/music-player.pdf', video: 'videos/music-player.mp4' },
};

PROJECTS.forEach((p) => {
  const matchedAssets = PROJECT_ASSET_MAP[p.slug] || {};
  p.image = matchedAssets.image || `images/${p.slug}.jpg`;
  p.doc = matchedAssets.doc || `docs/${p.slug}.pdf`;
  p.video = matchedAssets.video || `videos/${p.slug}.mp4`;
});

/* -----------------------------------------------------
   Data: Certifications
----------------------------------------------------- */
const CERTS = [
  { title: 'AWS AI Practitioner Challenge', issuer: 'Udacity', href: 'docs/AWS AI Practitioner.pdf' },
  { title: 'Generative AI Web App Development', issuer: 'Pak Angels / HEC', href: 'docs/gen AI PAK angels.pdf' },
  { title: 'Data Analytics & Business Intelligence', issuer: 'DigiSkills Training', href: 'docs/digi skills data analytics.pdf' },
  { title: 'Introduction to Internet of Things', issuer: 'Coursera', href: 'docs/intro to IOT.pdf' },
  { title: 'Artificial Intelligence using Python ', issuer: 'DigiSkills Training', href: 'docs/digi skills AI with py.pdf' },
  { title: 'Art of Prompting', issuer: 'IBM', href: 'docs/prompting.pdf' },
  { title: 'Graphic Designing Mastery', issuer: 'Hadi e-Learning', href: 'docs/graphic designing mastery.pdf' },
];

/* -----------------------------------------------------
   Icons
----------------------------------------------------- */
const ICONS = {
  github: '<svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="currentColor"><path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.77 10.79.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.66 1.23 3.31.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16.91-.25 1.89-.38 2.86-.39.97.01 1.95.14 2.86.39 2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.11 0 1.52-.01 2.75-.01 3.12 0 .3.2.66.79.55A11.53 11.53 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z"/></svg>',
  docs: '<svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  video: '<svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2"><path d="m10 8 6 4-6 4V8Z" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="9"/></svg>',
};

/* -----------------------------------------------------
   Render: Projects
----------------------------------------------------- */
const grid = document.getElementById('project-grid');

function renderProjects(filter = 'all') {
  grid.innerHTML = '';
  PROJECTS.filter((p) => filter === 'all' || p.categories.includes(filter)).forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.style.animationDelay = `${i * 60}ms`;

    card.innerHTML = `
      <div class="project-thumb">
        <img src="${p.image}" alt="${p.title} preview" loading="lazy"
             onerror="this.remove(); this.closest('.project-thumb').classList.add('fallback');" />
        <span class="thumb-fallback-label">${p.monogram}</span>
      </div>

      <div class="flex items-center justify-between gap-2 mb-1">
        <h3 class="font-display font-600 text-lg text-slate-100">${p.title}</h3>
        <span class="tag-pill whitespace-nowrap">${p.difficulty}</span>
      </div>
      <p class="text-xs font-mono text-amber mb-3">${p.subtitle}</p>
      <p class="text-sm text-slate-400 leading-relaxed mb-4">${p.description}</p>

      <div class="flex flex-wrap gap-1.5 mb-4">
        ${p.tech.map((t) => `<span class="tag-pill">${t}</span>`).join('')}
      </div>

      <details class="mb-4 group">
        <summary class="text-xs font-mono text-slate-500 cursor-pointer select-none hover:text-accent transition-colors">Key features</summary>
        <ul class="mt-2 space-y-1 text-xs text-slate-400 list-disc list-inside">
          ${p.features.map((f) => `<li>${f}</li>`).join('')}
        </ul>
      </details>

      <div class="flex flex-wrap gap-2 mt-auto pt-3 border-t border-white/6">
        <a class="project-link" href="${p.github}" target="_blank" rel="noopener">${ICONS.github} GitHub</a>
        <a class="project-link" href="${p.doc}" target="_blank" rel="noopener">${ICONS.docs} Documentation</a>
        <button class="project-link video-trigger" type="button" data-video="${p.video}" data-title="${p.title}">${ICONS.video} Demo Video</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

renderProjects();

document.getElementById('filters').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-chip');
  if (!btn) return;
  document.querySelectorAll('.filter-chip').forEach((c) => c.classList.remove('active'));
  btn.classList.add('active');
  renderProjects(btn.dataset.filter);
});

/* -----------------------------------------------------
   Video modal (delegated — cards are re-rendered on filter)
----------------------------------------------------- */
const videoModal = document.getElementById('video-modal');
const videoEl = document.getElementById('video-modal-player');
const videoTitleEl = document.getElementById('video-modal-title');
const videoErrorEl = document.getElementById('video-modal-error');

function openVideoModal(src, title) {
  videoTitleEl.textContent = title;
  videoErrorEl.classList.add('hidden');
  videoEl.classList.remove('hidden');
  videoEl.src = src;
  videoModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  videoEl.play().catch(() => {});
}

function closeVideoModal() {
  videoModal.classList.add('hidden');
  videoEl.pause();
  videoEl.removeAttribute('src');
  videoEl.load();
  document.body.style.overflow = '';
}

grid.addEventListener('click', (e) => {
  const trigger = e.target.closest('.video-trigger');
  if (!trigger) return;
  openVideoModal(trigger.dataset.video, trigger.dataset.title);
});

videoEl.addEventListener('error', () => {
  videoEl.classList.add('hidden');
  videoErrorEl.classList.remove('hidden');
});

document.getElementById('video-modal-close').addEventListener('click', closeVideoModal);
videoModal.addEventListener('click', (e) => { if (e.target === videoModal) closeVideoModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !videoModal.classList.contains('hidden')) closeVideoModal(); });

/* -----------------------------------------------------
   Render: Certifications
----------------------------------------------------- */
const certGrid = document.getElementById('cert-grid');
CERTS.forEach((c, i) => {
  const el = document.createElement('a');
  el.href = c.href;
  el.target = '_blank';
  el.rel = 'noopener';
  el.className = 'cert-card reveal';
  el.style.transitionDelay = `${(i % 3) * 60}ms`;
  el.innerHTML = `
    <div class="cert-inner p-1">
      <p class="font-display text-base font-600 text-slate-100">${c.title}</p>
      <p class="text-xs font-mono text-slate-500 mt-1">${c.issuer}</p>
      <span class="inline-flex items-center gap-1 text-xs font-mono text-accent mt-3">View certificate →</span>
    </div>
  `;
  certGrid.appendChild(el);
});

/* -----------------------------------------------------
   Typing role rotator
----------------------------------------------------- */
const roles = ['AI Engineer', 'Full Stack Developer', 'Embedded Systems Engineer'];
const typedEl = document.getElementById('typed-role');
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  if (prefersReducedMotion) {
    typedEl.textContent = roles[0];
    return;
  }
  const current = roles[roleIndex];
  typedEl.textContent = deleting ? current.slice(0, charIndex--) : current.slice(0, charIndex++);

  let delay = deleting ? 40 : 70;
  if (!deleting && charIndex === current.length + 1) { delay = 1400; deleting = true; }
  else if (deleting && charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 300; }

  setTimeout(typeLoop, delay);
}
typeLoop();

/* -----------------------------------------------------
   Scroll reveal
----------------------------------------------------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

function observeReveals() {
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
}
observeReveals();
// Re-scan after certs are injected
setTimeout(observeReveals, 50);

/* -----------------------------------------------------
   Header scroll state
----------------------------------------------------- */
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* -----------------------------------------------------
   Mobile menu
----------------------------------------------------- */
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');

menuToggle.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden');
  iconOpen.classList.toggle('hidden', !isOpen);
  iconClose.classList.toggle('hidden', isOpen);
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
});

document.querySelectorAll('#mobile-menu a').forEach((a) => a.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  iconOpen.classList.remove('hidden');
  iconClose.classList.add('hidden');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

/* -----------------------------------------------------
   Mouse spotlight (hero)
----------------------------------------------------- */
const spotlight = document.getElementById('spotlight');
if (spotlight && !prefersReducedMotion) {
  document.getElementById('home').addEventListener('mousemove', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    spotlight.style.setProperty('--x', `${e.clientX - rect.left}px`);
    spotlight.style.setProperty('--y', `${e.clientY - rect.top}px`);
  });
}

/* -----------------------------------------------------
   Lightweight particle field (hero canvas)
----------------------------------------------------- */
const canvas = document.getElementById('particles');
if (canvas && !prefersReducedMotion) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  let width, height, rafId;

  function resize() {
    const hero = document.getElementById('home');
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
  }

  function initParticles() {
    const count = Math.min(50, Math.floor((width * height) / 22000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      hue: Math.random() > 0.5 ? '91,140,255' : '255,184,107',
    }));
  }

  function tick() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.hue},0.55)`;
      ctx.fill();
    });
    rafId = requestAnimationFrame(tick);
  }

  function start() {
    resize();
    initParticles();
    cancelAnimationFrame(rafId);
    tick();
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(rafId);
    else tick();
  });

  window.addEventListener('resize', start);
  start();
}
