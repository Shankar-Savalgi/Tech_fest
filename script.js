/* ============================================================
   CYBORG DIRECTIVE — JavaScript
   Scroll reveals, progress bars, terminal typing, nav interactions
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── 1. SCROLL REVEAL (Intersection Observer) ───
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  // ─── 2. PROGRESS BAR FILL ON SCROLL ───
  const perfSection = document.getElementById('perf-stats');

  if (perfSection) {
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.stat-bar-fill');
          bars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            // Small delay for dramatic effect
            setTimeout(() => {
              bar.style.width = targetWidth + '%';
            }, 200);
          });
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    barObserver.observe(perfSection);
  }

  // ─── 3. LIVE STAT VALUE JITTER ───
  // Make the stat values subtly "jitter" to feel alive
  const statValues = {
    'val-eff':  { base: 98.4,  range: 0.3,  suffix: '%',  decimals: 1 },
    'val-lat':  { base: 2.1,   range: 0.4,  suffix: 'ms', decimals: 1 },
    'val-load': { base: 74.2,  range: 1.5,  suffix: '%',  decimals: 1 },
    'val-sync': { base: 99.97, range: 0.02, suffix: '%',  decimals: 2 },
  };

  function jitterStats() {
    Object.keys(statValues).forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const cfg = statValues[id];
      const jitter = (Math.random() - 0.5) * 2 * cfg.range;
      const val = Math.max(0, Math.min(100, cfg.base + jitter));
      el.textContent = val.toFixed(cfg.decimals) + cfg.suffix;
    });
  }

  setInterval(jitterStats, 2000);

  // ─── 4. TERMINAL TYPING EFFECT ───
  const terminal = document.getElementById('terminal');

  if (terminal) {
    const lines = terminal.querySelectorAll('div');
    lines.forEach(line => line.style.opacity = '0');

    const termObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          lines.forEach((line, i) => {
            setTimeout(() => {
              line.style.transition = 'opacity 0.3s ease';
              line.style.opacity = '1';
            }, i * 180);
          });
          termObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    termObserver.observe(terminal);
  }

  // ─── 5. MOBILE MENU ───
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const closeMenu = () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (mobileClose) mobileClose.addEventListener('click', closeMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
  }

  // ─── 6. SMOOTH SCROLL FOR NAV LINKS ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ─── 7. ACTIVE NAV HIGHLIGHT ON SCROLL ───
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

  sections.forEach(sec => navObserver.observe(sec));

  // ─── 8. NAVBAR SHRINK ON SCROLL ───
  const navbar = document.getElementById('nav-bar');

  if (navbar) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.7)';
        navbar.style.borderBottomColor = 'rgba(0, 219, 233, 0.25)';
      } else {
        navbar.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.5)';
        navbar.style.borderBottomColor = 'rgba(0, 219, 233, 0.15)';
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ─── 9. HERO PARALLAX (subtle) ───
  const heroImg = document.getElementById('hero-img');

  if (heroImg) {
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      if (scroll < 800) {
        const offset = scroll * 0.08;
        heroImg.style.transform = `translateY(${-offset}px)`;
      }
    }, { passive: true });
  }

  // ─── 10. CARD TILT EFFECT (mouse) ───
  const cards = document.querySelectorAll('.aug-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
      card.style.transition = 'transform 0.5s ease';
      setTimeout(() => { card.style.transition = ''; }, 500);
    });
  });

  // ─── 11. CURSOR GLOW (desktop only) ───
  if (window.matchMedia('(pointer: fine)').matches) {
    const glow = document.createElement('div');
    glow.style.cssText = `
      position: fixed;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0,219,233,0.06) 0%, transparent 70%);
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease;
      opacity: 0;
    `;
    document.body.appendChild(glow);

    let glowTimeout;
    document.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
      glow.style.opacity = '1';

      clearTimeout(glowTimeout);
      glowTimeout = setTimeout(() => {
        glow.style.opacity = '0';
      }, 3000);
    });
  }

});
