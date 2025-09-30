class ProjectCreator
{
  static createProject(title, description, images, imageTitles, size, hue, white)
  {
    const container = document.getElementById(`${size}-projects`);
    const project = document.createElement("div");
    project.classList.add("project");
    project.classList.add(`project-${size}`);
    project.style.backgroundColor = `hwb(${hue} ${white} 60%)`;

    let imagesStr = ""
    for (let i = 0; i < images.length; i++)
    {
      imagesStr += `<img src="Project Images/${title.replace(/'/g, "")}/${images[i]}" alt="${imageTitles[i]}" class="card-image"></img>`
    }

    project.innerHTML = `
      <h2 class="card-header" style="background-color: hwb(${hue} ${white} 20%);">${title}</h2>
      <div class="card-body">
        <div class="project-images-${size} project-images">${imagesStr}</div>
        <p class="project-text">${description}</p>
      </div>
    `;

    container.appendChild(project);
  }
}

ProjectCreator.createProject(
  "Cosmula",
  `This is a description of Cosmula.<br>
  Here is a new line.`,
  ["Cosmula GIF.gif", "Cosmula Screenshot 1.png", "Cosmula Screenshot 2.png", "Cosmula Screenshot 3.png"],
  ["Cosmula Gif", "Cosmula Screenshot 1", "Cosmula Screenshot 2", "Cosmula Screenshot 3"],
  "large", 206, 30);
ProjectCreator.createProject(
  "Fried Panic",
  `This is a description of Fried Panic.`,
  ["Fried Panic GIF.gif", "Fried Panic Screenshot 1.png", "Fried Panic Screenshot 2.png", "Fried Panic Screenshot 3.png"],
  ["Fried Panic GIF", "Fried Panic Screenshot 1", "Fried Panic Screenshot 2", "Fried Panic Screenshot 3"],
  "large", 13, 50);
ProjectCreator.createProject(
  "Mineral Mayhem",
  `This is a description of Mineral Mayhem.`,
  ["Mineral Mayhem GIF.gif", "Mineral Mayhem Screenshot 1.png"],
  ["Mineral Mayhem GIF", "Mineral Mayhem Screenshot 1"],
  "medium", 50, 30);
ProjectCreator.createProject(
  "Lincoln's Path",
  `This is a description of Lincoln's Path.`,
  ["Lincolns Path GIF.gif", "Lincolns Path Screenshot 1.png"],
  ["Lincoln's Path GIF", "Lincoln's Path Screenshot 1"],
  "medium", 30, 50);
ProjectCreator.createProject(
  "Dark Dash",
  `This is a description of Dark Dash.`,
  ["Dark Dash GIF.gif"],
  ["Dark Dash GIF"],
  "small", 283, 30);

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