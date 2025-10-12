class ProjectCreator
{
  static createProject(title, date, description, images, imageTitles, links, linkTitles, features, size, hue, white)
  {
    const container = document.getElementById(`${size}-projects`);
    const project = document.createElement("div");
    const rTitle = title.replace(/'/g, "");
    project.classList.add("project");
    project.classList.add(`project-${size}`);
    project.style.backgroundColor = `hwb(${hue} ${white} 60%)`;

    let imagesStr = ""
    for (let i = 0; i < images.length; i++)
    {
      if (imageTitles[i] != null)
      {
        imagesStr += `<img src="Project Images/${rTitle}/${images[i]}" alt="${imageTitles[i]}" class="card-image"></img>`;
      }
      else
      {
        imagesStr += `<video src="Project Images/${rTitle}/${images[i]}" autoplay loop muted playsinline class="card-image"></video>`;
      }
    }

    let linksStr = "";
    for (let i = 0; i < links.length; i++)
    {
      let breakStr = "|";
      if (i == links.length - 1)
      {
        breakStr = "";
      }
      linksStr += `<a href="${links[i]}" target="_blank" class="text-clickable large-text center-link" style="color: hwb(${hue} ${white} 20%);">${linkTitles[i]}</a>${breakStr}`;
    }

    let featuresStr = "";
    if (features.length > 0)
    {
      featuresStr = `<div class="list-section"><p>Main features:</p><ul>`;
    }
    for (let i = 0; i < features.length; i++)
    {
      featuresStr += `<li>${features[i]}</li>`;
    }
    if (features.length > 0)
    {
      featuresStr += "</ul></div>";
    }

    project.innerHTML = `
    <div class="card-header-container" style="background-color: hwb(${hue} ${white} 20%);">
      <h2 class="card-header">${title}</h2>
      <h3 class="card-date">${date}</h3>
    </div>
      <div class="card-body">
        <div class="project-images-${size} project-images">${imagesStr}</div>
        <div class="project-text-column">
          <div class="card-text-content">
            <p class="project-text">${description}</p>
            ${featuresStr}
          </div>
          <div class="card-links">${linksStr}</div>
        </div>
      </div>
    `;

    container.appendChild(project);
  }
}

ProjectCreator.createProject(
  "Cosmula",
  2025,
  `Cosmula is a 2D space shooter released on Steam and currently in early access.
  I designed and developed the entire game with support for single-player and multiplayer using
  Unity Netcode for Game Objects, Unity Relay, and Unity Lobbies.
  Developing Cosmula gave me deep experience in multiplayer game development
  and the importance of building clean, maintainable, and scalable systems.`,
  ["Cosmula Video.mp4", "Cosmula Screenshot 1.png", "Cosmula Screenshot 2.png", "Cosmula Screenshot 3.png"],
  [null, "Cosmula Screenshot 1", "Cosmula Screenshot 2", "Cosmula Screenshot 3"],
  ["https://youtu.be/kvWG5NTScRY", "https://store.steampowered.com/app/2421520/Cosmula/"],
  ["Trailer", "Steam"],
  ["Single-player and multiplayer with up to 6 players",
    "A variety of ships, each with unique components, stats, and playstyles",
    "Complex bots for both single-player and multiplayer, with scalable difficulty"
  ],
  "large", 206, 30);
ProjectCreator.createProject(
  "Fried Panic",
  2022,
  `Fried Panic is my first game released on Steam, a free fast-paced action title that now has reached over 6,000 players and has very positive reviews.
  I designed and developed the entire game and collaborated with an artist on the visuals.
  Developing it taught me a lot about managing large projects, building satisfying and robust gameplay systems,
  and the process of publishing a complete Steam game.`,
  ["Fried Panic Video.mp4", "Fried Panic Screenshot 1.png", "Fried Panic Screenshot 2.png", "Fried Panic Screenshot 3.png"],
  [null, "Fried Panic Screenshot 1", "Fried Panic Screenshot 2", "Fried Panic Screenshot 3"],
  ["https://youtu.be/VDynyGPl08U?si=kAmN13biqbK2nKnx", "https://store.steampowered.com/app/2116520/Fried_Panic/", "https://simply-artizan.itch.io/fried-panic"],
  ["Trailer", "Steam", "Itch.io"],
  ["Combat system utilizing each hand separately",
    "Endless waves of increasing difficulty",
    "Impactful, satisfying combat",
    "Wide variety of enemies, weapons, and abilities"],
  "large", 13, 50);
ProjectCreator.createProject(
  "Mineral Mayhem",
  2023,
  `Mineral Mayhem is a fast-paced tower-defense game I created with a small team for a game jam in just three days.
  Making it taught me a lot about rapid prototyping, iterating quickly under tight deadlines, and collaborating effectively.
  The game went on to win the jam, standing out among 61 other entries.`,
  ["Mineral Mayhem Video.mp4", "Mineral Mayhem Screenshot 1.png"],
  [null, "Mineral Mayhem Screenshot 1"],
  ["https://simply-artizan.itch.io/mineral-mayhem"],
  ["Itch.io"],
  [],
  "medium", 50, 30);
ProjectCreator.createProject(
  "Lincoln's Path",
  2025,
  `Lincoln's Path is a free web-based decision-making history game where players take on the role of Abraham Lincoln during the Civil War.
  Creating it helped me learn a lot about designing interactive narratives,
  balancing education with engaging gameplay, and collaborating in a small team.`,
  ["Lincolns Path Video.mp4", "Lincolns Path Screenshot 1.png"],
  [null, "Lincoln's Path Screenshot 1"],
  ["https://github.com/Ed-Gilmour/Lincolns-Path", "https://ed-gilmour.github.io/Lincolns-Path/"],
  ["GitHub", "Play Game"],
  [],
  "medium", 30, 50);
ProjectCreator.createProject(
  "Dark Dash",
  2022,
  `I created and published Dark Dash as my first original title on Itch.io,
  where I learned the full process of designing, building, and releasing a complete game.`,
  ["Dark Dash Video.mp4"],
  [null],
  ["https://youtu.be/mztDkwVrLAk?si=9alMfovqhPtuuvYL", "https://simply-artizan.itch.io/dark-dash"],
  ["Trailer", "Itch.io"],
  [],
  "small", 283, 30);

const buttons = document.querySelectorAll('.tabs button, .footer-right button, .section-body button');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.tab);
    const current = document.querySelector(".tab-content.active");
console.log("Current: " + current.style.display);
    if (target == current && current.style.display != "none") return;

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

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tab = params.get("tab");
  const about = document.getElementById("about");

  if (tab) {
    document.body.classList.add("no-transitions");

    const tabButton = document.querySelector(`.tab-button[data-tab="${tab}"]`);
    if (tabButton) {
      console.log("click");
      tabButton.click();
    }
    else
    {
      console.log("Set block 1");
      about.style.display = "block";
    }

    requestAnimationFrame(() => {
      document.body.classList.remove("no-transitions");
    });
  }
  else
  {
    console.log("Set block 2");
    about.style.display = "block";
  }
});