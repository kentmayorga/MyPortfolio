fetch("data/Project.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("projects");

    data.forEach(project => {
      container.innerHTML += `
        <div class="project-card">
          <img src="${project.image}">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
        </div>
      `;
    });
  });
