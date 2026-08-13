// ============================================================
// JusSocial — Animations & Particle System
// ============================================================

// ── Particle System ─────────────────────────────────────────
export function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];

  const COLORS = ['#4a9eda', '#2d6a9f', '#c9a84c', '#1e3a5f'];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.5 + 0.1,
    };
  }

  function initParticleSet() {
    particles = [];
    const count = Math.floor((W * H) / 14000);
    for (let i = 0; i < count; i++) particles.push(createParticle());
  }

  function drawConnections() {
    const DIST = 130;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < DIST) {
          const alpha = (1 - dist / DIST) * 0.12;
          ctx.strokeStyle = `rgba(74, 158, 218, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    drawConnections();
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + Math.floor(p.alpha * 255).toString(16).padStart(2, '0');
      ctx.fill();
    }
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => { resize(); initParticleSet(); });
  resize();
  initParticleSet();
  animate();
}

// ── Navbar Scroll Effect ─────────────────────────────────────
export function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ── Intersection Observer Reveals ────────────────────────────
export function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Animated Counter ─────────────────────────────────────────
export function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  const from = 0;

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(from + (target - from) * eased);
    el.textContent = current.toLocaleString('es-AR');
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

export function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// ── Draggable Timeline ────────────────────────────────────────
export function initDraggableTimeline() {
  const wrap = document.querySelector('.timeline-scroll-wrap');
  if (!wrap) return;

  let isDown = false, startX, scrollLeft;

  wrap.addEventListener('mousedown', e => {
    isDown = true;
    wrap.classList.add('active');
    startX = e.pageX - wrap.offsetLeft;
    scrollLeft = wrap.scrollLeft;
  });
  wrap.addEventListener('mouseleave', () => { isDown = false; wrap.classList.remove('active'); });
  wrap.addEventListener('mouseup', () => { isDown = false; wrap.classList.remove('active'); });
  wrap.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - wrap.offsetLeft;
    const walk = (x - startX) * 1.4;
    wrap.scrollLeft = scrollLeft - walk;
  });
}

// ── Toast Notification ───────────────────────────────────────
export function showToast(message, type = '', icon = '✅') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span style="font-size:1rem">${icon}</span> ${message}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toast-out 0.35s ease forwards';
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}
