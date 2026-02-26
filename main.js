/* =============================================================
   ILYAS ENNAHLI — Portfolio Script
   Features: sticky navbar, scroll animations, back-to-top
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ── NAVBAR: transparent → solid on scroll ────────────────
  const navbar = document.querySelector('.navbar-custom');
  const hasHero = document.querySelector('.hero');

  if (navbar) {
    const handleNavbarScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };

    if (hasHero) {
      // Home page: start transparent, solidify on scroll
      window.addEventListener('scroll', handleNavbarScroll, { passive: true });
      handleNavbarScroll();
    } else {
      // Inner pages: always solid
      navbar.classList.add('scrolled');
    }
  }

  // ── SCROLL ANIMATIONS (IntersectionObserver) ─────────────
  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            scrollObserver.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      scrollObserver.observe(el);
    });
  } else {
    // Skip animation — make everything visible immediately
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('visible');
    });
  }

  // ── CLOSE MOBILE MENU ON NAV LINK CLICK ──────────────────
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse) {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      });
    });
  }

  // ── FLOATING BACK-TO-TOP BUTTON ──────────────────────────
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '<i class="fas fa-arrow-up" aria-hidden="true"></i>';
  backToTop.className = 'back-to-top';
  backToTop.setAttribute('aria-label', 'Remonter en haut de la page');
  document.body.appendChild(backToTop);

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

});
