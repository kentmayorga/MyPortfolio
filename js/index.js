const grid = document.querySelector(".project-grid");
const toggle = document.getElementById("themeToggle");
const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar nav');

// Fetch projects
fetch("data/Project.json")
  .then(res => res.json())
  .then(projects => {
    grid.innerHTML = projects.map(p => `
      <div class="project-card">
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <a href="${p.link}" target="_blank">View Project</a>
      </div>
    `).join("");
  });

// Dark mode toggle
toggle.onclick = () => {
  document.body.classList.toggle("dark");
};

// Burger menu toggle
burger.onclick = () => {
  nav.classList.toggle('active');
};
