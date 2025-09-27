class ProjectCreator
{
  constructor(containerId)
  {
    this.container = document.getElementById(containerId);
  }

  createProject(title, description, size, hue, white)
  {
    const project = document.createElement("div");
    project.classList.add("project");
    project.classList.add(`project-${size}`);
    project.style.backgroundColor = `hwb(${hue} ${white} 60%)`;

    project.innerHTML = `
      <h2 class="card-header" style="background-color: hwb(${hue} ${white} 20%);">${title}</h2>
      <div class="card-body"><p>${description}</p></div>
    `;

    this.container.appendChild(project);
  }
}

const creator = new ProjectCreator("projects");
creator.createProject("Cosmula", "This is a description of Cosmula.", "large", 206, 30);
creator.createProject("Fried Panic", "This is a description of Fried Panic.", "large", 13, 50);
creator.createProject("Mineral Mayhem", "This is a description of Mineral Mayhem.", "medium", 50, 30);
creator.createProject("Lincoln's Path", "This is a description of Lincoln's Path.", "medium", 30, 50);
creator.createProject("Dark Dash", "This is a description of Dark Dash.", "small", 283, 30);

const buttons = document.querySelectorAll('.tabs button, .footer-right button, .section-body button');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.tab);
    const current = document.querySelector(".tab-content.active");

    if (target == current) return;

    current.classList.remove("active");
    current.style.display = "none";
    target.style.display = "block";
    requestAnimationFrame(() => {
        target.classList.add("active");
    });

    buttons.forEach(b => b.classList.remove("active"));

    const top_button = document.querySelector(`.tab-button[data-tab="${btn.dataset.tab}"]`);
    top_button.classList.add("active");
  });
});