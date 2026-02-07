const themeToggle = document.getElementById("themeToggle");
const burgerMenu = document.querySelector(".burger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll("#nav-menu a");

const toggleMenu = () => {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.style.overflow =
    navMenu.classList.contains("active") ? "hidden" : "";
};

burgerMenu.addEventListener("click", toggleMenu);

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) toggleMenu();
  });
});

const updateThemeIcon = (isDark) => {
  if (!themeToggle) return;
  themeToggle.textContent = isDark ? "☀️" : "🌙";
};

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  updateThemeIcon(true);
}

themeToggle?.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeIcon(isDark);
});

async function loadProjects() {
  const grid = document.querySelector(".project-grid");
  if (!grid) return;

  try {
    const res = await fetch("data/Project.json");
    const projects = await res.json();

    grid.innerHTML = projects
      .map(
        (p, i) => `
        <div class="project-card" style="transition-delay:${i * 100}ms">
          <div class="img-container">
            <img src="${p.image}" alt="${p.title}" loading="lazy">
          </div>
          <div class="project-card-content">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <a href="${p.link}" target="_blank">View Project →</a>
          </div>
        </div>
      `
      )
      .join("");
  } catch (e) {
    console.error(e);
  }
}

loadProjects();
