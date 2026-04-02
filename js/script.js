const cur = document.getElementById('cursor'),
      ring = document.getElementById('cursorRing');

let mx = 0,
    my = 0,
    rx = 0,
    ry = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;

  cur.style.left = mx + 'px';
  cur.style.top = my + 'px';
});

function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;

  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';

  requestAnimationFrame(animRing);
}

animRing();

const themeBtn = document.getElementById('themeBtn');
let isDark = true;

themeBtn.addEventListener('click', () => {
  isDark = !isDark;

  document.documentElement.setAttribute(
    'data-theme',
    isDark ? 'dark' : 'light'
  );

  themeBtn.textContent = isDark ? '[ light ]' : '[ dark ]';
});

const ham = document.getElementById('hamburger'),
      mob = document.getElementById('mobileMenu');

ham.addEventListener('click', () => {
  mob.classList.toggle('open');
});

function closeMobile() {
  mob.classList.remove('open');
}

const reveals = document.querySelectorAll('.reveal');

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);

reveals.forEach((r) => obs.observe(r));

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const t = document.querySelector(a.getAttribute('href'));

    if (t) {
      e.preventDefault();

      t.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});